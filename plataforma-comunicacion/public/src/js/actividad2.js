// ====== Estado y progreso ======
let seenColors = new Set();

// ---- abrir modal ----
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

  modalTitle.textContent = title;
  modalContent.innerHTML = `
    <div class="text-center mb-6">
      <div class="bg-gray-100 rounded-full p-4 inline-block mb-4">
        <i class="${item.icon} text-4xl ${item.color}"></i>
      </div>
      <p class="text-gray-700 text-lg">${desc}</p>
    </div>
    <div class="mb-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-3">${
        uiTranslations[currentLang].usageLabel[currentLang]
      }</h3>
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

  // registrar progreso local
  seenColors.add(color);
  checkCompletion();
}

// ---- cerrar modal ----
function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
  speechSynthesis.cancel();
}

// ---- escuchar ----
function speakModal() {
  const text = document.getElementById("modal-content").innerText;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = currentLang === "en" ? "en-US" : currentLang === "fr" ? "fr-FR" : "es-ES";
  speechSynthesis.speak(utter);
}

// ---- cambiar idioma ----
function setLanguage(lang) {
  currentLang = lang;
  const t = uiTranslations[lang];
  document.getElementById("page-title").textContent = t.title;
  document.getElementById("page-description").textContent = t.description;
  document.querySelector(".info-title").textContent = t.infoTitle;
  document.querySelector(".info-text").textContent = t.infoText;

  ["azul", "rojo", "verde", "amarillo", "negro"].forEach((c) => {
    document.getElementById(`card-${c}`).textContent =
      vocabularyData[c].title[currentLang];
    document.querySelector(`.${c}-desc`).textContent = t[`${c}Desc`];
  });
}

// ---- verificar progreso ----
function checkCompletion() {
  if (seenColors.size === 5) {
    const modal = document.getElementById("success-modal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";

    // desbloquear actividad
    completarActividad(6);
  }
}

// ---- cerrar modal de éxito ----
function closeSuccessModal() {
  const modal = document.getElementById("success-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// ---- inicialización ----
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);

  // animación tarjetas
  const cards = document.querySelectorAll(".vocabulary-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "all 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 150);
  });

  // cerrar modal con escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeSuccessModal();
    }
  });

  // cerrar modal al hacer clic afuera
  document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.getElementById("success-modal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeSuccessModal();
  });
});
