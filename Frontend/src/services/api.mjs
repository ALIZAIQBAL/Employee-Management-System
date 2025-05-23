import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const signup = (formData) => API.post('/signup', formData);
export const login = (formData) => API.post('/login', formData);
