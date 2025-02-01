import { create } from 'zustand';

export type designTypes = 'designByOlga' | 'designByOlga' | 'initial';//////////////

export type ChangDesign = boolean;

type Time = {
  mobile: number;
  tablet: number;
  desctop: number;
};

type DesignStoreState = {
  DurationAnimtionChangeDesign: Time;
  isChangingDesign: ChangDesign;
  designType: designTypes;
  setDesignType: (type: designTypes) => void;
  toggleDesignType: () => void;
  toggleIsChangingDesign: (isChangingDesignProps: ChangDesign) => void;
};

const DurationTime = { mobile: 4, tablet: 6, desctop: 8 };

export const useDesignStore = create<DesignStoreState>((set) => ({
  DurationAnimtionChangeDesign: DurationTime,
  designType: 'initial',
  isChangingDesign: false,
  setDesignType: (type: designTypes) => set({ designType: type }),
  toggleDesignType: () =>
    set((state) => ({
      designType:
        state.designType === 'designByOlga'
          ? 'designByOlga'//////////////////////
          : 'designByOlga', 
    })),
  toggleIsChangingDesign: (isChangingDesignProps) =>
    set(() => ({ isChangingDesign: isChangingDesignProps })),
}));
