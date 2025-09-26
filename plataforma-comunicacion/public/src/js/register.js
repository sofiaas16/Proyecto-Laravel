// Capturar el formulario
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (!fullname || !email || !password || !confirmPassword) {
        alert("⚠️ Por favor completa todos los campos.");
        return;
    }

    if (password !== confirmPassword) {
        alert("❌ Las contraseñas no coinciden.");
        return;
    }

    // Simulación de registro exitoso
    alert(`✅ Registro exitoso. Bienvenido/a ${fullname}`);
    window.location.href = "index.html"; // Redirige al login
});

// Aumentar tamaño del texto para accesibilidad
const increaseText = document.getElementById("increaseText");
let largeText = false;

increaseText.addEventListener("click", () => {
    document.body.classList.toggle("text-xl");
    largeText = !largeText;
    increaseText.textContent = largeText ? "Reducir texto" : "Aumentar texto";
});
