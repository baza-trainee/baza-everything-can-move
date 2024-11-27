'use client';
//1-5
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ProjectsImagesProps } from './types';
import ProjectCard from './ProjectCard';

const SliderTablet2: React.FC<ProjectsImagesProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  console.log(containerRef?.current?.getBoundingClientRect().width);

  const gap = 31;
  const cardWidth = 332;
  const totalWidth = cardWidth + gap;

  console.log(
    containerWidth,
    '-',
    containerWidth / 2 - currentIndex * totalWidth - totalWidth / 2
  );

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

  return (
    <>
      {/* w-full */}
      <div className="relative mb-8 flex h-[225px] w-full justify-center overflow-hidden">
        <AnimatePresence>
          <motion.div
            ref={containerRef}
            //   drag="x"
            //   dragConstraints={{ left: 0, right: 0 }}
            //   onDragEnd={handleDragEnd}
            animate={{
              x: `${containerWidth / 2 - totalWidth / 2 - currentIndex * totalWidth}px`,
            }}
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
