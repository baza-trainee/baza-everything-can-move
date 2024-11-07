'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  enter: (direction: number) => {
    return {
      x: direction > 0 ? '50%' : '-50%',
      scale: 0.5,
      opacity: 0.5,
      transition: {
        x: { duration: 0.5 },
        ease: 'easeOut',
      },
    };
  },
  center: {
    x: 0,
    scale: 0.5,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },
  expand: {
    scale: 1,
    transition: { duration: 0.7, delay: 1 },
  },

  exit: (direction: number) => {
    return {
      x: direction > 0 ? '50%' : '-50%',
      scale: 0.5,
      opacity: 0.5,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    };
  },
};

const titleVariants = {
  enter: (direction: number) => {
    return { x: direction > 0 ? '-10%' : '10%', opacity: 0.5 };
  },
  center: {
    x: 0,

    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },

  exit: (direction: number) => {
    return {
      x: direction > 0 ? '100%' : '-100%',

      opacity: 0.5,
    };
  },
  adjacent: (prevIndex: number, nextIndex: number) => {
    return {
      opacity: 0.7, // Слегка прозрачное

      zIndex: 1, // На заднем плане
      x: prevIndex && '-100%',
      X: nextIndex && '100%',
      transition: {
        duration: 0.5,
      },
    };
  },
};

const ProjectsSlider: React.FC<ProjectsSliderProps> = ({ images }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
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
  // useEffect(() => {
  //   if (isInView) {
  //     const interval = setInterval(() => {
  //       nextImage();
  //     }, 15000);
  //     return () => clearInterval(interval);
  //   }
  // }, [isInView, nextImage]);

  return (
    <div className="w-full lg:hidden" ref={ref}>
      {/* images div */}
      <div
        style={{ perspective: '1000px' }}
        className="h-193px] relative mb-6 flex w-full items-center justify-center overflow-hidden"
      >
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 left-3" />
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 right-3 rotate-[270deg]" />
        <AnimatePresence initial={false} custom={direction}>
          {images.map((image, index) => {
            const pos = index - currentIndex;
            const isCenter = pos === 0;
            const nextIndex = (currentIndex + 1) % images.length;
            const prevIndex =
              (currentIndex - 1 + images.length) % images.length;
            const isAdjacent = index === nextIndex || index === prevIndex;
            // console.log('currentIndex', currentIndex);
            // console.log('nextIndex', nextIndex);
            // console.log('prevIndex ', prevIndex);
            return (
              <>
                {isAdjacent && (
                  <motion.div
                    key={index}
                    className="flex w-[120px]"
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    exit="exit"
                    animate="adjacent"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* <motion.div
                      // custom={direction}
                      // variants={imageVariants}
                      // initial="enter"
                      //animate={['center', 'expand']}
                      //exit="exit"
                      // className="flex h-[64px] w-full overflow-hidden"
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    > */}
                    <Image
                      src={image.src}
                      className="object-cover"
                      alt={image.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        transform: 'translateZ(10px)',
                        zIndex: 0,
                      }}
                    />
                    {/* </motion.div> */}

                    {/* title */}

                    {/* </div> */}
                  </motion.div>
                )}
                {/* norm!!!!! */}
                {index === currentIndex && (
                  <motion.div
                    key={image.pos}
                    className="shadow-olga-combined mx-auto flex w-[320px] flex-col items-center"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <motion.div
                      custom={direction}
                      variants={imageVariants}
                      initial="enter"
                      animate={['center', 'expand']}
                      exit="exit"
                      className="mb-2 flex h-[164px] w-full items-center justify-center overflow-hidden"
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <Image
                        src={image.src}
                        className="object-cover"
                        alt={image.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          transform: 'translateZ(100px)',
                        }}
                      />
                    </motion.div>

                    {/* title */}

                    <motion.div
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
                    </motion.div>

                    {/* </div> */}
                  </motion.div>
                )}
              </>
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

export default ProjectsSlider;
