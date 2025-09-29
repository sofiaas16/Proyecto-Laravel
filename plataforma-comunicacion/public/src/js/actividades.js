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
  
  // Inicializar página
  function inicializarPagina() {
    cargarProgreso()
    renderizarActividades()
    actualizarBarraProgreso()
  }
  
  // Cargar progreso desde localStorage
  function cargarProgreso() {
    const progreso = localStorage.getItem("progreso_actividades")
    progresoActual = progreso ? Number.parseInt(progreso) : 0
  
    if (progresoActual > actividades.length) {
      progresoActual = actividades.length
      localStorage.setItem("progreso_actividades", progresoActual.toString())
    }
  }
  
  // Renderizar actividades
  function renderizarActividades() {
    const container = document.getElementById("activities-container")
    container.innerHTML = ""
  
    actividades.forEach((actividad) => {
      const estaDesbloqueada = actividad.id <= progresoActual + 1
      const estaCompletada = actividad.id <= progresoActual
  
      const tarjeta = crearTarjetaActividad(actividad, estaDesbloqueada, estaCompletada)
      container.appendChild(tarjeta)
    })
  }
  
  // Crear tarjeta
  function crearTarjetaActividad(actividad, desbloqueada, completada) {
    const div = document.createElement("div")
  
    if (desbloqueada) {
      div.className =
        `bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100`
      div.onclick = () => navegarAActividad(actividad.archivo)
    } else {
      div.className =
        `bg-gray-200 rounded-2xl shadow-lg cursor-not-allowed overflow-hidden opacity-60 border border-gray-200`
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
            ${!desbloqueada ? '<i class="fas fa-lock text-gray-400 text-lg"></i>' : ""}
            ${completada ? '<i class="fas fa-check-circle text-green-500 text-lg"></i>' : ""}
        </div>
    `
  
    return div
  }
  
  // Barra de progreso
  function actualizarBarraProgreso() {
    const porcentaje = (progresoActual / actividades.length) * 100
    document.getElementById("progress-bar").style.width = `${porcentaje}%`
    document.getElementById("progress-text").textContent = `${progresoActual} de ${actividades.length} completadas`
  }
  
  // Navegar a actividad
  function navegarAActividad(archivo) {
    window.location.href = archivo
  }
  
  // Modal bloqueada
  function mostrarModalBloqueada() {
    document.getElementById("blocked-modal").classList.remove("hidden")
  }
  function closeBlockedModal() {
    document.getElementById("blocked-modal").classList.add("hidden")
  }
  
  // Modal éxito
  function mostrarModalExito() {
    document.getElementById("success-modal").classList.remove("hidden")
  }
  function closeSuccessModal() {
    document.getElementById("success-modal").classList.add("hidden")
  }
  
  // Completar actividad
  function completarActividad(numeroActividad) {
    if (numeroActividad < 1 || numeroActividad > actividades.length) return
  
    if (numeroActividad === progresoActual + 1) {
      progresoActual = numeroActividad
      localStorage.setItem("progreso_actividades", progresoActual.toString())
      renderizarActividades()
      actualizarBarraProgreso()
      mostrarModalExito()
    }
  }
  
  // Reiniciar progreso
  function reiniciarProgreso() {
    if (confirm("¿Reiniciar todo el progreso?")) {
      localStorage.removeItem("progreso_actividades")
      progresoActual = 0
      renderizarActividades()
      actualizarBarraProgreso()
    }
  }
  
  document.addEventListener("DOMContentLoaded", inicializarPagina)
  
  // Exponer globales
  window.completarActividad = completarActividad
  window.reiniciarProgreso = reiniciarProgreso
  