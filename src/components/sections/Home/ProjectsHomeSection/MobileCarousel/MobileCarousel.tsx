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
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  console.log('currentIndex', currentIndex);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  //   (prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)

  const positions = ['right', 'center', 'left'];

  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },

    left: { x: '-100%', scale: 0.5, zIndex: 2 },
    right: { x: '100%', scale: 0.5, zIndex: 2 },
  };
  const getPositionIndex = (baseIndex: number, offset: number) => {
    return (baseIndex + offset + totalImages) % totalImages;
  };
  // const isPrevious =
  //   index === (currentIndex - 1 + images.length) % images.length;
  // const isNext = index === (currentIndex + 1) % images.length;
  return (
    <div className="flex h-[320px] flex-col items-center justify-center">
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

      {/* buttons div */}
      {/* <div className="flex justify-center gap-5">
        <ButtonSlide onClick={handleBack} ariaLabel="кнопка попереднє фото" />

        <ButtonSlide
          className="rotate-180"
          ariaLabel="кнопка наступне фото"
          onClick={handleNext}
        />
      </div> */}
      <div className="flex flex-row gap-3">
        <button
          className="bg-indigo-400 mt-[400px] rounded-md px-4 py-2 text-white"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="bg-indigo-400 mt-[400px] rounded-md px-4 py-2 text-white"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MobileCarousel;
