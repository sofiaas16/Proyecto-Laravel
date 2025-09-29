let currentLang = "es"

const uiTranslations = {
    es: {
        title: "Vocabulario de Necesidades Básicas",
        description: "Palabras para expresar necesidades esenciales",
        infoTitle: "¿Cómo usar esta página?",
        infoText: "Haz clic en cada tarjeta para aprender más sobre cómo usar estas palabras en tu vida diaria.",
        aguaDesc: "Necesidad básica vital",
        comidaDesc: "Alimentación necesaria",
        banoDesc: "Higiene personal",
        dormirDesc: "Descanso reparador",
        ayudaDesc: "Solicitar asistencia",
        listenButton: "🔊 Escuchar",
        closeButton: "Cerrar",
        backLabel: "Volver",
        usageLabel: { es: "Se usa cuando:", en: "Used when:", fr: "Utilisé quand:" }
    },
    en: {
        title: "Basic Needs Vocabulary",
        description: "Words to express essential needs",
        infoTitle: "How to use this page?",
        infoText: "Click each card to learn more about how to use these words in your daily life.",
        aguaDesc: "Vital basic need",
        comidaDesc: "Necessary food",
        banoDesc: "Personal hygiene",
        dormirDesc: "Restful sleep",
        ayudaDesc: "Request assistance",
        listenButton: "🔊 Listen",
        closeButton: "Close",
        backLabel: "Back",
        usageLabel: { es: "Se usa cuando:", en: "Used when:", fr: "Utilisé quand:" }
    },
    fr: {
        title: "Vocabulaire des Besoins Essentiels",
        description: "Mots pour exprimer des besoins essentiels",
        infoTitle: "Comment utiliser cette page ?",
        infoText: "Cliquez sur chaque carte pour en savoir plus sur l'utilisation de ces mots dans votre vie quotidienne.",
        aguaDesc: "Besoin vital",
        comidaDesc: "Nourriture nécessaire",
        banoDesc: "Hygiène personnelle",
        dormirDesc: "Sommeil réparateur",
        ayudaDesc: "Demander de l'aide",
        listenButton: "🔊 Écouter",
        closeButton: "Fermer",
        backLabel: "Retour",
        usageLabel: { es: "Se usa cuando:", en: "Used when:", fr: "Utilisé quand:" }
    }
}

const vocabularyData = {
    agua: {
        icon: "fas fa-tint",
        color: "text-blue-600",
        title: { es: "AGUA", en: "WATER", fr: "EAU" },
        description: {
            es: "Es un líquido vital que necesitamos para vivir y mantenernos hidratados.",
            en: "It is a vital liquid we need to live and stay hydrated.",
            fr: "C'est un liquide vital dont nous avons besoin pour vivre et rester hydratés."
        },
        situations: {
            es: ["Tienes sed", "Después de hacer ejercicio", "Al tomar medicinas", "Durante las comidas"],
            en: ["You are thirsty", "After exercising", "When taking medicine", "During meals"],
            fr: ["Tu as soif", "Après avoir fait de l'exercice", "En prenant des médicaments", "Pendant les repas"]
        },
        examples: {
            es: ["Quiero agua", "Necesito agua", "Tengo sed"],
            en: ["I want water", "I need water", "I am thirsty"],
            fr: ["Je veux de l'eau", "J'ai besoin d'eau", "J'ai soif"]
        },
        tip: {
            es: "Beber suficiente agua cada día es importante para tu salud.",
            en: "Drinking enough water every day is important for your health.",
            fr: "Boire suffisamment d'eau chaque jour est important pour ta santé."
        }
    },
    comida: {
        icon: "fas fa-utensils",
        color: "text-orange-600",
        title: { es: "COMIDA", en: "FOOD", fr: "NOURRITURE" },
        description: {
            es: "Es todo lo que comemos para tener energía y mantenernos fuertes.",
            en: "It is everything we eat to have energy and stay strong.",
            fr: "C'est tout ce que nous mangeons pour avoir de l'énergie et rester forts."
        },
        situations: {
            es: ["Tienes hambre", "En el desayuno, almuerzo o cena", "Cuando visitas un restaurante", "Preparas algo en casa"],
            en: ["You are hungry", "At breakfast, lunch or dinner", "When you visit a restaurant", "When cooking at home"],
            fr: ["Tu as faim", "Au petit-déjeuner, déjeuner ou dîner", "Quand tu vas au restaurant", "Quand tu cuisines à la maison"]
        },
        examples: {
            es: ["Quiero comida", "Tengo hambre", "Necesito comer"],
            en: ["I want food", "I am hungry", "I need to eat"],
            fr: ["Je veux de la nourriture", "J'ai faim", "J'ai besoin de manger"]
        },
        tip: {
            es: "Una dieta balanceada te mantiene con energía todo el día.",
            en: "A balanced diet keeps you energized all day.",
            fr: "Une alimentation équilibrée te garde énergique toute la journée."
        }
    },
    bano: {
        icon: "fas fa-toilet",
        color: "text-purple-600",
        title: { es: "BAÑO", en: "BATHROOM", fr: "TOILETTE" },
        description: {
            es: "Es el lugar que usamos para nuestra higiene personal.",
            en: "It is the place we use for personal hygiene.",
            fr: "C'est l'endroit que nous utilisons pour notre hygiène personnelle."
        },
        situations: {
            es: ["Necesitas ir al sanitario", "En casa, escuela o trabajo", "En lugares públicos", "Durante viajes largos"],
            en: ["You need to go to the restroom", "At home, school or work", "In public places", "During long trips"],
            fr: ["Tu dois aller aux toilettes", "À la maison, à l'école ou au travail", "Dans les lieux publics", "Pendant les longs trajets"]
        },
        examples: {
            es: ["¿Dónde está el baño?", "Necesito ir al baño", "Voy al baño"],
            en: ["Where is the bathroom?", "I need to go to the bathroom", "I am going to the bathroom"],
            fr: ["Où sont les toilettes ?", "J'ai besoin d'aller aux toilettes", "Je vais aux toilettes"]
        },
        tip: {
            es: "Siempre recuerda lavarte las manos después de usar el baño.",
            en: "Always remember to wash your hands after using the bathroom.",
            fr: "Souviens-toi toujours de te laver les mains après avoir utilisé les toilettes."
        }
    },
    dormir: {
        icon: "fas fa-bed",
        color: "text-green-600",
        title: { es: "DORMIR", en: "SLEEP", fr: "DORMIR" },
        description: {
            es: "Es la acción de descansar cuando tenemos sueño o estamos cansados.",
            en: "It is the act of resting when we are sleepy or tired.",
            fr: "C'est l'action de se reposer quand on est fatigué ou qu'on a sommeil."
        },
        situations: {
            es: ["Por la noche antes de acostarse", "Cuando tienes sueño", "Después de un día largo", "Durante la siesta"],
            en: ["At night before bed", "When you are sleepy", "After a long day", "During a nap"],
            fr: ["La nuit avant de se coucher", "Quand tu es fatigué", "Après une longue journée", "Pendant une sieste"]
        },
        examples: {
            es: ["Quiero dormir", "Tengo sueño", "Necesito descansar"],
            en: ["I want to sleep", "I am sleepy", "I need to rest"],
            fr: ["Je veux dormir", "J'ai sommeil", "J'ai besoin de me reposer"]
        },
        tip: {
            es: "Dormir entre 7 y 8 horas ayuda a mantenerte sano.",
            en: "Sleeping between 7 and 8 hours helps you stay healthy.",
            fr: "Dormir entre 7 et 8 heures t'aide à rester en bonne santé."
        }
    },
    ayuda: {
        icon: "fas fa-hands-helping",
        color: "text-red-600",
        title: { es: "AYUDA", en: "HELP", fr: "AIDE" },
        description: {
            es: "Es cuando necesitamos que alguien nos apoye o nos asista.",
            en: "It is when we need someone to support or assist us.",
            fr: "C'est quand nous avons besoin que quelqu'un nous soutienne ou nous aide."
        },
        situations: {
            es: ["No puedes hacer algo solo", "En emergencias", "Cuando te sientes confundido", "Para tareas difíciles"],
            en: ["You can't do something alone", "In emergencies", "When you feel confused", "For difficult tasks"],
            fr: ["Tu ne peux pas faire quelque chose seul", "En cas d'urgence", "Quand tu te sens confus", "Pour les tâches difficiles"]
        },
        examples: {
            es: ["Necesito ayuda", "¿Me puedes ayudar?", "Ayuda, por favor"],
            en: ["I need help", "Can you help me?", "Help, please"],
            fr: ["J'ai besoin d'aide", "Peux-tu m'aider ?", "Aide, s'il te plaît"]
        },
        tip: {
            es: "Pedir ayuda no es malo, es una manera de aprender y apoyarse en otros.",
            en: "Asking for help is not bad, it is a way to learn and rely on others.",
            fr: "Demander de l'aide n'est pas mauvais, c'est une façon d'apprendre et de compter sur les autres."
        }
    }
}

function openModal(word) {
    const modal = document.getElementById("modal")
    const modalTitle = document.getElementById("modal-title")
    const modalContent = document.getElementById("modal-content")
    const item = vocabularyData[word]
    if (!item) return
    const title = item.title[currentLang] || item.title.es
    const desc = item.description[currentLang] || item.description.es
    const situations = item.situations[currentLang] || item.situations.es
    const examples = item.examples[currentLang] || item.examples.es
    const tip = item.tip[currentLang] || item.tip.es
    const usageLabel = uiTranslations[currentLang].usageLabel[currentLang]
    modalTitle.textContent = title
    modalContent.innerHTML = `
    <div class="text-center mb-6">
      <div class="bg-gray-100 rounded-full p-4 inline-block mb-4">
        <i class="${item.icon} text-4xl ${item.color}"></i>
      </div>
      <p class="text-gray-700 text-lg">${desc}</p>
    </div>
    <div class="mb-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-3">${usageLabel}</h3>
      <ul class="space-y-2">
        ${situations.map(s => `<li class="flex items-center text-gray-700"><i class="fas fa-check-circle text-green-500 mr-3"></i>${s}</li>`).join("")}
      </ul>
    </div>
    <div class="mb-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-3">${currentLang === "es" ? "Ejemplos:" : currentLang === "en" ? "Examples:" : "Exemples:"}</h3>
      <div class="space-y-2">
        ${examples.map(e => `<div class="bg-blue-50 border-l-4 border-blue-400 p-3 rounded"><p class="text-gray-700 italic">"${e}"</p></div>`).join("")}
      </div>
    </div>
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
      <div class="flex items-start">
        <i class="fas fa-lightbulb text-yellow-500 mr-3 mt-1"></i>
        <div>
          <h4 class="font-semibold text-gray-800 mb-1">${currentLang === "es" ? "Consejo:" : currentLang === "en" ? "Tip:" : "Conseil:"}</h4>
          <p class="text-gray-700">${tip}</p>
        </div>
      </div>
    </div>
  `
    modal.classList.remove("hidden")
    modal.classList.add("flex")
    document.body.style.overflow = "hidden"
}

function closeModal() {
    const modal = document.getElementById("modal")
    if (!modal) return
    try { speechSynthesis.cancel() } catch (e) { }
    modal.classList.remove("flex")
    modal.classList.add("hidden")
    document.body.style.overflow = "auto"
}

function goBack() {
    window.history.back()
}

document.addEventListener("click", e => {
    const modal = document.getElementById("modal")
    if (!modal) return
    if (!modal.classList.contains("hidden") && e.target === modal) closeModal()
})

document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal()
})

function speakModal() {
    try { speechSynthesis.cancel() } catch (e) { }
    const modalContent = document.getElementById("modal-content")
    if (!modalContent) return
    const text = modalContent.innerText.trim()
    if (!text) return
    const utter = new SpeechSynthesisUtterance(text)
    if (currentLang === "en") utter.lang = "en-US"
    else if (currentLang === "fr") utter.lang = "fr-FR"
    else utter.lang = "es-ES"
    const voices = speechSynthesis.getVoices()
    if (voices && voices.length) {
        const preferred = voices.find(v => v.lang.toLowerCase().startsWith(utter.lang.slice(0, 2)))
        if (preferred) utter.voice = preferred
    }
    speechSynthesis.speak(utter)
}

function setLanguage(lang) {
    if (!uiTranslations[lang]) lang = "es"
    currentLang = lang
    const t = uiTranslations[lang]
    document.getElementById("page-title").textContent = t.title
    document.getElementById("page-description").textContent = t.description
    const infoBox = document.querySelector(".info-title")
    if (infoBox) infoBox.textContent = t.infoTitle
    const infoText = document.querySelector(".info-text")
    if (infoText) infoText.textContent = t.infoText
    const keys = ["agua", "comida", "bano", "dormir", "ayuda"]
    keys.forEach(k => {
        const h = document.getElementById(`card-${k}`)
        if (!h) return
        h.textContent = vocabularyData[k].title[currentLang] || vocabularyData[k].title.es
        const subtitle = document.querySelector(`.${k}-desc`)
        if (subtitle) subtitle.textContent = t[`${k}Desc`]
    })
    const speakBtn = document.querySelector('button[onclick="speakModal()"]')
    if (speakBtn) speakBtn.textContent = t.listenButton
    const modalCloseBottom = document.querySelector('#modal .mt-6 button[onclick="closeModal()"]')
    if (modalCloseBottom) modalCloseBottom.textContent = t.closeButton
    const backBtn = document.querySelector('button[onclick="goBack()"]')
    if (backBtn) backBtn.innerHTML = '<i class="fas fa-arrow-left mr-2"></i>' + t.backLabel
}

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".vocabulary-card")
    cards.forEach((card, i) => {
        card.style.opacity = "0"
        card.style.transform = "translateY(20px)"
        setTimeout(() => {
            card.style.transition = "all 0.5s ease"
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"
        }, i * 100)
    })
    setTimeout(() => setLanguage(currentLang), 20)
})
