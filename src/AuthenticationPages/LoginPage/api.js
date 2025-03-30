import axios from "axios";

// Use environment variable for baseURL if available
const baseURL = import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:4444";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include credentials (cookies) in requests
});

export const googleAuth = async (code) => {
  try {
    const response = await api.get(`/google?code=${code}`);
    return response;
  } catch (error) {
    console.error("Google Auth API Error:", error);
    throw error; // Re-throw the error for handling in the calling function
  }
};