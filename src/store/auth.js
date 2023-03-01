import { create } from 'zustand';

const useAuthStore = create((set) => ({
  role: "",
  loggedIn: false,
  logIn: (role) => set({ loggedIn: true, role }),
  logOut: () => set({ loggedIn: false, role: "" }),
}))

export default useAuthStore