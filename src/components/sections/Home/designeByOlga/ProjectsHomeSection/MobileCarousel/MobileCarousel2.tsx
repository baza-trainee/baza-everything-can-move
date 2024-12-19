'use client';
import React, { useState, useCallback, useRef } from 'react'; //useEffect,
import Image from 'next/image';
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion'; //useInView
import { PanInfo } from 'framer-motion';
//import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
import { ImagesHomeProjectsProps } from '@/constants/images/imagesSrc';
import { ButtonSlide } from '@/components/ui/SwiperFoto';
import clsx from 'clsx';

interface ProjectsSliderProps {
  images: ImagesHomeProjectsProps;
}

const MobileCarousel2: React.FC<ProjectsSliderProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // for imfinity moving
  // const isInView = useInView(containerRef);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [direction, setDirection] = useState(0);
  //   const cardWidth = 320;
  //   const totalWidth = 343;
  const totalImages = images.length;

  const imageVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? '100%' : '-100%',

        opacity: 0,
        transition: {
          ease: 'linear',
          duration: 0.5,
        },
      };
    },

    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,

        ease: 'linear',
      },
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? '-100%' : '100%',

        opacity: 0,
        transition: {
          ease: 'linear',

          duration: 0.5,
        },
      };
    },
  };

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }, [totalImages]);

  const handleBack = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  //   const titleVariants = {
  //     exit: (direction: number) => ({
  //       x: direction > 0 ? '100%' : '-100%',
  //       opacity: 0,
  //     }),
  //     enter: (direction: number) => ({
  //       x: direction > 0 ? '-100%' : '100%',
  //       opacity: 0,
  //     }),
  //     center: {
  //       x: '0%',
  //       opacity: 1,
  //     },
  //   };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    //  <--------
    if (info.offset.x > -50) {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (info.offset.x < 50) {
      //  -------->
      setDirection(-1);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };
  const positions = ['left', 'center', 'right']; //cI=1 left=0 center=1 right=2???
  // const positions = ['right', 'center', 'left']; //cI=1 left=2 center=1 right=0???
  const getPositionIndex = (baseIndex: number, offset: number) => {
    return (baseIndex + offset + totalImages) % totalImages;
  };
  return (
    <div
      className="w-full flex-col items-center justify-center lg:hidden"
      ref={containerRef}
    >
      {/* <div className="h-[193px] "> */}
      {/* */}
      <div className="relative mb-6 flex h-[193px] w-[343px] items-center justify-center overflow-hidden">
        <AnimatePresence custom={direction}>
          {positions.map((position, posIndex) => {
            const imageIndex = getPositionIndex(currentIndex, posIndex - 1);

            return (
              <motion.div
                key={`image-${imageIndex}`}
                variants={imageVariants}
                custom={direction}
                initial={posIndex === 1 && 'center'}
                //animate="center"
                //exit="exit"
                drag="x"
                dragConstraints={containerRef}
                //dragElastic={0}
                onDragEnd={handleDragEnd}
                // h-[164px] w-[320px]
                className={clsx(
                  // top-0
                  'absolute w-[320px] duration-500 ease-linear',
                  posIndex === 0 && 'left-0 top-0 w-[160px] z-0',
                  posIndex === 1 && 'top-0 w-[320px] z-10',

                  posIndex === 2 && 'right-0 top-0 w-[160px] z-0'
                )}
              >
                <Link
                  href={images[imageIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[164px] w-[320px]"
                >
                  <Image
                    src={images[imageIndex].src}
                    alt={`Image ${imageIndex}`}
                    className="object-cover"
                    style={{ width: '100%' }}
                  />
                </Link>
              </motion.div>
            );
          })}

          {/* image */}
        </AnimatePresence>
      </div>
      {/* </div> */}
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

export default MobileCarousel2;
