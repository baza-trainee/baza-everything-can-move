'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-third';
import { FollowerPointerCard } from '@/components/ui/FollowerPointerCard';
// import kolyskova from '@/assets/images/HomeProjects/kolyskova.png';
// import balakun from '@/assets/images/HomeProjects/balakun.png';
import organik from '@/assets/images/HomeProjects/organik.png';
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
export function PCardsThird() {
  const [positionIndex, setPositionIndex] = useState(1);
  function handleNext() {
    setPositionIndex(2);
    console.log(positionIndex);
    // setPositionIndexes((prevPosition) =>
    //   prevPosition.map((prevIndex) => (prevIndex + 1) % arrayImages.length)
    //);
  }

  function handlePrev() {
    setPositionIndex(2);
    // setPositionIndexes((prevPosition) =>
    //   prevPosition.map(
    //     (prevIndex) => (prevIndex - 1 + arrayImages.length) % arrayImages.length
    //   )
    // );
  }
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
        <div>
          {/*project card */}
          <div className="shadow-olga-combined mx-auto mb-6 h-[193px] w-[320px]">
            <div className="mb-2 h-[164px] w-full">
              <Image
                src={organik}
                // width={image.width}
                // height={image.height}
                className="object-cover group-hover/card:shadow-xl"
                alt="organik"
                // style={{ width: 'auto', height: 'auto' }}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            {/* title */}
            <div className="relative w-full">
              <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 left-0" />
              <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 right-0 rotate-[270deg]" />
              <h3 className="text-center text-s leading-o-150 text-olga-light-grey">
                Органік Ukraine
              </h3>
            </div>
          </div>
        </div>
        {/* buttons div */}
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
    </>
  );
}
// box-shadow: 0px 6.65px 5.32px 0px #8C898907;

// box-shadow: 0px 22.34px 17.87px 0px #8C89890B;

// box-shadow: 0px 100px 80px 0px #8C898912;
