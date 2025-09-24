<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Login</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="/css/styles.css">
  <script>const BASE_URL = "{{ env('API_URL') }}";</script>

</head>
<body class="bg-gray-50 min-h-screen flex items-center justify-center">
  <div class="w-full max-w-md bg-white p-6 rounded-2xl shadow">
    <h1 class="text-2xl font-semibold mb-4">Iniciar sesión</h1>
    <form id="loginForm" class="space-y-4">
      <div>
        <label class="block text-sm font-medium">Email</label>
        <input type="email" id="emailLogin" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2">
      </div>
      <div>
        <label class="block text-sm font-medium">Contraseña</label>
        <input type="password" id="passwordLogin" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2">
      </div>
      <div class="flex items-center justify-between">
        <button type="submit" class="px-4 py-2 rounded bg-indigo-600 text-white">Entrar</button>
        <a href="/register" class="text-sm text-gray-600">Crear cuenta</a>
      </div>
      <div id="loginError" class="text-sm text-red-600 mt-2"></div>
    </form>
  </div>

  <script src="/js/auth.js" defer></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const payload = {
          email: document.getElementById('emailLogin').value.trim(),
          password: document.getElementById('passwordLogin').value
        };
        await loginUser(payload);
      });
    });
  </script>
</body>
</html>