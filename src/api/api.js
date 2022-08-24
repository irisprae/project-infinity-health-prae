import axios from "axios";

export const host = "https://backend-infinity.vercel.app/";

export const api = axios.create({
  baseURL: `${host}`,
});