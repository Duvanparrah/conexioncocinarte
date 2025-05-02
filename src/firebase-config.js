// firebase-config.js
import { initializeApp } from 'firebase/app'; // Importación modular
import { getAuth } from 'firebase/auth'; // Obtén el módulo de autenticación

// Configuración de Firebase
const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-sender-id',
  appId: 'your-app-id',
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta los servicios necesarios
export const auth = getAuth(app);
export default app;
