import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { cycleIndex, generatePositions, generateVariants } from './ui';
import { ObjectArrayFoto } from './types';

export const useFotoSwiper = (arrayImages: ObjectArrayFoto[]) => {
  const [positionIndexes, setPositionIndexes] = useState(
    arrayImages.map((_, index) => index)
  );
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const indexBigFoto = useMemo(() => {
    const centerIdx = Math.floor(positionIndexes.length / 2);
    return positionIndexes[centerIdx];
  }, [positionIndexes]);

  const arrayReverse = useMemo(() => [...arrayImages].reverse(), [arrayImages]);

  const handleNext = useCallback(() => {
    setPositionIndexes((prevPosition) =>
      prevPosition.map((prevIndex) =>
        cycleIndex(prevIndex, 1, arrayImages.length)
      )
    );
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(handleNext, 5000);
  }, [arrayImages.length]);

  const handlePrev = useCallback(() => {
    setPositionIndexes((prevPosition) =>
      prevPosition.map((prevIndex) =>
        cycleIndex(prevIndex, -1, arrayImages.length)
      )
    );
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(handleNext, 5000);
  }, [arrayImages.length, handleNext]);

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 5000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [handleNext]);

  const objectBigFoto = arrayReverse[indexBigFoto];

  const position = useMemo(
    () => generatePositions(arrayImages.length),
    [arrayImages.length]
  );

  const newVariants = useMemo(
    () => generateVariants(arrayImages.length),
    [arrayImages.length]
  );

  return {
    positionIndexes,
    setPositionIndexes,
    indexBigFoto,
    arrayReverse,
    handleNext,
    handlePrev,
    position,
    newVariants,
    objectBigFoto,
  };
};
