'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
import { ButtonSlide } from '@/components/ui/SwiperFoto';

interface ImageType {
  pos: string;
  src: StaticImageData;

  name: string;
  width: number;
  height: number;
  top: number | string;
  left: number | string;
  translateZ: number;
}

export interface ProjectsSliderProps {
  images: ImageType[];
}

const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    z: 0,
    scale: 0.1,
    opacity: 0.7,
    transition: {
      x: { duration: 0.5 },
    },
  }),

  center: {
    x: 0,
    scale: 0.3,
    z: 100,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },

  expand: {
    scale: 1,
    z: 200,
    transition: { duration: 0.7, delay: 1 },
  },

  exit: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 0.3,
    z: 0,
    opacity: 0.7,
    transition: {
      duration: 0.5,
      //   ease: 'easeIn',
    },
  }),
  side: {
    x: 0,
    scale: 0.9,
    opacity: 0.9,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

// const titleVariants = {
//   enter: (direction: number) => {
//     return { x: direction > 0 ? -1000 : 1000, opacity: 0 };
//   },
//   center: {
//     x: 0,
//     scale: 1,
//     opacity: 1,
//     transition: { duration: 0.5, delay: 0.5 },
//   },

//   exit: (direction: number) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,

//       opacity: 0,
//     };
//   },
// };

const ProjectsSlider3: React.FC<ProjectsSliderProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(containerRef);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = useCallback(() => {
    setDirection(1);

    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        nextImage();
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [isInView, nextImage]);

  return (
    <div
      className="w-full lg:hidden"
      style={{ perspective: '1000px' }}
      ref={containerRef}
    >
      {/* images div */}
      <div className="relative mb-6 flex h-[193px] w-[343px] items-center justify-center overflow-hidden">
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 left-3" />
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 right-3 rotate-[270deg]" />
        <AnimatePresence initial={false} custom={direction}>
          {images.map((image, index) => {
            const isActive = index === currentIndex;
            const isPrevious =
              index === (currentIndex - 1 + images.length) % images.length;
            const isNext = index === (currentIndex + 1) % images.length;

            return (
              <React.Fragment key={`fragment-${index}`}>
                {(isActive || isPrevious || isNext) && (
                  <motion.div
                    key={index}
                    style={{ transformStyle: 'preserve-3d' }}
                    className={clsx(
                      'absolute mb-2 flex',

                      isActive &&
                        'z-10 mx-auto max-w-[310px] flex-col items-center shadow-olga-combined',
                      isPrevious && 'w-120px left-0 top-[69px] h-16',
                      isNext && 'w-120px right-0 top-[69px] h-16'
                    )}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate={isActive ? ['center', 'expand'] : 'side'}
                    exit="exit"
                  >
                    <Image
                      src={image.src}
                      className="object-cover"
                      alt={image.name}
                      style={{
                        width: '100%',
                        // height: '100%',
                        // transform: 'scale(1)',
                        // transition: 'transform 0.8s ease-in-out',
                      }}
                    />
                    {/* </motion.div> */}
                    {/* title */}

                    {/* <motion.div
                      className="relative w-full"
                      custom={direction}
                      variants={titleVariants}
                      initial="enter"
                      animate={['center']}
                      exit="exit"
                      transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                    >
                      <h3 className="text-center text-s leading-o-150 text-olga-light-grey">
                        {image.name}
                      </h3>
                    </motion.div> */}
                    {/* </div> */}
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </AnimatePresence>

        {/*project card */}
      </div>
      {/* buttons div */}
      <div className="flex justify-center gap-5">
        {/*onClick={handlePrev} */}
        <ButtonSlide onClick={prevImage} ariaLabel="кнопка попереднє фото" />
        {/* onClick={handleNext} */}
        <ButtonSlide
          className="rotate-180"
          ariaLabel="кнопка наступне фото"
          onClick={nextImage}
        />
      </div>
    </div>
  );
};

export default ProjectsSlider3;
