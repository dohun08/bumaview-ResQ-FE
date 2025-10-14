// src/store/useTimerStore.js
import { create } from 'zustand';

const useTimerStore = create((set) => ({
  // 타이머 상태
  time: 100,
  isRunning: false,

  // 타이머 시작
  startTimer: () => set({ isRunning: true }),

  // 타이머 멈추기
  stopTimer: () => set({ isRunning: false }),

  // 타이머 시간 설정
  setTime: (time) => set({ time }),

  // 타이머 시간 감소
  decreaseTime: (amount) => set((state) => ({
    time: Math.max(0, state.time - amount)
  })),

  // 타이머 리셋
  resetTimer: (initialTime = 100) => set({
    time: initialTime,
    isRunning: false
  }),

  // 타이머 토글 (시작/멈춤)
  toggleTimer: () => set((state) => ({
    isRunning: !state.isRunning
  })),
}));

export default useTimerStore;