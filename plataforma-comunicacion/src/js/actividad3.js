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
  
    // Shuffle words for variety
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
  
      // Add drag events
      wordElement.addEventListener("dragstart", handleDragStart)
      wordElement.addEventListener("dragend", handleDragEnd)
  
      // Add touch events for mobile
      wordElement.addEventListener("click", handleWordClick)
  
      wordsContainer.appendChild(wordElement)
    })
  }
  
  function generateImages() {
    const imagesContainer = document.getElementById("images-container")
    imagesContainer.innerHTML = ""
  
    // Shuffle images for variety
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
  
      // Add drop events
      imageElement.addEventListener("dragover", handleDragOver)
      imageElement.addEventListener("drop", handleDrop)
      imageElement.addEventListener("dragleave", handleDragLeave)
  
      // Add touch events for mobile
      imageElement.addEventListener("click", handleImageClick)
  
      imagesContainer.appendChild(imageElement)
    })
  }
  
  // Drag and Drop handlers
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
  
  // Mobile touch handlers
  function handleWordClick(e) {
    if (!gameState.isMobile && !("ontouchstart" in window)) return
  
    // Remove previous selection
    document.querySelectorAll(".word-card").forEach((card) => {
      card.classList.remove("ring-4", "ring-blue-400")
    })
  
    // Select current word
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
  
    // Remove selection highlight
    document.querySelectorAll(".word-card").forEach((card) => {
      card.classList.remove("ring-4", "ring-blue-400")
    })
  }
  
  // Match checking logic
  function checkMatch(wordId, imageId, imageElement) {
    if (wordId === imageId) {
      handleCorrectMatch(wordId, imageElement)
    } else {
      handleIncorrectMatch(imageElement)
    }
  }
  
  function handleCorrectMatch(wordId, imageElement) {
    // Mark as completed
    gameState.completedPairs.add(wordId)
    gameState.matches++
  
    // Update visual feedback
    imageElement.classList.add("correct-match", "success-bounce")
    const wordElement = document.querySelector(`[data-word-id="${wordId}"]`)
    wordElement.classList.add("word-used")
  
    // Update image content
    const matchedItem = gameData.find((item) => item.id == wordId)
    imageElement.innerHTML = `
          <div class="text-6xl mb-2">${matchedItem.image}</div>
          <div class="text-lg font-bold text-green-700">${matchedItem.word}</div>
          <div class="text-2xl text-green-600">✓</div>
      `
  
    // Show success feedback
    showFeedback("✅", "¡Correcto!", "border-green-400")
  
    // Update progress
    updateProgress()
  
    // Check if game is complete
    if (gameState.matches === gameState.totalMatches) {
      setTimeout(() => {
        showSuccessModal()
        completarActividad(1)
      }, 1000)
    }
  }
  
  function handleIncorrectMatch(imageElement) {
    // Visual feedback for error
    imageElement.classList.add("shake")
    showFeedback("❌", "Inténtalo de nuevo", "border-red-400")
  
    // Remove shake animation after it completes
    setTimeout(() => {
      imageElement.classList.remove("shake")
    }, 500)
  }
  
  // Feedback system
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
  
  // Progress tracking
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
  
  // Game controls
  function resetGame() {
    gameState.matches = 0
    gameState.completedPairs.clear()
    gameState.selectedWord = null
  
    hideSuccessModal()
    initializeGame()
  }
  
  function goBack() {
    // Navigate back to previous page
    if (window.history.length > 1) {
      window.history.back()
    } else {
      // Fallback navigation
      window.location.href = "vocabulario.html"
    }
  }
  
  // Progress management with localStorage
  function completarActividad(activityNumber) {
    try {
      // Get existing progress
      const completedActivities = JSON.parse(localStorage.getItem("completedActivities") || "[]")
  
      // Add current activity if not already completed
      if (!completedActivities.includes(activityNumber)) {
        completedActivities.push(activityNumber)
        localStorage.setItem("completedActivities", JSON.stringify(completedActivities))
      }
  
      // Save completion timestamp
      localStorage.setItem(`activity_${activityNumber}_completed`, new Date().toISOString())
  
      console.log(`Actividad ${activityNumber} completada y guardada en localStorage`)
    } catch (error) {
      console.error("Error saving progress:", error)
    }
  }
  
  // Utility function to get completed activities
  function getCompletedActivities() {
    try {
      return JSON.parse(localStorage.getItem("completedActivities") || "[]")
    } catch (error) {
      console.error("Error loading progress:", error)
      return []
    }
  }
  
  // Event listeners setup
  function setupEventListeners() {
    // Handle window resize for mobile detection
    window.addEventListener("resize", () => {
      gameState.isMobile = window.innerWidth <= 768
    })
  
    // Prevent default drag behavior on document
    document.addEventListener("dragover", (e) => e.preventDefault())
    document.addEventListener("drop", (e) => e.preventDefault())
  }
  
  // Accessibility enhancements
  document.addEventListener("keydown", (e) => {
    // ESC key to close modal
    if (e.key === "Escape") {
      hideSuccessModal()
    }
  })
  