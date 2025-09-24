// Datos de vocabulario con información detallada
const vocabularyData = {
    agua: {
        title: "AGUA",
        icon: "fas fa-tint",
        color: "text-blue-600",
        description: "Es un líquido vital que necesitamos para vivir y mantenernos hidratados.",
        usage: "Se usa cuando:",
        situations: [
            "Tienes sed",
            "Después de hacer ejercicio",
            "Al tomar medicinas",
            "Durante las comidas",
        ],
        examples: ["Quiero agua", "Necesito agua", "Tengo sed"],
        tip: "Beber suficiente agua cada día es importante para tu salud.",
    },
    comida: {
        title: "COMIDA",
        icon: "fas fa-utensils",
        color: "text-orange-600",
        description: "Es todo lo que comemos para tener energía y mantenernos fuertes.",
        usage: "Se usa cuando:",
        situations: [
            "Tienes hambre",
            "En el desayuno, almuerzo o cena",
            "Cuando visitas un restaurante",
            "Preparas algo en casa",
        ],
        examples: ["Quiero comida", "Tengo hambre", "Necesito comer"],
        tip: "Una dieta balanceada te mantiene con energía todo el día.",
    },
    bano: {
        title: "BAÑO",
        icon: "fas fa-toilet",
        color: "text-purple-600",
        description: "Es el lugar que usamos para nuestra higiene personal.",
        usage: "Se usa cuando:",
        situations: [
            "Necesitas ir al sanitario",
            "En casa, escuela o trabajo",
            "En lugares públicos",
            "Durante viajes largos",
        ],
        examples: ["¿Dónde está el baño?", "Necesito ir al baño", "Voy al baño"],
        tip: "Siempre recuerda lavarte las manos después de usar el baño.",
    },
    dormir: {
        title: "DORMIR",
        icon: "fas fa-bed",
        color: "text-green-600",
        description: "Es la acción de descansar cuando tenemos sueño o estamos cansados.",
        usage: "Se usa cuando:",
        situations: [
            "Por la noche antes de acostarse",
            "Cuando tienes sueño",
            "Después de un día largo",
            "Durante la siesta",
        ],
        examples: ["Quiero dormir", "Tengo sueño", "Necesito descansar"],
        tip: "Dormir entre 7 y 8 horas ayuda a mantenerte sano.",
    },
    ayuda: {
        title: "AYUDA",
        icon: "fas fa-hands-helping",
        color: "text-red-600",
        description: "Es cuando necesitamos que alguien nos apoye o nos asista.",
        usage: "Se usa cuando:",
        situations: [
            "No puedes hacer algo solo",
            "En emergencias",
            "Cuando te sientes confundido",
            "Para tareas difíciles",
        ],
        examples: ["Necesito ayuda", "¿Me puedes ayudar?", "Ayuda, por favor"],
        tip: "Pedir ayuda no es malo, es una manera de aprender y apoyarse en otros.",
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
            ${data.situations.map(s => `
              <li class="flex items-center text-gray-700">
                <i class="fas fa-check-circle text-green-500 mr-3"></i>
                ${s}
              </li>
            `).join("")}
          </ul>
        </div>
        
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Ejemplos:</h3>
          <div class="space-y-2">
            ${data.examples.map(ex => `
              <div class="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                <p class="text-gray-700 italic">"${ex}"</p>
              </div>
            `).join("")}
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

// Cerrar modal al hacer clic fuera
document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target === this) closeModal()
})

// Cerrar modal con Escape
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal()
})

// Animaciones de entrada
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".vocabulary-card")
    cards.forEach((card, i) => {
        card.style.opacity = "0"
        card.style.transform = "translateY(20px)"
        setTimeout(() => {
            card.style.transition = "all 0.5s ease"
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"
        }, i * 100)
    })
})
