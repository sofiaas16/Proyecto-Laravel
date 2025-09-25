// Emoji game data
const emojis = [
    { emoji: "😀", name: "feliz", hint: "Cuando estás contento" },
    { emoji: "😢", name: "triste", hint: "Cuando lloras" },
    { emoji: "😡", name: "enojado", hint: "Cuando estás molesto" },
    { emoji: "🌞", name: "sol", hint: "Brilla en el día" },
    { emoji: "🌙", name: "luna", hint: "Aparece en la noche" },
  ]
  
  let currentEmojiIndex = 0
  let completedEmojis = 0
  let isAnswered = false
  
  // DOM elements
  const emojiDisplay = document.getElementById("emoji-display")
  const emojiInput = document.getElementById("emoji-input")
  const checkBtn = document.getElementById("check-btn")
  const nextBtn = document.getElementById("next-btn")
  const feedback = document.getElementById("feedback")
  const progreso = document.getElementById("progreso")
  const successModal = document.getElementById("success-modal")
  const closeModal = document.getElementById("close-modal")
  
  // Function declaration for completarActividad
  function completarActividad(activityNumber) {
    console.log(`Actividad ${activityNumber} completada`)
  }
  
  // Initialize game
  function initGame() {
    showCurrentEmoji()
    updateProgress()
  
    // Event listeners
    checkBtn.addEventListener("click", checkAnswer)
    nextBtn.addEventListener("click", nextEmoji)
    closeModal.addEventListener("click", closeSuccessModal)
  
    // Allow Enter key to check answer
    emojiInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        if (!isAnswered) {
          checkAnswer()
        } else {
          nextEmoji()
        }
      }
    })
  
    // Focus input
    emojiInput.focus()
  }
  
  function showCurrentEmoji() {
    const currentEmoji = emojis[currentEmojiIndex]
    emojiDisplay.textContent = currentEmoji.emoji
    emojiDisplay.classList.remove("bounce-in")
  
    // Trigger animation
    setTimeout(() => {
      emojiDisplay.classList.add("bounce-in")
    }, 50)
  
    // Reset input and feedback
    emojiInput.value = ""
    emojiInput.focus()
    feedback.textContent = ""
    feedback.className =
      "text-center text-2xl font-bold min-h-[60px] flex items-center justify-center rounded-2xl transition-all duration-300"
  
    // Reset buttons
    checkBtn.classList.remove("hidden")
    nextBtn.classList.add("hidden")
    isAnswered = false
  }
  
  function checkAnswer() {
    if (isAnswered) return
  
    const userAnswer = emojiInput.value.toLowerCase().trim()
    const correctAnswer = emojis[currentEmojiIndex].name
  
    if (userAnswer === "") {
      showFeedback("Por favor escribe una respuesta", "warning")
      return
    }
  
    if (userAnswer === correctAnswer) {
      showFeedback("¡Correcto! ✅", "success")
      completedEmojis++
      updateProgress()
      isAnswered = true
  
      // Show next button or complete game
      if (currentEmojiIndex < emojis.length - 1) {
        checkBtn.classList.add("hidden")
        nextBtn.classList.remove("hidden")
      } else {
        setTimeout(() => {
          completeGame()
        }, 1500)
      }
    } else {
      showFeedback("Incorrecto ❌ Intenta de nuevo", "error")
      emojiInput.classList.add("shake")
      setTimeout(() => {
        emojiInput.classList.remove("shake")
      }, 500)
      emojiInput.select()
    }
  }
  
  function showFeedback(message, type) {
    feedback.textContent = message
  
    switch (type) {
      case "success":
        feedback.className =
          "text-center text-2xl font-bold min-h-[60px] flex items-center justify-center rounded-2xl transition-all duration-300 bg-green-100 text-green-800 border-2 border-green-300"
        break
      case "error":
        feedback.className =
          "text-center text-2xl font-bold min-h-[60px] flex items-center justify-center rounded-2xl transition-all duration-300 bg-red-100 text-red-800 border-2 border-red-300"
        break
      case "warning":
        feedback.className =
          "text-center text-2xl font-bold min-h-[60px] flex items-center justify-center rounded-2xl transition-all duration-300 bg-yellow-100 text-yellow-800 border-2 border-yellow-300"
        break
    }
  }
  
  function nextEmoji() {
    if (currentEmojiIndex < emojis.length - 1) {
      currentEmojiIndex++
      showCurrentEmoji()
    }
  }
  
  function updateProgress() {
    progreso.textContent = `${completedEmojis}/${emojis.length}`
  }
  
  function completeGame() {
    successModal.classList.remove("hidden")
    successModal.classList.add("flex")
  
    // Scale animation for modal
    const modalContent = successModal.querySelector("div")
    modalContent.style.transform = "scale(0.7)"
    setTimeout(() => {
      modalContent.style.transform = "scale(1)"
    }, 100)
  
    // Call completion function
    if (typeof completarActividad === "function") {
      completarActividad(7)
    } else {
      console.log("Actividad 7 completada - completarActividad(7) called")
    }
  }
  
  function closeSuccessModal() {
    successModal.classList.add("hidden")
    successModal.classList.remove("flex")
  
    // Reset game if needed
    // currentEmojiIndex = 0;
    // completedEmojis = 0;
    // showCurrentEmoji();
    // updateProgress();
  }
  
  // Initialize game when page loads
  document.addEventListener("DOMContentLoaded", initGame)
  
  // Add some console logging for debugging
  console.log("[v0] Emoji game initialized with", emojis.length, "emojis")
  