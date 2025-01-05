import { create } from 'zustand';

type TeamSectionStore = {
  isSVG: boolean;
  setIsSVG: (value: boolean) => void;
};

export const useTeamSectionStore = create<TeamSectionStore>((set) => ({
  isSVG: true,
  setIsSVG: (value) => set({ isSVG: value }),
}));
