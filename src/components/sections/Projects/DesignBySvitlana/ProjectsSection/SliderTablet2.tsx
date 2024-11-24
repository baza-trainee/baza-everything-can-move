'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ProjectsImagesProps } from './types';
import ProjectCard from './ProjectCard';

const SliderTablet2: React.FC<ProjectsImagesProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [positions, setPositions] = useState<string[]>([]);

  console.log('positions', positions);
  //  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const totalImages = images.length;
  const gap = 31;
  const cardWidth = 334;
  const extendedImages = [...images, ...images];

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = window.innerWidth;
      const count = containerWidth < 1122 ? 3 : 5;

      setVisibleCount(count);

      const newPositions = ['center'];
      for (let i = 1; i <= Math.floor(count / 2); i++) {
        newPositions.unshift(`left${i}`);
        newPositions.push(`right${i}`);
      }
      console.log('newPositions:', newPositions);
      setPositions(newPositions);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cardWidth, gap]);

  const calculatePositions = useCallback(() => {
    //const halfVisible = Math.floor(visibleCount / 2);
    const positionsArray = [];

    for (let i = 0; i < extendedImages.length; i++) {
      const relativeIndex =
        (i - currentIndex + extendedImages.length) % extendedImages.length;

      const offsetIndex =
        relativeIndex > totalImages / 2
          ? relativeIndex - extendedImages.length
          : relativeIndex;

      const xPosition = offsetIndex * (cardWidth + gap);
      positionsArray.push(xPosition);
    }
    console.log('positionsArray', positionsArray);
    return positionsArray;
  }, [currentIndex, cardWidth, gap, extendedImages, totalImages]);

  const positionsArray = calculatePositions();

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  //     }, 5000);
  //     return () => clearInterval(interval);
  //   }, [totalImages]);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="relative mb-8 flex h-[225px] w-full justify-center overflow-hidden">
        <AnimatePresence>
          {extendedImages.map((image, index) => {
            const position = positionsArray[index];

            const isVisible =
              Math.abs(position) < (visibleCount / 2) * (cardWidth + gap);

            return isVisible ? (
              <motion.div
                key={`card-${index}`}
                initial={{ x: position, opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{
                  x: position,
                  opacity: index % totalImages === currentIndex ? 1 : 0.5,
                }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  width: `${cardWidth}px`,
                }}
              >
                <ProjectCard {...image} />
              </motion.div>
            ) : null;
          })}
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

export default SliderTablet2;
