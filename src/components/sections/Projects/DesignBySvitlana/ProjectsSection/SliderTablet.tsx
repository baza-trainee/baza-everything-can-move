'use client';
//not THIS ONE!but ok exept runners
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ProjectsImagesProps } from './types';
import ProjectCard from './ProjectCard';

const SliderTablet: React.FC<ProjectsImagesProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const newImgArr = [...images, ...images];

  const positions = [
    'left5',
    'left4',
    'left3',
    'left2',
    'left1',
    'center',
    'right1',
    'right2',
    'right3',
    'right4',
  ];
  const gap = 31;
  const cardWidth = 332;
  const dif = cardWidth + gap;
  const totalImages = images.length * 2;

  const handleClick = (index: number) => {
    const newIndex =
      currentIndex >= images.length - 1 && currentIndex <= totalImages - 1
        ? index + images.length
        : index;

    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 10000);
    return () => clearInterval(interval);
  }, [totalImages]);

  const imageVariants = {
    center: { x: '0px', opacity: 1 },
    left5: { x: `${-5 * dif}px`, opacity: 0 },
    left4: { x: `${-4 * dif}px`, opacity: 0 },
    left3: { x: `${-3 * dif}px`, opacity: 0 },
    left2: { x: `${-2 * dif}px`, opacity: 0.5 },
    left1: { x: `${-dif}px`, opacity: 0.5 },

    right1: { x: `${dif}px`, opacity: 0.5 },
    right2: { x: `${2 * dif}px`, opacity: 0.5 },
    right3: { x: `${3 * dif}px`, opacity: 0 },

    right4: { x: `${4 * dif}px`, opacity: 0 },
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
                initial="center"
                animate={position}
                transition={{ duration: 0.7 }}
                style={{
                  position: 'absolute',
                  width: `${cardWidth}px`,

                  // transform: `translateX(-${(cardWidth + gap) * currentIndex}px)`,
                }}
              >
                <ProjectCard {...newImgArr[imageIndex]} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mb-8 flex justify-center gap-[15px]">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full border border-white ${index === currentIndex % (totalImages / 2) ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default SliderTablet;
