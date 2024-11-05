import axios from "axios";

const backendBaseUrl = process.env.NEXT_PUBLIC_API_URL;

const myAxios = axios.create({
  baseURL: backendBaseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const getData = async (url: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`);
  const data = await response.json();
  return data;
};

export { myAxios, getData };
