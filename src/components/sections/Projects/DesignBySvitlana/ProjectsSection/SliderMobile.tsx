'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log('currentIndex', currentIndex);
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 15000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="relative mb-9 h-[224px] w-[334px] overflow-hidden">
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
  );
};

export default SliderMobile;
