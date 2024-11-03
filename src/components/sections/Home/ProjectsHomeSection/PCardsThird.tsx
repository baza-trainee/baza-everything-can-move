'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-third';
import { FollowerPointerCard } from '@/components/ui/FollowerPointerCard';
import kolyskova from '@/assets/images/HomeProjects/kolyskova.png';
import balakun from '@/assets/images/HomeProjects/balakun.png';
import organik from '@/assets/images/HomeProjects/organik.png';

const images = [
  {
    pos: '1.1',
    src: kolyskova,
    width: 500,
    height: 247,
    name: 'kolyskova',
    top: 146,
    left: '56px',
    translateZ: 90,
  },
  {
    pos: '3.1',
    src: balakun,
    width: 350,
    height: 172,
    name: 'balakun',
    top: 36,
    left: '0px',
    translateZ: 110,
  },

  {
    pos: '3.4',
    src: organik,
    width: 180,
    height: 120,
    name: 'organik',
    top: '0px',
    left: '605px',
    translateZ: 150,
  },
];
export function PCardsThird() {
  return (
    <div className="hidden lg:relative lg:block lg:h-[417px] lg:w-full">
      <FollowerPointerCard>
        {images.map((image, ind) => (
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
              <CardItem translateZ={image.translateZ} className="h-full w-full">
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
  );
}
