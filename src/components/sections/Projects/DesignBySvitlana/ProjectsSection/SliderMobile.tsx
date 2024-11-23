'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { ProjectsImagesProps } from './types';
import ProjectCard from './ProjectCard';

const imageVariants = {
  enter: () => {
    return {
      x: '-100%',
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: () => {
    return {
      x: '100%',

      opacity: 0,
    };
  },
};

const SliderMobile: React.FC<ProjectsImagesProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(4);
  const paginationArr = [0, 1, 2, 3, 4];

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 15000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <>
      <div className="relative mb-9 h-[225px] w-[334px] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={`title-${currentIndex}`}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute"
          >
            <ProjectCard {...images[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mb-8 flex justify-center gap-[15px]">
        {paginationArr.map((_, index) => (
          <div
            key={index}
            className={clsx(
              'h-3 w-3 rounded-full border border-white',
              index === currentIndex ? 'bg-white' : 'bg-transparent'
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </>
  );
};

export default SliderMobile;
