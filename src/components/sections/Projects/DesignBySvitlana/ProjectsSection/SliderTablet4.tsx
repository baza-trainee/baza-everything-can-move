'use client';
//three new one
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ProjectsImagesProps } from './types';
import ProjectCard from './ProjectCard';

const SliderTablet4: React.FC<ProjectsImagesProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  console.log('index', currentIndex);
  const newImgArr = [...images, ...images];

  const [positions, setPositions] = useState<string[]>([
    // 'left5',
    // 'left4',
    // 'left3',
    'left2',
    'left1',
    'center',
    'right1',
    'right2',
    // 'right3',
    // 'right4',
  ]);

  const handleClick = (index: number) => {
    // setPositionIndexes(() => {
    //   const updatedIndexes = [];
    //   for (let i = 0; i < images.length; i++) {
    //     updatedIndexes.push((index + i) % images.length);
    //   }
    //   console.log('updInd', updatedIndexes);
    //   return updatedIndexes;
    // });

    setCurrentIndex(index);
  };
  const gap = 31;
  const cardWidth = 332;
  const totalImages = images.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalImages]);

  const [positionIndexes, setPositionIndexes] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  const [visibleCount, setVisibleCount] = useState(3);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       const containerWidth = window.innerWidth;
  //       const count = containerWidth < 1122 ? 3 : 5;

  //       setVisibleCount(count);
  //       //left right and so on
  //       const newPositions = ['center'];
  //       for (let i = 1; i <= Math.floor(count / 2); i++) {
  //         newPositions.unshift(`left${i}`);
  //         newPositions.push(`right${i}`);
  //       }
  //       console.log('newPositions', newPositions);
  //       setPositions(newPositions);
  //     };

  //     handleResize();
  //     window.addEventListener('resize', handleResize);
  //     return () => window.removeEventListener('resize', handleResize);
  //   }, [cardWidth, gap]);

  //   const calculatePositions = useCallback(() => {
  //     const positionsArray = [];

  //     for (let i = 0; i < visibleCount; i++) {
  //       const relativeIndex = (i - currentIndex + visibleCount) % visibleCount;

  //       const offsetIndex =
  //         relativeIndex > visibleCount / 2
  //           ? relativeIndex - visibleCount
  //           : relativeIndex;

  //       const xPosition = offsetIndex * (cardWidth + gap);
  //       positionsArray.push(xPosition);
  //     }
  //     const sortedPositions = positionsArray.sort((a, b) => a - b);

  //     return sortedPositions;
  //   }, [positions, visibleCount, currentIndex]);

  //const [positionImage, setPositionImage] = useState(calculatePositions);

  //   useEffect(() => {
  //     setPositionIndexes(calculatePositions);
  //   }, [currentIndex, calculatePositions]);

  const imageVariants = {
    center: { x: '0px', opacity: 1 },
    // left5: { x: '-1926px', opacity: 0 },
    // left4: { x: '-1563px', opacity: 0 },
    // left3: { x: '-1163px', opacity: 0 },
    left2: { x: '-726px', opacity: 0 },
    left1: { x: '-363px', opacity: 0.5 },

    right1: { x: '363px', opacity: 0.5 },
    right2: { x: '726px', opacity: 0 },
    // right3: { x: '1163px', opacity: 0 },

    // right4: { x: '1563px', opacity: 0 },
  };

  const generateVariants = (length: number) => {
    const variants: Variants = {};
  };

  const getPositionIndex = (baseIndex: number, offset: number) => {
    return (baseIndex + offset + totalImages) % totalImages;
  };
  return (
    <>
      <div className="relative mb-8 flex h-[225px] w-full justify-center overflow-hidden">
        <AnimatePresence>
          {positions.map((position, posIndex) => {
            const imageIndex = getPositionIndex(currentIndex, posIndex - 1);

            return (
              <motion.div
                key={`image-${imageIndex}`}
                variants={imageVariants}
                initial="left1"
                animate={position}
                transition={{ duration: 0.7 }}
                style={{
                  position: 'absolute',
                  width: `${cardWidth}px`,
                  // transform: `translateX(-${(cardWidth + gap) * currentIndex}px)`,
                }}
              >
                <ProjectCard {...images[imageIndex]} />
              </motion.div>
            );
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

export default SliderTablet4;
