// Preguntas enfocadas en autismo
const questions = [
    "Me resulta difícil mantener contacto visual con otras personas.",
    "Prefiero rutinas y me incomodan los cambios inesperados.",
    "Me cuesta iniciar o mantener conversaciones sociales.",
    "A menudo me enfoco intensamente en un tema o actividad específica.",
    "Me incomodan ciertos sonidos, luces u olores.",
    "Me resulta difícil interpretar las expresiones faciales o el tono de voz de otros.",
    "Prefiero pasar tiempo solo(a) en lugar de con otras personas.",
    "Me siento incómodo(a) en situaciones sociales nuevas.",
    "A veces repito movimientos o frases sin darme cuenta.",
    "Me resulta difícil entender chistes, ironías o sarcasmo."
];

const form = document.getElementById("testForm");
const container = document.getElementById("questionsContainer");
const resultDiv = document.getElementById("result");
const progressText = document.getElementById("progressText");

// Renderizar preguntas
function renderQuestions() {
    container.innerHTML = "";
    questions.forEach((qText, idx) => {
        const qIndex = idx + 1;
        const qWrapper = document.createElement("div");
        qWrapper.className = "p-4 rounded-lg border border-gray-200";

        // Texto de la pregunta
        const p = document.createElement("p");
        p.className = "text-lg font-semibold text-gray-800 mb-4";
        p.textContent = qText;
        qWrapper.appendChild(p);

        // Escala Likert
        const scaleRow = document.createElement("div");
        scaleRow.className = "flex items-center justify-between gap-4";

        const leftLabel = document.createElement("span");
        leftLabel.className = "text-sm text-gray-500";
        leftLabel.textContent = "En desacuerdo";
        scaleRow.appendChild(leftLabel);

        const radiosWrapper = document.createElement("div");
        radiosWrapper.className = "flex items-center gap-3";

        for (let v = 1; v <= 7; v++) {
            const radioId = `q${qIndex}_v${v}`;

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q${qIndex}`;
            input.value = String(v);
            input.id = radioId;
            input.className = "hidden";

            const label = document.createElement("label");
            label.setAttribute("for", radioId);
            label.className = "likert-circle";
            label.textContent = v;

            radiosWrapper.appendChild(input);
            radiosWrapper.appendChild(label);
        }

        scaleRow.appendChild(radiosWrapper);

        const rightLabel = document.createElement("span");
        rightLabel.className = "text-sm text-gray-500";
        rightLabel.textContent = "De acuerdo";
        scaleRow.appendChild(rightLabel);

        qWrapper.appendChild(scaleRow);
        container.appendChild(qWrapper);
    });
}

// Actualizar progreso
function updateProgress() {
    const data = new FormData(form);
    let answered = 0;
    for (let i = 1; i <= questions.length; i++) {
        if (data.get(`q${i}`)) answered++;
    }
    progressText.textContent = `Preguntas respondidas: ${answered} / ${questions.length}`;
}

// Cálculo de resultados
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const answers = [];
    for (let i = 1; i <= questions.length; i++) {
        const val = data.get(`q${i}`);
        if (!val) {
            alert("⚠️ Por favor responde todas las preguntas.");
            return;
        }
        // Convertir a porcentaje (1=0%, 4=50%, 7=100%)
        const num = Number(val);
        const percent = ((num - 1) / 6) * 100;
        answers.push(percent);
    }

    const avg = answers.reduce((a, b) => a + b, 0) / answers.length;

    let interpretation = "";
    if (avg < 33) {
        interpretation = "Tus respuestas reflejan pocos rasgos relacionados con autismo.";
    } else if (avg < 66) {
        interpretation = "Tus respuestas reflejan algunos rasgos relacionados con autismo.";
    } else {
        interpretation = "Tus respuestas reflejan varios rasgos asociados al autismo.";
    }

    resultDiv.innerHTML = `
      <h2 class="text-2xl font-bold text-gray-800 mb-3">Resultados</h2>
      <p class="text-gray-700">Promedio de acuerdo: <strong>${avg.toFixed(1)}%</strong></p>
      <p class="mt-4 text-gray-800 font-semibold">${interpretation}</p>
    `;
    resultDiv.classList.remove("hidden");
});

// Eventos
form.addEventListener("change", updateProgress);

// Inicializar
renderQuestions();
updateProgress();
