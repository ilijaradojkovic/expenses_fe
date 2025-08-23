import axios from "axios";
import { API_URL } from "../constants/API";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Kreiramo instancu sa baseURL-om
const api = axios.create({
  baseURL: API_URL, // tvoj base URL
  headers: {
    "Content-Type": "application/json",
  },
});

const noAuthRoutes = ["/login", "/register"];

api.interceptors.request.use(
   async (config) => {
    // Ako ruta sadrži neku od ruta iz noAuthRoutes, preskoči dodavanje tokena
    const requiresAuth = !noAuthRoutes.some((route) => config.url.includes(route));
    if (requiresAuth) {
      const token = await AsyncStorage.getItem("token"); // ili iz Context/Redux
      if (token) {
        config.headers.Authorization = token;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default api;