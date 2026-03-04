export const products = [
    "AMPOULE A BAIONNETTE",
    "AMPOULE A VICE",
    "LAMPES A REGLETTES",
    "REGLETTES",
    "LAMPE HALOGENE",
    "AMPOULE HALOGENE DICHROIQUE",
    "AMPOULE SPOTH",
    "AMPOULE LED GU10",
    "AMPOULE LED MURALE",
    "DOUILLES",
    "DOUILLE DE LAMPE CAPTEUR DE MOUVEMENTS",
    "INTERRUPTEUR",
    "PRISE DE COURANT",
    "CABLE ELECTRIQUE",
    "DISJONCTEUR",
    "TABLEAU ELECTRIQUE",
    "COMPTEUR",
    "PANNEAU SOLAIRE",
    "BATTERIE SOLAIRE",
    "REGULATEUR SOLAIRE",
    "ONDULEUR SOLAIRE",
    "SUPPORT PANNEAU",
    "COFFRET DE PROTECTION"
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Carousel Logic
    const carouselImages = [
        '../img/akwa.jpg',
        '../img/asquine.jpg',
        '../img/auto-machine.jpg',
        '../img/auto-netoyage.jpg',
        '../img/formation-jeunesse.jpg',
        '../img/parleg.jpg',
        '../img/village bassa.jpg'
    ];

    const carousel = document.querySelector('.carousel');
    if (carousel) {
        let currentIndex = 0;
        const imgElement = document.createElement('img');
        imgElement.src = carouselImages[currentIndex];
        carousel.appendChild(imgElement);

        setInterval(() => {
            currentIndex = (currentIndex + 1) % carouselImages.length;
            imgElement.style.opacity = '0';
            setTimeout(() => {
                imgElement.src = carouselImages[currentIndex];
                imgElement.style.opacity = '1';
            }, 500);
        }, 5000);
    }

    // 2. Dynamic Form Logic
    const addProductBtn = document.getElementById('add-product');
    const addSolarBtn = document.getElementById('add-solar');
    const productsContainer = document.getElementById('products-container');
    const solarContainer = document.getElementById('solar-container');

    if (addProductBtn && productsContainer) {
        addProductBtn.addEventListener('click', () => {
            productsContainer.appendChild(createProductRow(false));
        });
    }

    if (addSolarBtn && solarContainer) {
        addSolarBtn.addEventListener('click', () => {
            solarContainer.appendChild(createProductRow(true));
        });
    }

    function createProductRow(forceSolar = false) {
        const row = document.createElement('div');
        row.className = 'card product-row';
        row.style.marginBottom = '1rem';
        row.style.padding = '1.5rem';

        const isSolarPage = window.location.pathname.includes('page_solaire') || forceSolar;
        
        let html = `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; align-items: end;">
                <div class="form-group" style="margin-bottom: 0;">
                    <label>Produit</label>
                    <select class="form-control product-select">
                        <option value="">Sélectionner un produit</option>
                        ${products.map(p => `<option value="${p}">${p}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                    <label>Quantité</label>
                    <input type="number" class="form-control quantity-input" min="1" value="1">
                </div>
        `;

        if (isSolarPage) {
            html += `
                <div class="form-group" style="margin-bottom: 0;">
                    <label>Ampérage (A)</label>
                    <input type="number" class="form-control amperage-input" value="0">
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                    <label>Total (A*Q)</label>
                    <input type="text" class="form-control total-amperage" readonly value="0">
                </div>
            `;
        }

        html += `
                <button type="button" class="btn btn-primary remove-row" style="background: #EF4444; height: fit-content;">&times;</button>
            </div>
        `;

        row.innerHTML = html;

        // Add events for calculation
        if (isSolarPage) {
            const qtyInput = row.querySelector('.quantity-input');
            const ampInput = row.querySelector('.amperage-input');
            const totalInput = row.querySelector('.total-amperage');

            const calculate = () => {
                totalInput.value = (qtyInput.value * ampInput.value).toFixed(2);
            };

            qtyInput.addEventListener('input', calculate);
            ampInput.addEventListener('input', calculate);
        }

        row.querySelector('.remove-row').addEventListener('click', () => row.remove());

        return row;
    }

    // Initial rows
    if (productsContainer && productsContainer.children.length === 0) {
        productsContainer.appendChild(createProductRow(false));
    }
    if (solarContainer && solarContainer.children.length === 0) {
        solarContainer.appendChild(createProductRow(true));
    }
});
