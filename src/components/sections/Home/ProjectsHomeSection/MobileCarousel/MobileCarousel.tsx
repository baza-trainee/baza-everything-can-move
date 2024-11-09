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

  const totalImages = images.length;

  console.log('currentIndex', currentIndex);

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

  const imageVariants = {
    center: { x: '0%', scale: 0.9, zIndex: 5 },
    left: { x: '-50%', scale: 0.4, zIndex: 2 },
    right: { x: '50%', scale: 0.4, zIndex: 2 },
  };
  const titleVariants = {
    // enter: (direction: number) => {
    //   return { x: direction > 0 ? -500 : 500, opacity: 0 };
    // },
    enter: {
      center: { x: '0%', opacity: 1 },
    },

    exit: (direction: number) => {
      return {
        x: direction > 0 ? 500 : -500,

        opacity: 0,
      };
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
      <div
        // style={{ perspective: '1000px' }}
        className="relative mb-6 flex h-[193px] w-[343px] items-center justify-center overflow-hidden"
      >
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 left-3" />
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 right-3 rotate-[270deg]" />
        {/* <div className="flex h-[320px] flex-col items-center justify-center"> */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="absolute bottom-0 w-full"
            custom={direction}
            variants={titleVariants}
            initial="enter"
            // animate={{ x: direction > 0 ? 500 : -500, opacity: 1 }}
            // animate={['center']}
            // exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <h3 className="text-center text-s leading-o-150 text-olga-light-grey">
              {images[currentIndex].name}
            </h3>
          </motion.div>
          {positions.map((position, posIndex) => {
            const imageIndex = getPositionIndex(currentIndex, posIndex - 1);
            return (
              <React.Fragment key={`fragment-${posIndex}`}>
                <motion.div
                  key={imageIndex}
                  initial="left"
                  animate={position}
                  variants={imageVariants}
                  transition={{ duration: 0.7 }}
                  className="absolute h-[164px] w-[320px]"
                  // style={{ transformStyle: 'preserve-3d' }}
                >
                  <Image
                    src={images[imageIndex].src}
                    // src={
                    //   typeof images[imageIndex].src === 'string'
                    //     ? images[imageIndex].src
                    //     : images[imageIndex].src.src
                    // }
                    alt={`Image ${imageIndex}`}
                    className="object-cover"
                    // style={{ width: 320, height: 164 }}
                    style={{ width: '100%' }}
                  />
                </motion.div>
              </React.Fragment>
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
