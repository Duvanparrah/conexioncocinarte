import axios from "./axios"; // Importa la instancia personalizada

export const registerRequest = async (user) => {
  try {
    const response = await axios.post(`/auth/register`, user);
    return response.data;
  } catch (error) {
    console.error("Error en el registro:", error.response?.data || error.message);
    throw error;
  }
};

export const loginRequest = async (user) => {
  try {
    const response = await axios.post(`/auth/login`, user);
    return response.data;
  } catch (error) {
    console.error("Error en el login:", error.response?.data || error.message);
    throw error;
  }
};

export const verifyTokenRequest = async () => {
  try {
    const response = await axios.get(`/auth/verify`);
    return response.data;
  } catch (error) {
    console.error("Error al verificar token:", error.response?.data || error.message);
    throw error;
  }
};
