let currentLang = "es";

// Traducciones UI
const uiTranslations = {
  es: {
    title: "Colores",
    description: "Aprende a identificar y usar los colores",
    infoTitle: "¿Cómo usar esta página?",
    infoText:
      "Haz clic en cada tarjeta para aprender cómo identificar y describir cosas usando colores en frases completas.",
    azulDesc: "El color del cielo",
    rojoDesc: "El color de una manzana",
    verdeDesc: "El color de la naturaleza",
    amarilloDesc: "El color del sol",
    negroDesc: "El color de la noche",
    listenButton: "🔊 Escuchar",
    closeButton: "Cerrar",
    backLabel: "Volver",
    usageLabel: { es: "Se usa cuando:", en: "Used when:", fr: "Utilisé quand:" },
  },
  en: {
    title: "Colors",
    description: "Learn to identify and use colors",
    infoTitle: "How to use this page?",
    infoText:
      "Click on each card to learn how to identify and describe things using colors in full sentences.",
    azulDesc: "The color of the sky",
    rojoDesc: "The color of an apple",
    verdeDesc: "The color of nature",
    amarilloDesc: "The color of the sun",
    negroDesc: "The color of the night",
    listenButton: "🔊 Listen",
    closeButton: "Close",
    backLabel: "Back",
    usageLabel: { es: "Se usa cuando:", en: "Used when:", fr: "Utilisé quand:" },
  },
  fr: {
    title: "Couleurs",
    description: "Apprenez à identifier et à utiliser les couleurs",
    infoTitle: "Comment utiliser cette page ?",
    infoText:
      "Cliquez sur chaque carte pour apprendre à identifier et à décrire des choses en utilisant des couleurs dans des phrases complètes.",
    azulDesc: "La couleur du ciel",
    rojoDesc: "La couleur d'une pomme",
    verdeDesc: "La couleur de la nature",
    amarilloDesc: "La couleur du soleil",
    negroDesc: "La couleur de la nuit",
    listenButton: "🔊 Écouter",
    closeButton: "Fermer",
    backLabel: "Retour",
    usageLabel: { es: "Se usa cuando:", en: "Used when:", fr: "Utilisé quand:" },
  },
};

// Datos de colores con más información
const vocabularyData = {
  azul: {
    icon: "fas fa-circle",
    color: "text-blue-500",
    title: { es: "AZUL", en: "BLUE", fr: "BLEU" },
    description: {
      es: "Es el color del cielo y del mar, transmite calma y confianza.",
      en: "It is the color of the sky and the sea, representing calm and trust.",
      fr: "C'est la couleur du ciel et de la mer, symbole de calme et de confiance.",
    },
    situations: {
      es: ["Describir el cielo", "Hablar del mar", "Elegir ropa formal", "Expresar tranquilidad"],
      en: ["Describing the sky", "Talking about the sea", "Choosing formal clothes", "Expressing calm"],
      fr: ["Décrire le ciel", "Parler de la mer", "Choisir des vêtements formels", "Exprimer le calme"],
    },
    examples: {
      es: ["El cielo es azul.", "Me gusta tu camiseta azul.", "El mar azul es hermoso."],
      en: ["The sky is blue.", "I like your blue shirt.", "The blue sea is beautiful."],
      fr: ["Le ciel est bleu.", "J'aime ta chemise bleue.", "La mer bleue est belle."],
    },
    tip: {
      es: "El azul es un color ideal para transmitir confianza en entrevistas o presentaciones.",
      en: "Blue is a great color to convey trust in interviews or presentations.",
      fr: "Le bleu est une couleur idéale pour transmettre la confiance lors d'entretiens ou de présentations.",
    },
  },
  rojo: {
    icon: "fas fa-circle",
    color: "text-red-500",
    title: { es: "ROJO", en: "RED", fr: "ROUGE" },
    description: {
      es: "Es el color de la pasión, la energía y también de advertencia.",
      en: "It is the color of passion, energy, and also a warning.",
      fr: "C'est la couleur de la passion, de l'énergie et aussi de l'avertissement.",
    },
    situations: {
      es: ["Describir frutas como manzanas", "Hablar de emociones intensas", "Expresar peligro", "Describir ropa llamativa"],
      en: ["Describing fruits like apples", "Talking about intense emotions", "Expressing danger", "Describing flashy clothing"],
      fr: ["Décrire des fruits comme les pommes", "Parler d'émotions intenses", "Exprimer le danger", "Décrire des vêtements voyants"],
    },
    examples: {
      es: ["La manzana es roja.", "El coche rojo es rápido.", "El semáforo está en rojo."],
      en: ["The apple is red.", "The red car is fast.", "The traffic light is red."],
      fr: ["La pomme est rouge.", "La voiture rouge est rapide.", "Le feu est rouge."],
    },
    tip: {
      es: "El rojo llama mucho la atención, úsalo cuando quieras destacar algo.",
      en: "Red draws attention, use it when you want to highlight something.",
      fr: "Le rouge attire beaucoup l'attention, utilisez-le lorsque vous voulez mettre quelque chose en valeur.",
    },
  },
  verde: {
    icon: "fas fa-circle",
    color: "text-green-500",
    title: { es: "VERDE", en: "GREEN", fr: "VERT" },
    description: {
      es: "Es el color de la naturaleza, la vida y la esperanza.",
      en: "It is the color of nature, life, and hope.",
      fr: "C'est la couleur de la nature, de la vie et de l'espoir.",
    },
    situations: {
      es: ["Hablar de plantas", "Describir paisajes", "Expresar frescura", "Indicar que algo está en buen estado"],
      en: ["Talking about plants", "Describing landscapes", "Expressing freshness", "Indicating something is in good condition"],
      fr: ["Parler des plantes", "Décrire des paysages", "Exprimer la fraîcheur", "Indiquer que quelque chose est en bon état"],
    },
    examples: {
      es: ["Los árboles son verdes.", "El pasto está verde.", "El semáforo está en verde."],
      en: ["The trees are green.", "The grass is green.", "The traffic light is green."],
      fr: ["Les arbres sont verts.", "L'herbe est verte.", "Le feu est vert."],
    },
    tip: {
      es: "El verde transmite equilibrio, ideal en espacios de relajación.",
      en: "Green conveys balance, ideal in relaxation spaces.",
      fr: "Le vert transmet l'équilibre, idéal dans les espaces de détente.",
    },
  },
  amarillo: {
    icon: "fas fa-circle",
    color: "text-yellow-400",
    title: { es: "AMARILLO", en: "YELLOW", fr: "JAUNE" },
    description: {
      es: "Es el color del sol, de la alegría y la energía positiva.",
      en: "It is the color of the sun, joy, and positive energy.",
      fr: "C'est la couleur du soleil, de la joie et de l'énergie positive.",
    },
    situations: {
      es: ["Describir el sol", "Hablar de flores", "Expresar felicidad", "Identificar advertencias"],
      en: ["Describing the sun", "Talking about flowers", "Expressing happiness", "Identifying warnings"],
      fr: ["Décrire le soleil", "Parler des fleurs", "Exprimer le bonheur", "Identifier des avertissements"],
    },
    examples: {
      es: ["El sol es amarillo.", "La flor amarilla es bonita.", "El cartel amarillo indica precaución."],
      en: ["The sun is yellow.", "The yellow flower is pretty.", "The yellow sign indicates caution."],
      fr: ["Le soleil est jaune.", "La fleur jaune est jolie.", "Le panneau jaune indique la prudence."],
    },
    tip: {
      es: "El amarillo inspira creatividad, pero en exceso puede cansar la vista.",
      en: "Yellow inspires creativity, but in excess it can tire the eyes.",
      fr: "Le jaune inspire la créativité, mais en excès il peut fatiguer les yeux.",
    },
  },
  negro: {
    icon: "fas fa-circle",
    color: "text-black",
    title: { es: "NEGRO", en: "BLACK", fr: "NOIR" },
    description: {
      es: "Es el color de la noche, el misterio y la elegancia.",
      en: "It is the color of the night, mystery, and elegance.",
      fr: "C'est la couleur de la nuit, du mystère et de l'élégance.",
    },
    situations: {
      es: ["Hablar de la noche", "Describir ropa elegante", "Expresar formalidad", "Transmitir misterio"],
      en: ["Talking about the night", "Describing elegant clothes", "Expressing formality", "Conveying mystery"],
      fr: ["Parler de la nuit", "Décrire des vêtements élégants", "Exprimer la formalité", "Transmettre le mystère"],
    },
    examples: {
      es: ["La noche es negra.", "Me gusta la ropa negra.", "El gato negro es misterioso."],
      en: ["The night is black.", "I like black clothes.", "The black cat is mysterious."],
      fr: ["La nuit est noire.", "J'aime les vêtements noirs.", "Le chat noir est mystérieux."],
    },
    tip: {
      es: "El negro combina con todo, es ideal para transmitir sobriedad.",
      en: "Black goes with everything, perfect for conveying sobriety.",
      fr: "Le noir s'accorde avec tout, idéal pour transmettre la sobriété.",
    },
  },
};

// ---- abrir modal con más secciones ----
function openModal(color) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");

  const item = vocabularyData[color];
  if (!item) return;

  const title = item.title[currentLang] || item.title.es;
  const desc = item.description[currentLang] || item.description.es;
  const situations = item.situations[currentLang] || item.situations.es;
  const examples = item.examples[currentLang] || item.examples.es;
  const tip = item.tip[currentLang] || item.tip.es;
  const usageLabel =
    uiTranslations[currentLang].usageLabel[currentLang] ||
    uiTranslations[currentLang].usageLabel.es;

  modalTitle.textContent = title;

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
        ${situations
          .map(
            (s) =>
              `<li class="flex items-center text-gray-700"><i class="fas fa-check-circle text-green-500 mr-3"></i>${s}</li>`
          )
          .join("")}
      </ul>
    </div>
    <div class="mb-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-3">${
        currentLang === "es" ? "Ejemplos:" : currentLang === "en" ? "Examples:" : "Exemples:"
      }</h3>
      <div class="space-y-2">
        ${examples
          .map(
            (e) =>
              `<div class="bg-indigo-50 border-l-4 border-indigo-400 p-3 rounded"><p class="text-gray-700 italic">"${e}"</p></div>`
          )
          .join("")}
      </div>
    </div>
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
      <div class="flex items-start">
        <i class="fas fa-lightbulb text-yellow-500 mr-3 mt-1"></i>
        <div>
          <h4 class="font-semibold text-gray-800 mb-1">${
            currentLang === "es" ? "Consejo:" : currentLang === "en" ? "Tip:" : "Conseil:"
          }</h4>
          <p class="text-gray-700">${tip}</p>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

// ---- cerrar modal ----
function closeModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;
  modal.classList.remove("flex");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// ---- volver atrás ----
function goBack() {
  window.history.back();
}

// ---- escuchar ----
function speakModal() {
  try {
    speechSynthesis.cancel();
  } catch (err) {}
  const modalContent = document.getElementById("modal-content");
  if (!modalContent) return;
  const text = modalContent.innerText.trim();
  if (!text) return;

  const utter = new SpeechSynthesisUtterance(text);
  if (currentLang === "en") utter.lang = "en-US";
  else if (currentLang === "fr") utter.lang = "fr-FR";
  else utter.lang = "es-ES";

  speechSynthesis.speak(utter);
}

// ---- cambiar idioma ----
function setLanguage(lang) {
  if (!uiTranslations[lang]) lang = "es";
  currentLang = lang;

  const t = uiTranslations[lang];
  document.getElementById("page-title").textContent = t.title;
  document.getElementById("page-description").textContent = t.description;

  const infoBox = document.querySelector(".bg-white.rounded-2xl.shadow-lg.p-6.border-l-4");
  if (infoBox) {
    const h2 = infoBox.querySelector("h2");
    const p = infoBox.querySelector("p");
    if (h2) h2.textContent = t.infoTitle;
    if (p) p.textContent = t.infoText;
  }

  ["azul", "rojo", "verde", "amarillo", "negro"].forEach((c) => {
    const h = document.getElementById(`card-${c}`);
    if (h) h.textContent = vocabularyData[c].title[currentLang];
    const desc = document.querySelector(`.${c}-desc`);
    if (desc) desc.textContent = t[`${c}Desc`];
  });

  const speakBtn = document.querySelector('button[onclick="speakModal()"]');
  if (speakBtn) speakBtn.textContent = t.listenButton;

  const modalClose = document.querySelector('#modal .mt-6 button[onclick="closeModal()"]');
  if (modalClose) modalClose.textContent = t.closeButton;

  const backBtn = document.querySelector('button[onclick="goBack()"]');
  if (backBtn) backBtn.innerHTML = '<i class="fas fa-arrow-left mr-2"></i>' + t.backLabel;
}

// ---- animación tarjetas ----
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".vocabulary-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "all 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });
  setTimeout(() => setLanguage(currentLang), 20);
});
