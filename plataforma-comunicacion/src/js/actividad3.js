// Game data - Vocabulario de Familia
const gameData = [
  { id: 1, word: "MAMÁ", image: "👩", description: "La madre de la familia" },
  { id: 2, word: "PAPÁ", image: "👨", description: "El padre de la familia" },
  { id: 3, word: "HERMANO", image: "👦", description: "Un hijo o hermano varón" },
  { id: 4, word: "HERMANA", image: "👧", description: "Una hija o hermana mujer" },
  { id: 5, word: "ABUELO", image: "👴", description: "El padre de tus padres" },
  { id: 6, word: "ABUELA", image: "👵", description: "La madre de tus padres" }
]

// Game state
const gameState = {
  matches: 0,
  totalMatches: gameData.length,
  selectedWord: null,
  isMobile: window.innerWidth <= 768,
  completedPairs: new Set(),
}

// Initialize game
document.addEventListener("DOMContentLoaded", () => {
  initializeGame()
  setupEventListeners()
})

function initializeGame() {
  generateWords()
  generateImages()
}

function generateWords() {
  const wordsContainer = document.getElementById("words-container")
  wordsContainer.innerHTML = ""

  const shuffledWords = [...gameData].sort(() => Math.random() - 0.5)

  shuffledWords.forEach((item) => {
    const wordElement = document.createElement("div")
    wordElement.className =
      "word-card bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg cursor-pointer font-bold text-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    wordElement.draggable = true
    wordElement.dataset.wordId = item.id
    wordElement.innerHTML = `
        <div class="text-2xl mb-1">${item.word}</div>
        <div class="text-sm opacity-90">${item.description}</div>
    `

    wordElement.addEventListener("dragstart", handleDragStart)
    wordElement.addEventListener("dragend", handleDragEnd)
    wordElement.addEventListener("click", handleWordClick)

    wordsContainer.appendChild(wordElement)
  })
}

function generateImages() {
  const imagesContainer = document.getElementById("images-container")
  imagesContainer.innerHTML = ""

  const shuffledImages = [...gameData].sort(() => Math.random() - 0.5)

  shuffledImages.forEach((item) => {
    const imageElement = document.createElement("div")
    imageElement.className =
      "image-slot bg-gray-100 border-3 border-dashed border-gray-300 p-6 rounded-lg text-center min-h-32 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-all duration-300"
    imageElement.dataset.imageId = item.id
    imageElement.innerHTML = `
        <div class="text-6xl mb-2">${item.image}</div>
        <div class="text-sm text-gray-600 font-semibold">Arrastra aquí</div>
    `

    imageElement.addEventListener("dragover", handleDragOver)
    imageElement.addEventListener("drop", handleDrop)
    imageElement.addEventListener("dragleave", handleDragLeave)
    imageElement.addEventListener("click", handleImageClick)

    imagesContainer.appendChild(imageElement)
  })
}

// Drag & Drop
function handleDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.dataset.wordId)
  e.target.style.opacity = "0.5"
}
function handleDragEnd(e) {
  e.target.style.opacity = "1"
}
function handleDragOver(e) {
  e.preventDefault()
  e.currentTarget.classList.add("drag-over")
}
function handleDragLeave(e) {
  e.currentTarget.classList.remove("drag-over")
}
function handleDrop(e) {
  e.preventDefault()
  const wordId = e.dataTransfer.getData("text/plain")
  const imageId = e.currentTarget.dataset.imageId
  e.currentTarget.classList.remove("drag-over")
  checkMatch(wordId, imageId, e.currentTarget)
}

// Mobile
function handleWordClick(e) {
  if (!gameState.isMobile && !("ontouchstart" in window)) return
  document.querySelectorAll(".word-card").forEach((card) => {
    card.classList.remove("ring-4", "ring-blue-400")
  })
  e.currentTarget.classList.add("ring-4", "ring-blue-400")
  gameState.selectedWord = e.currentTarget.dataset.wordId
}
function handleImageClick(e) {
  if (!gameState.selectedWord) return
  const wordId = gameState.selectedWord
  const imageId = e.currentTarget.dataset.imageId
  checkMatch(wordId, imageId, e.currentTarget)
  gameState.selectedWord = null
  document.querySelectorAll(".word-card").forEach((card) => {
    card.classList.remove("ring-4", "ring-blue-400")
  })
}

// Matching
function checkMatch(wordId, imageId, imageElement) {
  if (wordId === imageId) {
    handleCorrectMatch(wordId, imageElement)
  } else {
    handleIncorrectMatch(imageElement)
  }
}

function handleCorrectMatch(wordId, imageElement) {
  gameState.completedPairs.add(wordId)
  gameState.matches++

  const wordElement = document.querySelector(`[data-word-id="${wordId}"]`)
  wordElement.classList.add("word-used")

  const matchedItem = gameData.find((item) => item.id == wordId)
  imageElement.innerHTML = `
      <div class="text-6xl mb-2">${matchedItem.image}</div>
      <div class="text-lg font-bold text-green-700">${matchedItem.word}</div>
      <div class="text-2xl text-green-600">✓</div>
  `
  imageElement.classList.add("correct-match", "success-bounce")

  if (gameState.matches === gameState.totalMatches) {
    setTimeout(() => {
      showSuccessModal()
      completarActividad(3) // 🔥 guarda progreso de la actividad 3
    }, 800)
  }
}

function handleIncorrectMatch(imageElement) {
  imageElement.classList.add("shake")
  setTimeout(() => {
    imageElement.classList.remove("shake")
  }, 500)
}

// Success modal
function showSuccessModal() {
  document.getElementById("success-modal").classList.remove("hidden")
}
function hideSuccessModal() {
  document.getElementById("success-modal").classList.add("hidden")
}

// Controls
function resetGame() {
  gameState.matches = 0
  gameState.completedPairs.clear()
  gameState.selectedWord = null
  hideSuccessModal()
  initializeGame()
}
function goBack() {
  window.location.href = "actividades.html"
}
function continueToActivities() {
  hideSuccessModal()
  completarActividad(3)
  setTimeout(() => {
    window.location.href = "actividad4.html" // pasa a la siguiente actividad
  }, 500)
}

// ✅ Guardar progreso compatible con actividades.js
function completarActividad(activityNumber) {
  try {
    const progreso = Number.parseInt(localStorage.getItem("progreso_actividades")) || 0
    if (activityNumber === progreso + 1) {
      localStorage.setItem("progreso_actividades", activityNumber.toString())
      console.log(`Actividad ${activityNumber} completada. Progreso actualizado.`)
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

// Events
function setupEventListeners() {
  window.addEventListener("resize", () => {
    gameState.isMobile = window.innerWidth <= 768
  })
  document.addEventListener("dragover", (e) => e.preventDefault())
  document.addEventListener("drop", (e) => e.preventDefault())
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") hideSuccessModal()
})
