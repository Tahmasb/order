import axios from "axios";

const backendBaseUrl = process.env.NEXT_PUBLIC_API_URL;

const myAxios = axios.create({
  baseURL: backendBaseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default myAxios;
