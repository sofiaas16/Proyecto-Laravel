const actividades = [
    { id: 1, titulo: "Saludos", descripcion: "Aprende palabras básicas de saludo", icon: "fa-hand-paper", link: "../views/actividad1.html" },
    { id: 2, titulo: "Colores", descripcion: "Identifica y usa los colores", icon: "fa-palette", link: "../views/actividad2.html" },
    { id: 3, titulo: "Familia", descripcion: "Palabras para hablar de tu familia", icon: "fa-users", link: "actividad-familia.html" },
    { id: 4, titulo: "Necesidades Básicas", descripcion: "Comida, bebida y necesidades diarias", icon: "fa-utensils", link: "actividad-necesidades.html" },
    { id: 5, titulo: "Emociones", descripcion: "Expresa cómo te sientes", icon: "fa-smile", link: "actividad-emociones.html" }
]

let progreso = 1

async function getProgreso() {
    try {
        const res = await fetch("/api/progreso")
        if (res.ok) {
            const data = await res.json()
            progreso = data.progreso
        }
    } catch {
        console.log("Usando progreso simulado")
    }
    renderActividades()
}

function renderActividades() {
    const cont = document.getElementById("actividades-list")
    cont.innerHTML = ""
    actividades.forEach(act => {
        const desbloqueada = act.id <= progreso + 1
        const bloqueada = act.id > progreso + 1
        const card = document.createElement("div")
        card.className = `p-6 rounded-2xl shadow-lg flex items-center space-x-6 transition cursor-pointer ${bloqueada ? "bg-gray-200 text-gray-400" : "bg-white hover:scale-105"}`
        card.onclick = () => {
            if (bloqueada) {
                openModal()
            } else {
                window.location.href = act.link
            }
        }
        card.innerHTML = `
        <div class="bg-blue-100 rounded-full p-4 flex items-center justify-center">
          <i class="fas ${act.icon} text-3xl text-blue-600"></i>
        </div>
        <div>
          <h3 class="text-xl font-bold ${bloqueada ? "text-gray-500" : "text-gray-800"}">${act.titulo}</h3>
          <p class="text-gray-600 ${bloqueada ? "opacity-50" : ""}">${act.descripcion}</p>
        </div>
        ${bloqueada ? '<i class="fas fa-lock text-xl ml-auto text-gray-500"></i>' : ""}
      `
        cont.appendChild(card)
    })
}

function openModal() {
    document.getElementById("modal").classList.remove("hidden")
    document.body.style.overflow = "hidden"
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden")
    document.body.style.overflow = "auto"
}

getProgreso()
