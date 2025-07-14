import { create } from "zustand";
const usePostStore = create((set) => ({
   isLoading: true, 
    setLoading: (value) => set({ isLoading: value }), 
  
  xchange: [
    {
      id: 1,
      img: "/charizard.jpg",
      price: 5000,
      type: "Pokemon (Trading Cards)",
      title: "Charizard Ex Obsidian Flames",
    },
    {
      id: 2,
      img: "/EarthBallers.jpg",
      price: 3000,
      type: "Pokemon (Trading Cards)",
      title: "Charizard Ex Obsidian Flames",
    }
  ],
  accounts: [
    {
      id: 1,
      name: "FredChicken",
      acttag: "@fredchicken",
      profile: "/chicken.jpg"
    },
    {
      id: 2,
      name: "Ashyelili",
      acttag: "@ashyelili",
      profile: "/ashley.jpg"
    },
     {
      id: 3,
      name: "Tiger@123",
      acttag: "@tiger123",
      profile: "/tiger.jpg"
    }
  ],
  posts: [
    {
      id: 1,
      username: "WoofWoofPpogi_123",
      followers: 100,
      avatar: "/dog.png",
      caption:
        "This is a long caption for the post. It might include thoughts, tags, or emojis 🤖✨. It can go on and on to explain what the post is about in detail.",
      type: "image",
      mediaUrl: "/EarthBallers.jpg",
      videoUrl: "",
      hype: 42,
    },
    {
      id: 2,
      username: "Meowster",
      followers: 234,
      avatar: "https://ui-avatars.com/api/?background=3F3F46&color=fff&name=Meowster",
      caption: "Cats rule the world. #meow #purrfectlife 🐱",
      type: "video",
      mediaUrl: "",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      hype: 19,
    },
  ],
  // Simulated fetch
  fetchItems: async () => {
    set({ isLoading: true });
    await new Promise((res) => setTimeout(res, 3000)); // 3-second delay
    set({ isLoading: false });
  },
  loadMorePosts: () =>
    set((state) => ({
      posts: [
        ...state.posts,
        {
          id: state.posts.length + 1,
          username: "NewUser_" + (state.posts.length + 1),
          followers: Math.floor(Math.random() * 200),
          avatar: "https://ui-avatars.com/api/?background=3F3F46&color=fff&name=New",
          caption: "This is an auto-loaded post added when you scroll down.",
          type: Math.random() > 0.5 ? "image" : "video",
          mediaUrl: "https://via.placeholder.com/800x450.png?text=New+Image",
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
          hype: Math.floor(Math.random() * 100),
        },
      ],
    })),
}));

export default usePostStore;
