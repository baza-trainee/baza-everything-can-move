import { create } from 'zustand';

export type DesignTypes = 'designByOlga' | 'designBySvitlana' | 'initial';

export type ChangDesign = boolean;

interface DesignStoreState {
  isChangingDesign: ChangDesign;
  designType: DesignTypes;
  setDesignType: (type: DesignTypes) => void;
  toggleDesignType: () => void;
  toggleIsChangingDesign: (isChangingDesignProps: ChangDesign) => void;
}

export const useDesignStore = create<DesignStoreState>((set) => ({
  designType: 'initial',
  isChangingDesign: false,
  setDesignType: (type: DesignTypes) => set({ designType: type }),
  toggleDesignType: () =>
    set((state) => ({
      designType:
        state.designType === 'designByOlga'
          ? 'designBySvitlana'
          : 'designByOlga', ////////////////////////////////////////////////////////////////
    })),
  toggleIsChangingDesign: (isChangingDesignProps) =>
    set(() => ({ isChangingDesign: isChangingDesignProps })),
}));
