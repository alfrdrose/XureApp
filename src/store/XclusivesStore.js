// src/store/XchangeStore.js
import { create } from "zustand";

const useXclusivesStore = create((set) => ({
  isLoading: true,

  setLoading: (value) => set({ isLoading: value }),

  card: [
    {
      id: 1,
      img: "/box1.jpg",
      title: "Earth Ballers PH Special Box Break #4",
      host: "Earth Ballers PH",
      startprice: 999,
        maxprice: 1999,
      breakingtype: "Choice Box Break",
      slot: 5,
      maxslot: 10,
      start: "May 13, 2024 8:00 AM",
      end: "May 13, 2024 8:00 PM"
    },
    {
      id: 2,
      img: "/box2.jpg",
      title: "Mugiwara Box Breaking #1",
      host: "Mugiwara-Ya",
      startprice: 999,
        maxprice: 1999,
      breakingtype: "Choice Box Break",
      slot: 5,
      maxslot: 10,
      start: "May 13, 2024 8:00 AM",
      end: "May 13, 2024 8:00 PM"
    },
  ],

  // Simulated fetch
  fetchItems: async () => {
    set({ isLoading: true });
    await new Promise((res) => setTimeout(res, 3000)); // 3-second delay
    set({ isLoading: false });
  },
}));

export default useXclusivesStore;
