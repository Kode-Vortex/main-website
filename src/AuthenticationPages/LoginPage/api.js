import axios from "axios";

// Use environment variable for baseURL if available
const baseURL = "https://main-server-mu.vercel.app";

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