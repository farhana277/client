// src/store/eventStore.js
import { create } from "zustand";
import axios from "axios";

const useEventStore = create((set) => ({
  events: [],
  fetchEvents: async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      set({ events: res.data });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useEventStore;
