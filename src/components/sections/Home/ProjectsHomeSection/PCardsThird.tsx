'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-third';
import { FollowerPointerCard } from '@/components/ui/FollowerPointerCard';
// import kolyskova from '@/assets/images/HomeProjects/kolyskova.png';
// import balakun from '@/assets/images/HomeProjects/balakun.png';

import { IMAGES_HOME_PROJECTS } from '@/constants/images/imagesSrc';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
import { ButtonSlide } from '@/components/ui/SwiperFoto/ButtonSlider';

// const images = [
//   {
//     pos: '1.1',
//     src: kolyskova,
//     width: 500,
//     height: 247,
//     name: 'kolyskova',
//     top: 146,
//     left: '56px',
//     translateZ: 90,
//   },
//   {
//     pos: '3.1',
//     src: balakun,
//     width: 350,
//     height: 172,
//     name: 'balakun',
//     top: 36,
//     left: '0px',
//     translateZ: 110,
//   },

//   {
//     pos: '3.4',
//     src: organik,
//     width: 180,
//     height: 120,
//     name: 'organik',
//     top: '0px',
//     left: '605px',
//     translateZ: 150,
//   },
// ];
// enter: (direction: number) => {
//   return {
//     x: direction > 0 ? 1000 : -1000,
//     opacity: 0
//   };
// },
const imageVariants = {
  enter: (direction: number) => {
    return { x: direction > 0 ? 1000 : -1000, scale: 0.5, opacity: 0 };
  },
  center: {
    x: 0,
    scale: 0.5,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },
  expand: {
    scale: 1,
    transition: { duration: 0.7, delay: 2 },
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      scale: 0.5,
      opacity: 0,
    };
  },
};

export function PCardsThird() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextImage();
  //   }, 15000);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % IMAGES_HOME_PROJECTS.length
    );
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? IMAGES_HOME_PROJECTS.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      {/* from tablet */}
      <div className="hidden lg:relative lg:block lg:h-[417px] lg:w-full">
        <FollowerPointerCard>
          {IMAGES_HOME_PROJECTS.map((image, ind) => (
            <CardContainer
              key={image.name + ind}
              className="absolute w-fit"
              style={{
                top: `${image.top}px`, // top: `${image.top + 200}px`,
                left: image.left,
                width: `${image.width}px`,
                height: `${image.height}px`,
              }}
            >
              <CardBody className="group/card h-full w-full rounded-xl">
                <CardItem
                  translateZ={image.translateZ}
                  className="h-full w-full"
                >
                  <Image
                    src={image.src}
                    // width={image.width}
                    // height={image.height}
                    className="rounded-xl object-cover group-hover/card:shadow-xl"
                    alt={image.name}
                    // style={{ width: 'auto', height: 'auto' }}
                    style={{ width: '100%', height: '100%' }}
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </FollowerPointerCard>
      </div>
      {/* mobile */}
      {/* slider div */}
      <div className="w-full lg:hidden">
        {/* images div */}
        <div className="relative flex h-[193px] w-full items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            {IMAGES_HOME_PROJECTS.map(
              (image, index) =>
                index === currentIndex && (
                  <motion.div
                    key={image.pos}
                    className="shadow-olga-combined mx-auto mb-6 flex h-[193px] w-[320px] flex-col items-center"
                  >
                    <motion.div
                      custom={direction}
                      variants={imageVariants}
                      initial="enter"
                      animate={['center', 'expand']}
                      exit="exit"
                      transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                      className="flex h-[164px] w-full items-center justify-center overflow-hidden"
                    >
                      <Image
                        src={image.src}
                        // width={image.width}
                        // height={image.height}
                        className="object-cover group-hover/card:shadow-xl"
                        alt={image.name}
                        // style={{ width: 'auto', height: 'auto' }}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </motion.div>

                    {/* title */}
                    <div className="relative w-full">
                      <motion.div
                        initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                      >
                        <h3 className="text-center text-s leading-o-150 text-olga-light-grey">
                          {image.name}
                        </h3>
                      </motion.div>
                      <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 left-0" />
                      <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 right-0 rotate-[270deg]" />
                    </div>
                  </motion.div>
                )
            )}
            {/*project card */}
          </AnimatePresence>
        </div>
        {/* buttons div */}
        <div className="flex justify-center gap-5">
          {/*onClick={handlePrev} */}
          <ButtonSlide onClick={prevImage} ariaLabel="кнопка попереднє фото" />
          {/* onClick={handleNext} */}
          <ButtonSlide
            className="rotate-180"
            ariaLabel="кнопка наступне фото"
            onClick={nextImage}
          />
        </div>
      </div>
    </>
  );
}
// box-shadow: 0px 6.65px 5.32px 0px #8C898907;

// box-shadow: 0px 22.34px 17.87px 0px #8C89890B;

// box-shadow: 0px 100px 80px 0px #8C898912;
