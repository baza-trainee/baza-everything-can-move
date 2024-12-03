import { useMemo, useState } from 'react';
import {
  generatePositions,
  generateVariantsHorizontal,
} from '../ui/horizontalVariants';
import { TeamsFotoType } from './dataFoto';
interface StateProps {
  isDisabledHandleScroll: boolean;
  durationAnimation: number;
  valueX: number;
  lastPaginatedValue: number;
  dragImageScale: number;
  isAutoScroll: boolean;
}

export const useSlideState = (imageArray: TeamsFotoType[]) => {
  const [sliderState, setSliderState] = useState<StateProps>({
    isDisabledHandleScroll: false,
    durationAnimation: 0,

    valueX: 0,
    lastPaginatedValue: 0,
    dragImageScale: 1,
    isAutoScroll: true,
  });

  const updateState = (
    updates: Partial<StateProps> | ((prev: StateProps) => Partial<StateProps>)
  ) => {
    setSliderState((prev) => ({
      ...prev,
      ...(typeof updates === 'function' ? updates(prev) : updates),
    }));
  };

  const position = useMemo(
    () => generatePositions(imageArray.length),
    [imageArray.length]
  );

  const variants = useMemo(
    () => generateVariantsHorizontal({ length: imageArray.length }),
    [imageArray.length]
  );
  return { updateState, setSliderState, sliderState, position, variants };
};
