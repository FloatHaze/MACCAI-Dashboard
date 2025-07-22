// Data for the periodic table layout, including all 118 elements.
// Lanthanides and Actinides are placed in rows 9 and 10 for standard display.
const periodicTableData = [
    // Row 1
    { number: 1, symbol: 'H', col: 1, row: 1 }, { number: 2, symbol: 'He', col: 18, row: 1 },
    // Row 2
    { number: 3, symbol: 'Li', col: 1, row: 2 }, { number: 4, symbol: 'Be', col: 2, row: 2 },
    { number: 5, symbol: 'B', col: 13, row: 2 }, { number: 6, symbol: 'C', col: 14, row: 2 },
    { number: 7, symbol: 'N', col: 15, row: 2 }, { number: 8, symbol: 'O', col: 16, row: 2 },
    { number: 9, symbol: 'F', col: 17, row: 2 }, { number: 10, symbol: 'Ne', col: 18, row: 2 },
    // Row 3
    { number: 11, symbol: 'Na', col: 1, row: 3 }, { number: 12, symbol: 'Mg', col: 2, row: 3 },
    { number: 13, symbol: 'Al', col: 13, row: 3 }, { number: 14, symbol: 'Si', col: 14, row: 3 },
    { number: 15, symbol: 'P', col: 15, row: 3 }, { number: 16, symbol: 'S', col: 16, row: 3 },
    { number: 17, symbol: 'Cl', col: 17, row: 3 }, { number: 18, symbol: 'Ar', col: 18, row: 3 },
    // Row 4
    { number: 19, symbol: 'K', col: 1, row: 4 }, { number: 20, symbol: 'Ca', col: 2, row: 4 },
    { number: 21, symbol: 'Sc', col: 3, row: 4 }, { number: 22, symbol: 'Ti', col: 4, row: 4 },
    { number: 23, symbol: 'V', col: 5, row: 4 }, { number: 24, symbol: 'Cr', col: 6, row: 4 },
    { number: 25, symbol: 'Mn', col: 7, row: 4 }, { number: 26, symbol: 'Fe', col: 8, row: 4 },
    { number: 27, symbol: 'Co', col: 9, row: 4 }, { number: 28, symbol: 'Ni', col: 10, row: 4 },
    { number: 29, symbol: 'Cu', col: 11, row: 4 }, { number: 30, symbol: 'Zn', col: 12, row: 4 },
    { number: 31, symbol: 'Ga', col: 13, row: 4 }, { number: 32, symbol: 'Ge', col: 14, row: 4 },
    { number: 33, symbol: 'As', col: 15, row: 4 }, { number: 34, symbol: 'Se', col: 16, row: 4 },
    { number: 35, symbol: 'Br', col: 17, row: 4 }, { number: 36, symbol: 'Kr', col: 18, row: 4 },
    // Row 5
    { number: 37, symbol: 'Rb', col: 1, row: 5 }, { number: 38, symbol: 'Sr', col: 2, row: 5 },
    { number: 39, symbol: 'Y', col: 3, row: 5 }, { number: 40, symbol: 'Zr', col: 4, row: 5 },
    { number: 41, symbol: 'Nb', col: 5, row: 5 }, { number: 42, symbol: 'Mo', col: 6, row: 5 },
    { number: 43, symbol: 'Tc', col: 7, row: 5 }, { number: 44, symbol: 'Ru', col: 8, row: 5 },
    { number: 45, symbol: 'Rh', col: 9, row: 5 }, { number: 46, symbol: 'Pd', col: 10, row: 5 },
    { number: 47, symbol: 'Ag', col: 11, row: 5 }, { number: 48, symbol: 'Cd', col: 12, row: 5 },
    { number: 49, symbol: 'In', col: 13, row: 5 }, { number: 50, symbol: 'Sn', col: 14, row: 5 },
    { number: 51, symbol: 'Sb', col: 15, row: 5 }, { number: 52, symbol: 'Te', col: 16, row: 5 },
    { number: 53, symbol: 'I', col: 17, row: 5 }, { number: 54, symbol: 'Xe', col: 18, row: 5 },
    // Row 6
    { number: 55, symbol: 'Cs', col: 1, row: 6 }, { number: 56, symbol: 'Ba', col: 2, row: 6 },
    // Lanthanides start placeholder
    { number: 72, symbol: 'Hf', col: 4, row: 6 }, { number: 73, symbol: 'Ta', col: 5, row: 6 },
    { number: 74, symbol: 'W', col: 6, row: 6 }, { number: 75, symbol: 'Re', col: 7, row: 6 },
    { number: 76, symbol: 'Os', col: 8, row: 6 }, { number: 77, symbol: 'Ir', col: 9, row: 6 },
    { number: 78, symbol: 'Pt', col: 10, row: 6 }, { number: 79, symbol: 'Au', col: 11, row: 6 },
    { number: 80, symbol: 'Hg', col: 12, row: 6 }, { number: 81, symbol: 'Tl', col: 13, row: 6 },
    { number: 82, symbol: 'Pb', col: 14, row: 6 }, { number: 83, symbol: 'Bi', col: 15, row: 6 },
    { number: 84, symbol: 'Po', col: 16, row: 6 }, { number: 85, symbol: 'At', col: 17, row: 6 },
    { number: 86, symbol: 'Rn', col: 18, row: 6 },
    // Row 7
    { number: 87, symbol: 'Fr', col: 1, row: 7 }, { number: 88, symbol: 'Ra', col: 2, row: 7 },
    // Actinides start placeholder
    { number: 104, symbol: 'Rf', col: 4, row: 7 }, { number: 105, symbol: 'Db', col: 5, row: 7 },
    { number: 106, symbol: 'Sg', col: 6, row: 7 }, { number: 107, symbol: 'Bh', col: 7, row: 7 },
    { number: 108, symbol: 'Hs', col: 8, row: 7 }, { number: 109, symbol: 'Mt', col: 9, row: 7 },
    { number: 110, symbol: 'Ds', col: 10, row: 7 }, { number: 111, symbol: 'Rg', col: 11, row: 7 },
    { number: 112, symbol: 'Cn', col: 12, row: 7 }, { number: 113, symbol: 'Nh', col: 13, row: 7 },
    { number: 114, symbol: 'Fl', col: 14, row: 7 }, { number: 115, symbol: 'Mc', col: 15, row: 7 },
    { number: 116, symbol: 'Lv', col: 16, row: 7 }, { number: 117, symbol: 'Ts', col: 17, row: 7 },
    { number: 118, symbol: 'Og', col: 18, row: 7 },
    // Lanthanides (Row 9 for display)
    { number: 57, symbol: 'La', col: 3, row: 9 }, { number: 58, symbol: 'Ce', col: 4, row: 9 },
    { number: 59, symbol: 'Pr', col: 5, row: 9 }, { number: 60, symbol: 'Nd', col: 6, row: 9 },
    { number: 61, symbol: 'Pm', col: 7, row: 9 }, { number: 62, symbol: 'Sm', col: 8, row: 9 },
    { number: 63, symbol: 'Eu', col: 9, row: 9 }, { number: 64, symbol: 'Gd', col: 10, row: 9 },
    { number: 65, symbol: 'Tb', col: 11, row: 9 }, { number: 66, symbol: 'Dy', col: 12, row: 9 },
    { number: 67, symbol: 'Ho', col: 13, row: 9 }, { number: 68, symbol: 'Er', col: 14, row: 9 },
    { number: 69, symbol: 'Tm', col: 15, row: 9 }, { number: 70, symbol: 'Yb', col: 16, row: 9 },
    { number: 71, symbol: 'Lu', col: 17, row: 9 },
    // Actinides (Row 10 for display)
    { number: 89, symbol: 'Ac', col: 3, row: 10 }, { number: 90, symbol: 'Th', col: 4, row: 10 },
    { number: 91, symbol: 'Pa', col: 5, row: 10 }, { number: 92, symbol: 'U', col: 6, row: 10 },
    { number: 93, symbol: 'Np', col: 7, row: 10 }, { number: 94, symbol: 'Pu', col: 8, row: 10 },
    { number: 95, symbol: 'Am', col: 9, row: 10 }, { number: 96, symbol: 'Cm', col: 10, row: 10 },
    { number: 97, symbol: 'Bk', col: 11, row: 10 }, { number: 98, symbol: 'Cf', col: 12, row: 10 },
    { number: 99, symbol: 'Es', col: 13, row: 10 }, { number: 100, symbol: 'Fm', col: 14, row: 10 },
    { number: 101, symbol: 'Md', col: 15, row: 10 }, { number: 102, symbol: 'No', col: 16, row: 10 },
    { number: 103, symbol: 'Lr', col: 17, row: 10 },
];

function createPeriodicTable(containerId, onElementClick) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id "${containerId}" not found.`);
        return;
    }

    periodicTableData.forEach(el => {
        const cell = document.createElement('div');
        cell.className = 'element-cell';
        cell.style.gridColumnStart = el.col;
        cell.style.gridRowStart = el.row;
        cell.dataset.symbol = el.symbol;

        const content = `
            <div class="content">
                <div class="symbol">${el.symbol}</div>
            </div>
            <div class="number">${el.number}</div>
        `;
        cell.innerHTML = content;

        cell.addEventListener('click', () => {
            cell.classList.toggle('selected');
            onElementClick(el.symbol);
        });

        container.appendChild(cell);
    });
}