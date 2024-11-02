'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-third';

const images = [
  {
    pos: '1.1',
    src: '/assets/images/HomeProjects/kolyskova.png',
    width: 500,
    height: 271,
    name: 'kolyskova',
    top: 146,
    left: '56px',
    translateZ: 200,
  },
  {
    pos: '3.1',
    src: '/assets/images/HomeProjects/balakun.png',
    width: 350,
    height: 167,
    name: 'balakun',
    top: 36,
    left: '0px',
    translateZ: 100,
  },
  //   {
  //     pos: '3.4',
  //     src: '/assets/images/HomeProjects/organik.png',
  //     width: 180,
  //     height: 120,
  //     name: 'organik',
  //     top: '0px',
  //     left: '605px',
  //     translateZ: 50,
  //   },
];
export function PCardsThird() {
  return (
    <div
      className="relative h-[613px] w-full"
      //   style={{
      //     perspective: '800px',
      //   }}
    >
      {images.map((image, ind) => (
        <CardContainer
          className="absolute w-fit"
          key={image.name + ind}
          style={{
            top: `${image.top + 200}px`,
            left: image.left,
            width: `${image.width}px`,
          }}
        >
          <CardBody className="bg-gray-50 group/card h-auto w-auto rounded-xl border border-black/[0.1] p-6 sm:w-[30rem]">
            {/* <CardItem
              translateZ="50"
              className="text-neutral-600 text-xl font-bold"
            >
              Make things
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 mb-2 mt-2 max-w-sm text-sm"
            >
              Hover over this card
            </CardItem> */}
            <CardItem translateZ="100" className="w-full">
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                className="rounded-xl object-cover group-hover/card:shadow-xl"
                alt={image.name}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
