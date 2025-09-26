let currentLang = "es"

const uiTranslations = {
    es: {
        title: "Familia y Personas Cercanas",
        description: "Aprende palabras para hablar de tus seres queridos",
        infoTitle: "¿Cómo usar esta página?",
        infoText:
            "Haz clic en cada tarjeta para aprender cómo nombrar y hablar de tu familia y personas cercanas en diferentes situaciones.",
        listen: "🔊 Escuchar",
        close: "Cerrar",
        mama: { title: "MAMÁ", desc: "La persona que cuida de ti" },
        papa: { title: "PAPÁ", desc: "La persona que te apoya y acompaña" },
        hermano: { title: "HERMANO/A", desc: "Tus compañeros en la familia" },
        abuela: { title: "ABUELA", desc: "La madre de tu mamá o tu papá" },
        amigo: { title: "AMIGO", desc: "Una persona especial que eliges" }
    },
    en: {
        title: "Family and Close People",
        description: "Learn words to talk about your loved ones",
        infoTitle: "How to use this page?",
        infoText:
            "Click on each card to learn how to name and talk about your family and close people in different situations.",
        listen: "🔊 Listen",
        close: "Close",
        mama: { title: "MOM", desc: "The person who takes care of you" },
        papa: { title: "DAD", desc: "The person who supports and accompanies you" },
        hermano: { title: "BROTHER/SISTER", desc: "Your siblings in the family" },
        abuela: { title: "GRANDMA", desc: "The mother of your mom or dad" },
        amigo: { title: "FRIEND", desc: "A special person you choose" }
    },
    fr: {
        title: "Famille et Proches",
        description: "Apprends des mots pour parler de tes proches",
        infoTitle: "Comment utiliser cette page ?",
        infoText:
            "Clique sur chaque carte pour apprendre à nommer et parler de ta famille et de tes proches dans différentes situations.",
        listen: "🔊 Écouter",
        close: "Fermer",
        mama: { title: "MAMAN", desc: "La personne qui prend soin de toi" },
        papa: { title: "PAPA", desc: "La personne qui te soutient et t'accompagne" },
        hermano: { title: "FRÈRE/SOEUR", desc: "Tes frères et soeurs dans la famille" },
        abuela: { title: "GRAND-MÈRE", desc: "La mère de ta maman ou de ton papa" },
        amigo: { title: "AMI", desc: "Une personne spéciale que tu choisis" }
    }
}

const vocabularyData = {
    mama: {
        title: "MAMÁ",
        icon: "fas fa-female",
        color: "text-pink-500",
        description: "Es la persona que cuida de ti y te brinda amor.",
        usage: "Se usa cuando:",
        situations: [
            "Hablas de quién te cuida",
            "Quieres llamar a tu mamá",
            "Necesitas ayuda",
            "Quieres expresar cariño"
        ],
        examples: ["Quiero a mi mamá", "Mi mamá me ayuda", "Llamo a mi mamá"],
        tip: "Decirle a tu mamá cuánto la quieres la hace feliz."
    },
    papa: {
        title: "PAPÁ",
        icon: "fas fa-male",
        color: "text-blue-600",
        description: "Es la persona que te apoya y acompaña en tu vida.",
        usage: "Se usa cuando:",
        situations: [
            "Hablas de tu papá",
            "Quieres pedir ayuda",
            "Juegas con él",
            "Necesitas apoyo"
        ],
        examples: ["Mi papá me cuida", "Quiero jugar con mi papá", "Papá me acompaña"],
        tip: "Compartir tiempo con tu papá fortalece la relación."
    },
    hermano: {
        title: "HERMANO/A",
        icon: "fas fa-child",
        color: "text-green-600",
        description: "Son tus compañeros en la familia con quienes compartes momentos.",
        usage: "Se usa cuando:",
        situations: [
            "Hablas de tu hermano o hermana",
            "Juegas en casa",
            "Compartes algo",
            "Cuentas historias familiares"
        ],
        examples: ["Mi hermano juega conmigo", "Tengo una hermana", "Quiero a mis hermanos"],
        tip: "Compartir y ayudarse hace que los hermanos se lleven mejor."
    },
    abuela: {
        title: "ABUELA",
        icon: "fas fa-blind",
        color: "text-yellow-600",
        description: "Es la madre de tu mamá o de tu papá.",
        usage: "Se usa cuando:",
        situations: [
            "Hablas de tu abuela",
            "Visitas su casa",
            "Cocina para ti",
            "Te cuenta historias"
        ],
        examples: ["Mi abuela me cuida", "Voy a casa de mi abuela", "Mi abuela cocina rico"],
        tip: "Escuchar las historias de la abuela es aprender del pasado."
    },
    amigo: {
        title: "AMIGO",
        icon: "fas fa-user-friends",
        color: "text-purple-600",
        description: "Es una persona especial que eliges para compartir y divertirte.",
        usage: "Se usa cuando:",
        situations: [
            "Juegas con alguien especial",
            "Hablas de tu mejor amigo",
            "Quieres compañía",
            "Compartes secretos"
        ],
        examples: ["Mi amigo juega conmigo", "Tengo muchos amigos", "Quiero a mi amigo"],
        tip: "Los amigos verdaderos te apoyan en los buenos y malos momentos."
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
          ${data.situations
                .map(
                    s =>
                        `<li class="flex items-center text-gray-700"><i class="fas fa-check-circle text-purple-500 mr-3"></i>${s}</li>`
                )
                .join("")}
        </ul>
      </div>
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Ejemplos:</h3>
        <div class="space-y-2">
          ${data.examples
                .map(
                    e =>
                        `<div class="bg-purple-50 border-l-4 border-purple-400 p-3 rounded"><p class="text-gray-700 italic">"${e}"</p></div>`
                )
                .join("")}
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
    speechSynthesis.cancel()
}

function speakModal() {
    const text = document.getElementById("modal-content").innerText
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang =
        currentLang === "es" ? "es-ES" : currentLang === "en" ? "en-US" : "fr-FR"
    speechSynthesis.speak(utterance)
}

function setLanguage(lang) {
    currentLang = lang
    const t = uiTranslations[lang]

    document.getElementById("page-title").textContent = t.title
    document.getElementById("page-description").textContent = t.description
}

function goBack() {
    window.history.back()
}

document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target === this) closeModal()
})

document.addEventListener("keydown", e => {
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
