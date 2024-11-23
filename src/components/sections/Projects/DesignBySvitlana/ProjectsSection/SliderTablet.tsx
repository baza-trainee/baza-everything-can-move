'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { ProjectsImagesProps } from './types';
import ProjectCard from './ProjectCard';

const SliderTablet: React.FC<ProjectsImagesProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = images.length;

  const positions = ['right', 'center', 'left'];

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }, [totalImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const imageVariants = {
    center: { x: '0%' },
    left: {
      x: '-100%',
    },
    right: { x: '100%' },
  };

    const getPositionIndex = (baseIndex: number, offset: number) => {
      console.log("base",baseIndex, "offset",offset)
    return (baseIndex + offset + totalImages) % totalImages;
  };

  return (
    <div className="relative mb-8 flex h-[225px] w-full overflow-hidden">
      <AnimatePresence initial={false}>
        {positions.map((position, posIndex) => {
          const imageIndex = getPositionIndex(currentIndex, posIndex - 1);
          return (
            <motion.div
              key={`image-${imageIndex}`}
              initial="left"
              animate={position}
              variants={imageVariants}
              transition={{ duration: 0.7 }}
              className="absolute"
            >
              <ProjectCard {...images[imageIndex]} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default SliderTablet;
