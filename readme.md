
# MACCAI - Materials Discovery Dashboard

MACCAI is a web-based dashboard for discovering and analyzing inorganic materials by querying the [Materials Project](https://materialsproject.org/) database in real-time. It provides an interactive interface to filter materials based on elemental composition, stability, electronic properties, and more, helping to accelerate materials science research.

-----

## Features

* **Interactive Periodic Table**: Select elements to include in your search.
* **Multi-Property Filtering**: Filter materials by stability (`ΔE_hull`), band gap, formation energy, density, and number of atoms.
* **Supply Risk Map**: Visualize the supply chain criticality of key elements by country, based on local data.
* **Dynamic Results Table**: View, sort, and paginate through thousands of material entries.
* **Direct API Connection**: Fetches live data directly from the Materials Project API via a secure backend.


-----

## Quick Start Guide

Follow these steps to set up and run the dashboard on your local machine.

### Prerequisites

* Python 3.8+
* [Anaconda](https://www.anaconda.com/products/distribution) or [Miniconda](https://docs.conda.io/en/latest/miniconda.html) (Recommended for environment management)
* A Materials Project API Key. You can get one for free by registering on their [website](https://materialsproject.org/api).

### 1\. Project Setup

First, navigate to your project directory.

### 2\. Backend Setup

The backend handles all communication with the Materials Project API.

**a. Create and Activate a Virtual Environment**

It's highly recommended to use a virtual environment. Open Anaconda Prompt and run:

```bash
# Navigate to your project folder
cd MACCAI-Dashboard

# Create a new conda environment named 'maccai_env'
conda create --name maccai_env python=3.11

# Activate the environment
conda activate maccai_env
```

**b. Install Dependencies**

In your activated `(maccai_env)` terminal, run:

```bash
pip install -r requirements.txt
```

**c. Configure API Key**

Open the `app.py` file in a text editor and replace the placeholder with your own Materials Project API key:

```python
# In app.py
MP_API_KEY = "PASTE_YOUR_API_KEY_HERE"
```

### 3\. Running the Application

You will need two separate terminals, both with the `(maccai_env)` environment activated.

**a. Start the Backend Server**

In your first terminal, run the following command to start the Flask backend:

```bash
python app.py
```

The backend will be running on `http://localhost:5000`.

**b. Start the Frontend Server**

In your second terminal, run the following command to serve the `index.html` file:

```bash
python -m http.server 8000
```

The frontend will be accessible at `http://localhost:8000`. (You can modify code to use other ports like 8080, etc.)

**c. Open the Dashboard**

Open your web browser and navigate to:

**[http://localhost:8000](https://www.google.com/search?q=http://localhost:8000)**

You should now see the fully functional MACCAI Dashboard\!

-----

## File Structure

```
/MACCAI-Dashboard/
├── static/
│   ├── periodic-table.js      # Logic and data for the periodic table UI
│   └── styles.css               # CSS for the periodic table
├── app.py                     # The Python Flask backend server
├── index.html                 # The main frontend application file
├── README.md                  # This file
├── requirements.txt           # List of Python dependencies
├── supply_risk_data.csv       # Local data for the supply risk map
└── World_map_green.png        # Background image for the map
```