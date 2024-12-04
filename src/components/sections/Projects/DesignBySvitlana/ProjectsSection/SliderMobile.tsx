'use client';

import React, { useState, useRef } from 'react';
import { PanInfo } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';

import { ProjectsImagesProps } from './types';
import ProjectCard from './ProjectCard';

const imageVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? '100%' : '-100%',

      opacity: 0,
    };
  },

  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? '-100%' : '100%',

      opacity: 0,
    };
  },
};

const SliderMobile: React.FC<ProjectsImagesProps> = ({ images }) => {
  const constraintsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [direction, setDirection] = useState(0);

  // const nextImage = useCallback(() => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // }, [images.length]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    //  <--------
    if (info.offset.x < -50) {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (info.offset.x > 50) {
      //  -------->
      setDirection(-1);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div
        className="relative mb-9 h-[225px] w-[334px] overflow-hidden"
        ref={constraintsRef}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`title-${currentIndex}`}
            variants={imageVariants}
            custom={direction}
            //initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute"
            drag="x"
            dragConstraints={constraintsRef}
            //dragElastic={0}
            onDragEnd={handleDragEnd}
          >
            <ProjectCard {...images[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mb-8 flex justify-center gap-[15px]">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 cursor-pointer rounded-full border border-white ${index === currentIndex ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default SliderMobile;
