import { create } from 'zustand';

interface MouseStore {
  mouseX: number;
  mouseY: number;
  setMouse: (x: number, y: number) => void;
}

export const useMouseStore = create<MouseStore>((set) => ({
  mouseX: 0,
  mouseY: 0,
  setMouse: (x, y) => set(() => ({ mouseX: x, mouseY: y })),
}));
