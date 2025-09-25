// Array de actividades educativas
const actividades = [
    {
      id: 1,
      titulo: "Saludos",
      descripcion: "Aprende palabras básicas de saludo",
      icono: "fas fa-hand-paper",
      color: "from-blue-400 to-blue-600",
      archivo: "actividad1.html",
    },
    {
      id: 2,
      titulo: "Colores",
      descripcion: "Identifica y usa los colores",
      icono: "fas fa-palette",
      color: "from-blue-400 to-blue-600",
      archivo: "actividad2.html",
    },
    {
      id: 3,
      titulo: "Familia",
      descripcion: "Palabras para hablar de tu familia",
      icono: "fas fa-users",
      color: "from-blue-400 to-blue-600",
      archivo: "actividad3.html",
    },
    {
      id: 4,
      titulo: "Necesidades Básicas",
      descripcion: "Comida, bebida y necesidades diarias",
      icono: "fas fa-utensils",
      color: "from-blue-400 to-blue-600",
      archivo: "actividad4.html",
    },
    {
      id: 5,
      titulo: "Emociones",
      descripcion: "Expresa cómo te sientes",
      icono: "fas fa-smile",
      color: "from-blue-400 to-blue-600",
      archivo: "actividad5.html",
    },
  ]
  
  // Variables globales
  let progresoActual = 0
  
  // Función para inicializar la página
  function inicializarPagina() {
    cargarProgreso()
    renderizarActividades()
    actualizarBarraProgreso()
    verificarProgresoAlCargar()
  }
  
  // Función para cargar el progreso desde localStorage
  function cargarProgreso() {
    const progreso = localStorage.getItem("progreso_actividades")
    progresoActual = progreso ? Number.parseInt(progreso) : 0
  
    // Asegurar que el progreso no exceda el número de actividades
    if (progresoActual > actividades.length) {
      progresoActual = actividades.length
      localStorage.setItem("progreso_actividades", progresoActual.toString())
    }
  }
  
  // Función para renderizar las tarjetas de actividades
  function renderizarActividades() {
    const container = document.getElementById("activities-container")
    container.innerHTML = ""
  
    actividades.forEach((actividad, index) => {
      const estaDesbloqueada = index <= progresoActual
      const estaCompletada = index < progresoActual
  
      const tarjeta = crearTarjetaActividad(actividad, estaDesbloqueada, estaCompletada)
      container.appendChild(tarjeta)
    })
  }
  
  // Función para crear una tarjeta de actividad
  function crearTarjetaActividad(actividad, desbloqueada, completada) {
    const div = document.createElement("div")
  
    if (desbloqueada) {
      div.className = `bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100`
      div.onclick = () => navegarAActividad(actividad.archivo)
    } else {
      div.className = `bg-gray-200 rounded-2xl shadow-lg cursor-not-allowed overflow-hidden opacity-60 border border-gray-200`
      div.onclick = () => mostrarModalBloqueada()
    }
  
    div.innerHTML = `
          <div class="p-6 flex items-center space-x-4">
              <div class="w-12 h-12 ${desbloqueada ? "bg-blue-100" : "bg-gray-300"} rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="${actividad.icono} ${desbloqueada ? "text-blue-600" : "text-gray-500"} text-xl"></i>
              </div>
              <div class="flex-1">
                  <h3 class="text-xl font-semibold ${desbloqueada ? "text-gray-800" : "text-gray-500"} mb-1">${actividad.titulo}</h3>
                  <p class="${desbloqueada ? "text-gray-600" : "text-gray-400"} text-sm">${actividad.descripcion}</p>
              </div>
              ${!desbloqueada ? '<div class="flex-shrink-0"><i class="fas fa-lock text-gray-400 text-lg"></i></div>' : ""}
              ${completada ? '<div class="flex-shrink-0"><i class="fas fa-check-circle text-green-500 text-lg"></i></div>' : ""}
          </div>
      `
  
    return div
  }
  
  // Función para actualizar la barra de progreso
  function actualizarBarraProgreso() {
    const porcentaje = (progresoActual / actividades.length) * 100
    const barraProgreso = document.getElementById("progress-bar")
    const textoProgreso = document.getElementById("progress-text")
  
    barraProgreso.style.width = `${porcentaje}%`
    textoProgreso.textContent = `${progresoActual} de ${actividades.length} completadas`
  }
  
  // Función para navegar a una actividad
  function navegarAActividad(archivo) {
    window.location.href = archivo
  }
  
  // Función para mostrar el modal de actividad bloqueada
  function mostrarModalBloqueada() {
    const modal = document.getElementById("blocked-modal")
    modal.classList.remove("hidden")
    modal.classList.add("flex")
  
    // Animación de entrada
    setTimeout(() => {
      modal.querySelector("div").classList.remove("scale-95")
      modal.querySelector("div").classList.add("scale-100")
    }, 10)
  }
  
  // Función para cerrar el modal de actividad bloqueada
  function closeBlockedModal() {
    const modal = document.getElementById("blocked-modal")
    modal.querySelector("div").classList.remove("scale-100")
    modal.querySelector("div").classList.add("scale-95")
  
    setTimeout(() => {
      modal.classList.add("hidden")
      modal.classList.remove("flex")
    }, 300)
  }
  
  // Función para mostrar el modal de éxito
  function mostrarModalExito() {
    const modal = document.getElementById("success-modal")
    modal.classList.remove("hidden")
    modal.classList.add("flex")
  
    // Animación de entrada
    setTimeout(() => {
      modal.querySelector("div").classList.remove("scale-95")
      modal.querySelector("div").classList.add("scale-100")
    }, 10)
  }
  
  // Función para cerrar el modal de éxito
  function closeSuccessModal() {
    const modal = document.getElementById("success-modal")
    modal.querySelector("div").classList.remove("scale-100")
    modal.querySelector("div").classList.add("scale-95")
  
    setTimeout(() => {
      modal.classList.add("hidden")
      modal.classList.remove("flex")
    }, 300)
  }
  
  // Función global para completar una actividad (llamada desde los juegos)
  function completarActividad(numeroActividad) {
    // Verificar que el número de actividad sea válido
    if (numeroActividad < 1 || numeroActividad > actividades.length) {
      console.error("Número de actividad inválido:", numeroActividad)
      return
    }
  
    // Solo actualizar si es la siguiente actividad en secuencia
    if (numeroActividad === progresoActual + 1) {
      progresoActual = numeroActividad
      localStorage.setItem("progreso_actividades", progresoActual.toString())
  
      // Actualizar la interfaz inmediatamente
      renderizarActividades()
      actualizarBarraProgreso()
  
      // Mostrar modal de felicitación después de actualizar la UI
      setTimeout(() => {
        mostrarModalExito()
      }, 100)
  
      console.log(`Actividad ${numeroActividad} completada. Progreso actual: ${progresoActual}`)
    } else if (numeroActividad <= progresoActual) {
      console.log(`Actividad ${numeroActividad} ya estaba completada`)
    } else {
      console.warn("Intento de completar actividad fuera de secuencia:", numeroActividad)
    }
  }
  
  // Función para reiniciar el progreso (útil para desarrollo/testing)
  function reiniciarProgreso() {
    if (confirm("¿Estás seguro de que quieres reiniciar todo el progreso?")) {
      localStorage.removeItem("progreso_actividades")
      progresoActual = 0
      renderizarActividades()
      actualizarBarraProgreso()
      console.log("Progreso reiniciado")
    }
  }
  
  // Función para sincronizar con API (opcional, para futuro uso)
  async function sincronizarProgreso() {
    try {
      const response = await fetch("/api/progreso", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          progreso: progresoActual,
          timestamp: new Date().toISOString(),
        }),
      })
  
      if (response.ok) {
        console.log("Progreso sincronizado con el servidor")
      }
    } catch (error) {
      console.warn("Error al sincronizar progreso:", error)
    }
  }
  
  // Función para verificar el progreso al cargar la página
  function verificarProgresoAlCargar() {
    // Check if we're returning from a completed activity
    const urlParams = new URLSearchParams(window.location.search)
    const actividadCompletada = urlParams.get("completed")
  
    if (actividadCompletada) {
      const numeroActividad = Number.parseInt(actividadCompletada)
      if (numeroActividad && numeroActividad === progresoActual + 1) {
        completarActividad(numeroActividad)
      }
  
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }
  
  // Cerrar modales al hacer clic fuera de ellos
  document.addEventListener("click", (e) => {
    const blockedModal = document.getElementById("blocked-modal")
    const successModal = document.getElementById("success-modal")
  
    if (e.target === blockedModal) {
      closeBlockedModal()
    }
  
    if (e.target === successModal) {
      closeSuccessModal()
    }
  })
  
  // Manejar tecla Escape para cerrar modales
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeBlockedModal()
      closeSuccessModal()
    }
  })
  
  // Exponer funciones globales necesarias
  window.completarActividad = completarActividad
  window.reiniciarProgreso = reiniciarProgreso
  
  document.addEventListener("DOMContentLoaded", inicializarPagina)
  