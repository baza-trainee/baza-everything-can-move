'use client';
import React from 'react';
import Image from 'next/image';

import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
// import Link from 'next/link';

// export interface ParallaxCardsProps {}
// const images = [
//   { src: '/path/to/image1.jpg', width: 800, height: 600 },
//   { src: '/path/to/image2.jpg', width: 1024, height: 768 },
// ];
const ParallaxCards: React.FC = () => {
  //   const cards = [
  //     {
  //       id: 1,
  //       depth: 5,
  //       imageUrl: 'https://via.placeholder.com/300x200?text=Image+1',
  //     },
  //     {
  //       id: 2,
  //       depth: 10,
  //       imageUrl: 'https://via.placeholder.com/300x200?text=Image+2',
  //     },
  //     {
  //       id: 3,
  //       depth: 15,
  //       imageUrl: 'https://via.placeholder.com/300x200?text=Image+3',
  //     },
  //   ];

  return (
    <CardContainer>
      <CardBody className="relative h-auto w-auto">
        <CardItem
          translateZ="200"
          className="w-full overflow-hidden rounded-md"
        >
          <Image
            className="h-auto w-auto"
            src="/assets/images/HomeProjects/organik.png"
            alt="Logo Baza Trainee Ukraine"
            priority
            width="400"
            height="400"
            quality={100}
            // className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
          />
        </CardItem>
        <div className="mt-20 flex items-center justify-between">
          {/* <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem> */}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ParallaxCards;
// width={500}
//   height={300}
//   intrinsic
/////
// fill;
// objectFit = 'cover';
/////
