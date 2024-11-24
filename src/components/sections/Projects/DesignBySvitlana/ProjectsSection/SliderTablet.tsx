'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ProjectsImagesProps } from './types';
import ProjectCard from './ProjectCard';

const SliderTablet: React.FC<ProjectsImagesProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const gap = 31;
  const cardWidth = 332;
  const totalImages = images.length;

  const calculatePositions = useCallback(() => {
    const positions = [];
    const halfVisibleImages = Math.floor(totalImages / 2);

    for (let i = 0; i < totalImages; i++) {
      const relativeIndex = (i - currentIndex + totalImages) % totalImages;

      const offsetIndex =
        relativeIndex > halfVisibleImages
          ? relativeIndex - totalImages
          : relativeIndex;

      const xPosition = offsetIndex * (cardWidth + gap);
      positions.push(xPosition);
    }
    return positions;
  }, [currentIndex, cardWidth, gap, totalImages]);

  const [positionIndexes, setPositionIndexes] = useState(calculatePositions);
  //   console.log('positionIndexes', positionIndexes);
  //   console.log('currentIndex', currentIndex);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [totalImages]);

  useEffect(() => {
    setPositionIndexes(calculatePositions);
  }, [currentIndex, calculatePositions]);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="relative mb-8 flex h-[225px] w-full justify-center overflow-hidden">
        <AnimatePresence>
          {images.map((image, index) => (
            <motion.div
              key={`card-${index}`}
              initial={{ x: positionIndexes[index], opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{
                x: positionIndexes[index],
                opacity: index === currentIndex ? 1 : 0.5,
              }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                width: `${cardWidth}px`,
                // transform: `translateX(-${(cardWidth + gap) * currentIndex}px)`,
              }}
            >
              <ProjectCard {...image} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mb-8 flex justify-center gap-[15px]">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full border border-white ${index === currentIndex ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default SliderTablet;
