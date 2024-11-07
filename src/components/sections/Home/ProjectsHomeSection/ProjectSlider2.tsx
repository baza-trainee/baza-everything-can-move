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

const ProjectSlider: React.FC<ProjectsSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full lg:hidden">
      <div
        className="relative mx-auto mb-6 h-[193px] w-full"
        style={{ perspective: '1000px' }}
      >
        <div
          className="flex h-full w-full items-center justify-center overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {images.map((image, index) => {
            const isActive = index === currentIndex;
            const isPrevious =
              index === (currentIndex - 1 + images.length) % images.length;
            const isNext = index === (currentIndex + 1) % images.length;

            return (
              <div
                key={index}
                className={clsx(
                  `relative flex items-center justify-center transition-all duration-500 ease-in-out`,
                  isActive && 'w-[320px]'
                )}
                style={{
                  //width: '33.33%', // Каждое изображение занимает 1/3 ширины контейнера
                  transform: `translateX(${(index - currentIndex) * 100}%)`, // Сдвиг изображений
                  opacity: isActive || isPrevious || isNext ? 1 : 0, // Прозрачность для видимых изображений
                  transition: 'transform 0.5s ease-in-out', // Плавный переход
                  zIndex: isActive ? 10 : 0, // Центральное изображение будет впереди
                }}
              >
                <Image
                  src={image.src}
                  alt={image.name}
                  className="width: '100%', height: '100%', object-cover"
                  style={{
                    transform: isActive
                      ? 'translateZ(50px) scale(1.1)' // Центральное изображение увеличивается и приближается
                      : 'translateZ(0) scale(1)', // Соседние изображения находятся на расстоянии
                    transition: 'transform 0.5s ease-in-out', // Плавный переход для центрального изображения
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-5">
          {/*onClick={handlePrev} */}
          <ButtonSlide onClick={handlePrev} ariaLabel="кнопка попереднє фото" />
          {/* onClick={handleNext} */}
          <ButtonSlide
            className="rotate-180"
            ariaLabel="кнопка наступне фото"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
