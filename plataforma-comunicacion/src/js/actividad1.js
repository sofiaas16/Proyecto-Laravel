// Traducciones
const translations = {
  es: {
    title: "Vocabulario de Saludos",
    subtitle: "Aprende palabras básicas de cortesía",
    instructions: "¿Cómo usar esta página?",
    instructionsText:
      "Encuentra los pares de tarjetas que coinciden. Haz clic en las tarjetas para voltearlas y busca las parejas.",
    scoreText: "Pares encontrados:",
    resetText: "Reiniciar",
    successTitle: "¡Felicitaciones!",
    successMessage:
      "Has completado el juego de memoria. ¡Excelente trabajo aprendiendo vocabulario!",
    closeText: "Cerrar",
    playAgainText: "Jugar de nuevo",
    continueText: "Continuar",
    cards: {
      hello: "Hola",
      goodbye: "Adiós",
      goodMorning: "Buenos días",
      goodNight: "Buenas noches",
      howAreYou: "¿Cómo estás?",
      thanks: "Gracias",
    },
  },
  en: {
    title: "Greetings Vocabulary",
    subtitle: "Learn basic courtesy words",
    instructions: "How to use this page?",
    instructionsText:
      "Find matching pairs of cards. Click on cards to flip them and look for pairs.",
    scoreText: "Pairs found:",
    resetText: "Reset",
    successTitle: "Congratulations!",
    successMessage:
      "You have completed the memory game. Excellent work learning vocabulary!",
    closeText: "Close",
    playAgainText: "Play again",
    continueText: "Continue",
    cards: {
      hello: "Hello",
      goodbye: "Goodbye",
      goodMorning: "Good morning",
      goodNight: "Good night",
      howAreYou: "How are you?",
      thanks: "Thank you",
    },
  },
  fr: {
    title: "Vocabulaire des Salutations",
    subtitle: "Apprenez les mots de politesse de base",
    instructions: "Comment utiliser cette page?",
    instructionsText:
      "Trouvez les paires de cartes qui correspondent. Cliquez sur les cartes pour les retourner et cherchez les paires.",
    scoreText: "Paires trouvées:",
    resetText: "Réinitialiser",
    successTitle: "Félicitations!",
    successMessage:
      "Vous avez terminé le jeu de mémoire. Excellent travail pour apprendre le vocabulaire!",
    closeText: "Fermer",
    playAgainText: "Rejouer",
    continueText: "Continuer",
    cards: {
      hello: "Bonjour",
      goodbye: "Au revoir",
      goodMorning: "Bonjour",
      goodNight: "Bonne nuit",
      howAreYou: "Comment allez-vous?",
      thanks: "Merci",
    },
  },
}

// Cartas
const cardData = [
  { id: "hello", type: "text", gradient: "from-yellow-400 to-orange-500" },
  { id: "hello", type: "icon", icon: "👋", gradient: "from-yellow-400 to-orange-500" },
  { id: "goodbye", type: "text", gradient: "from-purple-400 to-pink-500" },
  { id: "goodbye", type: "icon", icon: "👋", gradient: "from-purple-400 to-pink-500" },
  { id: "goodMorning", type: "text", gradient: "from-green-400 to-teal-500" },
  { id: "goodMorning", type: "icon", icon: "🌅", gradient: "from-green-400 to-teal-500" },
  { id: "goodNight", type: "text", gradient: "from-indigo-400 to-purple-500" },
  { id: "goodNight", type: "icon", icon: "🌙", gradient: "from-indigo-400 to-purple-500" },
  { id: "howAreYou", type: "text", gradient: "from-pink-400 to-red-500" },
  { id: "howAreYou", type: "icon", icon: "❓", gradient: "from-pink-400 to-red-500" },
  { id: "thanks", type: "text", gradient: "from-cyan-400 to-blue-500" },
  { id: "thanks", type: "icon", icon: "🙏", gradient: "from-cyan-400 to-blue-500" },
]

// Estado del juego
const gameState = {
  matches: 0,
  totalMatches: 6,
  selectedWord: null,
  isMobile: window.innerWidth <= 768,
  completedPairs: new Set(),
}

let currentLanguage = "es"
let flippedCards = []
let canFlip = true

// --- Funciones utilitarias ---
function shuffle(array) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

function createCard(cardInfo, index) {
  const card = document.createElement("div")
  card.className = "relative h-32 cursor-pointer"
  card.onclick = () => flipCard(index)

  const cardInner = document.createElement("div")
  cardInner.className = "card-flip w-full h-full relative"
  cardInner.id = `card-${index}`

  const cardFront = document.createElement("div")
  cardFront.className = "card-front bg-gray-600 rounded-xl flex items-center justify-center shadow-lg"
  cardFront.innerHTML = '<div class="text-4xl">❓</div>'

  const cardBack = document.createElement("div")
  cardBack.className = `card-back bg-gradient-to-br ${cardInfo.gradient} rounded-xl flex flex-col items-center justify-center text-white shadow-lg relative`

  const speakButton = document.createElement("button")
  speakButton.className =
    "absolute top-2 right-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
  speakButton.innerHTML = "🔊"
  speakButton.style.fontSize = "20px"
  speakButton.onclick = (e) => {
    e.stopPropagation()
    speakText(cardInfo)
  }

  if (cardInfo.type === "text") {
    cardBack.innerHTML = `<div class="text-xl font-bold text-center px-2">${translations[currentLanguage].cards[cardInfo.id]}</div>`
  } else {
    cardBack.innerHTML = `<div class="text-5xl mb-2">${cardInfo.icon}</div>`
  }

  cardBack.appendChild(speakButton)
  cardInner.appendChild(cardFront)
  cardInner.appendChild(cardBack)
  card.appendChild(cardInner)

  return card
}

function speakText(cardInfo) {
  if ("speechSynthesis" in window) {
    const text = translations[currentLanguage].cards[cardInfo.id]
    const utterance = new SpeechSynthesisUtterance(text)
    const langCodes = { es: "es-ES", en: "en-US", fr: "fr-FR" }
    utterance.lang = langCodes[currentLanguage]
    utterance.rate = 0.8
    utterance.pitch = 1.1
    speechSynthesis.speak(utterance)
  }
}

// --- Juego ---
function flipCard(index) {
  if (!canFlip || flippedCards.length >= 2) return

  const cardElement = document.getElementById(`card-${index}`)
  if (cardElement.classList.contains("flipped")) return

  cardElement.classList.add("flipped")
  flippedCards.push(index)

  if (flippedCards.length === 2) {
    canFlip = false
    setTimeout(checkMatch, 1000)
  }
}

function checkMatch() {
  const [first, second] = flippedCards
  const firstCard = cardData[first]
  const secondCard = cardData[second]

  if (firstCard.id === secondCard.id) {
    gameState.completedPairs.add(firstCard.id)
    gameState.matches++

    const firstElement = document.getElementById(`card-${first}`)
    const secondElement = document.getElementById(`card-${second}`)
    firstElement.classList.add("correct-match", "success-bounce")
    secondElement.classList.add("correct-match", "success-bounce")

    setTimeout(() => {
      firstElement.classList.remove("correct-match", "success-bounce")
      secondElement.classList.remove("correct-match", "success-bounce")
    }, 600)

    document.getElementById("score").textContent = gameState.matches

    if (gameState.matches === gameState.totalMatches) {
      setTimeout(() => {
        showSuccessModal()
      }, 800)
    }
  } else {
    setTimeout(() => {
      document.getElementById(`card-${first}`).classList.remove("flipped")
      document.getElementById(`card-${second}`).classList.remove("flipped")
    }, 500)
  }

  flippedCards = []
  canFlip = true
}

// --- Modal de éxito ---
function showSuccessModal() {
  const modal = document.getElementById("success-modal")
  modal.classList.remove("hidden")
  modal.classList.add("flex")

  completarActividad(1) // guardar progreso actividad 1
}

function closeModal() {
  const modal = document.getElementById("success-modal")
  modal.classList.add("hidden")
  modal.classList.remove("flex")
}

function resetGame() {
  flippedCards = []
  gameState.matches = 0
  gameState.completedPairs.clear()
  gameState.selectedWord = null
  canFlip = true
  document.getElementById("score").textContent = "0"
  closeModal()
  initGame()
}

function continueToActivities() {
  closeModal()
  completarActividad(1)
  setTimeout(() => {
    window.location.href = "actividad2.html" // 🔥 aquí ya manda a actividad2.html
  }, 300)
}

// --- Cambio de idioma ---
function changeLanguage(lang) {
  currentLanguage = lang
  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.classList.toggle("bg-white", btn.dataset.lang === lang)
    btn.classList.toggle("text-blue-500", btn.dataset.lang === lang)
  })
  updateTexts()
  initGame()
}

function updateTexts() {
  const t = translations[currentLanguage]
  document.getElementById("title").textContent = t.title
  document.getElementById("subtitle").textContent = t.subtitle
  document.getElementById("instructions").textContent = t.instructions
  document.getElementById("score-text").innerHTML =
    `${t.scoreText} <span id="score">${gameState.matches}</span>/6`
  document.getElementById("reset-text").textContent = t.resetText
  document.getElementById("success-title").textContent = t.successTitle
  document.getElementById("success-message").textContent = t.successMessage
  document.getElementById("play-again-text").textContent = t.playAgainText
  document.getElementById("continue-text").textContent = t.continueText
}

// --- Inicializar ---
function initGame() {
  const gameBoard = document.getElementById("game-board")
  gameBoard.innerHTML = ""

  const shuffledCards = shuffle(cardData)
  shuffledCards.forEach((cardInfo, index) => {
    const cardElement = createCard(cardInfo, index)
    gameBoard.appendChild(cardElement)
  })

  cardData.length = 0
  cardData.push(...shuffledCards)
}

// --- Progreso ---
function completarActividad(activityNumber) {
  try {
    const progreso = Number.parseInt(localStorage.getItem("progreso_actividades")) || 0
    if (activityNumber === progreso + 1) {
      localStorage.setItem("progreso_actividades", activityNumber.toString())
      if (typeof window.completarActividad === "function") {
        window.completarActividad(activityNumber)
      }
    }
    localStorage.setItem(`actividad_${activityNumber}_completada`, "true")
    localStorage.setItem(`actividad_${activityNumber}_fecha`, new Date().toISOString())
  } catch (error) {
    console.error("Error guardando progreso:", error)
  }
}

// --- Listeners ---
document.addEventListener("DOMContentLoaded", () => {
  updateTexts()
  initGame()
})
