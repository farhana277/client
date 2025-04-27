// src/store/authStore.js
import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,

  login: async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      set({ user: res.data.user, token: res.data.token });
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Login failed");
    }
  },

  register: async (username, email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", { username, email, password });
      set({ user: res.data.user, token: res.data.token });
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Registration failed");
    }
  },

  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem("token");
  },
}));

export default useAuthStore;
