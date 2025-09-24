// Datos de vocabulario para cada palabra
const vocabularyData = {
    agua: {
      title: "AGUA",
      content: `
              <div class="space-y-4">
                  <p><strong>¿Cuándo usar esta palabra?</strong></p>
                  <p>Cuando tengas sed o necesites beber algo.</p>
                  
                  <p><strong>Ejemplos de uso:</strong></p>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                      <li>"Quiero agua"</li>
                      <li>"Necesito agua"</li>
                      <li>"Tengo sed"</li>
                  </ul>
                  
                  <p><strong>Situaciones comunes:</strong></p>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                      <li>Durante las comidas</li>
                      <li>Después de hacer ejercicio</li>
                      <li>Cuando hace calor</li>
                      <li>Al tomar medicinas</li>
                  </ul>
              </div>
          `,
    },
    comida: {
      title: "COMIDA",
      content: `
              <div class="space-y-4">
                  <p><strong>¿Cuándo usar esta palabra?</strong></p>
                  <p>Cuando tengas hambre o necesites comer algo.</p>
                  
                  <p><strong>Ejemplos de uso:</strong></p>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                      <li>"Quiero comida"</li>
                      <li>"Tengo hambre"</li>
                      <li>"Necesito comer"</li>
                  </ul>
                  
                  <p><strong>Situaciones comunes:</strong></p>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                      <li>En el desayuno, almuerzo o cena</li>
                      <li>Cuando sientes el estómago vacío</li>
                      <li>En restaurantes o cafeterías</li>
                      <li>Cuando preparas algo en la cocina</li>
                  </ul>
              </div>
          `,
    },
    bano: {
      title: "BAÑO",
      content: `
              <div class="space-y-4">
                  <p><strong>¿Cuándo usar esta palabra?</strong></p>
                  <p>Cuando necesites ir al baño o usar el sanitario.</p>
                  
                  <p><strong>Ejemplos de uso:</strong></p>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                      <li>"Necesito ir al baño"</li>
                      <li>"¿Dónde está el baño?"</li>
                      <li>"Voy al baño"</li>
                  </ul>
                  
                  <p><strong>Situaciones comunes:</strong></p>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                      <li>En casa, escuela o trabajo</li>
                      <li>En lugares públicos</li>
                      <li>Antes de salir de casa</li>
                      <li>Durante viajes largos</li>
                  </ul>
              </div>
          `,
    },
    dormir: {
      title: "DORMIR",
      content: `
              <div class="space-y-4">
                  <p><strong>¿Cuándo usar esta palabra?</strong></p>
                  <p>Cuando tengas sueño o necesites descansar.</p>
                  
                  <p><strong>Ejemplos de uso:</strong></p>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                      <li>"Quiero dormir"</li>
                      <li>"Tengo sueño"</li>
                      <li>"Necesito descansar"</li>
                  </ul>
                  
                  <p><strong>Situaciones comunes:</strong></p>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                      <li>Por la noche antes de acostarse</li>
                      <li>Durante la siesta</li>
                      <li>Cuando te sientes muy cansado</li>
                      <li>Después de un día largo</li>
                  </ul>
              </div>
          `,
    },
    ayuda: {
      title: "AYUDA",
      content: `
              <div class="space-y-4">
                  <p><strong>¿Cuándo usar esta palabra?</strong></p>
                  <p>Cuando necesites que alguien te apoye o te asista.</p>
                  
                  <p><strong>Ejemplos de uso:</strong></p>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                      <li>"Necesito ayuda"</li>
                      <li>"¿Me puedes ayudar?"</li>
                      <li>"Ayuda, por favor"</li>
                  </ul>
                  
                  <p><strong>Situaciones comunes:</strong></p>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                      <li>Cuando no puedes hacer algo solo</li>
                      <li>En emergencias</li>
                      <li>Para tareas difíciles</li>
                      <li>Cuando te sientes perdido o confundido</li>
                  </ul>
              </div>
          `,
    },
  }
  
  // Función para abrir el modal
  function openModal(word) {
    const modal = document.getElementById("modal")
    const modalTitle = document.getElementById("modalTitle")
    const modalBody = document.getElementById("modalBody")
    const modalContent = document.getElementById("modalContent")
  
    // Obtener datos de la palabra
    const data = vocabularyData[word]
  
    // Actualizar contenido del modal
    modalTitle.textContent = data.title
    modalBody.innerHTML = data.content
  
    // Mostrar modal con animación
    modal.classList.remove("hidden")
    modal.classList.add("flex")
  
    // Animar entrada del modal
    setTimeout(() => {
      modalContent.classList.remove("scale-95")
      modalContent.classList.add("scale-100")
    }, 10)
  
    // Prevenir scroll del body
    document.body.style.overflow = "hidden"
  }
  
  // Función para cerrar el modal
  function closeModal() {
    const modal = document.getElementById("modal")
    const modalContent = document.getElementById("modalContent")
  
    // Animar salida del modal
    modalContent.classList.remove("scale-100")
    modalContent.classList.add("scale-95")
  
    // Ocultar modal después de la animación
    setTimeout(() => {
      modal.classList.remove("flex")
      modal.classList.add("hidden")
      document.body.style.overflow = "auto"
    }, 300)
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
  
  // Efectos de hover adicionales para las tarjetas
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".vocabulary-card")
  
    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05) translateY(-5px)"
      })
  
      card.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1) translateY(0)"
      })
    })
  })
  