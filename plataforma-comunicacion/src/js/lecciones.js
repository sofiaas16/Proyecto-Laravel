// test.js — genera preguntas, valida respuestas y calcula puntuación

// --------------- CONFIGURACIÓN: aquí defines las preguntas ---------------
const questions = [
    "Me resulta difícil comunicarme en situaciones nuevas.",
    "Prefiero usar imágenes o gestos en lugar de palabras.",
    "Me cuesta entender instrucciones largas o complejas.",
    "Me siento incómodo(a) iniciando una conversación con alguien nuevo.",
    "A menudo repito palabras o frases sin querer.",
    "Me resulta difícil encontrar la palabra correcta cuando quiero decir algo.",
    "Prefiero opciones visuales (imágenes) para aprender cosas nuevas.",
    "Me cuesta seguir el hilo de una conversación con varias personas.",
    "Me resulta difícil pronunciar algunas palabras con claridad.",
    "Me siento más cómodo(a) comunicándome mediante apoyos visuales que con el habla."
];
// -------------------------------------------------------------------------

const form = document.getElementById("testForm");
const container = document.getElementById("questionsContainer");
const resultDiv = document.getElementById("result");
const progressText = document.getElementById("progressText");

// Genera las preguntas dinámicamente (cada grupo de radios 1..7)
function renderQuestions() {
    container.innerHTML = "";
    questions.forEach((qText, idx) => {
        const qIndex = idx + 1;
        const qWrapper = document.createElement("div");
        qWrapper.className = "p-4 rounded-lg border border-gray-100";

        // Pregunta
        const p = document.createElement("p");
        p.className = "text-lg font-semibold text-gray-800 mb-4";
        p.textContent = qText;
        qWrapper.appendChild(p);

        // Contenedor de escala
        const scaleRow = document.createElement("div");
        scaleRow.className = "flex items-center justify-between gap-4";

        // Label izquierda
        const leftLabel = document.createElement("span");
        leftLabel.className = "text-sm text-gray-500 mr-4";
        leftLabel.textContent = "En desacuerdo";
        scaleRow.appendChild(leftLabel);

        // Wrapper de radios
        const radiosWrapper = document.createElement("div");
        radiosWrapper.className = "flex items-center gap-3 flex-wrap";

        // Creamos 7 radios (1..7)
        for (let v = 1; v <= 7; v++) {
            const radioId = `q${qIndex}_v${v}`;

            // input (oculto visualmente, pero accesible)
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q${qIndex}`;
            input.value = String(v);
            input.id = radioId;
            input.className = "sr-only peer";

            // label que actúa como círculo (debe venir justo después del input para que peer-checked funcione)
            const label = document.createElement("label");
            label.setAttribute("for", radioId);
            label.className = `
          likert-circle cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:text-white
          hover:scale-105
        `;
            label.setAttribute("aria-label", `Valor ${v} para pregunta ${qIndex}`);

            // opcional: mostrar el número dentro del círculo (puedes eliminar si no quieres número visible)
            const spanNum = document.createElement("span");
            spanNum.className = "text-sm font-semibold";
            spanNum.textContent = v;
            label.appendChild(spanNum);

            radiosWrapper.appendChild(input);
            radiosWrapper.appendChild(label);
        }

        scaleRow.appendChild(radiosWrapper);

        // Label derecha
        const rightLabel = document.createElement("span");
        rightLabel.className = "text-sm text-gray-500 ml-4";
        rightLabel.textContent = "De acuerdo";
        scaleRow.appendChild(rightLabel);

        qWrapper.appendChild(scaleRow);
        container.appendChild(qWrapper);
    });
}

// Actualiza el texto de progreso (cuántas preguntas respondidas)
function updateProgress() {
    const formData = new FormData(form);
    let answered = 0;
    for (let i = 1; i <= questions.length; i++) {
        if (formData.get(`q${i}`)) answered++;
    }
    progressText.textContent = `Preguntas respondidas: ${answered} / ${questions.length}`;
}

// Validación y cálculo al enviar
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const answers = [];
    for (let i = 1; i <= questions.length; i++) {
        const val = data.get(`q${i}`);
        if (!val) {
            // foco en la primera pregunta sin responder
            const missingInput = document.querySelector(`input[name="q${i}"]`);
            missingInput && missingInput.focus();
            alert("Por favor responde todas las preguntas antes de enviar.");
            return;
        }
        answers.push(Number(val));
    }

    const total = answers.reduce((a, b) => a + b, 0);
    const avg = total / answers.length;

    // Interpretación (ajusta los umbrales según necesites)
    let interpretation = "";
    if (avg <= 2.5) {
        interpretation = "Tus respuestas indican pocas dificultades de comunicación.";
    } else if (avg <= 4.5) {
        interpretation = "Tus respuestas reflejan algunas dificultades en la comunicación.";
    } else {
        interpretation = "Tus respuestas muestran dificultades significativas en la comunicación.";
    }

    // Guardar resultado en localStorage (histórico)
    try {
        const record = {
            date: new Date().toISOString(),
            answers,
            total,
            avg: Number(avg.toFixed(2))
        };
        const storeKey = "plataforma_test_history_v1";
        const existing = JSON.parse(localStorage.getItem(storeKey) || "[]");
        existing.unshift(record);
        // mantener solo últimos 20 registros
        localStorage.setItem(storeKey, JSON.stringify(existing.slice(0, 20)));
    } catch (err) {
        console.warn("No se pudo guardar en localStorage:", err);
    }

    // Mostrar resultado bonito
    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = `
      <h2 class="text-2xl font-bold text-gray-800 mb-3">Resultados</h2>
      <p class="text-gray-700">Puntuación total: <strong>${total}</strong></p>
      <p class="text-gray-700">Promedio: <strong>${avg.toFixed(2)}</strong></p>
      <p class="mt-4 text-gray-800 font-semibold">${interpretation}</p>
      <div class="mt-4 flex justify-center gap-3">
        <button id="viewHistory" class="px-4 py-2 bg-gray-100 rounded-md">Ver historial</button>
        <button id="retake" class="px-4 py-2 bg-blue-600 text-white rounded-md">Volver a hacer test</button>
      </div>
      <div id="historyBox" class="mt-4 hidden bg-gray-50 p-3 rounded"></div>
    `;

    // handlers de los botones internos
    document.getElementById("retake").addEventListener("click", () => {
        // limpiar selecciones
        form.reset();
        resultDiv.classList.add("hidden");
        updateProgress();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.getElementById("viewHistory").addEventListener("click", () => {
        const box = document.getElementById("historyBox");
        const storeKey = "plataforma_test_history_v1";
        const existing = JSON.parse(localStorage.getItem(storeKey) || "[]");
        if (!existing.length) {
            box.innerHTML = "<p class='text-sm text-gray-600'>No hay registros previos.</p>";
        } else {
            box.innerHTML = existing.slice(0, 10).map((r, idx) => {
                return `<div class="text-sm border-b border-gray-200 py-2">
            <strong>${idx + 1}. ${new Date(r.date).toLocaleString()}</strong>
            <div class="text-xs text-gray-600">Promedio: ${r.avg} — Total: ${r.total}</div>
          </div>`;
            }).join("");
        }
        box.classList.toggle("hidden");
    });
});

// actualiza progreso cuando el usuario seleccione una opción
form.addEventListener("change", updateProgress);

// renderizar al inicio
renderQuestions();
updateProgress();
