'use client';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { ButtonSlide } from './ButtonSlider';
import { ObjectArrayFoto } from './ui/types';
import { cycleIndex, generatePositions, generateVariants } from './ui/ui';
import CircleTimer from './components/CircleTimer';
import BigFoto from './components/BigFoto';

const FotoSwiper = ({ arrayImages }: { arrayImages: ObjectArrayFoto[] }) => {
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
  }, [cycleIndex]);

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
  }, [cycleIndex, handleNext]);

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 5000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [handleNext]);

  const position = useMemo(
    () => generatePositions(arrayImages.length),
    [arrayImages.length]
  );

  const newVariants = useMemo(
    () => generateVariants(arrayImages.length),
    [arrayImages.length]
  );

  if (!arrayImages.length) return null;

  return (
    <div className="flex w-full justify-between">
      <div className="flex w-full max-w-16 flex-col justify-center gap-6">
        <AnimatePresence>
          <ul className="relative flex h-full max-h-[172px] flex-col items-center">
            <motion.li
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              exit={{
                scale: 0,
                y: 20,
              }}
              key={indexBigFoto}
              className={'absolute top-[-8%]'}
            >
              <CircleTimer />
            </motion.li>
            {arrayImages.map((image, index) => (
              <motion.li
                className="absolute"
                key={index}
                variants={newVariants}
                transition={{ duration: 1 }}
                initial="center"
                animate={position[positionIndexes[index]]}
              >
                <div className="relative">
                  <Image
                    priority
                    width={64}
                    height={64}
                    src={image.urlImage}
                    className={clsx(
                      'h-[40px] w-[40px] overflow-hidden rounded-full object-cover'
                    )}
                    alt={`фото учасника команди ${image.name}`}
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </AnimatePresence>
        <div className="flex flex-col gap-3">
          <ButtonSlide
            onClick={handlePrev}
            ariaLabel="кнопка для переходу до попереднього фото"
          />
          <ButtonSlide
            className="rotate-180"
            onClick={handleNext}
            ariaLabel="кнопка для переходу до наступного фото"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <AnimatePresence>
          <BigFoto
            imageUrl={arrayReverse[indexBigFoto]?.urlImage}
            name={arrayReverse[indexBigFoto]?.name ?? ''}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FotoSwiper;
