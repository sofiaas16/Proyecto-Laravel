class BasicNeedsGame {
  constructor() {
    this.correctMatches = 0
    this.totalMatches = 4
    this.draggedElement = null
    this.init()
  }

  init() {
    this.setupDragAndDrop()
    this.setupModal()
    this.updateProgress()
  }

  setupDragAndDrop() {
    // Draggable items
    const dragItems = document.querySelectorAll(".drag-item")
    dragItems.forEach((item) => {
      item.addEventListener("dragstart", this.handleDragStart.bind(this))
      item.addEventListener("dragend", this.handleDragEnd.bind(this))
    })

    // Drop zones
    const dropZones = document.querySelectorAll(".drop-zone")
    dropZones.forEach((zone) => {
      zone.addEventListener("dragover", this.handleDragOver.bind(this))
      zone.addEventListener("dragenter", this.handleDragEnter.bind(this))
      zone.addEventListener("dragleave", this.handleDragLeave.bind(this))
      zone.addEventListener("drop", this.handleDrop.bind(this))
    })
  }

  handleDragStart(e) {
    this.draggedElement = e.target
    e.target.classList.add("dragging")
    e.dataTransfer.effectAllowed = "move"
  }

  handleDragEnd(e) {
    e.target.classList.remove("dragging")
  }

  handleDragOver(e) {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }

  handleDragEnter(e) {
    e.preventDefault()
    if (e.target.classList.contains("drop-zone")) {
      e.target.classList.add("drop-zone-active")
    }
  }

  handleDragLeave(e) {
    if (e.target.classList.contains("drop-zone")) {
      e.target.classList.remove("drop-zone-active")
    }
  }

  handleDrop(e) {
    e.preventDefault()
    const dropZone = e.target.closest(".drop-zone")
    if (!dropZone || !this.draggedElement) return

    dropZone.classList.remove("drop-zone-active")

    const draggedType = this.draggedElement.dataset.type
    const acceptedType = dropZone.dataset.accept

    if (draggedType === acceptedType) {
      this.handleCorrectDrop(dropZone)
    } else {
      this.handleIncorrectDrop(dropZone)
    }
  }

  handleCorrectDrop(dropZone) {
    if (dropZone.classList.contains("drop-zone-correct")) return

    dropZone.classList.add("drop-zone-correct")
    dropZone.classList.remove("drop-zone-incorrect")

    const feedbackIcon = dropZone.querySelector(".feedback-icon")
    feedbackIcon.textContent = "✅"
    feedbackIcon.classList.remove("hidden")

    this.draggedElement.style.opacity = "0.3"
    this.draggedElement.draggable = false
    this.draggedElement.style.pointerEvents = "none"

    this.correctMatches++
    this.updateProgress()

    if (this.correctMatches === this.totalMatches) {
      setTimeout(() => this.showCongratulations(), 500)
    }

    this.showSuccessAnimation(dropZone)
  }

  handleIncorrectDrop(dropZone) {
    dropZone.classList.add("drop-zone-incorrect")
    dropZone.classList.remove("drop-zone-correct")

    const feedbackIcon = dropZone.querySelector(".feedback-icon")
    feedbackIcon.textContent = "❌"
    feedbackIcon.classList.remove("hidden")

    setTimeout(() => {
      dropZone.classList.remove("drop-zone-incorrect")
      feedbackIcon.classList.add("hidden")
    }, 2000)

    this.showErrorAnimation(dropZone)
  }

  showSuccessAnimation(element) {
    element.style.transform = "scale(1.05)"
    setTimeout(() => { element.style.transform = "scale(1)" }, 300)
  }

  showErrorAnimation(element) {
    element.style.animation = "shake 0.5s ease-in-out"
    setTimeout(() => { element.style.animation = "" }, 500)
  }

  updateProgress() {
    const progressBar = document.getElementById("progress-bar")
    const progressText = document.getElementById("progress-text")
    const percentage = (this.correctMatches / this.totalMatches) * 100

    progressBar.style.width = `${percentage}%`
    progressText.textContent = `${this.correctMatches}/${this.totalMatches}`
  }

  setupModal() {
    const closeButton = document.getElementById("close-modal")
    closeButton.addEventListener("click", () => this.closeModal())
  }

  showCongratulations() {
    const modal = document.getElementById("congratulations-modal")
    modal.classList.remove("hidden")
    modal.classList.add("flex")

    if (typeof window.completarActividad === "function") {
      window.completarActividad(8)
    }
  }

  closeModal() {
    const modal = document.getElementById("congratulations-modal")
    modal.classList.add("hidden")
    modal.classList.remove("flex")
  }
}

// Shake animation CSS
const style = document.createElement("style")
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
`
document.head.appendChild(style)

// Initialize game
document.addEventListener("DOMContentLoaded", () => {
  new BasicNeedsGame()
})

// Fallback completion
if (typeof window.completarActividad !== "function") {
  window.completarActividad = (activityNumber) => {
    console.log(`Actividad ${activityNumber} completada!`)
    const progress = JSON.parse(localStorage.getItem("actividadesCompletadas") || "[]")
    if (!progress.includes(activityNumber)) {
      progress.push(activityNumber)
      localStorage.setItem("actividadesCompletadas", JSON.stringify(progress))
    }
  }
}
