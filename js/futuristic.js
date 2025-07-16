function openModal() {
    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('modal').classList.add('active');
    // const modal = new bootstrap.Modal(document.getElementById('modal'));
    // modal.show();
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.getElementById('modal').classList.remove('active');
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Barcha menyu va kontent kartalarni tanlab olamiz
const menuCards = document.querySelectorAll('.menu-card');
const featureCards = document.querySelectorAll('.feature-card');

menuCards.forEach((menuCard, index) => {
    menuCard.addEventListener('click', () => {
        // 1. Menyu kartalardan 'active' klassini olib tashlaymiz
        menuCards.forEach(card => card.classList.remove('active'));
        // 2. Faol kartaga 'active' klassini qo‘shamiz
        menuCard.classList.add('active');

        // 3. Barcha feature-cardlardan 'active' klassini olib tashlaymiz
        featureCards.forEach(card => card.classList.remove('active'));
        // 4. Mos feature-cardga 'active' klassini qo‘shamiz
        featureCards[index].classList.add('active');
        closeModal();
    });
});

const aiResultBtns = document.querySelectorAll('.ai-result-btn');
const aiResultCards = document.querySelectorAll('.ai-result-card');

aiResultBtns.forEach((menuCard, index) => {
    menuCard.addEventListener('click', () => {
        // 1. Menyu kartalardan 'active' klassini olib tashlaymiz
        aiResultBtns.forEach(card => card.classList.remove('active'));
        // 2. Faol kartaga 'active' klassini qo‘shamiz
        menuCard.classList.add('active');

        // 3. Barcha feature-cardlardan 'active' klassini olib tashlaymiz
        aiResultCards.forEach(card => card.classList.remove('active'));
        // 4. Mos feature-cardga 'active' klassini qo‘shamiz
        aiResultCards[index].classList.add('active');
        // closeModal();
    });
});

// ai recommendation
let isAnalyzing = false;
let statusInterval = null;

function startAIAnalysis() {
    if (isAnalyzing) return;
    isAnalyzing = true;

    // Reset UI state before starting
    document.getElementById('initialState').style.display = 'none';
    document.getElementById('aiProcessing').style.display = 'block';
    document.getElementById('aiStatusText').style.display = 'block';
    // document.getElementsByClassName('typing-cursor')[0].style.display = 'inline-block';
    document.getElementsByClassName('get-recommendations-proof-btn')[0].classList.add('d-none');
    
    const statusMessages = [
        "Маълумотлар таҳлил қилинмоқда",
        "Жиноятлар статистикаси ўрганилмоқда",
        "Хавфли ҳудудлар аниқланмоқда",
        "Энг самарали чоралар танланмоқда",
        "Тавсиялар тайёрланмоқда"
    ];
    
    let statusIndex = 0;
    if (statusInterval) clearInterval(statusInterval); // clear old intervals
    document.getElementsByClassName('fa-arrow-rotate-left')[0].classList.add('d-none');

    statusInterval = setInterval(() => {
        if (statusIndex < statusMessages.length) {
            document.getElementById('aiStatusText').textContent = statusMessages[statusIndex];
            statusIndex++;
        } else {
            clearInterval(statusInterval);
            // document.getElementsByClassName('typing-cursor')[0].style.display = "none";
            document.getElementById('aiStatusText').textContent = "Тавсиялар тайёр";
            setTimeout(() => {
                document.getElementById('aiStatusText').style.display = "none";
                document.getElementsByClassName('get-recommendations-proof-btn')[0].classList.remove('d-none');
                document.getElementsByClassName('fa-arrow-rotate-left')[0].classList.remove('d-none');
                isAnalyzing = false; // allow restart
            }, 3000);
        }
    }, 1500);

    // Show recommendations (delayed to sync with statuses)
    setTimeout(() => {
        showRecommendations();
    }, 3000);
}

function showRecommendations() {
    const cards = ['highPriorityCard', 'mediumPriorityCard', 'lowPriorityCard'];

    cards.forEach((cardId, index) => {
        const card = document.getElementById(cardId);
        card.classList.remove('show');
    });
    
    cards.forEach((cardId, index) => {
        setTimeout(() => {
            const card = document.getElementById(cardId);
            card.classList.add('show');
            
            // Show items with typing effect
            setTimeout(() => {
                showCardItems(cardId);
            }, 500);
        }, index * 1500);
    });
    
    // Show resource comets
    // setTimeout(() => {
    //     showResourceComets();
    // }, 8000);
}

function showCardItems(cardId) {
    const card = document.getElementById(cardId);
    const items = card.querySelectorAll('.prevention-item');
    
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
            
            // Typing effect for text
            const textSpan = item.querySelector('.prevention-item-text');
            const fullText = textSpan.getAttribute('data-text');
            textSpan.textContent = '';
            
            let charIndex = 0;
            const typingInterval = setInterval(() => {
                if (charIndex < fullText.length) {
                    textSpan.textContent += fullText[charIndex];
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 30);
            
        }, index * 800);
    });
}

function showResourceComets() {
    const comets = document.querySelectorAll('.resource-comet');
    
    comets.forEach((comet, index) => {
        setTimeout(() => {
            comet.classList.add('animate');
        }, index * 1000);
    });
}

function proveRecommendation() {
    document.getElementById('aianimation').style.display = 'none';
    document.getElementById('aiRecommadation').classList.remove('col-lg-8');
    document.getElementById('aiRecommadation').classList.add('col-lg-6');
    document.getElementById('recProve').classList.toggle('d-none');
    document.getElementById('getBackBtn').classList.toggle('d-none');
    // showRecommendations('recProve')
}

function reverseRecommendation() {
    document.getElementById('aianimation').style.display = 'block';
    document.getElementById('aiRecommadation').classList.remove('col-lg-6');
    document.getElementById('aiRecommadation').classList.add('col-lg-8');
    document.getElementById('recProve').classList.toggle('d-none');
    document.getElementById('getBackBtn').classList.toggle('d-none');
}
