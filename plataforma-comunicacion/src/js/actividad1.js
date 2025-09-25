const translations = {
    es: {
        title: "Vocabulario de Saludos",
        subtitle: "Aprende palabras básicas de cortesía",
        instructions: "¿Cómo usar esta página?",
        instructionsText: "Haz clic en cada tarjeta para aprender más sobre cómo usar estas palabras importantes en tu día a día.",
        scoreText: "Pares encontrados:",
        resetText: "Reiniciar",
        successTitle: "¡Felicitaciones!",
        successMessage: "Has completado el juego de memoria. ¡Excelente trabajo aprendiendo vocabulario!",
        closeText: "Cerrar",
        cards: {
            hello: "Hola",
            goodbye: "Adiós",
            goodMorning: "Buenos días",
            goodNight: "Buenas noches",
            howAreYou: "¿Cómo estás?",
            thanks: "Gracias"
        }
    },
    en: {
        title: "Greetings Vocabulary",
        subtitle: "Learn basic courtesy words",
        instructions: "How to use this page?",
        instructionsText: "Click on each card to learn more about how to use these important words in your daily life.",
        scoreText: "Pairs found:",
        resetText: "Reset",
        successTitle: "Congratulations!",
        successMessage: "You have completed the memory game. Excellent work learning vocabulary!",
        closeText: "Close",
        cards: {
            hello: "Hello",
            goodbye: "Goodbye",
            goodMorning: "Good morning",
            goodNight: "Good night",
            howAreYou: "How are you?",
            thanks: "Thank you"
        }
    },
    fr: {
        title: "Vocabulaire des Salutations",
        subtitle: "Apprenez les mots de politesse de base",
        instructions: "Comment utiliser cette page?",
        instructionsText: "Cliquez sur chaque carte pour en savoir plus sur l'utilisation de ces mots importants dans votre vie quotidienne.",
        scoreText: "Paires trouvées:",
        resetText: "Réinitialiser",
        successTitle: "Félicitations!",
        successMessage: "Vous avez terminé le jeu de mémoire. Excellent travail pour apprendre le vocabulaire!",
        closeText: "Fermer",
        cards: {
            hello: "Bonjour",
            goodbye: "Au revoir",
            goodMorning: "Bonjour",
            goodNight: "Bonne nuit",
            howAreYou: "Comment allez-vous?",
            thanks: "Merci"
        }
    }
};

const cardData = [
    { id: 'hello', type: 'text', gradient: 'from-yellow-400 to-orange-500' },
    { id: 'hello', type: 'icon', icon: '👋', gradient: 'from-yellow-400 to-orange-500' },
    { id: 'goodbye', type: 'text', gradient: 'from-purple-400 to-pink-500' },
    { id: 'goodbye', type: 'icon', icon: '👋', gradient: 'from-purple-400 to-pink-500' },
    { id: 'goodMorning', type: 'text', gradient: 'from-green-400 to-teal-500' },
    { id: 'goodMorning', type: 'icon', icon: '🌅', gradient: 'from-green-400 to-teal-500' },
    { id: 'goodNight', type: 'text', gradient: 'from-indigo-400 to-purple-500' },
    { id: 'goodNight', type: 'icon', icon: '🌙', gradient: 'from-indigo-400 to-purple-500' },
    { id: 'howAreYou', type: 'text', gradient: 'from-pink-400 to-red-500' },
    { id: 'howAreYou', type: 'icon', icon: '❓', gradient: 'from-pink-400 to-red-500' },
    { id: 'thanks', type: 'text', gradient: 'from-cyan-400 to-blue-500' },
    { id: 'thanks', type: 'icon', icon: '🙏', gradient: 'from-cyan-400 to-blue-500' }
];

let currentLanguage = 'es';
let flippedCards = [];
let matchedPairs = 0;
let canFlip = true;

function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function createCard(cardInfo, index) {
    const card = document.createElement('div');
    card.className = 'relative h-32 cursor-pointer';
    card.onclick = () => flipCard(index);

    const cardInner = document.createElement('div');
    cardInner.className = 'card-flip w-full h-full relative';
    cardInner.id = `card-${index}`;

    const cardFront = document.createElement('div');
    cardFront.className = 'card-front bg-gray-600 rounded-xl flex items-center justify-center shadow-lg';
    cardFront.innerHTML = '<div class="text-4xl">❓</div>';

    const cardBack = document.createElement('div');
    cardBack.className = `card-back bg-gradient-to-br ${cardInfo.gradient} rounded-xl flex flex-col items-center justify-center text-white shadow-lg relative`;

    const speakButton = document.createElement('button');
    speakButton.className = 'absolute top-2 right-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors';
    speakButton.innerHTML = '🔊';
    speakButton.style.fontSize = '20px';
    speakButton.onclick = (e) => {
        e.stopPropagation();
        speakText(cardInfo);
    };

    if (cardInfo.type === 'text') {
        cardBack.innerHTML = `<div class="text-xl font-bold text-center px-2" style="font-size: 18px;">${translations[currentLanguage].cards[cardInfo.id]}</div>`;
    } else {
        cardBack.innerHTML = `<div class="text-5xl mb-2">${cardInfo.icon}</div>`;
    }

    cardBack.appendChild(speakButton);
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    return card;
}

function speakText(cardInfo) {
    if ('speechSynthesis' in window) {
        const text = translations[currentLanguage].cards[cardInfo.id];
        const utterance = new SpeechSynthesisUtterance(text);
        const langCodes = { es: 'es-ES', en: 'en-US', fr: 'fr-FR' };
        utterance.lang = langCodes[currentLanguage];
        utterance.rate = 0.8;
        utterance.pitch = 1.1;
        speechSynthesis.speak(utterance);
    }
}

function flipCard(index) {
    if (!canFlip || flippedCards.length >= 2) return;

    const cardElement = document.getElementById(`card-${index}`);
    if (cardElement.classList.contains('flipped')) return;

    cardElement.classList.add('flipped');
    flippedCards.push(index);

    if (flippedCards.length === 2) {
        canFlip = false;
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [first, second] = flippedCards;
    const firstCard = cardData[first];
    const secondCard = cardData[second];

    if (firstCard.id === secondCard.id) {
        matchedPairs++;
        document.getElementById('score').textContent = matchedPairs;

        const firstElement = document.getElementById(`card-${first}`);
        const secondElement = document.getElementById(`card-${second}`);
        firstElement.classList.add('pulse-success');
        secondElement.classList.add('pulse-success');

        setTimeout(() => {
            firstElement.classList.remove('pulse-success');
            secondElement.classList.remove('pulse-success');
        }, 600);

        if (matchedPairs === 6) {
            setTimeout(showSuccessModal, 800);
        }
    } else {
        setTimeout(() => {
            document.getElementById(`card-${first}`).classList.remove('flipped');
            document.getElementById(`card-${second}`).classList.remove('flipped');
        }, 500);
    }

    flippedCards = [];
    canFlip = true;
}

function showSuccessModal() {
    document.getElementById('success-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('success-modal').classList.add('hidden');
}

function resetGame() {
    flippedCards = [];
    matchedPairs = 0;
    canFlip = true;
    document.getElementById('score').textContent = '0';
    initGame();
}

function changeLanguage(lang) {
    currentLanguage = lang;

    document.querySelectorAll('.language-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.className = 'language-btn bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors';
        } else {
            btn.className = 'language-btn bg-blue-400 text-white px-4 py-2 rounded-lg font-semibold text-lg hover:bg-blue-300 transition-colors';
        }
    });

    updateTexts();
    initGame();
}

function updateTexts() {
    const t = translations[currentLanguage];
    document.querySelector('h1').innerHTML = `🗣️ ${t.title}`;
    document.querySelector('p.text-blue-100').textContent = t.subtitle;
    document.getElementById('instructions').textContent = t.instructions;
    document.getElementById('instructions-text').textContent = t.instructionsText;
    document.getElementById('score-text').innerHTML = `${t.scoreText} <span id="score">${matchedPairs}</span>/6`;
    document.getElementById('reset-text').textContent = t.resetText;
    document.getElementById('success-title').textContent = t.successTitle;
    document.getElementById('success-message').textContent = t.successMessage;
    document.getElementById('close-text').textContent = t.closeText;
}

function initGame() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    const shuffledCards = shuffle(cardData);
    shuffledCards.forEach((cardInfo, index) => {
        const cardElement = createCard(cardInfo, index);
        gameBoard.appendChild(cardElement);
    });

    cardData.length = 0;
    cardData.push(...shuffledCards);
}

document.addEventListener('DOMContentLoaded', () => {
    updateTexts();
    initGame();
});

// 🔑 Corregido: ahora acepta el id de la actividad
function completarActividad(id) {
    let progreso = parseInt(localStorage.getItem("progreso")) || 0;
    if (id > progreso) {
        localStorage.setItem("progreso", id);
    }
}
