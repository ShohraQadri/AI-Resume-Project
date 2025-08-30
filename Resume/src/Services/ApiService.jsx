import axios from "axios";

const Base_Url = "http://localhost:8000";

export const registerUser = (data) => {
  return axios.post(`${Base_Url}/register`, data);
};

// Example: Login API
export const loginUser = (data) => {
  return axios.post(`${Base_Url}/login`, data);
};
