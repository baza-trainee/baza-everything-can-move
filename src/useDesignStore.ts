import { create } from 'zustand';

export type designTypes = 'designByOlga' | 'designBySvitlana' | 'initial';

interface DesignStoreState {
  designType: designTypes;
  setDesignType: (type: designTypes) => void;
  toggleDesignType: () => void;
}

export const useDesignStore = create<DesignStoreState>((set) => ({
  designType: 'initial',
  setDesignType: (type: designTypes) => set({ designType: type }),
  toggleDesignType: () =>
    set((state) => ({
      designType:
        state.designType === 'designByOlga'
          ? 'designBySvitlana'
          : 'designByOlga',
    })),
}));
