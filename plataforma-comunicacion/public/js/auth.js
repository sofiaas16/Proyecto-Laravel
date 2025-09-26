// ================================
// AUTH.JS - Registro y Login
// ================================

async function registerUser(payload) {
  clearMessages();
  try {
      const res = await fetch(`${BASE_URL}/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload.user ? payload.user : payload),
          credentials: 'include' // necesario si Laravel soporta cookies o tokens
      });

      const data = await res.json();

      if (!res.ok) {
          showRegisterError(extractErrorMessage(data));
          return;
      }

      saveTokenAndUser(data);
      window.location.href = '/home';
  } catch (err) {
      showRegisterError(err.message || 'Error de red');
  }
}

async function loginUser(payload) {
  clearMessages();
  try {
      const res = await fetch(`${BASE_URL}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          credentials: 'include'
      });

      const data = await res.json();

      if (!res.ok) {
          showLoginError(extractErrorMessage(data));
          return;
      }

      saveTokenAndUser(data);
      window.location.href = '/home';
  } catch (err) {
      showLoginError(err.message || 'Error de red');
  }
}

// ================================
// Manejo de token y usuario
// ================================

function saveTokenAndUser(data) {
  // Espera que la respuesta tenga { user: { ... }, token: '...' }
  const token = data.token || data.access_token || (data.user && data.user.token);
  const user = data.user || data;

  if (!token || !user) {
      console.warn('Respuesta inesperada del servidor', data);
  }

  localStorage.setItem('auth_token', token);
  localStorage.setItem('auth_user', JSON.stringify(user));
}

function getToken() {
  return localStorage.getItem('auth_token');
}

function getUserFromStorage() {
  try {
      return JSON.parse(localStorage.getItem('auth_user'));
  } catch (e) {
      return null;
  }
}

// ================================
// Autenticación / Logout
// ================================

function checkAuth() {
  const token = getToken();
  if (!token) {
      window.location.href = '/login';
  }
}

function logout() {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('auth_user');
  window.location.href = '/login';
}

// ================================
// Manejo de errores
// ================================

function extractErrorMessage(data) {
  if (!data) return 'Error inesperado';
  if (data.message) return data.message;
  if (data.errors) {
      // Laravel style
      const firstKey = Object.keys(data.errors)[0];
      return data.errors[firstKey][0];
  }
  return JSON.stringify(data);
}

function showRegisterError(msg) {
  const el = document.getElementById('registerError');
  if (el) el.textContent = msg;
}

function showLoginError(msg) {
  const el = document.getElementById('loginError');
  if (el) el.textContent = msg;
}

function clearMessages() {
  ['registerError','loginError'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
  });
}

// ================================
// Exported helpers para home.blade
// ================================

window.checkAuth = checkAuth;
window.logout = logout;
window.getUserFromStorage = getUserFromStorage;
window.registerUser = registerUser;
window.loginUser = loginUser;
