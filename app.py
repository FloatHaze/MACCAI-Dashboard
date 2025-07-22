from flask import Flask, request, jsonify
from flask_cors import CORS
from mp_api.client import MPRester
import pandas as pd
import traceback

# --- Configuration ---
MP_API_KEY = "0HI71UtEWhxPYQjT2Len22DEvoEAcGLB"  # Replace with your API key

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:8000"}})

# Load supply risk data on startup
try:
    supply_risk_df = pd.read_csv('supply_risk_data.csv')
    supply_risk_df['main_elements'] = supply_risk_df['main_elements'].str.split(',')
    print("Supply risk data loaded successfully.")
except FileNotFoundError:
    print("Warning: supply_risk_data.csv not found. Country filter will not work.")
    supply_risk_df = pd.DataFrame()

@app.route('/api/materials', methods=['POST'])
def get_materials():
    try:
        filters = request.json
        print(f"Received filters: {filters}")

        criteria = {
            "energy_above_hull": (filters.get("eHullMin", 0), filters.get("eHullMax", 0.1)),
            "band_gap": (filters.get("bandgapMin", 0), filters.get("bandgapMax", 10)),
            "formation_energy": (filters.get("formEnergyMin", -5), filters.get("formEnergyMax", 5)),
            "density": (filters.get("densityMin", 0), filters.get("densityMax", 20)),
            "num_sites": (filters.get("nsitesMin", 1), filters.get("nsitesMax", 50)),
        }

        is_stable_filter = filters.get("isStable")
        if is_stable_filter is not None:
            criteria["is_stable"] = is_stable_filter

        include_elements = filters.get("includeElements", [])
        if include_elements:
            criteria["elements"] = include_elements

        fields = [
            "material_id", "formula_pretty", "elements", "is_stable",
            "energy_above_hull", "band_gap", "formation_energy_per_atom",
            "density", "nsites", "symmetry"
        ]

        with MPRester(MP_API_KEY) as mpr:
            docs = mpr.materials.summary.search(**criteria, fields=fields)

        results_pydantic = [doc.model_dump() for doc in docs]

        # --- LOGIC FIX: Filter locally for country ---
        selected_country = filters.get("country")
        final_results = []

        if selected_country and selected_country != "any" and not supply_risk_df.empty:
            country_data = supply_risk_df[supply_risk_df['country'] == selected_country]
            if not country_data.empty:
                country_elements = set(country_data.iloc[0]['main_elements'])
                for material in results_pydantic:
                    material_elements = set(str(el) for el in material.get('elements', []))
                    # FIX: Check for intersection (at least one common element) instead of subset
                    if not country_elements.isdisjoint(material_elements):
                        final_results.append(material)
            else:
                final_results = results_pydantic
        else:
            final_results = results_pydantic

        # --- JSON Serialization ---
        results_serializable = []
        for doc_dict in final_results:
            if 'elements' in doc_dict and doc_dict['elements'] is not None:
                doc_dict['elements'] = [str(el) for el in doc_dict['elements']]
            if 'symmetry' in doc_dict and doc_dict['symmetry'] is not None and 'crystal_system' in doc_dict['symmetry']:
                doc_dict['symmetry']['crystal_system'] = doc_dict['symmetry']['crystal_system'].name
            results_serializable.append(doc_dict)

        print(f"Found and processed {len(results_serializable)} materials")
        return jsonify(results_serializable)

    except Exception as e:
        print(f"An error occurred: {e}")
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)