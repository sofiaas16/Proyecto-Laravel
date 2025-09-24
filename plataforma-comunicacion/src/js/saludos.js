// Datos de vocabulario con información detallada
const vocabularyData = {
    hola: {
      title: "HOLA",
      icon: "fas fa-hand-paper",
      color: "text-yellow-600",
      description: "Es la forma más común de saludar a alguien cuando lo vemos.",
      usage: "Se usa cuando:",
      situations: [
        "Llegas a un lugar",
        "Te encuentras con alguien conocido",
        "Quieres iniciar una conversación",
        "Entras a una tienda o oficina",
      ],
      examples: ["¡Hola! ¿Cómo estás?", "Hola, buenos días", "¡Hola mamá!"],
      tip: "Puedes acompañar el 'hola' con una sonrisa y un gesto con la mano.",
    },
    adios: {
      title: "ADIÓS",
      icon: "fas fa-hand-peace",
      color: "text-purple-600",
      description: "Es la forma de despedirse cuando nos vamos o alguien se va.",
      usage: "Se usa cuando:",
      situations: ["Te vas de un lugar", "Alguien se va", "Terminas una conversación", "Sales de casa o del trabajo"],
      examples: ["¡Adiós! Nos vemos mañana", "Adiós, que tengas buen día", "¡Adiós papá!"],
      tip: "Puedes decir adiós moviendo la mano o dando un abrazo.",
    },
    gracias: {
      title: "GRACIAS",
      icon: "fas fa-heart",
      color: "text-green-600",
      description: "Es la forma de mostrar agradecimiento cuando alguien nos ayuda o nos da algo.",
      usage: "Se usa cuando:",
      situations: ["Alguien te ayuda", "Recibes un regalo", "Te hacen un favor", "Alguien es amable contigo"],
      examples: ["Gracias por ayudarme", "¡Muchas gracias!", "Gracias, eres muy amable"],
      tip: "Decir gracias hace que las personas se sientan bien y valoradas.",
    },
    porfavor: {
      title: "POR FAVOR",
      icon: "fas fa-praying-hands",
      color: "text-blue-600",
      description: "Es la forma educada de pedir algo o solicitar ayuda.",
      usage: "Se usa cuando:",
      situations: ["Pides algo", "Necesitas ayuda", "Quieres que alguien haga algo", "Solicitas un favor"],
      examples: ["¿Puedes ayudarme, por favor?", "Dame agua, por favor", "Por favor, cierra la puerta"],
      tip: "Usar 'por favor' hace que tus peticiones suenen más amables y educadas.",
    },
    buendia: {
      title: "BUEN DÍA",
      icon: "fas fa-sun",
      color: "text-red-600",
      description: "Es un saludo especial que usamos en la mañana para desear que la persona tenga un día bonito.",
      usage: "Se usa cuando:",
      situations: [
        "Es de mañana (antes del mediodía)",
        "Quieres ser muy educado",
        "Saludas a personas mayores",
        "Inicias el día con alguien",
      ],
      examples: ["¡Buen día! ¿Cómo amaneció?", "Buen día, señora María", "¡Que tenga buen día!"],
      tip: "Es un saludo muy educado que demuestra respeto y buenos deseos.",
    },
  }
  
  // Función para abrir el modal
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
                      ${data.situations
                        .map(
                          (situation) => `
                          <li class="flex items-center text-gray-700">
                              <i class="fas fa-check-circle text-green-500 mr-3"></i>
                              ${situation}
                          </li>
                      `,
                        )
                        .join("")}
                  </ul>
              </div>
              
              <div class="mb-6">
                  <h3 class="text-lg font-semibold text-gray-800 mb-3">Ejemplos:</h3>
                  <div class="space-y-2">
                      ${data.examples
                        .map(
                          (example) => `
                          <div class="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                              <p class="text-gray-700 italic">"${example}"</p>
                          </div>
                      `,
                        )
                        .join("")}
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
  
  // Función para cerrar el modal
  function closeModal() {
    const modal = document.getElementById("modal")
    modal.classList.add("hidden")
    document.body.style.overflow = "auto"
  }
  
  // Función para volver atrás
  function goBack() {
    window.history.back()
  }
  
  // Cerrar modal al hacer clic fuera de él
  document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal()
    }
  })
  
  // Cerrar modal con la tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal()
    }
  })
  
  // Animaciones de entrada para las tarjetas
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
  