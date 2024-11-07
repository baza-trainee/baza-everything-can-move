'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
import { ButtonSlide } from '@/components/ui/SwiperFoto/ButtonSlider';

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
  //   enter: (direction: number) => {
  //     return {
  //       x: direction > 0 ? -1000 : 1000,
  //       scale: 0.5,
  //       opacity: 0.5,
  //       transition: {
  //         x: { duration: 0.5 },
  //         ease: 'easeOut',
  //       },
  //     };
  //   },
  enter: (direction: number) => ({
    x: direction > 0 ? -500 : 500,
    scale: 0.5,
    opacity: 0.7,
    transition: {
      duration: 0.6,
      ease: 'easeIn',
    },
  }),
  //   center: {
  //     x: 0,
  //     scale: 0.5,
  //     opacity: 1,
  //     transition: { duration: 0.5, delay: 0.5 },
  //   },
  center: {
    x: 0,
    // scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 300,
      damping: 30,
      delay: 1,
    },
  },
  //   expand: {
  //     scale: 1,
  //     transition: { duration: 0.7, delay: 1 },
  //   },
  expand: {
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
  //   exit: (direction: number) => {
  //     return {
  //       x: direction > 0 ? 1000 : -1000,
  //       scale: 0.5,
  //       opacity: 0.5,
  //       transition: {
  //         duration: 0.5,
  //         ease: 'easeIn',
  //       },
  //     };
  //   },
  exit: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    scale: 0.5,
    opacity: 0.7,
    transition: {
      duration: 0.6,
      ease: 'easeIn',
    },
  }),
};

const titleVariants = {
  enter: (direction: number) => {
    return { x: direction > 0 ? -1000 : 1000, opacity: 0 };
  },
  center: {
    x: 0,

    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },

  exit: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,

      opacity: 0,
    };
  },
};

const ProjectsSlider3: React.FC<ProjectsSliderProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollerRef = React.useRef<HTMLDivElement | null>(null);

  const isInView = useInView(containerRef);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  //   const addAnimation = useCallback(() => {
  //     const duplicatedImages = images.concat(images);

  //     return duplicatedImages;
  //   }, [images]);

  //   useEffect(() => {
  //     addAnimation();
  //   }, [addAnimation]);

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
  //   useEffect(() => {
  //     if (isInView) {
  //       const interval = setInterval(() => {
  //         nextImage();
  //       }, 15000);
  //       return () => clearInterval(interval);
  //     }
  //   }, [isInView, nextImage]);

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
        {/* <div
          ref={scrollerRef}
          className="flex h-[164px] w-max flex-nowrap"
          style={{ perspective: '1000px' }}
        > */}
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const isPrevious =
            index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;
          //   console.log('current', isActive);
          //   console.log('currentIndex', currentIndex);
          return (
            <AnimatePresence initial={false} custom={direction}>
              const isActive = index === currentIndex;
              {(isActive || isPrevious || isNext) && (
                <motion.div
                  key={image.pos}
                  style={{ transformStyle: 'preserve-3d' }}
                  className={clsx(
                    'absolute mb-2 flex w-[120px]',

                    isActive &&
                      'shadow-olga-combined left-3 top-0 z-10 mx-auto w-[320px] flex-col items-center',
                    isPrevious && 'w-120px left-0 top-[69px] h-16',
                    isNext && 'w-120px right-0 top-[69px] h-16'
                  )}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate={['center', 'expand']}
                  //   animate={isActive ? ['center', 'expand'] : 'expand'}
                  exit="exit"
                >
                  {/* <motion.div
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate={['center', 'expand']}
                  exit="exit"
                  className="mb-2 flex h-[164px] w-full items-center justify-center overflow-hidden"
                > */}
                  <Image
                    src={image.src}
                    className="object-cover"
                    alt={image.name}
                    style={{
                      //   width: '100%',
                      //   height: '100%',
                      transform: 'scale(1)',
                      transition: 'transform 0.8s ease-in-out',
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
            </AnimatePresence>
          );
        })}
        {/* </div> */}

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
