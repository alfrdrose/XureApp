// src/store/XchangeStore.js
import { create } from "zustand";

const useXchangeStore = create((set) => ({
  isLoading: true,

  setLoading: (value) => set({ isLoading: value }),

  items: [
    {
      id: 1,
      img: "/charizard.jpg",
      price: 5000,
      type: "Pokemon (Trading Cards)",
      title: "Charizard Ex Obsidian Flames",
      poster: "Arkade Korner",
      pfp: "/arcade.jpg",
    },
    {
      id: 2,
      img: "/EarthBallers.jpg",
      price: 3000,
      type: "NBA Cards",
      title: "Earth Ballers",
      poster: "Earth Ballers PH",
      pfp: "/nba.jpg",
    },
    {
      id: 3,
      img: "/luffywano.jpg",
      price: 6000,
      type: "Anime Figures",
      title: "Luffy - Wano Arc",
      poster: "Otaku Haven",
      pfp: "/luffypfp.jpg",
    },
    {
      id: 4,
      img: "/gundam.jpg",
      price: 3000,
      type: "Model Kits",
      title: "Gundam RX-78-2",
      poster: "Mecha Zone",
      pfp: "/gundampfp.jpg",
    },
    {
      id: 5,
      img: "/jordan.jpg",
      price: 3000,
      type: "NBA Cards",
      title: "2008 - 09 Upper Deck Michael Jordan legacy basketball card Chicago Bulls #622 MT",
      poster: "Earth Ballers PH",
      pfp: "/nba.jpg",
    },
  ],

  // Simulated fetch
  fetchItems: async () => {
    set({ isLoading: true });
    await new Promise((res) => setTimeout(res, 3000)); // 3-second delay
    set({ isLoading: false });
  },
}));

export default useXchangeStore;
