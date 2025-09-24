const vocabularyData = {
    azul: {
        title: "AZUL",
        description: "El color azul se asocia con el cielo y el mar, transmite calma y frescura.",
        situations: ["Hablas del cielo", "Describes el mar", "Nombras objetos como ropa o lápices"],
        examples: ["El cielo es azul", "El mar azul es muy grande", "Mi cuaderno es azul"],
        tip: "Puedes señalar el cielo cuando uses la palabra azul."
    },
    rojo: {
        title: "ROJO",
        description: "El color rojo representa energía, amor y también advertencia.",
        situations: ["Hablas de frutas como manzanas o fresas", "Describes señales de tránsito", "Expresas emociones intensas"],
        examples: ["La manzana es roja", "La señal roja significa parar", "Me gusta la flor roja"],
        tip: "Usa objetos cotidianos como frutas para enseñar este color."
    },
    verde: {
        title: "VERDE",
        description: "El verde simboliza naturaleza, frescura y vida.",
        situations: ["Describes plantas y árboles", "Hablas de comida saludable", "Explicas colores del semáforo"],
        examples: ["El pasto es verde", "La ensalada verde es nutritiva", "La luz verde significa avanzar"],
        tip: "Puedes mostrar una planta real o una hoja para reforzar el aprendizaje."
    },
    amarillo: {
        title: "AMARILLO",
        description: "El amarillo está asociado al sol, la alegría y la energía.",
        situations: ["Hablas del sol", "Nombras frutas como el banano", "Describes emociones felices"],
        examples: ["El sol es amarillo", "El banano es amarillo", "La camiseta amarilla es bonita"],
        tip: "Muestra un dibujo del sol o una fruta amarilla mientras dices la palabra."
    },
    negro: {
        title: "NEGRO",
        description: "El negro representa la noche, la elegancia y el misterio.",
        situations: ["Hablas de la oscuridad", "Describes objetos como ropa o zapatos", "Nombras animales como gatos"],
        examples: ["La noche es negra", "Mis zapatos son negros", "El gato negro es misterioso"],
        tip: "Puedes apagar la luz para reforzar el concepto de oscuridad."
    }
}

// Abrir modal
function openModal(color) {
    const modal = document.getElementById("modal")
    const modalTitle = document.getElementById("modal-title")
    const modalContent = document.getElementById("modal-content")

    const data = vocabularyData[color]
    if (data) {
        modalTitle.textContent = data.title
        modalContent.innerHTML = `
        <p class="text-gray-700 text-lg">${data.description}</p>
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Situaciones comunes:</h3>
          <ul class="space-y-2">
            ${data.situations.map(s => `<li class="flex items-center text-gray-700"><i class="fas fa-check-circle text-indigo-500 mr-3"></i>${s}</li>`).join("")}
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Ejemplos:</h3>
          <div class="space-y-2">
            ${data.examples.map(e => `<div class="bg-indigo-50 border-l-4 border-indigo-400 p-3 rounded"><p class="text-gray-700 italic">"${e}"</p></div>`).join("")}
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
