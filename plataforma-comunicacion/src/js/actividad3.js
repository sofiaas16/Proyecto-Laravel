// Game data
const gameData = [
    { id: 1, word: "AGUA", image: "💧", description: "Líquido esencial para vivir" },
    { id: 2, word: "COMIDA", image: "🍽️", description: "Alimento para nutrirnos" },
    { id: 3, word: "BAÑO", image: "🚽", description: "Lugar para necesidades fisiológicas" },
    { id: 4, word: "DORMIR", image: "😴", description: "Descanso necesario" },
    { id: 5, word: "AYUDA", image: "🆘", description: "Solicitar asistencia" },
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
    updateProgress()
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
    showFeedback("👆", "Ahora toca la imagen correcta", "border-blue-400")
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
  
    showFeedback("✅", "¡Correcto!", "border-green-400")
    updateProgress()
  
    if (gameState.matches === gameState.totalMatches) {
      setTimeout(() => {
        showSuccessModal()
        completarActividad(3) // ✅ ahora guarda progreso en actividad 3
      }, 1000)
    }
  }
  
  function handleIncorrectMatch(imageElement) {
    imageElement.classList.add("shake")
    showFeedback("❌", "Inténtalo de nuevo", "border-red-400")
    setTimeout(() => {
      imageElement.classList.remove("shake")
    }, 500)
  }
  
  // Feedback
  function showFeedback(icon, text, borderClass) {
    const feedbackMessage = document.getElementById("feedback-message")
    const feedbackIcon = document.getElementById("feedback-icon")
    const feedbackText = document.getElementById("feedback-text")
  
    feedbackIcon.textContent = icon
    feedbackText.textContent = text
    feedbackMessage.className = `fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-2xl border-4 z-50 ${borderClass}`
    feedbackMessage.classList.remove("hidden")
    setTimeout(() => {
      feedbackMessage.classList.add("hidden")
    }, 2000)
  }
  
  // Progress
  function updateProgress() {
    const progressBar = document.getElementById("progress-bar")
    const progressText = document.getElementById("progress-text")
    const percentage = (gameState.matches / gameState.totalMatches) * 100
    progressBar.style.width = `${percentage}%`
    progressText.textContent = `${gameState.matches}/${gameState.totalMatches}`
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
      goBack()
    }, 100)
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
  