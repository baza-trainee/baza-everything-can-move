'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ProjectsImagesProps } from './types';

const SliderTablet1: React.FC<ProjectsImagesProps> = ({ images }) => {
  const cardWidth = 332;
  const gap = 31;
  const dif = cardWidth + gap;

  const extendedImages = [...images, ...images]; // Удлинённый массив

  const [currentIndex, setCurrentIndex] = useState(2); // Центральный индекс

  const positions = ['left2', 'left1', 'center', 'right1', 'right2'];

  const imageVariants = {
    center: { x: '0px', opacity: 1, zIndex: 10 },
    left2: { x: `${-2 * dif}px`, opacity: 0.5, zIndex: 0 },
    left1: { x: `${-dif}px`, opacity: 0.5, zIndex: 0 },
    right1: { x: `${dif}px`, opacity: 0.5, zIndex: 10 },
    right2: { x: `${2 * dif}px`, opacity: 0.5 },
    hidden: { x: '0px', opacity: 0 },
  };

  //   const calculateVisibleIndexes = () => {
  //     return Array.from(
  //       { length: 5 },
  //       (_, i) =>
  //         (currentIndex - 2 + i + extendedImages.length) % extendedImages.length
  //     );
  //   };
  const calculateVisibleIndexes = () => {
    return Array.from(
      { length: 10 },
      (_, i) =>
        (currentIndex - 2 + i + extendedImages.length) % extendedImages.length
    );
  };
  const visibleIndexes = calculateVisibleIndexes();

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="relative mb-8 flex h-[225px] w-full justify-center overflow-hidden">
        <AnimatePresence>
          {extendedImages.map((image, index) => {
            const position = visibleIndexes.indexOf(index);

            // Карточка видима только если она в видимых индексах
            if (position === -1) return null;

            return (
              <motion.div
                key={index}
                variants={imageVariants}
                initial="hidden"
                exit="hidden"
                animate={positions[position]}
                transition={{ duration: 0.7 }}
                style={{
                  position: 'absolute',
                  width: `${cardWidth}px`,
                }}
              >
                <ProjectCard {...extendedImages[index]} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Пагинация */}
      <div className="mb-8 flex justify-center gap-[15px]">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 cursor-pointer rounded-full border border-white ${
              index === currentIndex ? 'bg-white' : 'bg-transparent'
            }`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default SliderTablet1;
