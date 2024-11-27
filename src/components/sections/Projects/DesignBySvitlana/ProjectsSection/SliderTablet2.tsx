'use client';
//1-5
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PanInfo } from 'framer-motion';
import { ProjectsImagesProps } from './types';
import ProjectCard from './ProjectCard';

const SliderTablet2: React.FC<ProjectsImagesProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [direction, setDirection] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  console.log('current index', currentIndex);

  const gap = 31;
  const cardWidth = 332;
  const totalWidth = cardWidth + gap;

  useEffect(() => {
    if (containerRef.current) {
      const { width } = containerRef.current.getBoundingClientRect();
      setContainerWidth(width);
    }

    const handleResize = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        setContainerWidth(width);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeDistance = info.offset.x;
    const swipeCards = Math.round(swipeDistance / totalWidth);

    if (swipeCards > 0) {
      if (currentIndex === 0) return;
      setDirection(-1); // to right
    } else if (swipeCards < 0) {
      if (currentIndex === images.length - 1) return;
      setDirection(1); // to left
    }
    setCurrentIndex((prevIndex) =>
      Math.max(0, Math.min(prevIndex - swipeCards, images.length - 1))
    );
  };
  const imageVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
    }),

    animate: {
      x: `${containerWidth / 2 - totalWidth / 2 - currentIndex * totalWidth}px`,
    },

    exit: (direction: number) => ({
      x: direction > 1 ? -100 : 100,
    }),
  };
  return (
    <>
      {/* w-full */}
      <div className="relative mb-8 flex h-[225px] w-full justify-center overflow-hidden">
        <AnimatePresence custom={direction}>
          <motion.div
            ref={containerRef}
            variants={imageVariants}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial="initial"
            // animate={{
            //   x: `${containerWidth / 2 - totalWidth / 2 - currentIndex * totalWidth}px`,
            // }}
            animate="animate"
            transition={{ duration: 0.5 }}
            className="flex"
            // style={{
            //   transform: `translateX(calc(50% - ${totalWidth / 2}px - ${currentIndex * totalWidth}px ))`,
            // }}
          >
            {images.map((image, index) => {
              // const position = wrapIndex(0, images.length, index - currentIndex);

              return (
                <motion.div
                  key={`image-${index}`}
                  className="relative"
                  style={{
                    width: `${cardWidth}px`,
                    marginRight: `${gap}px`,
                    //   transform: `translateX(${position * totalWidth}px)`,
                  }}
                >
                  <ProjectCard {...image} />
                </motion.div>
              );
            })}
          </motion.div>
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
