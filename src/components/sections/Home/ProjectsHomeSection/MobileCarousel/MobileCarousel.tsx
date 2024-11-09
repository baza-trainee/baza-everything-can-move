'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { HomeProjectsImagesType } from './types';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
import { ButtonSlide } from '@/components/ui/SwiperFoto';

interface ProjectsSliderProps {
  images: HomeProjectsImagesType[];
}

const MobileCarousel: React.FC<ProjectsSliderProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(containerRef);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  console.log(currentIndex);
  const totalImages = images.length;

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }, [totalImages]);

  const handleBack = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  // useEffect(() => {
  //   if (isInView) {
  //     const interval = setInterval(() => {
  //       handleNext();
  //     }, 5000);
  //     return () => clearInterval(interval);
  //   }
  // }, [isInView, handleNext]);

  const positions = ['right', 'center', 'left'];
  console.log(direction);
  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },

    left: (direction: number) => ({
      //  x: direction > 0 ? '-50%' : '50%',
      x: '-50%',
      scale: 0.4,
      zIndex: 2,
    }),
    right: (direction: number) => ({
      // x: direction > 0 ? '50%' : '-50%',
      x: '50%' ,
      scale: 0.4,
      zIndex: 2,
    }),
  };
  const titleVariants = {
    exit: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    enter: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
    center: {
      x: '0%',
      opacity: 1,
    },
  };
  const getPositionIndex = (baseIndex: number, offset: number) => {
    return (baseIndex + offset + totalImages) % totalImages;
  };

  return (
    <div
      className="w-full flex-col items-center justify-center lg:hidden"
      ref={containerRef}
    >
      <div className="relative mb-6 flex h-[193px] w-[343px] items-center justify-center overflow-hidden">
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 left-3" />
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 right-3 rotate-[270deg]" />

        <AnimatePresence initial={false} custom={direction}>
          {/* {posIndex === 1 && ( */}
          <motion.div
            key={`title-${currentIndex}`}
            className="absolute bottom-0 w-full"
            custom={direction}
            variants={titleVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-center text-s leading-o-150 text-olga-light-grey">
              {images[currentIndex].name}
            </h3>
          </motion.div>
          {/* )} */}
          {positions.map((position, posIndex) => {
            const imageIndex = getPositionIndex(currentIndex, posIndex - 1);
            return (
              // <React.Fragment key={`fragment-${posIndex}`}>
              <motion.div
                key={`image-${imageIndex}`}
                custom={direction}
                initial="left"
                animate={position}
                variants={imageVariants}
                transition={{ duration: 0.7 }}
                className="absolute top-0 h-[164px] w-[320px]"
              >
                <Image
                  src={images[imageIndex].src}
                  alt={`Image ${imageIndex}`}
                  className="object-cover"
                  style={{ width: '100%' }}
                />
              </motion.div>

              // </React.Fragment>
            );
          })}
        </AnimatePresence>
      </div>
      {/* buttons div */}
      <div className="flex justify-center gap-5">
        <ButtonSlide onClick={handleBack} ariaLabel="кнопка попереднє фото" />

        <ButtonSlide
          className="rotate-180"
          ariaLabel="кнопка наступне фото"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default MobileCarousel;
