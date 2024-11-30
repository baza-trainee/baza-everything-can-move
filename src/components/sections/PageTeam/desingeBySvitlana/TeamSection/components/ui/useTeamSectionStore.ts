import { create } from 'zustand';

interface TeamSectionStore {
  positionX: number;
  positionY: number;
  setPositionX: (x: number) => void;
  setPositionY: (y: number) => void;
  isSVG: boolean;
  toggleIsSVG: () => void;
}

export const useTeamSectionStore = create<TeamSectionStore>((set) => ({
  positionX: 0,
  positionY: 0,
  isSVG: true,
  setPositionX: (x) => set({ positionX: x }),
  setPositionY: (y) => set({ positionY: y }),
  toggleIsSVG: () => set((state) => ({ isSVG: !state.isSVG })),
}));
