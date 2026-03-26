import axios from "axios";

const API = axios.create({
  baseURL: "https://mercury-dev-co-1.onrender.com",
});

export const sendContact = (data) => API.post("/contact", data);