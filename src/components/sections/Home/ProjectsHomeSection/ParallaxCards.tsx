'use client';
import React from 'react';
import Image from 'next/image';

import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Link from 'next/link';

// export interface ParallaxCardsProps {}

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
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            className="h-auto"
            src="/assets/images/HomeProjects/organik.png"
            alt="Logo Baza Trainee Ukraine"
            priority
            width="500"
            height="500"
            quality={100}
            // className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
          />
          ;
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

{
  /* <Image
  src="/assets/images/HomeProjects/organik.png"
  alt="Logo Baza Trainee Ukraine"
  priority
  width={100}
  height={100}
/>; */
}
