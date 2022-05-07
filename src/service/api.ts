import axios from "axios";

export const api = axios.create({
  baseURL: 'https://nlw-feedbackwedget-backend.herokuapp.com/',
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin' : 'https://nlw-feedback-widget-1l32u0v6a-brunofay.vercel.app/',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json'
    }
})

