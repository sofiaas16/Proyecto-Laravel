const vocabularyData = {
    feliz: {
      title: "FELIZ",
      icon: "fas fa-smile",
      color: "text-yellow-500",
      description: "Es cuando te sientes alegre, contento y con ganas de compartir.",
      usage: "Se usa cuando:",
      situations: ["Juegas con amigos", "Recibes un regalo", "Algo salió bien", "Te cuentan buenas noticias"],
      examples: ["Estoy feliz porque jugué", "Me siento feliz con mi familia", "Hoy estoy feliz"],
      tip: "Cuando estás feliz, puedes sonreír o abrazar a alguien."
    },
    triste: {
      title: "TRISTE",
      icon: "fas fa-sad-tear",
      color: "text-blue-600",
      description: "Es cuando sientes pena, dolor o ganas de llorar.",
      usage: "Se usa cuando:",
      situations: ["Alguien se va", "Pierdes un juguete", "Te regañan", "Extrañas a alguien"],
      examples: ["Estoy triste porque llueve", "Me siento triste hoy", "Estoy triste porque no vino mi amigo"],
      tip: "Puedes decir que estás triste para que alguien te abrace o te apoye."
    },
    enojado: {
      title: "ENOJADO",
      icon: "fas fa-angry",
      color: "text-red-600",
      description: "Es cuando sientes molestia o rabia por algo que no te gusta.",
      usage: "Se usa cuando:",
      situations: ["Alguien rompe tus cosas", "Te quitan un turno", "No te escuchan", "Algo no sale como quieres"],
      examples: ["Estoy enojado contigo", "Me enojo cuando gritan", "Estoy enojado porque me quitaron el juguete"],
      tip: "Cuando estés enojado, respira profundo y cuenta hasta 5."
    },
    asustado: {
      title: "ASUSTADO",
      icon: "fas fa-surprise",
      color: "text-purple-600",
      description: "Es cuando tienes miedo o sientes que algo malo puede pasar.",
      usage: "Se usa cuando:",
      situations: ["Hay un ruido fuerte", "Ves algo desconocido", "Se va la luz", "Tienes una pesadilla"],
      examples: ["Estoy asustado por la tormenta", "Me siento asustado en la oscuridad", "Estoy asustado porque escuché un ruido"],
      tip: "Si te asustas, busca a un adulto o alguien de confianza."
    },
    cansado: {
      title: "CANSADO",
      icon: "fas fa-bed",
      color: "text-green-600",
      description: "Es cuando tu cuerpo necesita descansar y dormir.",
      usage: "Se usa cuando:",
      situations: ["Después de jugar mucho", "Al volver de la escuela", "Después de trabajar", "Cuando tienes sueño"],
      examples: ["Estoy cansado y quiero dormir", "Me siento cansado después de correr", "Estoy cansado del colegio"],
      tip: "Cuando estés cansado, acuéstate o haz una pausa para recuperar energía."
    }
  }
  
  // Abrir modal
  function openModal(word) {
    const modal = document.getElementById("modal")
    const modalTitle = document.getElementById("modal-title")
    const modalContent = document.getElementById("modal-content")
  
    const data = vocabularyData[word]
    if (data) {
      modalTitle.textContent = data.title
      modalContent.innerHTML = `
        <div class="text-center mb-6">
          <div class="bg-gray-100 rounded-full p-4 inline-block mb-4">
            <i class="${data.icon} text-4xl ${data.color}"></i>
          </div>
          <p class="text-gray-700 text-lg">${data.description}</p>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">${data.usage}</h3>
          <ul class="space-y-2">
            ${data.situations.map(s => `<li class="flex items-center text-gray-700"><i class="fas fa-check-circle text-green-500 mr-3"></i>${s}</li>`).join("")}
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Ejemplos:</h3>
          <div class="space-y-2">
            ${data.examples.map(e => `<div class="bg-pink-50 border-l-4 border-pink-400 p-3 rounded"><p class="text-gray-700 italic">"${e}"</p></div>`).join("")}
          </div>
        </div>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <div class="flex items-start">
            <i class="fas fa-lightbulb text-yellow-500 mr-3 mt-1"></i>
            <div>
              <h4 class="font-semibold text-gray-800 mb-1">Consejo:</h4>
              <p class="text-gray-700">${data.tip}</p>
            </div>
          </div>
        </div>
      `
      modal.classList.remove("hidden")
      document.body.style.overflow = "hidden"
    }
  }
  
  // Cerrar modal
  function closeModal() {
    const modal = document.getElementById("modal")
    modal.classList.add("hidden")
    document.body.style.overflow = "auto"
  }
  
  // Volver atrás
  function goBack() {
    window.history.back()
  }
  
  // Cerrar modal clic fuera
  document.getElementById("modal").addEventListener("click", function(e) {
    if (e.target === this) closeModal()
  })
  
  // Escape para cerrar
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal()
  })
  
  // Animaciones de entrada
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".vocabulary-card")
    cards.forEach((card, index) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      setTimeout(() => {
        card.style.transition = "all 0.5s ease"
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }, index * 100)
    })
  })
  