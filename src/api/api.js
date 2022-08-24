import axios from "axios";

export const host = "https://infinity-health.vercel.app/";

export const api = axios.create({
  baseURL: `${host}`,
});