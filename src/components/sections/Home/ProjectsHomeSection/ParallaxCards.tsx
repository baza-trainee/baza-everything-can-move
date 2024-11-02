'use client';
import React from 'react';
import Image from 'next/image';

// import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { CardContainer, CardItem } from '@/components/ui/3d-card-second';
// import Link from 'next/link';

// export interface ParallaxCardsProps {}

const images = [
  {
    pos: '1.1',
    src: '/assets/images/HomeProjects/kolyskova.png',
    width: 500,
    height: 271,
    name: 'kolyskova',
    top: '146px',
    left: '56px',
    translateZ: 200,
  },
  {
    pos: '3.1',
    src: '/assets/images/HomeProjects/balakun.png',
    width: 350,
    height: 167,
    name: 'balakun',
    top: '36px',
    left: '0px',
    translateZ: 100,
  },
  {
    pos: '3.4',
    src: '/assets/images/HomeProjects/organik.png',
    width: 180,
    height: 120,
    name: 'organik',
    top: '0px',
    left: '605px',
    translateZ: 50,
  },
];
const ParallaxCards: React.FC = () => {
  return (
    <div
      className="relative h-[413px] w-full"
      style={{
        perspective: '800px',
      }}
    >
      {images.map((image, ind) => (
        <CardContainer key={image.name + ind} className="">
          <CardItem
            translateZ={image.translateZ}
            className="absolute w-full overflow-hidden rounded-md"
            style={{
              top: image.top,
              left: image.left,
              width: `${image.width}px`,
              height: `${image.height}px`,
            }}
          >
            <Image
              className="h-auto w-auto object-cover"
              src={image.src}
              alt="Logo Baza Trainee Ukraine"
              priority
              width={image.width}
              height={image.height}
              quality={100}
              // className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            />
          </CardItem>
        </CardContainer>
      ))}
    </div>
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
// {
//   images.map((image, ind) => (
//     <CardContainer key={image.name + ind} className="h-auto w-auto">
//       <CardItem
//         translateZ={image.translateZ}
//         className="absolute w-full overflow-hidden rounded-md"
//         style={{
//           top: image.top,
//           left: image.left,
//           width: `${image.width}px`,
//           height: `${image.height}px`,
//         }}
//       >
//         <Image
//           className="h-auto w-auto object-cover"
//           src={image.src}
//           alt="Logo Baza Trainee Ukraine"
//           priority
//           width={image.width}
//           height={image.height}
//           quality={100}
//           // className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
//         />
//       </CardItem>
//     </CardContainer>
//   ));
// }
