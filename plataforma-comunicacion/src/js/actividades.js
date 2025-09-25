// Array de actividades educativas
const actividades = [
    {
      id: 1,
      titulo: "Asociar Necesidades",
      descripcion: "Arrastra las palabras a las imágenes correctas",
      icono: "fas fa-hand-paper",
      color: "from-blue-400 to-blue-600",
      archivo: "actividad1.html",
    },
    {
      id: 2,
      titulo: "Memoria de Saludos",
      descripcion: "Encuentra las parejas de palabras de cortesía",
      icono: "fas fa-handshake",
      color: "from-green-400 to-green-600",
      archivo: "actividad2.html",
    },
    {
      id: 3,
      titulo: "Quiz de Emociones",
      descripcion: "Identifica las emociones en las imágenes",
      icono: "fas fa-smile",
      color: "from-yellow-400 to-orange-500",
      archivo: "actividad3.html",
    },
    {
      id: 4,
      titulo: "Construir Oraciones",
      descripcion: "Ordena las palabras para formar oraciones",
      icono: "fas fa-puzzle-piece",
      color: "from-purple-400 to-purple-600",
      archivo: "actividad4.html",
    },
    {
      id: 5,
      titulo: "Sonidos y Palabras",
      descripción: "Escucha y selecciona la palabra correcta",
      icono: "fas fa-volume-up",
      color: "from-pink-400 to-red-500",
      archivo: "actividad5.html",
    },
    {
      id: 6,
      titulo: "Comunicación Diaria",
      descripcion: "Practica situaciones de la vida real",
      icono: "fas fa-comments",
      color: "from-indigo-400 to-blue-500",
      archivo: "actividad6.html",
    },
  ]
  
  // Variables globales
  let progresoActual = 0
  
  // Función para inicializar la página
  function inicializarPagina() {
    cargarProgreso()
    renderizarActividades()
    actualizarBarraProgreso()
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
      div.className = `bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden`
      div.onclick = () => navegarAActividad(actividad.archivo)
    } else {
      div.className = `bg-gray-200 rounded-2xl shadow-lg cursor-not-allowed overflow-hidden opacity-60`
      div.onclick = () => mostrarModalBloqueada()
    }
  
    div.innerHTML = `
          <div class="relative">
              ${completada ? '<div class="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"><i class="fas fa-check text-white text-sm"></i></div>' : ""}
              ${!desbloqueada ? '<div class="absolute top-4 right-4 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center"><i class="fas fa-lock text-white text-sm"></i></div>' : ""}
              
              <div class="bg-gradient-to-br ${desbloqueada ? actividad.color : "from-gray-300 to-gray-400"} p-8 text-center">
                  <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i class="${actividad.icono} text-white text-2xl"></i>
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2">${actividad.titulo}</h3>
              </div>
              
              <div class="p-6">
                  <p class="text-gray-600 text-lg leading-relaxed">${actividad.descripcion}</p>
                  <div class="mt-4 flex items-center justify-between">
                      <span class="text-sm font-medium ${desbloqueada ? "text-blue-600" : "text-gray-400"}">
                          ${completada ? "Completada" : desbloqueada ? "Disponible" : "Bloqueada"}
                      </span>
                      <div class="flex items-center space-x-1">
                          ${Array.from(
                            { length: 3 },
                            (_, i) =>
                              `<div class="w-2 h-2 rounded-full ${desbloqueada ? "bg-blue-400" : "bg-gray-300"}"></div>`,
                          ).join("")}
                      </div>
                  </div>
              </div>
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
  
      // Mostrar modal de felicitación
      mostrarModalExito()
  
      // Actualizar la interfaz
      renderizarActividades()
      actualizarBarraProgreso()
  
      console.log(`Actividad ${numeroActividad} completada. Progreso actual: ${progresoActual}`)
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
  
  // Inicializar la página cuando se carga
  document.addEventListener("DOMContentLoaded", inicializarPagina)
  
  // Exponer funciones globales necesarias
  window.completarActividad = completarActividad
  window.reiniciarProgreso = reiniciarProgreso
  