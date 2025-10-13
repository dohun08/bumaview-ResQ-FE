import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set) => ({
      id: "",
      token: "",
      role: "",
      setUser: (data) => set((state) => ({ ...state, ...data })),
      clearUser: () => set({ id: "", token: "", role: "" }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);