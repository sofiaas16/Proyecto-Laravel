
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("⚠️ Por favor completa todos los campos.");
    return;
  }

  if (email === "admin@correo.com" && password === "123456") {
    alert("✅ Bienvenido administrador");
    window.location.href = "dashboard.html"; 
  } else {
    alert("✅ Inicio de sesión exitoso");
    window.location.href = "../views/home.html";
  }
});


const increaseText = document.getElementById("increaseText");
let largeText = false;

increaseText.addEventListener("click", () => {
  document.body.classList.toggle("text-xl");
  largeText = !largeText;
  increaseText.textContent = largeText ? "Reducir texto" : "Aumentar texto";
});
