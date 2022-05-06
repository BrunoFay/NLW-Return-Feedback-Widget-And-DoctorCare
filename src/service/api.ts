import axios from "axios";

export const api = axios.create({
  baseURL:'https://nlw-feedback-widget-6dag3dfzr-brunofay.vercel.app/'
  
})
//baseURL:import.meta.env.VITE_API_URL