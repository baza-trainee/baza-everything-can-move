'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ProjectsImagesProps } from './types';
import ProjectCard from './ProjectCard';

const SliderTablet3: React.FC<ProjectsImagesProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const positions = ['left2', 'left1', 'center', 'right1', 'right2'];
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const gap = 31;
  const cardWidth = 332;
  const totalImages = images.length;

  // const calculatePositions = useCallback(() => {
  //   const positions = [];
  //   const halfVisibleImages = Math.floor(totalImages / 2);

  //   for (let i = 0; i < totalImages; i++) {
  //     const relativeIndex = (i - currentIndex + totalImages) % totalImages;

  //     const offsetIndex =
  //       relativeIndex > halfVisibleImages
  //         ? relativeIndex - totalImages
  //         : relativeIndex;

  //     const xPosition = offsetIndex * (cardWidth + gap);
  //     positions.push(xPosition);
  //   }
  //   return positions;
  // }, [currentIndex, cardWidth, gap, totalImages]);

  console.log('positionIndexes', positionIndexes);
  console.log('currentIndex', currentIndex);

  // useEffect(() => {
  //   setPositionIndexes(calculatePositions);
  // }, [currentIndex, calculatePositions]);

  const imageVariants = {
    center: { x: '0px', opacity: 1, zIndex: 10 },

    left2: { x: '-726px', opacity: 0.5, zIndex: 0 },
    left1: { x: '-363px', opacity: 0.5, zIndex: 10 },
    right2: { x: '726px', opacity: 0.5, zIndex: 0 },

    right1: { x: '363px', opacity: 0.5, zIndex: 10 },
  };

  const handleClick = (index: number) => {
    setPositionIndexes(() => {
      const updatedIndexes = [];
      for (let i = 0; i < images.length; i++) {
        updatedIndexes.push((index + i) % images.length);
      }
      return updatedIndexes;
    });
    setCurrentIndex(index);
  };
  const getPositionIndex = (baseIndex: number, offset: number) => {
    return (baseIndex + offset + totalImages) % totalImages;
  };
  return (
    <>
      <div className="relative mb-8 flex h-[225px] w-full justify-center overflow-hidden">
        <AnimatePresence>
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              initial="left2"
              animate={positions[positionIndexes[index]]}
              transition={{ duration: 0.7 }}
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

export default SliderTablet3;
