let currentLang = "es"; // idioma por defecto

// traducciones para UI estática
const uiTranslations = {
  es: {
    title: "Vocabulario de Saludos",
    description: "Aprende palabras básicas de cortesía",
    infoTitle: "¿Cómo usar esta página?",
    infoText:
      "Haz clic en cada tarjeta para aprender más sobre cómo usar estas palabras importantes en tu día a día.",
    holaDesc: "Saludo de bienvenida",
    adiosDesc: "Saludo de despedida",
    graciasDesc: "Expresión de agradecimiento",
    porfavorDesc: "Petición cortés",
    buendiaDesc: "Saludo matutino",
    listenButton: "🔊 Escuchar",
    closeButton: "Cerrar",
    backLabel: "Volver",
    usageLabel: { es: "Se usa cuando:", en: "Used when:", fr: "Utilisé quand:" },
  },
  en: {
    title: "Greetings Vocabulary",
    description: "Learn basic courtesy words",
    infoTitle: "How to use this page?",
    infoText:
      "Click each card to learn more about how to use these important words in daily life.",
    holaDesc: "Greeting to welcome someone",
    adiosDesc: "Farewell greeting",
    graciasDesc: "Expression of thanks",
    porfavorDesc: "Polite request",
    buendiaDesc: "Morning greeting",
    listenButton: "🔊 Listen",
    closeButton: "Close",
    backLabel: "Back",
    usageLabel: { es: "Se usa cuando:", en: "Used when:", fr: "Utilisé quand:" },
  },
  fr: {
    title: "Vocabulaire des Salutations",
    description: "Apprenez des mots de courtoisie de base",
    infoTitle: "Comment utiliser cette page ?",
    infoText:
      "Cliquez sur chaque carte pour en savoir plus sur l'utilisation de ces mots dans la vie quotidienne.",
    holaDesc: "Salutation de bienvenue",
    adiosDesc: "Salutation d'au revoir",
    graciasDesc: "Expression de remerciement",
    porfavorDesc: "Demande polie",
    buendiaDesc: "Salutation du matin",
    listenButton: "🔊 Écouter",
    closeButton: "Fermer",
    backLabel: "Retour",
    usageLabel: { es: "Se usa cuando:", en: "Used when:", fr: "Utilisé quand:" },
  },
};

// datos del vocabulario
const vocabularyData = {
  hola: {
    icon: "fas fa-hand-paper",
    color: "text-yellow-600",
    title: { es: "HOLA", en: "HELLO", fr: "BONJOUR" },
    description: {
      es: "Es la forma más común de saludar a alguien cuando lo ves.",
      en: "It's the most common way to greet someone when you see them.",
      fr: "C'est la manière la plus courante de saluer quelqu'un.",
    },
    situations: {
      es: ["Llegas a un lugar", "Te encuentras con alguien conocido"],
      en: ["You arrive at a place", "You meet someone you know"],
      fr: ["Vous arrivez à un endroit", "Vous rencontrez quelqu'un que vous connaissez"],
    },
    examples: {
      es: ["¡Hola! ¿Cómo estás?", "Hola, buenos días"],
      en: ["Hello! How are you?", "Hi, good morning"],
      fr: ["Bonjour ! Ça va ?", "Bonjour, bon matin"],
    },
    tip: {
      es: "Puedes acompañar el 'hola' con una sonrisa.",
      en: "You can accompany 'hello' with a smile.",
      fr: "Vous pouvez accompagner « bonjour » d'un sourire.",
    },
  },

  adios: {
    icon: "fas fa-hand-peace",
    color: "text-purple-600",
    title: { es: "ADIÓS", en: "GOODBYE", fr: "AU REVOIR" },
    description: {
      es: "Se usa para despedirse de alguien.",
      en: "Used to say farewell.",
      fr: "Utilisé pour dire au revoir.",
    },
    situations: {
      es: ["Terminas una reunión", "Sales de un lugar"],
      en: ["You finish a meeting", "You leave a place"],
      fr: ["Vous terminez une réunion", "Vous quittez un endroit"],
    },
    examples: {
      es: ["¡Adiós, nos vemos mañana!", "Adiós, cuídate"],
      en: ["Goodbye, see you tomorrow!", "Goodbye, take care"],
      fr: ["Au revoir, à demain!", "Au revoir, prends soin de toi"],
    },
    tip: {
      es: "Puedes decir 'hasta luego' como alternativa.",
      en: "You can say 'see you later' as an alternative.",
      fr: "Vous pouvez dire « à plus tard » comme alternative.",
    },
  },

  gracias: {
    icon: "fas fa-heart",
    color: "text-green-600",
    title: { es: "GRACIAS", en: "THANK YOU", fr: "MERCI" },
    description: {
      es: "Expresa agradecimiento.",
      en: "Expresses gratitude.",
      fr: "Exprime la gratitude.",
    },
    situations: {
      es: ["Al recibir ayuda", "Cuando te hacen un favor"],
      en: ["When receiving help", "When someone does you a favor"],
      fr: ["Quand vous recevez de l'aide", "Quand quelqu'un vous rend service"],
    },
    examples: {
      es: ["Gracias por tu ayuda", "Muchas gracias"],
      en: ["Thank you for your help", "Thanks a lot"],
      fr: ["Merci pour ton aide", "Merci beaucoup"],
    },
    tip: {
      es: "Decir 'gracias' siempre genera buena impresión.",
      en: "Saying 'thank you' always makes a good impression.",
      fr: "Dire « merci » donne toujours une bonne impression.",
    },
  },

  porfavor: {
    icon: "fas fa-praying-hands",
    color: "text-blue-600",
    title: { es: "POR FAVOR", en: "PLEASE", fr: "S'IL VOUS PLAÎT" },
    description: {
      es: "Palabra usada para pedir algo educadamente.",
      en: "Word used to ask politely.",
      fr: "Mot utilisé pour demander poliment.",
    },
    situations: {
      es: ["Al pedir un favor", "Cuando solicitas ayuda"],
      en: ["When asking a favor", "When requesting help"],
      fr: ["Quand vous demandez une faveur", "Quand vous demandez de l'aide"],
    },
    examples: {
      es: ["¿Me ayudas, por favor?", "Pásame la sal, por favor"],
      en: ["Can you help me, please?", "Pass me the salt, please"],
      fr: ["Peux-tu m'aider, s'il te plaît?", "Passe-moi le sel, s'il te plaît"],
    },
    tip: {
      es: "Usar 'por favor' suaviza cualquier petición.",
      en: "Using 'please' softens any request.",
      fr: "Utiliser « s'il vous plaît » adoucit toute demande.",
    },
  },

  buendia: {
    icon: "fas fa-sun",
    color: "text-red-600",
    title: { es: "BUEN DÍA", en: "GOOD MORNING", fr: "BONJOUR (MATIN)" },
    description: {
      es: "Se utiliza para saludar en la mañana.",
      en: "Used to greet in the morning.",
      fr: "Utilisé pour saluer le matin.",
    },
    situations: {
      es: ["Al llegar a la escuela", "Cuando saludas a tu familia por la mañana"],
      en: ["When arriving at school", "When greeting your family in the morning"],
      fr: ["Quand vous arrivez à l'école", "Quand vous saluez votre famille le matin"],
    },
    examples: {
      es: ["Buen día, profesor", "Buen día, mamá"],
      en: ["Good morning, teacher", "Good morning, mom"],
      fr: ["Bonjour, professeur", "Bonjour, maman"],
    },
    tip: {
      es: "Acompañar el saludo con una sonrisa transmite energía positiva.",
      en: "Greeting with a smile conveys positive energy.",
      fr: "Saluer avec un sourire transmet de l'énergie positive.",
    },
  },
};

// ---- abre modal ----
function openModal(word) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");

  const item = vocabularyData[word];
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
        currentLang === "es"
          ? "Ejemplos:"
          : currentLang === "en"
          ? "Examples:"
          : "Exemples:"
      }</h3>
      <div class="space-y-2">
        ${examples
          .map(
            (e) =>
              `<div class="bg-blue-50 border-l-4 border-blue-400 p-3 rounded"><p class="text-gray-700 italic">"${e}"</p></div>`
          )
          .join("")}
      </div>
    </div>
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
      <div class="flex items-start">
        <i class="fas fa-lightbulb text-yellow-500 mr-3 mt-1"></i>
        <div>
          <h4 class="font-semibold text-gray-800 mb-1">${
            currentLang === "es"
              ? "Consejo:"
              : currentLang === "en"
              ? "Tip:"
              : "Conseil:"
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

// ---- click fuera para cerrar ----
document.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (!modal) return;
  if (!modal.classList.contains("hidden") && e.target === modal) {
    closeModal();
  }
});

// ---- escape para cerrar ----
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ---- speech: lee modal ----
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

// ---- cambia idioma ----
function setLanguage(lang) {
  if (!uiTranslations[lang]) lang = "es";
  currentLang = lang;

  const t = uiTranslations[lang];

  const pageTitle = document.getElementById("page-title");
  const pageDesc = document.getElementById("page-description");
  if (pageTitle) pageTitle.textContent = t.title;
  if (pageDesc) pageDesc.textContent = t.description;

  const infoBox = document.querySelector(
    ".bg-white.rounded-2xl.shadow-lg.p-6.border-l-4"
  );
  if (infoBox) {
    const h2 = infoBox.querySelector("h2");
    const p = infoBox.querySelector("p");
    if (h2) h2.textContent = t.infoTitle;
    if (p) p.textContent = t.infoText;
  }

  const keys = ["hola", "adios", "gracias", "porfavor", "buendia"];
  keys.forEach((k) => {
    const h = document.getElementById(`card-${k}`);
    if (!h) return;
    const title =
      vocabularyData[k] &&
      vocabularyData[k].title &&
      (vocabularyData[k].title[currentLang] || vocabularyData[k].title.es);
    h.textContent = title || (t[k] || "");
    const cardContainer = h.closest(".vocabulary-card");
    if (cardContainer) {
      const subtitle = cardContainer.querySelector("p");
      if (subtitle) {
        const subKey = `${k}Desc`;
        subtitle.textContent = t[subKey] || "";
      }
    }
  });

  const speakBtn = document.querySelector('button[onclick="speakModal()"]');
  if (speakBtn) speakBtn.textContent = t.listenButton;

  const modalCloseBottom = document.querySelector(
    '#modal .mt-6 button[onclick="closeModal()"]'
  );
  if (modalCloseBottom) modalCloseBottom.textContent = t.closeButton;

  const backBtn = document.querySelector('button[onclick="goBack()"]');
  if (backBtn)
    backBtn.innerHTML =
      '<i class="fas fa-arrow-left mr-2"></i>' + t.backLabel;
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
