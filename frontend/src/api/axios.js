// import axios from "axios";
// import { API_URL } from "../config";

// const instance = axios.create({
//   baseURL: API_URL,
//   withCredentials: true,
// });

// export default instance;

// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4200/api",
  withCredentials: true,
});

export default instance;

