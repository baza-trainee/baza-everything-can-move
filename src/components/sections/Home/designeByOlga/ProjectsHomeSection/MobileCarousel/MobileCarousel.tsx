'use client';
import React, { useState, useCallback, useRef } from 'react'; //useEffect,
import Image from 'next/image';
import Link from 'next/link';
//import { HomeProjectsImagesType } from './types';
import { ImagesHomeProjectsProps } from '@/constants/images/imagesSrc';
import { motion, AnimatePresence } from 'framer-motion'; //useInView
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
import { ButtonSlide } from '@/components/ui/SwiperFoto';
import { PanInfo } from 'framer-motion';

interface ProjectsSliderProps {
  images: ImagesHomeProjectsProps;
}

const MobileCarousel: React.FC<ProjectsSliderProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // for imfinity mooving
  // const isInView = useInView(containerRef);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const totalImages = images.length;

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }, [totalImages]);

  const handleBack = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };
  // for imfinity mooving
  // useEffect(() => {
  //   if (isInView) {
  //     const interval = setInterval(() => {
  //       handleNext();
  //     }, 15000);
  //     return () => clearInterval(interval);
  //   }
  // }, [isInView, handleNext]);

  const positions = ['right', 'center', 'left'];

  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left: {
      x: '-50%',
      scale: 0.4,
      zIndex: 2,
    },
    right: { x: '50%', scale: 0.4, zIndex: 2 },
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
                drag="x"
                dragConstraints={containerRef}
                //dragElastic={0}
                onDragEnd={handleDragEnd}
              >
                <Link
                  href={images[imageIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={images[imageIndex].src}
                    alt={`Image ${imageIndex}`}
                    className="object-cover"
                    style={{ width: '100%' }}
                  />
                </Link>
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
