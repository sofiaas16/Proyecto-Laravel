// Vocabulario JavaScript - Funcionalidad interactiva

// Función para navegar a las diferentes secciones
function navigateToSection(section) {
    // Agregar efecto visual al hacer clic
    const clickedCard = event.currentTarget
    clickedCard.style.transform = "scale(0.95)"

    setTimeout(() => {
        clickedCard.style.transform = ""

        // Simular navegación (en una aplicación real, esto sería window.location.href)
        switch (section) {
            case "saludos":
                console.log("Navegando a saludos.html")
                // window.location.href = 'saludos.html';
                showPreview("Saludos", "👋", ["Hola", "Buenos días", "Buenas tardes", "Adiós", "Hasta luego"])
                break
            case "necesidades":
                console.log("Navegando a necesidades.html")
                // window.location.href = 'necesidades.html';
                showPreview("Necesidades Básicas", "🍽️", ["Agua", "Comida", "Baño", "Ayuda", "Por favor"])
                break
            case "emociones":
                console.log("Navegando a emociones.html")
                // window.location.href = 'emociones.html';
                showPreview("Emociones", "😊", ["Feliz", "Triste", "Enojado", "Cansado", "Emocionado"])
                break
            case "familia":
                console.log("Navegando a familia.html")
                // window.location.href = 'familia.html';
                showPreview("Familia", "👨‍👩‍👦", ["Mamá", "Papá", "Hermano", "Hermana", "Abuelo"])
                break
            case "entorno":
                console.log("Navegando a entorno.html")
                // window.location.href = 'entorno.html';
                showPreview("Entorno Diario", "🏡", ["Casa", "Escuela", "Parque", "Tienda", "Hospital"])
                break
            default:
                console.log("Sección no encontrada")
        }
    }, 150)
}

// Función para mostrar una vista previa de la sección (demo)
function showPreview(title, icon, words) {
    // Crear modal de vista previa
    const modal = document.createElement("div")
    modal.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    modal.innerHTML = `
          <div class="bg-white rounded-2xl p-8 max-w-md w-full max-h-96 overflow-y-auto">
              <div class="text-center mb-6">
                  <div class="text-6xl mb-4">${icon}</div>
                  <h2 class="text-2xl font-bold text-gray-800">${title}</h2>
                  <p class="text-gray-600 mt-2">Vista previa del vocabulario</p>
              </div>
              <div class="grid grid-cols-1 gap-3">
                  ${words
            .map(
                (word) => `
                      <div class="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg text-center cursor-pointer transition-colors duration-200">
                          <span class="font-semibold text-gray-800">${word}</span>
                      </div>
                  `,
            )
            .join("")}
              </div>
              <div class="mt-6 text-center">
                  <button onclick="closePreview()" class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full transition-colors duration-300">
                      Cerrar
                  </button>
              </div>
          </div>
      `

    document.body.appendChild(modal)

    // Agregar evento para cerrar al hacer clic fuera del modal
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closePreview()
        }
    })
}

// Función para cerrar la vista previa
function closePreview() {
    const modal = document.querySelector(".fixed.inset-0")
    if (modal) {
        modal.remove()
    }
}

// Función para volver atrás
function goBack() {
    // En una aplicación real, esto sería history.back() o navegar a index.html
    console.log("Volviendo al inicio")
    // window.location.href = 'index.html';

    // Efecto visual de confirmación
    const button = event.target
    button.textContent = "✓ Volviendo..."
    button.disabled = true

    setTimeout(() => {
        button.textContent = "← Volver al inicio"
        button.disabled = false
        alert("En una aplicación real, esto te llevaría de vuelta al inicio")
    }, 1000)
}

// Agregar efectos de sonido hover (opcional)
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".vocabulary-card")

    cards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
            // Efecto de hover suave
            this.style.transform = "translateY(-8px) scale(1.02)"
        })

        card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0) scale(1)"
        })
    })

    // Agregar animación de entrada
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

// Función para manejar teclas de accesibilidad
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closePreview()
    }
})
