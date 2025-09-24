const vocabularyData = {
    mama: {
        title: "MAMÁ",
        icon: "fas fa-female",
        color: "text-pink-500",
        description: "Es la persona que te cuida, te protege y te acompaña todos los días.",
        usage: "Se usa cuando:",
        situations: ["Quieres llamar su atención", "Necesitas ayuda", "Quieres mostrar cariño", "Hablas de tu familia"],
        examples: ["Mamá, te quiero", "Mamá, ven aquí", "Estoy con mi mamá"],
        tip: "Puedes acompañar la palabra con un abrazo o un gesto de cariño."
    },
    papa: {
        title: "PAPÁ",
        icon: "fas fa-male",
        color: "text-blue-600",
        description: "Es quien te acompaña, te enseña y te apoya en tu vida.",
        usage: "Se usa cuando:",
        situations: ["Pides ayuda", "Quieres contarle algo", "Hablas con él", "Lo presentas a alguien"],
        examples: ["Papá, vamos a jugar", "Papá, ayúdame", "Mi papá está en casa"],
        tip: "Puedes decirlo con respeto y acompañarlo con contacto visual."
    },
    hermano: {
        title: "HERMANO/A",
        icon: "fas fa-child",
        color: "text-green-600",
        description: "Es tu compañero en la familia. Puede ser mayor o menor que tú.",
        usage: "Se usa cuando:",
        situations: ["Juegas en casa", "Peleas o compartes", "Quieres buscar compañía", "Hablas de tu familia"],
        examples: ["Mi hermano juega conmigo", "Quiero estar con mi hermana", "Hermano, ven aquí"],
        tip: "Puedes diferenciar entre 'hermano' y 'hermana' según el caso."
    },
    abuela: {
        title: "ABUELA",
        icon: "fas fa-blind",
        color: "text-yellow-600",
        description: "Es la mamá de tu papá o de tu mamá. Normalmente te da consejos y cariño.",
        usage: "Se usa cuando:",
        situations: ["Vas a visitarla", "Quieres hablar de ella", "Recibes cuidados", "Hablas con tu familia"],
        examples: ["Voy a ver a mi abuela", "Mi abuela cocina rico", "Estoy con mi abuela"],
        tip: "La palabra abuela siempre transmite cariño y respeto."
    },
    amigo: {
        title: "AMIGO",
        icon: "fas fa-user-friends",
        color: "text-purple-600",
        description: "Es una persona que eliges y que comparte momentos contigo.",
        usage: "Se usa cuando:",
        situations: ["Juegas con alguien", "Quieres compartir", "Confías en alguien", "Hablas de tus relaciones"],
        examples: ["Ese es mi amigo", "Mi amigo juega conmigo", "Tengo un amigo en la escuela"],
        tip: "Un amigo puede ser de la escuela, del barrio o de cualquier lugar."
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
            ${data.examples.map(e => `<div class="bg-purple-50 border-l-4 border-purple-400 p-3 rounded"><p class="text-gray-700 italic">"${e}"</p></div>`).join("")}
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
document.getElementById("modal").addEventListener("click", function (e) {
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
