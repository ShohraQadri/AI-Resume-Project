import axios from "axios";

const Base_Url = import.meta.env.VITE_API_URL;

export const registerUser = (data) => {
  return axios.post(`${Base_Url}/register`, data);
};

export const loginUser = (data) => {
  return axios.post(`${Base_Url}/login`, data);
};
