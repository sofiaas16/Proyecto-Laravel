<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Home</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="/css/styles.css">
  <script>const BASE_URL = "{{ env('API_URL') }}";</script>
</head>
<body class="bg-gray-100 min-h-screen">
  <nav class="bg-white shadow p-4 flex justify-between">
    <div class="font-semibold">Mi App</div>
    <div>
      <button id="logoutBtn" class="px-3 py-1 rounded bg-red-500 text-white">Cerrar sesión</button>
    </div>
  </nav>

  <main class="p-6">
    <div id="welcome" class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold">Bienvenido</h2>
      <p id="userInfo" class="mt-2 text-sm text-gray-700"></p>
      <div id="adminPanel" class="mt-4 p-4 border rounded hidden">
        <h3 class="font-semibold">Panel de Administrador</h3>
        <p class="text-sm">Contenido especial para administradores (role_id = 1).</p>
      </div>
    </div>
  </main>

  <script src="/js/auth.js" defer></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      checkAuth();
      document.getElementById('logoutBtn').addEventListener('click', logout);

      const user = getUserFromStorage();
      if (user) {
        document.getElementById('userInfo').textContent = `${user.name} — role_id: ${user.role_id}`;
        if (Number(user.role_id) === 1) {
          document.getElementById('adminPanel').classList.remove('hidden');
        }
      }
    });
  </script>
</body>
</html>