const uiTranslations = {
    es: {
        title: "Colores",
        description: "Aprende a identificar y usar los colores",
        howTo: "¿Cómo usar esta página?",
        intro: "Haz clic en cada tarjeta para aprender cómo identificar y describir cosas usando colores en frases completas.",
        listen: "🔊 Escuchar",
        close: "Cerrar",
        situations: "Situaciones comunes:",
        examples: "Ejemplos:",
        tip: "Consejo:"
    },
    en: {
        title: "Colors",
        description: "Learn to identify and use colors",
        howTo: "How to use this page?",
        intro: "Click each card to learn how to identify and describe things using colors in complete sentences.",
        listen: "🔊 Listen",
        close: "Close",
        situations: "Common situations:",
        examples: "Examples:",
        tip: "Tip:"
    },
    fr: {
        title: "Couleurs",
        description: "Apprends à identifier et utiliser les couleurs",
        howTo: "Comment utiliser cette page ?",
        intro: "Clique sur chaque carte pour apprendre à identifier et décrire des choses en utilisant les couleurs dans des phrases complètes.",
        listen: "🔊 Écouter",
        close: "Fermer",
        situations: "Situations courantes :",
        examples: "Exemples :",
        tip: "Conseil :"
    }
}

const vocabularyData = {
    azul: {
        es: {
            title: "AZUL",
            description: "El color azul se asocia con el cielo y el mar, transmite calma y frescura.",
            situations: ["Hablas del cielo", "Describes el mar", "Nombras objetos como ropa o lápices"],
            examples: ["El cielo es azul", "El mar azul es muy grande", "Mi cuaderno es azul"],
            tip: "Puedes señalar el cielo cuando uses la palabra azul."
        },
        en: {
            title: "BLUE",
            description: "Blue is associated with the sky and the sea, it transmits calm and freshness.",
            situations: ["Talk about the sky", "Describe the sea", "Name objects like clothes or pencils"],
            examples: ["The sky is blue", "The blue sea is very big", "My notebook is blue"],
            tip: "You can point to the sky when using the word blue."
        },
        fr: {
            title: "BLEU",
            description: "Le bleu est associé au ciel et à la mer, il transmet le calme et la fraîcheur.",
            situations: ["Parler du ciel", "Décrire la mer", "Nommer des objets comme des vêtements ou des crayons"],
            examples: ["Le ciel est bleu", "La mer bleue est très grande", "Mon cahier est bleu"],
            tip: "Tu peux montrer le ciel quand tu utilises le mot bleu."
        }
    },
    rojo: {
        es: {
            title: "ROJO",
            description: "El color rojo representa energía, amor y también advertencia.",
            situations: ["Hablas de frutas como manzanas o fresas", "Describes señales de tránsito", "Expresas emociones intensas"],
            examples: ["La manzana es roja", "La señal roja significa parar", "Me gusta la flor roja"],
            tip: "Usa objetos cotidianos como frutas para enseñar este color."
        },
        en: {
            title: "RED",
            description: "Red represents energy, love and also warning.",
            situations: ["Talk about fruits like apples or strawberries", "Describe traffic signs", "Express strong emotions"],
            examples: ["The apple is red", "The red sign means stop", "I like the red flower"],
            tip: "Use everyday objects like fruits to teach this color."
        },
        fr: {
            title: "ROUGE",
            description: "Le rouge représente l'énergie, l'amour et aussi l'avertissement.",
            situations: ["Parler des fruits comme les pommes ou les fraises", "Décrire les panneaux de circulation", "Exprimer des émotions fortes"],
            examples: ["La pomme est rouge", "Le panneau rouge signifie stop", "J'aime la fleur rouge"],
            tip: "Utilise des objets du quotidien comme des fruits pour enseigner cette couleur."
        }
    },
    verde: {
        es: {
            title: "VERDE",
            description: "El verde simboliza naturaleza, frescura y vida.",
            situations: ["Describes plantas y árboles", "Hablas de comida saludable", "Explicas colores del semáforo"],
            examples: ["El pasto es verde", "La ensalada verde es nutritiva", "La luz verde significa avanzar"],
            tip: "Puedes mostrar una planta real o una hoja para reforzar el aprendizaje."
        },
        en: {
            title: "GREEN",
            description: "Green symbolizes nature, freshness and life.",
            situations: ["Describe plants and trees", "Talk about healthy food", "Explain traffic lights"],
            examples: ["The grass is green", "The green salad is healthy", "The green light means go"],
            tip: "You can show a real plant or a leaf to reinforce learning."
        },
        fr: {
            title: "VERT",
            description: "Le vert symbolise la nature, la fraîcheur et la vie.",
            situations: ["Décrire les plantes et les arbres", "Parler de la nourriture saine", "Expliquer les feux de circulation"],
            examples: ["L'herbe est verte", "La salade verte est nutritive", "Le feu vert signifie avancer"],
            tip: "Tu peux montrer une plante réelle ou une feuille pour renforcer l'apprentissage."
        }
    },
    amarillo: {
        es: {
            title: "AMARILLO",
            description: "El amarillo está asociado al sol, la alegría y la energía.",
            situations: ["Hablas del sol", "Nombras frutas como el banano", "Describes emociones felices"],
            examples: ["El sol es amarillo", "El banano es amarillo", "La camiseta amarilla es bonita"],
            tip: "Muestra un dibujo del sol o una fruta amarilla mientras dices la palabra."
        },
        en: {
            title: "YELLOW",
            description: "Yellow is associated with the sun, happiness and energy.",
            situations: ["Talk about the sun", "Name fruits like banana", "Describe happy emotions"],
            examples: ["The sun is yellow", "The banana is yellow", "The yellow shirt is nice"],
            tip: "Show a picture of the sun or a yellow fruit while saying the word."
        },
        fr: {
            title: "JAUNE",
            description: "Le jaune est associé au soleil, à la joie et à l'énergie.",
            situations: ["Parler du soleil", "Nommer des fruits comme la banane", "Décrire des émotions joyeuses"],
            examples: ["Le soleil est jaune", "La banane est jaune", "Le t-shirt jaune est joli"],
            tip: "Montre un dessin du soleil ou un fruit jaune en disant le mot."
        }
    },
    negro: {
        es: {
            title: "NEGRO",
            description: "El negro representa la noche, la elegancia y el misterio.",
            situations: ["Hablas de la oscuridad", "Describes objetos como ropa o zapatos", "Nombras animales como gatos"],
            examples: ["La noche es negra", "Mis zapatos son negros", "El gato negro es misterioso"],
            tip: "Puedes apagar la luz para reforzar el concepto de oscuridad."
        },
        en: {
            title: "BLACK",
            description: "Black represents night, elegance and mystery.",
            situations: ["Talk about darkness", "Describe objects like clothes or shoes", "Name animals like cats"],
            examples: ["The night is black", "My shoes are black", "The black cat is mysterious"],
            tip: "You can turn off the light to reinforce the concept of darkness."
        },
        fr: {
            title: "NOIR",
            description: "Le noir représente la nuit, l'élégance et le mystère.",
            situations: ["Parler de l'obscurité", "Décrire des objets comme des vêtements ou des chaussures", "Nommer des animaux comme les chats"],
            examples: ["La nuit est noire", "Mes chaussures sont noires", "Le chat noir est mystérieux"],
            tip: "Tu peux éteindre la lumière pour renforcer le concept d'obscurité."
        }
    }
}

let currentLang = "es"

function setLanguage(lang) {
    currentLang = lang
    document.getElementById("page-title").textContent = uiTranslations[lang].title
    document.getElementById("page-description").textContent = uiTranslations[lang].description
}

function openModal(color) {
    const modal = document.getElementById("modal")
    const modalTitle = document.getElementById("modal-title")
    const modalContent = document.getElementById("modal-content")

    const data = vocabularyData[color][currentLang]
    const ui = uiTranslations[currentLang]

    if (data) {
        modalTitle.textContent = data.title
        modalContent.innerHTML = `
        <p class="text-gray-700 text-lg">${data.description}</p>
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">${ui.situations}</h3>
          <ul class="space-y-2">
            ${data.situations.map(s => `<li class="flex items-center text-gray-700"><i class="fas fa-check-circle text-indigo-500 mr-3"></i>${s}</li>`).join("")}
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">${ui.examples}</h3>
          <div class="space-y-2">
            ${data.examples.map(e => `<div class="bg-indigo-50 border-l-4 border-indigo-400 p-3 rounded"><p class="text-gray-700 italic">"${e}"</p></div>`).join("")}
          </div>
        </div>
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <div class="flex items-start">
            <i class="fas fa-lightbulb text-yellow-500 mr-3 mt-1"></i>
            <div>
              <h4 class="font-semibold text-gray-800 mb-1">${ui.tip}</h4>
              <p class="text-gray-700">${data.tip}</p>
            </div>
          </div>
        </div>
      `
        modal.classList.remove("hidden")
        document.body.style.overflow = "hidden"
    }
}

function speakModal() {
    const content = document.getElementById("modal-content").innerText
    const utterance = new SpeechSynthesisUtterance(content)
    utterance.lang = currentLang === "es" ? "es-ES" : currentLang === "en" ? "en-US" : "fr-FR"
    speechSynthesis.speak(utterance)
}

function closeModal() {
    speechSynthesis.cancel()
    const modal = document.getElementById("modal")
    modal.classList.add("hidden")
    document.body.style.overflow = "auto"
}

function goBack() {
    window.history.back()
}

document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target === this) closeModal()
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal()
})
