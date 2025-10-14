import {create} from 'zustand';

export const useNavigationTransitionStore = create((set) => ({
  showTravel: false,
  setShowTravel: (showTravel) => set({showTravel}),
}));