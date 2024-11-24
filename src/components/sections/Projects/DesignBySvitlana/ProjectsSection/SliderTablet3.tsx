'use client';
//three
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ProjectsImagesProps } from './types';
import ProjectCard from './ProjectCard';

const SliderTablet3: React.FC<ProjectsImagesProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [positions, setPositions] = useState<string[]>([]);
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [visibleCount, setVisibleCount] = useState(3);
  const gap = 31;
  const cardWidth = 332;
  const totalImages = images.length;

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

      setPositions(newPositions);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cardWidth, gap]);

  const calculatePositions = useCallback(() => {
    const positionsArray = [];

    for (let i = 0; i < visibleCount; i++) {
      const relativeIndex = (i - currentIndex + visibleCount) % visibleCount;

      const offsetIndex =
        relativeIndex > visibleCount / 2
          ? relativeIndex - visibleCount
          : relativeIndex;

      const xPosition = offsetIndex * (cardWidth + gap);
      positionsArray.push(xPosition);
    }
    const sortedPositions = positionsArray.sort((a, b) => a - b);

    return sortedPositions;
  }, [images.length, currentIndex, totalImages]);

  const [positionImage, setPositionImage] = useState(calculatePositions);

  // useEffect(() => {
  //   setPositionIndexes(calculatePositions);
  // }, [currentIndex, calculatePositions]);

  const imageVariants = {
    center: { x: '0px', opacity: 1, zIndex: 10 },

    left2: { x: '-726px', opacity: 0, zIndex: 0 },
    left1: { x: '-363px', opacity: 0.5, zIndex: 10 },
    right2: { x: '726px', opacity: 0, zIndex: 0 },

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
              initial="center"
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
