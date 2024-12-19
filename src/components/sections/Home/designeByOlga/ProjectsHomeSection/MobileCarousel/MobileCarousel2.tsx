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

  const [currentIndex, setCurrentIndex] = useState(0);

  const [direction, setDirection] = useState(0);

  const totalImages = images.length;

  const handleNext = useCallback(() => {
    //from left to right
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  }, [totalImages]);

  const handleBack = () => {
    //from right to left
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    //  <--------
    if (info.offset.x > -50) {
      setDirection(1);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    } else if (info.offset.x < 50) {
      //  -------->
      setDirection(-1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };
  const positions = ['left', 'center', 'right']; //cI=1 left=0 center=1 right=2

  const getPositionIndex = (baseIndex: number, offset: number) => {
    return (baseIndex + offset + totalImages) % totalImages;
  };
  const imageVariants = {
    left: {
      x: '-150%',
      y: '15%',
      width: '120px',
      height: '64px',
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'linear',
      },
    },

    center: {
      x: '0%',
      y: '0%',
      height: '164px',
      width: '320px',
      opacity: 1,
      transition: {
        x: { duration: 0.6 },
        width: { duration: 1 }, //delay: 0.5,
        height: { duration: 1 }, //delay: 0.5,
        ease: 'linear',
      },
    },

    right: {
      x: '150%',
      width: '120px',
      height: '64px',
      opacity: 1,
      y: '15%',
      transition: {
        duration: 0.7,
        ease: 'linear',
      },
    },
    hidden: {
      x: '-250%',
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: 'linear',
      },
    },
    exit: {
      x: '300%',
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: 'linear',
      },
    },
  };
  return (
    <div className="w-full flex-col items-center justify-center lg:hidden">
      <div
        ref={containerRef}
        className="relative mb-6 flex h-[193px] w-[343px] items-center justify-center overflow-hidden"
      >
        <AnimatePresence custom={direction} initial={false}>
          {positions.map((position, posIndex) => {
            const imageIndex = getPositionIndex(currentIndex, posIndex - 1);

            return (
              <motion.div
                key={`image-${imageIndex}`}
                variants={imageVariants}
                custom={direction}
                //initial={posIndex === 1 && 'center'}

                //initial={position}
                initial="hidden"
                animate={position}
                exit="exit"
                drag="x"
                dragConstraints={containerRef}
                dragElastic={0}
                onDragEnd={handleDragEnd}
                className={clsx(
                  'absolute',

                  posIndex === 0 && 'z-0', //left-0 top-1/4
                  posIndex === 1 && 'z-10', //top-0

                  posIndex === 2 && 'z-0' //right-0 top-1/4
                )}
              >
                <Link
                  href={images[imageIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full w-full"
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

export default MobileCarousel2;
