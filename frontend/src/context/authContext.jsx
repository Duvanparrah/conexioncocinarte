import { useEffect, useState, createContext, useContext } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

// mejora visual de errores:
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe ser usado dentro de AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Limpiar errores después de 5 segundos
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => setErrors([]), 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  // const signup = async (userData) => {
  //   setLoading(true);
  //   try {
  //     const res = await registerRequest(userData);
  //     if (res.status === 200) {
  //       setUser(res.data);
  //       setIsAuthenticated(true);
  //       setErrors([]); // Limpiar errores tras éxito
  //     }
  //   } catch (err) {
  //     console.error(err.response?.data || "Error al registrarse");
  //     setErrors(Array.isArray(err?.message) ? err.message : [err?.message || "Error en el registro"]);

  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const signup = async (userData) => {
  setLoading(true);
  try {
    const res = await registerRequest(userData);

    // Si el backend no devuelve un `status`, puedes omitir esta validación
    setUser(res);
    setIsAuthenticated(true);
    setErrors([]);
    toast.success("Registro exitoso");
    
  } catch (err) {
    console.error(err.response?.data || "Error al registrarse");

    const errMsg = err.response?.data?.message || "Error al registrarse";

    const errorList = Array.isArray(errMsg) ? errMsg : [errMsg];
    setErrors(errorList);

    errorList.forEach((msg) => toast.error(msg));
  } finally {
    setLoading(false);
  }
};


//   const signin = async (userData) => {
//   setLoading(true);
//   try {
//     const res = await loginRequest(userData);
//     setUser(res); // Asume que loginRequest ya hace .data
//     setIsAuthenticated(true);
//     setErrors([]); // Limpiar errores tras éxito
//   } catch (error) {
//     console.error(error.response?.data || "Error al iniciar sesión");

//     const errMsg = error.response?.data?.message || "Error al iniciar sesión";

//     // Asegura que siempre sea un array
//     setErrors(Array.isArray(errMsg) ? errMsg : [errMsg]);
//   } finally {
//     setLoading(false);
//   }
// };

const signin = async (userData) => {
  setLoading(true);
  try {
    const res = await loginRequest(userData);
    setUser(res);
    setIsAuthenticated(true);
    setErrors([]);

    toast.success("Inicio de sesión exitoso");
  } catch (error) {
    console.error(error.response?.data || "Error al iniciar sesión");

    const errMsg = error.response?.data?.message || "Error al iniciar sesión";

    const errorList = Array.isArray(errMsg) ? errMsg : [errMsg];
    setErrors(errorList);

    // 🔥 Mostrar cada error en un toast
    errorList.forEach((msg) => toast.error(msg));
  } finally {
    setLoading(false);
  }
};

// _____________________________________________________________________________


  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const token = Cookies.get("token");
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await verifyTokenRequest(token);
        if (res.data) {
          setUser(res.data);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error al verificar el token:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
        logout,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
