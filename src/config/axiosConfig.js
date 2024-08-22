import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL; // Cambia esto según tu configuración

// Configuración de Axios
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptores de solicitudes
axiosInstance.interceptors.request.use(
  config => {
    // Puedes añadir un token de autenticación aquí si lo necesitas
    if (typeof window !== 'undefined') {
      // Aquí es seguro acceder a localStorage
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Interceptores de respuestas
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Manejo de errores
    if (error.response && error.response.status === 401) {
      // Redirigir al login si el usuario no está autorizado
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
