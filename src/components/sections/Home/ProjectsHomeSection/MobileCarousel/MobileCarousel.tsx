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
  const [positionIndexes, setPositionIndexes] = useState([
    0, 1, 2, 3, 4, 5, 6, 7,
  ]);
  console.log('positionIndexes', positionIndexes);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 3
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 3
      );

      return updatedIndexes;
    });
  };

 

  const positions = ['center', 'left', 'right'];

  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
  
    left: { x: '-90%', scale: 0.5, zIndex: 2 },
    right: { x: '90%', scale: 0.5, zIndex: 1 },
   
  };
  return (
    <div className="flex h-[320px] flex-col items-center justify-center">
      {images.map((image, index) => (
        <motion.img
          key={index}
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          className="rounded-[12px]"
          initial="center"
          // src={image.src}
          src={typeof image.src === 'string' ? image.src : image.src.src}
          alt={image.name}
          style={{ width: '40%', position: 'absolute' }}
        />
      ))}

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
