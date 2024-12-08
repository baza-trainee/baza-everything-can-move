'use client';
// I think I don't need it any more - Good one card !
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
// import type { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
import { ButtonSlide } from '@/components/ui/SwiperFoto/components/ButtonSlider';
import { ImagesHomeProjectsProps } from '@/constants/images/imagesSrc';

interface ProjectsSliderProps {
  images: ImagesHomeProjectsProps;
}
// interface ImageType {
//   pos: string;
//   src: StaticImageData;

//   name: string;
//   widthDesktop: number;
//   heightDesktop: number;
//   topDesktop: number | string;
//   leftDesktop: number | string;
//   translateZ: number;

//   widthTablet: number;
//   heightTablet: number;
//   topTablet: number | string;
//   leftTablet: number | string;
// }

// export interface ProjectsSliderProps {
//   images: ImageType[];
// }

const imageVariants = {
  // enter: (direction: number) => {
  //   return {
  //     x: direction > 0 ? '-150%' : '150%',
  //     scale: 0.5,
  //     opacity: 0.5,
  //     transition: {
  //       x: { duration: 1 },
  //       ease: 'easeIn',
  //     },
  //   };
  // },
  enter: (direction: number) => {
    return {
      x: direction > 0 ? '-150%' : '150%',
      scale: 0.5,
      opacity: 0.5,
      transition: {
        duration: 0.5,
        ease: 'linear',
      },
    };
  },
  center: {
    x: 0,
    scale: 0.5,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5, ease: 'linear' },
  },
  expand: {
    scale: 1,
    transition: { duration: 0.5, delay: 1, ease: 'linear' },
  },

  exit: (direction: number) => {
    return {
      //  x: direction > 0 ? 1000 : -1000,
      x: direction > 0 ? '150%' : '-150%',
      scale: 0.5,
      opacity: 0.5,
      transition: {
        duration: 0.5,
        ease: 'linear',
      },
    };
  },
};

const titleVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: { duration: 0.5, ease: 'linear' },
    };
  },
  center: {
    x: 0,

    opacity: 1,
    transition: { duration: 1, delay: 0.5, ease: 'linear' },
  },

  exit: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,

      opacity: 0,
    };
  },
};

const ProjectsSlider = ({ images }: ProjectsSliderProps) => {
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
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        nextImage();
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [isInView, nextImage]);

  return (
    <div className="w-full lg:hidden" ref={ref}>
      {/* images div */}
      <div className="relative mb-6 flex w-full items-center justify-center overflow-hidden">
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 left-3" />
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 right-3 rotate-[270deg]" />
        <AnimatePresence initial={false} custom={direction}>
          {images.map(
            (image, index) =>
              index === currentIndex && (
                <motion.div
                  key={image.pos}
                  className="mx-auto flex w-[320px] flex-col items-center shadow-olga-combined"
                >
                  <motion.div
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate={['center', 'expand']}
                    exit="exit"
                    className="mb-2 flex h-[164px] w-full items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={image.src}
                      className="object-cover"
                      alt={image.name}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </motion.div>

                  {/* title */}

                  <motion.div
                    className="relative w-full"
                    custom={direction}
                    variants={titleVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    // transition={{
                    //   x: { type: 'spring', stiffness: 300, damping: 30 },
                    //   opacity: { duration: 0.2 },
                    // }}
                  >
                    <h3 className="text-center text-s leading-o-150 text-olga-light-grey">
                      {image.name}
                    </h3>
                  </motion.div>

                  {/* </div> */}
                </motion.div>
              )
          )}
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
