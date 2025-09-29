// Translations
const translations = {
  es: {
    title: "Vocabulario de Emociones",
    subtitle: "Aprende palabras básicas de emociones",
    instructions: "¿Cómo usar esta página?",
    instructionsText: "Encuentra los pares de tarjetas que coinciden. Haz clic en las tarjetas para voltearlas y busca las parejas.",
    scoreText: "Pares encontrados:",
    resetText: "Reiniciar",
    successTitle: "¡Felicitaciones!",
    successMessage: "Has completado el juego de memoria. ¡Excelente trabajo aprendiendo emociones!",
    playAgainText: "Jugar de nuevo",
    continueText: "Finalizar",
    cards: {
      happy: "Feliz",
      sad: "Triste",
      angry: "Enojado",
      scared: "Asustado",
      tired: "Cansado",
      inLove: "Enamorado",
    },
  },
  en: {
    title: "Emotions Vocabulary",
    subtitle: "Learn basic emotions words",
    instructions: "How to use this page?",
    instructionsText: "Find matching pairs of cards. Click on cards to flip them and look for pairs.",
    scoreText: "Pairs found:",
    resetText: "Reset",
    successTitle: "Congratulations!",
    successMessage: "You have completed the memory game. Excellent work learning emotions!",
    playAgainText: "Play again",
    continueText: "Finish",
    cards: {
      happy: "Happy",
      sad: "Sad",
      angry: "Angry",
      scared: "Scared",
      tired: "Tired",
      inLove: "In love",
    },
  },
  fr: {
    title: "Vocabulaire des Émotions",
    subtitle: "Apprenez les mots de base des émotions",
    instructions: "Comment utiliser cette page?",
    instructionsText: "Trouvez les paires de cartes qui correspondent. Cliquez sur les cartes pour les retourner et cherchez les paires.",
    scoreText: "Paires trouvées:",
    resetText: "Réinitialiser",
    successTitle: "Félicitations!",
    successMessage: "Vous avez terminé le jeu de mémoire. Excellent travail pour apprendre les émotions!",
    playAgainText: "Rejouer",
    continueText: "Terminer",
    cards: {
      happy: "Heureux",
      sad: "Triste",
      angry: "Fâché",
      scared: "Effrayé",
      tired: "Fatigué",
      inLove: "Amoureux",
    },
  },
}

// Card data (emoji + word pairs)
const cardData = [
  { id: "happy", type: "text", gradient: "from-yellow-400 to-orange-500" },
  { id: "happy", type: "icon", icon: "😊", gradient: "from-yellow-400 to-orange-500" },
  { id: "sad", type: "text", gradient: "from-blue-400 to-indigo-500" },
  { id: "sad", type: "icon", icon: "😢", gradient: "from-blue-400 to-indigo-500" },
  { id: "angry", type: "text", gradient: "from-red-400 to-pink-500" },
  { id: "angry", type: "icon", icon: "😡", gradient: "from-red-400 to-pink-500" },
  { id: "scared", type: "text", gradient: "from-purple-400 to-indigo-500" },
  { id: "scared", type: "icon", icon: "😱", gradient: "from-purple-400 to-indigo-500" },
  { id: "tired", type: "text", gradient: "from-green-400 to-teal-500" },
  { id: "tired", type: "icon", icon: "😴", gradient: "from-green-400 to-teal-500" },
  { id: "inLove", type: "text", gradient: "from-pink-400 to-red-500" },
  { id: "inLove", type: "icon", icon: "😍", gradient: "from-pink-400 to-red-500" },
]

// Game state
const gameState = {
  matches: 0,
  totalMatches: 6,
  completedPairs: new Set(),
}
let currentLanguage = "es"
let flippedCards = []
let canFlip = true

// Utility functions
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

  if (cardInfo.type === "text") {
    cardBack.innerHTML = `<div class="text-xl font-bold text-center px-2">${translations[currentLanguage].cards[cardInfo.id]}</div>`
  } else {
    cardBack.innerHTML = `<div class="text-5xl mb-2">${cardInfo.icon}</div>`
  }

  cardInner.appendChild(cardFront)
  cardInner.appendChild(cardBack)
  card.appendChild(cardInner)

  return card
}

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

    document.getElementById("score").textContent = gameState.matches

    if (gameState.matches === gameState.totalMatches) {
      setTimeout(showSuccessModal, 800)
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

function showSuccessModal() {
  document.getElementById("success-modal").classList.remove("hidden")
}

function closeModal() {
  document.getElementById("success-modal").classList.add("hidden")
}

function resetGame() {
  flippedCards = []
  gameState.matches = 0
  gameState.completedPairs.clear()
  canFlip = true
  document.getElementById("score").textContent = "0"
  closeModal()
  initGame()
}

function changeLanguage(lang) {
  currentLanguage = lang
  updateTexts()
  initGame()
}

function updateTexts() {
  const t = translations[currentLanguage]
  document.querySelector("h1").innerHTML = `😊 ${t.title}`
  document.querySelector("p.text-blue-100").textContent = t.subtitle
  document.getElementById("instructions").textContent = t.instructions
  document.getElementById("instructions-text").textContent = t.instructionsText
  document.getElementById("score-text").innerHTML = `${t.scoreText} <span id="score">${gameState.matches}</span>/6`
  document.getElementById("reset-text").textContent = t.resetText
  document.getElementById("success-title").textContent = t.successTitle
  document.getElementById("success-message").textContent = t.successMessage
  document.getElementById("play-again-text").textContent = t.playAgainText
  document.getElementById("continue-text").textContent = t.continueText
}

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

function goBack() {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    window.location.href = "actividades.html"
  }
}

function continueToActivities() {
  closeModal()
  completarActividad(5) // ✅ última actividad
  // No redirige porque es la última
}

// Progress management with localStorage
function completarActividad(activityNumber) {
  try {
    let progreso = Number.parseInt(localStorage.getItem("progreso_actividades")) || 0
    if (activityNumber === progreso + 1) {
      localStorage.setItem("progreso_actividades", activityNumber.toString())
    }
    localStorage.setItem(`actividad_${activityNumber}_completada`, "true")
    localStorage.setItem(`actividad_${activityNumber}_fecha`, new Date().toISOString())
    if (activityNumber === 5) {
      localStorage.setItem("progreso_global", "100")
    }
  } catch (e) {
    console.error("Error guardando progreso:", e)
  }
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  updateTexts()
  initGame()
})
