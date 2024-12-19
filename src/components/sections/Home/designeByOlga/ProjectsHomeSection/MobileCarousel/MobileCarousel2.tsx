'use client';
import React, { useState, useCallback, useRef, useEffect } from 'react'; //useEffect,
import Image from 'next/image';
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion'; //useInView
import { PanInfo } from 'framer-motion';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
import {
  ImagesHomeProjectsProps,
  ImagesHomeProjects,
} from '@/constants/images/imagesSrc';
import { ButtonSlide } from '@/components/ui/SwiperFoto';

interface ProjectsSliderProps {
  images: ImagesHomeProjectsProps;
}

const MobileCarousel2: React.FC<ProjectsSliderProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // for imfinity moving
  // const isInView = useInView(containerRef);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [carouselImages, setCarouselImages] = useState<ImagesHomeProjects[]>(
    []
  );

  const totalImages = images.length;

  useEffect(() => {
    const getPositionIndex = (baseIndex: number, offset: number) => {
      return (baseIndex + offset + totalImages) % totalImages;
    };
    const leftImage = images[getPositionIndex(currentIndex, -1)];
    const centerImage = images[currentIndex];
    const rightImage = images[getPositionIndex(currentIndex, 1)];

    // Обновляем состояние с новыми изображениями
    setCarouselImages([leftImage, centerImage, rightImage]);
  }, [currentIndex, images, totalImages]);
  const handleNext = useCallback(() => {
    setDirection(1); //from left to right
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }, [totalImages]);

  const handleBack = () => {
    setDirection(-1); //from right to left
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const positions = ['right', 'center', 'left'];

  const imageVariants = {
    center: {
      x: '0%',
      scale: 1,
      zIndex: 5,

      transition: {
        duration: 0.6,

        ease: 'linear',
      },
    },
    left: {
      x: '-50%',
      scale: 0.4,
      zIndex: 2,

      transition: {
        duration: 0.6,

        ease: 'linear',
      },
    },
    right: {
      x: '50%',
      scale: 0.4,
      zIndex: 2,

      transition: {
        duration: 0.6,

        ease: 'linear',
      },
    },
  };

  const titleVariants = {
    exit: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        duration: 0.5,

        ease: 'linear',
      },
    }),
    enter: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        duration: 0.5,

        ease: 'linear',
      },
    }),
    center: {
      x: '0%',
      opacity: 1,
      transition: {
        duration: 0.5,

        ease: 'linear',
      },
    },
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    //  <--------
    if (info.offset.x > -50) {
      setDirection(1); //from left to right
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (info.offset.x < 50) {
      //  -------->
      setDirection(-1); //from right to left
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };
  return (
    <div
      className="w-full flex-col items-center justify-center lg:hidden"
      ref={containerRef}
    >
      <div className="relative mb-6 flex h-[193px] w-[343px] items-center justify-center overflow-hidden">
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 left-3" />
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 right-3 rotate-[270deg]" />

        <AnimatePresence custom={direction}>
          {/* //initial={false} */}
          {/* title */}
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
          {/* image */}
          {carouselImages.map((image, index) => (
            <motion.div
              key={`image-${index}`}
              custom={direction}
              initial={positions[index]}
              animate={positions[index]}
              variants={imageVariants}
              //transition={{ duration: 0.7 }}
              className="absolute top-0 h-[164px] w-[320px]"
              drag="x"
              dragConstraints={containerRef}
              //dragElastic={0}
              onDragEnd={handleDragEnd}
            >
              <Link href={image.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={image.src}
                  alt={`Image ${image.name}`}
                  className="object-cover"
                  style={{ width: '100%' }}
                />
              </Link>
            </motion.div>
          ))}
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
