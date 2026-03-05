const products = [
    "1,80M",
    "100A 500V",
    "134a  340 Grams",
    "24HOURS  220-240V 16(2)A  0-3500W",
    "30mm* 5mm*2mm",
    "3W 150Lm",
    "4A",
    "7-10A",
    "ABRO",
    "AKT 10W 1300 Lm",
    "AKT 5W 650Lm 220-24OV",
    "AL SALAM  250V  4A",
    "AVC 120W 2000LM 6500K",
    "AVC 75W 3500LM 6500K",
    "AVC 7W",
    "BORSAN CABLE",
    "CABLE CLIP 8mm",
    "CBB61 400V 50/60Hz",
    "CUIVRE",
    "DB 415V 50Hz",
    "DIALL",
    "DISJONCTEUR A 3 RELAIS JEILI  415V 50/60Hz",
    "DISJONCTEUR A 4 RELAIS JEILI 415V 50/60Hz",
    "DISJONCTEUR CHNT 230V/400V 50Hz 4500A",
    "DISJONCTEUR CNTN  230V/400V 50Hz 4000A",
    "DISJONCTEUR DE BRANCHEMENT DB",
    "DISJONCTEUR JARETT 10000A  230V/400V 50Hz",
    "ECONOMIN LED BULB 5W",
    "EMBID  SIMPLE",
    "EMBID VA ET VIENT",
    "EMKAY 40W",
    "ESNCO 4W  220-240V 50/60Hz",
    "FUSIBLE DE 100A 500V",
    "FUSIBLE DE 16A 500V",
    "FUSIBLE FUSES 100A",
    "FUSIBLE JIAK DE 63A 500V",
    "GAU JI CUANG TOU KAI GUAN 250V 3A",
    "GD TIMES 20W",
    "GRANDE",
    "GROS CABLE ELECTRIQUE",
    "HIGH LITE 220-240V 500W",
    "HIGH POWER LAMP 3W 220-240V 50/60Hz",
    "HOPPEL 220-240V 60Hz 5W",
    "INDICATORS 220V",
    "INGELEC 10A 250V",
    "INGELEC 230V 50Hz",
    "INGELEC 63A 220-380V",
    "INPUT 200-220V 60Hz",
    "INTERRUPTEUR +PRISE",
    "INTERRUPTEUR AUTO",
    "IP55 SIMPLE",
    "IP66 10W",
    "IP66 SOLAR LIGHT 200W",
    "ISOTAP INGELEC BLEU",
    "ISOTAP INGELEC JAUNE",
    "ISOTAP INGELEC ROUGE",
    "ISOTAP INGELEC VERT",
    "IT TORCH 12W",
    "KANARYA TEK SESLI",
    "KBAOOIN 12V 40W",
    "KEONIA 20W E27 B22 6500 9000K",
    "KINA FLUX",
    "LAMPENFASSUNG FLXE 60W E27",
    "LED CANDLE LAMP",
    "LED FULL COLOR 85-260V 2000hours",
    "LED PROJECTOR",
    "LED TYPE SPOT SMLIGHTING 220-240V 50Hz",
    "LEGRAND",
    "LIGHT CONTROL SENSOR 25A",
    "MAZDA 18W 220-240V 50HZ 0,3A",
    "MAZDA 450V 50 Hz",
    "MAZDA HML 250W",
    "MCLAONA IP65",
    "MEKHELFI 40W",
    "MINI MOTOR SIREN AC220V",
    "MODI 4W",
    "MOYENNE",
    "MS LED 20W 2000LM 220-240V",
    "MUSULTAN",
    "MUTIUSAN 230V /400V IP40",
    "NEW TORCH 5W 170-240V 450Lm",
    "NEW TORCH 6W",
    "OUBO 5W 30000H",
    "OURISUI",
    "OYASHI 60W",
    "PAR PAR 200A 12V",
    "PARPAR",
    "PARPAR 100W",
    "PARPAR SOLAR PANNELS 35W 5V 5,95A",
    "PETIT",
    "PETIT CABLE ELECTRIQUE PARHSHPAR",
    "PHILIPS 22W",
    "PINCE INTERMEDIAIRE",
    "PING ZHUANG SHI LUO DENG 250V 4A",
    "PLUS PETITE",
    "PLUS PLUS PETITE",
    "POWER FLASH 1,5V",
    "POWER ROYAL 3W",
    "POWER ROYAL 40W 3600Lm 85-265V",
    "POWER ROYAL 50W 4500Lm",
    "PV-DS888",
    "PV004-S DC 1000V 15A",
    "PVC DIANYUANXIAN 300/200V",
    "PWM",
    "QUALITEC",
    "QUALITEC 250V 4A",
    "R600a",
    "RAGGIE",
    "ROUND BELL 75MM",
    "RUBAN DE MASQUAGE",
    "SCHLEGEL 10A 300V",
    "SCHNEIDER 65A 400V",
    "SCHNEIDER LADT2 10A 690V",
    "SCHNEIDER LADT4 10A 690V",
    "SCHNEIDER Ui: 750V Uimp: 6KV",
    "SCHNEIDER Up: 1,7KV Uc: 350V",
    "SMART INVERTER",
    "SMLIGHTING 220-240V 50Hz",
    "SOOER 220-240V 0Hz 40W",
    "SPOT LIGH MODI 50W",
    "STEFAN 18W E27 6500K 110-265V 50/60Hz",
    "SUNFLOW 120*120*38mm 220-240V",
    "SUPERTOP JLSKEVER  450V",
    "TESLA 60W 220-240V",
    "THE MASTER SWITCH BOXES 690V 63A",
    "TIANOIU CR1220",
    "TIANOIU CR2025",
    "TIME SWITCH 110-230V",
    "TNTORCH 6W 540Lm 85-265V",
    "TNTORCH 7W 630Lm",
    "UA&EK B22 E27",
    "ULTIMATE 15W",
    "UNIVERSALA/C 12V",
    "USB QUALITEC ELECTRIC MEETS",
    "VA ET VIENT SIMPLE",
    "VAKI",
    "VAKI IP55",
    "VAKI PRISE TV",
    "VAKI SIMPLE",
    "VETO 220/240V 50/60HZ",
    "VETO 7W  E14  220-250V 50/60Hz",
    "WIFI SMART CAMERA",
    "XIDER ZB2-BE 102 10(6)A 400V",
    "XPERT 450V",
    "YAKI",
    "YAKI 0,6 1X9V 220-240V 50/60HZ",
    "YAKI 23OV S19",
    "YAKI 3500w 230v",
    "YAKI 75W Max 220V",
    "ZIL TRANSFORMATORU",
    "_"
];

document.addEventListener('DOMContentLoaded', () => {
    // 0. Dark Mode & Hamburger Logic
    const themeToggle = document.getElementById('theme-toggle');
    const menuToggle = document.querySelector('.menu-toggle');
    const navOverlay = document.querySelector('.nav-overlay');
    const navUl = document.querySelector('nav ul');

    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // Hamburger Menu Logic
    if (menuToggle && navOverlay && navUl) {
        function toggleMenu() {
            navOverlay.classList.toggle('active');
            navUl.classList.toggle('active');
        }

        menuToggle.addEventListener('click', toggleMenu);
        navOverlay.addEventListener('click', toggleMenu); // Close when clicking outside
    }

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
        // Clear existing content if any
        carousel.innerHTML = '';

        // Create inner container
        const carouselInner = document.createElement('div');
        carouselInner.className = 'carousel-inner';
        carousel.appendChild(carouselInner);

        // Add images
        carouselImages.forEach(src => {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            const img = document.createElement('img');
            img.src = src;
            item.appendChild(img);
            carouselInner.appendChild(item);
        });

        // Add Next/Prev buttons
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-btn prev';
        prevBtn.innerHTML = '&#10094;'; // Left pointing chevron
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-btn next';
        nextBtn.innerHTML = '&#10095;'; // Right pointing chevron
        
        carousel.appendChild(prevBtn);
        carousel.appendChild(nextBtn);

        let currentIndex = 0;
        let slideInterval;

        function updateSlide() {
            // Right-to-left slide (move inner container to the left by negative percentage)
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % carouselImages.length;
            updateSlide();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
            updateSlide();
        }

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        }

        // Start auto-slide
        slideInterval = setInterval(nextSlide, 5000);
    }

    // 2. Dynamic Form Logic
    const addProductBtn = document.getElementById('add-product');
    const addSolarBtn = document.getElementById('add-solar');
    const productsContainer = document.getElementById('products-container');
    const solarContainer = document.getElementById('solar-container');

    console.log('Script loaded. Buttons:', { addProductBtn, addSolarBtn });

    if (addProductBtn && productsContainer) {
        addProductBtn.addEventListener('click', (e) => {
            console.log('Adding product row');
            productsContainer.appendChild(createProductRow(false));
        });
    }

    if (addSolarBtn && solarContainer) {
        addSolarBtn.addEventListener('click', (e) => {
            console.log('Adding solar row');
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
                <button type="button" class="btn btn-primary remove-row" style="background: #EF4444; height: fit-content; line-height: 1;">Retirer ce produit</button>
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
