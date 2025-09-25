// UI Translations
const uiTranslations = {
    es: {
      title: "Juego de Emociones",
      subtitle: "Aprende a expresar cómo te sientes",
      instructionsTitle: "¿Cómo usar esta página?",
      instructionsText:
        "Haz clic en cada emoción para aprender más sobre ella. Descubre cuándo usarla y cómo expresarla.",
      progressText: "Progreso:",
      emotionsExplored: "emociones exploradas",
      situationsTitle: "¿Cuándo la usas?",
      examplesTitle: "Ejemplos de frases",
      adviceTitle: "Consejo práctico",
      listenText: "Escuchar",
      closeText: "Cerrar",
      backText: "Volver",
      successTitle: "¡Felicitaciones!",
      successMessage: "Has explorado todas las emociones. ¡Excelente trabajo aprendiendo a expresar sentimientos!",
      exploreAgainText: "Explorar de nuevo",
      continueText: "Continuar",
    },
    en: {
      title: "Emotions Game",
      subtitle: "Learn to express how you feel",
      instructionsTitle: "How to use this page?",
      instructionsText: "Click on each emotion to learn more about it. Discover when to use it and how to express it.",
      progressText: "Progress:",
      emotionsExplored: "emotions explored",
      situationsTitle: "When do you use it?",
      examplesTitle: "Example phrases",
      adviceTitle: "Practical advice",
      listenText: "Listen",
      closeText: "Close",
      backText: "Back",
      successTitle: "Congratulations!",
      successMessage: "You have explored all emotions. Excellent work learning to express feelings!",
      exploreAgainText: "Explore again",
      continueText: "Continue",
    },
    fr: {
      title: "Jeu des Émotions",
      subtitle: "Apprenez à exprimer ce que vous ressentez",
      instructionsTitle: "Comment utiliser cette page?",
      instructionsText:
        "Cliquez sur chaque émotion pour en apprendre plus. Découvrez quand l'utiliser et comment l'exprimer.",
      progressText: "Progrès:",
      emotionsExplored: "émotions explorées",
      situationsTitle: "Quand l'utilisez-vous?",
      examplesTitle: "Exemples de phrases",
      adviceTitle: "Conseil pratique",
      listenText: "Écouter",
      closeText: "Fermer",
      backText: "Retour",
      successTitle: "Félicitations!",
      successMessage:
        "Vous avez exploré toutes les émotions. Excellent travail pour apprendre à exprimer les sentiments!",
      exploreAgainText: "Explorer à nouveau",
      continueText: "Continuer",
    },
  }
  
  // Vocabulary Data
  const vocabularyData = {
    es: {
      happy: {
        name: "Feliz",
        icon: "😊",
        description: "Sentimiento de alegría y satisfacción",
        situations: [
          "Cuando recibes buenas noticias",
          "Al pasar tiempo con personas queridas",
          "Después de lograr algo importante",
          "Durante celebraciones y fiestas",
        ],
        examples: ["¡Estoy muy feliz hoy!", "Me siento alegre", "¡Qué buena noticia!", "Esto me hace sonreír"],
        advice: "Comparte tu felicidad con otros. Una sonrisa puede alegrar el día de alguien más.",
      },
      sad: {
        name: "Triste",
        icon: "😢",
        description: "Sentimiento de pena o melancolía",
        situations: [
          "Cuando pierdes algo importante",
          "Al despedirte de alguien querido",
          "Durante momentos difíciles",
          "Cuando las cosas no salen como esperabas",
        ],
        examples: ["Me siento triste", "Estoy un poco melancólico", "Esto me pone triste", "No me siento bien"],
        advice: "Está bien sentirse triste a veces. Habla con alguien de confianza sobre tus sentimientos.",
      },
      angry: {
        name: "Enojado",
        icon: "😠",
        description: "Sentimiento de irritación o molestia",
        situations: [
          "Cuando algo es injusto",
          "Si alguien no te respeta",
          "Cuando las cosas no funcionan",
          "Al sentirte frustrado",
        ],
        examples: ["Estoy enojado", "Me molesta esto", "No me parece justo", "Estoy frustrado"],
        advice: "Respira profundo antes de reaccionar. Cuenta hasta diez y piensa en una solución.",
      },
      scared: {
        name: "Asustado",
        icon: "😨",
        description: "Sentimiento de miedo o preocupación",
        situations: [
          "Ante situaciones desconocidas",
          "Cuando hay peligro",
          "Durante películas de terror",
          "Al enfrentar algo nuevo",
        ],
        examples: ["Tengo miedo", "Estoy asustado", "Me da nervios", "No me siento seguro"],
        advice: "Es normal tener miedo. Pide ayuda cuando la necesites y recuerda que eres valiente.",
      },
      tired: {
        name: "Cansado",
        icon: "😴",
        description: "Sentimiento de fatiga o agotamiento",
        situations: [
          "Después de trabajar mucho",
          "Al final del día",
          "Cuando no has dormido bien",
          "Tras hacer ejercicio",
        ],
        examples: ["Estoy cansado", "Me siento agotado", "Necesito descansar", "Tengo sueño"],
        advice: "Descansa cuando tu cuerpo lo necesite. Dormir bien es importante para tu salud.",
      },
    },
    en: {
      happy: {
        name: "Happy",
        icon: "😊",
        description: "Feeling of joy and satisfaction",
        situations: [
          "When you receive good news",
          "While spending time with loved ones",
          "After achieving something important",
          "During celebrations and parties",
        ],
        examples: ["I'm very happy today!", "I feel joyful", "What great news!", "This makes me smile"],
        advice: "Share your happiness with others. A smile can brighten someone else's day.",
      },
      sad: {
        name: "Sad",
        icon: "😢",
        description: "Feeling of sorrow or melancholy",
        situations: [
          "When you lose something important",
          "When saying goodbye to someone dear",
          "During difficult moments",
          "When things don't go as expected",
        ],
        examples: ["I feel sad", "I'm a bit melancholic", "This makes me sad", "I don't feel well"],
        advice: "It's okay to feel sad sometimes. Talk to someone you trust about your feelings.",
      },
      angry: {
        name: "Angry",
        icon: "😠",
        description: "Feeling of irritation or annoyance",
        situations: [
          "When something is unfair",
          "If someone doesn't respect you",
          "When things don't work",
          "When feeling frustrated",
        ],
        examples: ["I'm angry", "This bothers me", "It doesn't seem fair", "I'm frustrated"],
        advice: "Take a deep breath before reacting. Count to ten and think of a solution.",
      },
      scared: {
        name: "Scared",
        icon: "😨",
        description: "Feeling of fear or worry",
        situations: ["In unknown situations", "When there's danger", "During horror movies", "When facing something new"],
        examples: ["I'm afraid", "I'm scared", "It makes me nervous", "I don't feel safe"],
        advice: "It's normal to be afraid. Ask for help when you need it and remember you are brave.",
      },
      tired: {
        name: "Tired",
        icon: "😴",
        description: "Feeling of fatigue or exhaustion",
        situations: ["After working hard", "At the end of the day", "When you haven't slept well", "After exercising"],
        examples: ["I'm tired", "I feel exhausted", "I need to rest", "I'm sleepy"],
        advice: "Rest when your body needs it. Sleeping well is important for your health.",
      },
    },
    fr: {
      happy: {
        name: "Heureux",
        icon: "😊",
        description: "Sentiment de joie et de satisfaction",
        situations: [
          "Quand vous recevez de bonnes nouvelles",
          "En passant du temps avec des proches",
          "Après avoir accompli quelque chose d'important",
          "Pendant les célébrations et les fêtes",
        ],
        examples: [
          "Je suis très heureux aujourd'hui!",
          "Je me sens joyeux",
          "Quelle bonne nouvelle!",
          "Cela me fait sourire",
        ],
        advice: "Partagez votre bonheur avec les autres. Un sourire peut égayer la journée de quelqu'un d'autre.",
      },
      sad: {
        name: "Triste",
        icon: "😢",
        description: "Sentiment de chagrin ou de mélancolie",
        situations: [
          "Quand vous perdez quelque chose d'important",
          "En disant au revoir à quelqu'un de cher",
          "Pendant les moments difficiles",
          "Quand les choses ne se passent pas comme prévu",
        ],
        examples: ["Je me sens triste", "Je suis un peu mélancolique", "Cela me rend triste", "Je ne me sens pas bien"],
        advice: "Il est normal de se sentir triste parfois. Parlez à quelqu'un de confiance de vos sentiments.",
      },
      angry: {
        name: "En colère",
        icon: "😠",
        description: "Sentiment d'irritation ou d'agacement",
        situations: [
          "Quand quelque chose est injuste",
          "Si quelqu'un ne vous respecte pas",
          "Quand les choses ne fonctionnent pas",
          "En se sentant frustré",
        ],
        examples: ["Je suis en colère", "Cela m'ennuie", "Cela ne me semble pas juste", "Je suis frustré"],
        advice: "Respirez profondément avant de réagir. Comptez jusqu'à dix et pensez à une solution.",
      },
      scared: {
        name: "Effrayé",
        icon: "😨",
        description: "Sentiment de peur ou d'inquiétude",
        situations: [
          "Dans des situations inconnues",
          "Quand il y a du danger",
          "Pendant les films d'horreur",
          "En affrontant quelque chose de nouveau",
        ],
        examples: ["J'ai peur", "Je suis effrayé", "Cela me rend nerveux", "Je ne me sens pas en sécurité"],
        advice:
          "Il est normal d'avoir peur. Demandez de l'aide quand vous en avez besoin et rappelez-vous que vous êtes courageux.",
      },
      tired: {
        name: "Fatigué",
        icon: "😴",
        description: "Sentiment de fatigue ou d'épuisement",
        situations: [
          "Après avoir travaillé dur",
          "À la fin de la journée",
          "Quand vous n'avez pas bien dormi",
          "Après avoir fait de l'exercice",
        ],
        examples: ["Je suis fatigué", "Je me sens épuisé", "J'ai besoin de me reposer", "J'ai sommeil"],
        advice: "Reposez-vous quand votre corps en a besoin. Bien dormir est important pour votre santé.",
      },
    },
  }
  
  // Game state
  let currentLanguage = "es"
  const exploredEmotions = new Set()
  let currentEmotion = null
  
  // Initialize the game
  function initGame() {
    renderEmotions()
    updateProgress()
    updateTexts()
  }
  
  // Render emotion cards
  function renderEmotions() {
    const grid = document.getElementById("emotions-grid")
    grid.innerHTML = ""
  
    const emotions = ["happy", "sad", "angry", "scared", "tired"]
    const colors = [
      "from-yellow-400 to-orange-500",
      "from-blue-400 to-indigo-500",
      "from-red-400 to-pink-500",
      "from-purple-400 to-indigo-500",
      "from-gray-400 to-gray-600",
    ]
  
    emotions.forEach((emotion, index) => {
      const emotionData = vocabularyData[currentLanguage][emotion]
      const card = document.createElement("div")
      const isVisited = exploredEmotions.has(emotion)
  
      card.className = `emotion-card bg-gradient-to-br ${colors[index]} p-6 rounded-xl shadow-lg cursor-pointer text-white text-center ${isVisited ? "visited" : ""}`
      card.onclick = () => openEmotionModal(emotion)
  
      card.innerHTML = `
              <div class="text-6xl mb-4">${emotionData.icon}</div>
              <h3 class="text-2xl font-bold mb-2">${emotionData.name}</h3>
              <p class="text-sm opacity-90">${emotionData.description}</p>
              ${isVisited ? '<div class="mt-3 text-green-200 font-semibold">✓ Explorada</div>' : ""}
          `
  
      grid.appendChild(card)
    })
  }
  
  // Open emotion detail modal
  function openEmotionModal(emotion) {
    currentEmotion = emotion
    const emotionData = vocabularyData[currentLanguage][emotion]
    const ui = uiTranslations[currentLanguage]
  
    // Update modal content
    document.getElementById("modal-icon").textContent = emotionData.icon
    document.getElementById("modal-title").textContent = emotionData.name
    document.getElementById("modal-description").textContent = emotionData.description
  
    // Update situations
    const situationsList = document.getElementById("situations-list")
    situationsList.innerHTML = ""
    emotionData.situations.forEach((situation) => {
      const li = document.createElement("li")
      li.textContent = situation
      situationsList.appendChild(li)
    })
  
    // Update examples
    const examplesList = document.getElementById("examples-list")
    examplesList.innerHTML = ""
    emotionData.examples.forEach((example) => {
      const li = document.createElement("li")
      li.textContent = `"${example}"`
      li.className = "text-gray-600 italic"
      examplesList.appendChild(li)
    })
  
    // Update advice
    document.getElementById("advice-text").textContent = emotionData.advice
  
    // Mark as explored
    exploredEmotions.add(emotion)
  
    // Show modal
    document.getElementById("emotion-modal").classList.remove("hidden")
  
    // Update progress and check completion
    updateProgress()
    renderEmotions() // Re-render to show visited state
  
    if (exploredEmotions.size === 5) {
      setTimeout(() => {
        closeEmotionModal()
        showSuccessModal()
      }, 2000)
    }
  }
  
  // Close emotion modal
  function closeEmotionModal() {
    document.getElementById("emotion-modal").classList.add("hidden")
    currentEmotion = null
  }
  
  // Speak current emotion
  function speakEmotion() {
    if (!currentEmotion) return
  
    if ("speechSynthesis" in window) {
      const emotionData = vocabularyData[currentLanguage][currentEmotion]
      const text = `${emotionData.name}. ${emotionData.description}`
      const utterance = new SpeechSynthesisUtterance(text)
  
      const langCodes = { es: "es-ES", en: "en-US", fr: "fr-FR" }
      utterance.lang = langCodes[currentLanguage]
      utterance.rate = 0.8
      utterance.pitch = 1.1
  
      speechSynthesis.speak(utterance)
    }
  }
  
  // Update progress display
  function updateProgress() {
    const count = exploredEmotions.size
    const percentage = (count / 5) * 100
  
    document.getElementById("progress-count").textContent = count
    document.getElementById("progress-bar").style.width = `${percentage}%`
  }
  
  // Show success modal
  function showSuccessModal() {
    document.getElementById("success-modal").classList.remove("hidden")
  }
  
  // Close success modal
  function closeSuccessModal() {
    document.getElementById("success-modal").classList.add("hidden")
  }
  
  // Reset progress
  function resetProgress() {
    exploredEmotions.clear()
    updateProgress()
    renderEmotions()
    closeSuccessModal()
  }
  
  // Change language
  function changeLanguage(lang) {
    currentLanguage = lang
  
    // Update language buttons
    document.querySelectorAll(".language-btn").forEach((btn) => {
      if (btn.dataset.lang === lang) {
        btn.className =
          "language-btn bg-white text-purple-500 px-4 py-2 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors"
      } else {
        btn.className =
          "language-btn bg-purple-400 text-white px-4 py-2 rounded-lg font-semibold text-lg hover:bg-purple-300 transition-colors"
      }
    })
  
    updateTexts()
    renderEmotions()
  }
  
  // Update all text content
  function updateTexts() {
    const ui = uiTranslations[currentLanguage]
  
    document.getElementById("main-title").innerHTML = `😊 ${ui.title}`
    document.getElementById("main-subtitle").textContent = ui.subtitle
    document.getElementById("instructions-title").textContent = ui.instructionsTitle
    document.getElementById("instructions-text").textContent = ui.instructionsText
    document.getElementById("progress-text").innerHTML =
      `${ui.progressText} <span id="progress-count">${exploredEmotions.size}</span>/5 ${ui.emotionsExplored}`
    document.getElementById("situations-title").textContent = ui.situationsTitle
    document.getElementById("examples-title").textContent = ui.examplesTitle
    document.getElementById("advice-title").textContent = ui.adviceTitle
    document.getElementById("listen-text").textContent = ui.listenText
    document.getElementById("close-text").textContent = ui.closeText
    document.getElementById("back-text").textContent = ui.backText
    document.getElementById("success-title").textContent = ui.successTitle
    document.getElementById("success-message").textContent = ui.successMessage
    document.getElementById("explore-again-text").textContent = ui.exploreAgainText
    document.getElementById("continue-text").textContent = ui.continueText
  }
  
  // Navigation functions
  function goBack() {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.location.href = "actividades.html"
    }
  }
  
  function continueToActivities() {
    closeSuccessModal()
    completarActividad(5)
  
    setTimeout(() => {
      goBack()
    }, 100)
  }
  
  // Progress management with localStorage
  function completarActividad(activityNumber) {
    try {
      const progreso = Number.parseInt(localStorage.getItem("progreso_actividades")) || 0
  
      if (activityNumber === progreso + 1) {
        localStorage.setItem("progreso_actividades", activityNumber.toString())
        console.log(`Actividad ${activityNumber} completada. Progreso actualizado a: ${activityNumber}`)
  
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
  
  // Event listeners
  document.addEventListener("DOMContentLoaded", () => {
    initGame()
  
    // ESC key to close modals
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeEmotionModal()
        closeSuccessModal()
      }
    })
  })
  