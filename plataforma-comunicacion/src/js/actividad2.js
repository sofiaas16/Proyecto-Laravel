// === Traducciones ===
const translations = {
  es: {
    title: "Vocabulario de Colores",
    subtitle: "Une cada color con su nombre",
    instructions: "Haz clic en un color y luego en su nombre correspondiente",
    colorsTitle: "Colores",
    namesTitle: "Nombres",
    successTitle: "¡Felicitaciones!",
    successMessage: "Has completado todos los pares correctamente",
    restartBtn: "Reiniciar",
    backBtn: "Volver",
    continueBtn: "Continuar",
    correctFeedback: "¡Correcto!",
    incorrectFeedback: "Inténtalo de nuevo",
    colors: {
      red: "Rojo",
      blue: "Azul",
      green: "Verde",
      yellow: "Amarillo",
      purple: "Morado",
      orange: "Naranja",
    },
  },
  en: {
    title: "Color Vocabulary",
    subtitle: "Match each color with its name",
    instructions: "Click on a color and then on its corresponding name",
    colorsTitle: "Colors",
    namesTitle: "Names",
    successTitle: "Congratulations!",
    successMessage: "You have completed all pairs correctly",
    restartBtn: "Restart",
    backBtn: "Back",
    continueBtn: "Continue",
    correctFeedback: "Correct!",
    incorrectFeedback: "Try again",
    colors: {
      red: "Red",
      blue: "Blue",
      green: "Green",
      yellow: "Yellow",
      purple: "Purple",
      orange: "Orange",
    },
  },
  fr: {
    title: "Vocabulaire des Couleurs",
    subtitle: "Associez chaque couleur à son nom",
    instructions: "Cliquez sur une couleur puis sur son nom correspondant",
    colorsTitle: "Couleurs",
    namesTitle: "Noms",
    successTitle: "Félicitations!",
    successMessage: "Vous avez terminé toutes les paires correctement",
    restartBtn: "Recommencer",
    backBtn: "Retour",
    continueBtn: "Continuer",
    correctFeedback: "Correct!",
    incorrectFeedback: "Essayez encore",
    colors: {
      red: "Rouge",
      blue: "Bleu",
      green: "Vert",
      yellow: "Jaune",
      purple: "Violet",
      orange: "Orange",
    },
  },
}

// === Datos de colores ===
const colorData = {
  red: "#ef4444",
  blue: "#3b82f6",
  green: "#10b981",
  yellow: "#f59e0b",
  purple: "#8b5cf6",
  orange: "#f97316",
}

let currentLanguage = "es"
let selectedColor = null
let selectedName = null
let matchedPairs = []
let gameCompleted = false

// Crear SVG para líneas
let svgLine = document.createElementNS("http://www.w3.org/2000/svg", "svg")
svgLine.setAttribute("id", "lines-svg")
svgLine.style.position = "absolute"
svgLine.style.top = "0"
svgLine.style.left = "0"
svgLine.style.width = "100%"
svgLine.style.height = "100%"
svgLine.style.pointerEvents = "none"
document.body.appendChild(svgLine)

function initGame() {
  createColorBoxes()
  createNameCards()
  updateLanguage()
}

function createColorBoxes() {
  const container = document.getElementById("colors-container")
  container.innerHTML = ""
  Object.keys(colorData).forEach((colorKey) => {
    const colorBox = document.createElement("div")
    colorBox.className =
      "color-box w-full h-24 rounded-xl cursor-pointer relative group"
    colorBox.style.backgroundColor = colorData[colorKey]
    colorBox.dataset.color = colorKey
    colorBox.onclick = () => selectColor(colorKey, colorBox)

    const speakBtn = document.createElement("button")
    speakBtn.className =
      "absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-8 h-8 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
    speakBtn.innerHTML =
      '<i class="fas fa-volume-up text-gray-700 text-sm"></i>'
    speakBtn.onclick = (e) => {
      e.stopPropagation()
      speakText(translations[currentLanguage].colors[colorKey])
    }
    colorBox.appendChild(speakBtn)
    container.appendChild(colorBox)
  })
}

function createNameCards() {
  const container = document.getElementById("names-container")
  container.innerHTML = ""
  const colorKeys = Object.keys(colorData)
  const shuffledKeys = [...colorKeys].sort(() => Math.random() - 0.5)
  shuffledKeys.forEach((colorKey) => {
    const nameCard = document.createElement("div")
    nameCard.className =
      "name-card bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 rounded-xl p-4 cursor-pointer text-center relative group"
    nameCard.dataset.color = colorKey
    nameCard.onclick = () => selectName(colorKey, nameCard)

    const nameText = document.createElement("span")
    nameText.className = "text-xl font-semibold text-gray-800"
    nameText.textContent = translations[currentLanguage].colors[colorKey]

    const speakBtn = document.createElement("button")
    speakBtn.className =
      "absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
    speakBtn.innerHTML = '<i class="fas fa-volume-up text-sm"></i>'
    speakBtn.onclick = (e) => {
      e.stopPropagation()
      speakText(translations[currentLanguage].colors[colorKey])
    }

    nameCard.appendChild(nameText)
    nameCard.appendChild(speakBtn)
    container.appendChild(nameCard)
  })
}

function selectColor(colorKey, element) {
  if (matchedPairs.includes(colorKey) || gameCompleted) return clearSelections()
  selectedColor = colorKey
  element.classList.add("selected")
  if (selectedName && selectedName === colorKey) makeMatch(colorKey)
}

function selectName(colorKey, element) {
  if (matchedPairs.includes(colorKey) || gameCompleted) return clearSelections()
  selectedName = colorKey
  element.classList.add("selected")

  if (selectedColor) {
    if (selectedColor === colorKey) {
      makeMatch(colorKey)
    } else {
      showFeedback(translations[currentLanguage].incorrectFeedback, false)
      setTimeout(clearSelections, 1000)
    }
  }
}

function makeMatch(colorKey) {
  matchedPairs.push(colorKey)
  const colorBox = document.querySelector(`.color-box[data-color="${colorKey}"]`)
  const nameCard = document.querySelector(`.name-card[data-color="${colorKey}"]`)
  colorBox.classList.add("matched")
  nameCard.classList.add("matched")
  drawConnectionLine(colorBox, nameCard)
  showFeedback(translations[currentLanguage].correctFeedback, true)
  selectedColor = null
  selectedName = null

  if (matchedPairs.length === Object.keys(colorData).length) {
    setTimeout(() => {
      gameCompleted = true
      document.getElementById("success-modal").classList.remove("hidden")
      completarActividad(2) // 🔑 Marca esta actividad como completada
    }, 1000)
  }
}

function drawConnectionLine(colorBox, nameCard) {
  const cRect = colorBox.getBoundingClientRect()
  const nRect = nameCard.getBoundingClientRect()

  const x1 = cRect.left + cRect.width / 2 + window.scrollX
  const y1 = cRect.top + cRect.height / 2 + window.scrollY
  const x2 = nRect.left + nRect.width / 2 + window.scrollX
  const y2 = nRect.top + nRect.height / 2 + window.scrollY

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", "#10b981")
  line.setAttribute("stroke-width", "3")
  line.setAttribute("stroke-linecap", "round")
  svgLine.appendChild(line)

  setTimeout(() => line.remove(), 2000)
}

function clearSelections() {
  document.querySelectorAll(".selected").forEach((el) => el.classList.remove("selected"))
  selectedColor = null
  selectedName = null
}

function showFeedback(message, isCorrect) {
  const feedback = document.getElementById("feedback")
  const content = document.getElementById("feedback-content")
  content.innerHTML = `<i class="fas ${
    isCorrect ? "fa-check-circle text-green-500" : "fa-times-circle text-red-500"
  } text-4xl mb-2"></i>
                         <p class="text-xl font-semibold ${
                           isCorrect ? "text-green-700" : "text-red-700"
                         }">${message}</p>`
  feedback.classList.remove("hidden")
  feedback.classList.add("feedback")
  setTimeout(() => {
    feedback.classList.add("hidden")
    feedback.classList.remove("feedback")
  }, 2000)
}

function speakText(text) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang =
      currentLanguage === "es"
        ? "es-ES"
        : currentLanguage === "en"
        ? "en-US"
        : "fr-FR"
    utterance.rate = 0.8
    speechSynthesis.speak(utterance)
  }
}

function changeLanguage(lang) {
  currentLanguage = lang
  updateLanguage()
}

function updateLanguage() {
  const lang = translations[currentLanguage]
  document.getElementById("title").textContent = lang.title
  document.getElementById("subtitle").textContent = lang.subtitle
  document.getElementById("instructions").textContent = lang.instructions
  document.getElementById("colors-title").textContent = lang.colorsTitle
  document.getElementById("names-title").textContent = lang.namesTitle
  document.getElementById("success-title").textContent = lang.successTitle
  document.getElementById("success-message").textContent = lang.successMessage
  document.getElementById("restart-btn").textContent = lang.restartBtn
  document.getElementById("back-btn").textContent = lang.backBtn
  document.getElementById("continue-btn").textContent = lang.continueBtn
  createNameCards()
}

function restartGame() {
  matchedPairs = []
  gameCompleted = false
  selectedColor = null
  selectedName = null
  document.getElementById("success-modal").classList.add("hidden")
  while (svgLine.firstChild) svgLine.removeChild(svgLine.firstChild) // limpiar líneas
  initGame()
}

function continueToNext() {
  document.getElementById("success-modal").classList.add("hidden")
  completarActividad(2)
  setTimeout(() => {
    window.location.href = "actividad3.html"
  }, 300)
}

// 🔑 Guardar progreso en localStorage
function completarActividad(activityNumber) {
  try {
    const progreso =
      Number.parseInt(localStorage.getItem("progreso_actividades")) || 0

    if (activityNumber === progreso + 1) {
      localStorage.setItem("progreso_actividades", activityNumber.toString())
      console.log(`Actividad ${activityNumber} completada.`)

      if (typeof window.completarActividad === "function") {
        window.completarActividad(activityNumber)
      }
    }

    localStorage.setItem(`actividad_${activityNumber}_completada`, "true")
    localStorage.setItem(
      `actividad_${activityNumber}_fecha`,
      new Date().toISOString()
    )
  } catch (error) {
    console.error("Error guardando progreso:", error)
  }
}

document.addEventListener("DOMContentLoaded", initGame)
