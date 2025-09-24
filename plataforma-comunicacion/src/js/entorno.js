const vocabularyData = {
    casa: {
        title: "CASA",
        icon: "fas fa-home",
        color: "text-blue-600",
        description: "Es el lugar donde vives con tu familia y pasas la mayor parte del tiempo.",
        usage: "Se usa cuando:",
        situations: ["Hablas de dónde vives", "Quieres invitar a alguien", "Explicas dónde estás", "Describes tu hogar"],
        examples: ["Mi casa es grande", "Voy a casa después de la escuela", "Me gusta estar en casa con mi familia"],
        tip: "Puedes acompañar la palabra señalando tu hogar o mostrando una foto."
    },
    mesa: {
        title: "MESA",
        icon: "fas fa-utensils",
        color: "text-yellow-600",
        description: "Es el lugar donde comes, trabajas o juegas.",
        usage: "Se usa cuando:",
        situations: ["Te sientas a comer", "Organizas tus cosas", "Haces tareas", "Compartes con tu familia"],
        examples: ["La comida está en la mesa", "Hago mi tarea en la mesa", "Pon los libros en la mesa"],
        tip: "Usa gestos de poner o señalar cuando hables de la mesa."
    },
    cama: {
        title: "CAMA",
        icon: "fas fa-bed",
        color: "text-pink-600",
        description: "Es el lugar donde descansas, duermes y recuperas energía.",
        usage: "Se usa cuando:",
        situations: ["Hablas de dormir", "Quieres descansar", "Organizas tu habitación", "Cuentas tu rutina"],
        examples: ["Voy a dormir en mi cama", "La cama está ordenada", "Descanso en la cama cuando estoy cansado"],
        tip: "Puedes señalar tu habitación al decir 'cama'."
    },
    puerta: {
        title: "PUERTA",
        icon: "fas fa-door-open",
        color: "text-green-600",
        description: "Es lo que usas para entrar o salir de un lugar.",
        usage: "Se usa cuando:",
        situations: ["Pides abrir o cerrar", "Describes entradas o salidas", "Indicas direcciones", "Cuentas lo que haces"],
        examples: ["Cierra la puerta, por favor", "La puerta está abierta", "Salgo por la puerta"],
        tip: "Puedes acompañar con gestos de abrir o cerrar."
    },
    escuela: {
        title: "ESCUELA",
        icon: "fas fa-school",
        color: "text-purple-600",
        description: "Es el lugar donde aprendes, juegas y compartes con otros niños.",
        usage: "Se usa cuando:",
        situations: ["Hablas de estudiar", "Cuentas tu rutina diaria", "Dices dónde vas", "Compartes experiencias"],
        examples: ["Voy a la escuela en bus", "La escuela es divertida", "Tengo amigos en la escuela"],
        tip: "Usa la palabra escuela para hablar de tu aprendizaje diario."
    }
}

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
            ${data.examples.map(e => `<div class="bg-green-50 border-l-4 border-green-400 p-3 rounded"><p class="text-gray-700 italic">"${e}"</p></div>`).join("")}
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

function closeModal() {
    const modal = document.getElementById("modal")
    modal.classList.add("hidden")
    document.body.style.overflow = "auto"
}

function goBack() {
    window.history.back()
}

document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target === this) closeModal()
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal()
})

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
