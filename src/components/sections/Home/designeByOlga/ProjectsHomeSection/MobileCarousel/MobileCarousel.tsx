'use client';
import React, { useState, useRef } from 'react'; //useEffect,
import Image from 'next/image';
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion'; //useInView
import { PanInfo } from 'framer-motion';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
import { ImagesHomeProjectsProps } from '@/constants/images/imagesSrc';
import { ButtonSlide } from '@/components/ui/SwiperFoto';

interface ProjectsSliderProps {
  images: ImagesHomeProjectsProps;
}
const MobileCarousel: React.FC<ProjectsSliderProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);
  const [direction, setDirection] = useState(0);

  const totalImages = images.length;

  const handleNext = () => {
    setDirection(1); //from left to right
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % totalImages)
    );
  };

  const handleBack = () => {
    setDirection(-1); //from right to left
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map(
        (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
      )
    );
  };

  const positions = ['right', 'center', 'left'];

  const titleVariants = {
    exit: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        duration: 0.6,

        ease: 'linear',
      },
    }),
    enter: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        duration: 0.6,

        ease: 'linear',
      },
    }),
    center: {
      x: '0%',
      opacity: 1,
      transition: {
        duration: 0.6,

        ease: 'linear',
      },
    },
  };
  const imageVariants = {
    center: {
      x: '0%',
      scale: 1,
      zIndex: 5,

      transition: { duration: 0.6, ease: 'linear' },
    },
    left: {
      x: '-50%',
      scale: 0.4,
      zIndex: 3,

      transition: { duration: 0.6, ease: 'linear' },
    },
    right: {
      x: '50%',
      scale: 0.4,
      zIndex: 3,

      transition: { duration: 0.6, ease: 'linear' },
    },
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    //  <--------
    if (info.offset.x > -50) {
      setDirection(1); //from left to right
      setPositionIndexes((prevIndexes) =>
        prevIndexes.map((prevIndex) => (prevIndex + 1) % totalImages)
      );
    } else if (info.offset.x < 50) {
      //  -------->
      setDirection(-1); //from right to left
      setPositionIndexes((prevIndexes) =>
        prevIndexes.map(
          (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
        )
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full flex-col items-center justify-center lg:hidden"
    >
      <div className="relative mb-6 flex h-[193px] w-[343px] items-center justify-center overflow-hidden">
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 left-3" />
        <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 right-3 rotate-[270deg]" />

        <AnimatePresence custom={direction}>
          {/* //initial={false} */}
          {/* title */}
          <motion.div
            key={`image-${positionIndexes[1]}`}
            className="absolute bottom-0 w-full"
            custom={direction}
            variants={titleVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <h3 className="text-center text-s leading-o-150 text-olga-light-grey">
              {images[positionIndexes[1]].name}
            </h3>
          </motion.div>
        </AnimatePresence>

        {/* image */}

        {positionIndexes.map((imageIndex, posIndex) => (
          <motion.div
            key={`image-${imageIndex}`}
            className="absolute top-0 h-[164px] w-[320px]"
            initial={positions[posIndex]}
            animate={positions[posIndex]}
            variants={imageVariants}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            //dragConstraints={containerRef}
            onDragEnd={handleDragEnd}
          >
            <Link
              href={images[imageIndex].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={images[imageIndex].src}
                alt={`Image ${images[imageIndex].name}`}
                className="object-cover"
                style={{ width: '100%' }}
              />
            </Link>
          </motion.div>
        ))}
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
