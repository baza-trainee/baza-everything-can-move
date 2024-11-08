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

  const totalImages = images.length;

  console.log('currentIndex', currentIndex);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }, [totalImages]);

  const handleBack = () => {
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
    center: { x: '0%', scale: 1, zIndex: 5 },
    left: { x: '-100%', scale: 0.5, zIndex: 2 },
    right: { x: '100%', scale: 0.5, zIndex: 2 },
  };
  const getPositionIndex = (baseIndex: number, offset: number) => {
    return (baseIndex + offset + totalImages) % totalImages;
  };

  return (
    <div
      className="w-full lg:hidden"
      style={{ perspective: '1000px' }}
      ref={containerRef}
    >
      <div className="relative mb-6 flex h-[193px] w-[343px] items-center justify-center overflow-hidden">
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 left-3" />
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 right-3 rotate-[270deg]" />
        {/* <div className="flex h-[320px] flex-col items-center justify-center"> */}
        {positions.map((position, posIndex) => {
          const imageIndex = getPositionIndex(currentIndex, posIndex - 1);
          return (
            <motion.img
              key={imageIndex}
              src={
                typeof images[imageIndex].src === 'string'
                  ? images[imageIndex].src
                  : images[imageIndex].src.src
              }
              alt={`Image ${imageIndex}`}
              className="rounded-[12px]"
              initial="left"
              animate={position}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
              style={{ width: '40%', position: 'absolute' }}
            />
          );
        })}
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
