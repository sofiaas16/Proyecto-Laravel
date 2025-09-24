<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Register</title>
  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="/css/styles.css">

  <!-- Base URL desde .env -->
  <script>
    const BASE_URL = "http://127.0.0.1:8001/api";
    </script>
    </head>
<body class="bg-gray-50 min-h-screen flex items-center justify-center">
  <div class="w-full max-w-md bg-white p-6 rounded-2xl shadow">
    <h1 class="text-2xl font-semibold mb-4">Crear cuenta</h1>
    <form id="registerForm" class="space-y-4">
      <div>
        <label class="block text-sm font-medium">Nombre</label>
        <input name="name" id="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2">
      </div>
      <div>
        <label class="block text-sm font-medium">Email</label>
        <input type="email" name="email" id="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2">
      </div>
      <div>
        <label class="block text-sm font-medium">Contraseña</label>
        <input type="password" name="password" id="password" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2">
      </div>
      <div>
        <label class="block text-sm font-medium">Confirmar contraseña</label>
        <input type="password" name="password_confirmation" id="password_confirmation" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2">
      </div>

      <div class="flex items-center justify-between">
        <button type="submit" class="px-4 py-2 rounded bg-indigo-600 text-white">Registrarse</button>
        <a href="/login" class="text-sm text-gray-600">¿Ya tienes cuenta?</a>
      </div>

      <div id="registerError" class="text-sm text-red-600 mt-2"></div>
    </form>
  </div>

  <script src="/js/auth.js" defer></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('registerForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const payload = {
          name: document.getElementById('name').value.trim(),
          email: document.getElementById('email').value.trim(),
          password: document.getElementById('password').value,
          password_confirmation: document.getElementById('password_confirmation').value,
          role_id: 2 
        };
        await registerUser(payload);
      });
    });
  </script>
</body>
</html>
