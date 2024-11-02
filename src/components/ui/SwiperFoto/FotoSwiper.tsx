'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { ButtonSlide } from './ButtonSlider';
import { ObjectArrayFoto } from './types';
import { generatePositions, generateVariants } from './ui';

const MotionImage = motion.create(Image);

const FotoSwiper = ({ arrayImages }: { arrayImages: ObjectArrayFoto[] }) => {
  if (!arrayImages.length) return null;

  const [positionIndexes, setPositionIndexes] = useState(
    arrayImages.map((_, index) => index)
  );
  const [indexBigFoto, setIndexBigFoto] = useState(
    Math.floor(positionIndexes.length / 2)
  );
  const arrayReverse = arrayImages.toReversed();

  const handleNext = () => {
    setPositionIndexes((prevPosition) =>
      prevPosition.map((prevIndex) => (prevIndex + 1) % arrayImages.length)
    );
  };

  const handlePrev = () => {
    setPositionIndexes((prevPosition) =>
      prevPosition.map(
        (prevIndex) => (prevIndex - 1 + arrayImages.length) % arrayImages.length
      )
    );
  };

  useEffect(() => {
    const centerIdx = Math.floor(positionIndexes.length / 2);
    const newIndexBigFoto = positionIndexes[centerIdx];
    setIndexBigFoto(newIndexBigFoto);
  }, [positionIndexes]);

  const position = generatePositions(arrayImages.length);
  const newVariants = generateVariants(arrayImages.length);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [handleNext]);

  return (
    <div className="flex w-full justify-between">
      <div className="flex w-full max-w-16 flex-col justify-center gap-6">
        <ul className="relative flex h-full max-h-[172px] flex-col items-center">
          <AnimatePresence>
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
              <motion.svg
                width="62px"
                height="62px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  animate={{ pathLength: 0, opacity: 0.8 }}
                  transition={{
                    duration: 5,
                    ease: 'linear',
                  }}
                  d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#ffffff"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.li>
          </AnimatePresence>
          {arrayImages.map((image, index) => {
            return (
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
            );
          })}
        </ul>
        <div className="flex flex-col gap-3">
          <ButtonSlide onClick={handlePrev} ariaLabel="кнопка попереднє фото" />
          <ButtonSlide
            className="rotate-180"
            onClick={handleNext}
            ariaLabel="кнопка наступне фото"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <AnimatePresence>
          <motion.div>
            <div className="flex h-[300px] w-[255px] justify-center lg:h-[300px] lg:w-[240px] 2xl:h-[364px] 2xl:w-[365px]">
              <MotionImage
                key={indexBigFoto}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1 }}
                width={365}
                height={364}
                src={arrayReverse[indexBigFoto]?.urlImage}
                alt={arrayReverse[indexBigFoto]?.name}
                className="object-cover"
                priority
              />
            </div>
            <motion.p
              key={indexBigFoto}
              initial={{
                y: '100px',
                opacity: 0,
              }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className="mt-1 text-center text-[14px] text-olga-light-grey"
            >
              {arrayReverse[indexBigFoto]?.name}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FotoSwiper;
