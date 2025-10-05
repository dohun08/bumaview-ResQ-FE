import { create } from 'zustand';

const useModalStore = create((set) => ({
  answer: [],
  addAnswer: (newAnswer) => set((state) => ({
    answers: [...(state.answers || []), newAnswer]
  })),
  resetAnswer: () => set({ answer: [] }),
}));

export default useModalStore;
