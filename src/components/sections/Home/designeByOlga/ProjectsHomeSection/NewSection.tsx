'use client';
import React, { useRef} from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';

import { IMAGES_HOME_PROJECTS } from '@/constants/images/imagesSrc';
// import Image from 'next/image';
// import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';
import {
//   CardBody,
//   CardContainer,
//   CardItem,
} from '@/components/ui/new-3d-third';

// import { PCardsThird } from './PCardsThird';

const NewSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,

    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  return (
    <section
      ref={containerRef}
      className="border border-t border-s-purple pb-[100px] 2xl:pb-[120px]"
    >
      <div className="container">
        <SectionTitle className="mb-8">New Version</SectionTitle>
        <div className="hidden w-full justify-center lg:flex">
          <div className="lg:relative lg:block lg:h-[338px] lg:w-[620px]">
            {IMAGES_HOME_PROJECTS.map((image, ind) => (
              // cardContainer or imageContainer or card
              <motion.div
                key={image.name + ind}
                style={{
                  top: image.topTablet,
                  left: image.leftTablet,
                  scale: imageScale,
                }}
                transition={{
                  ease: 'linear',
                  duration: 0.5,
                }}
                className="absolute rounded-xl border border-white bg-olga-green text-olga-grey"
              >
                <div className="h-[190px] w-[340px]">
                  <p>Card {ind}</p>
                </div>
              </motion.div>
              //   <CardContainer
              //     key={image.name + ind}
              //     className="absolute w-fit"
              //     style={{
              //       top: image.topTablet,
              //       left: image.leftTablet,
              //       width: `${image.widthTablet}px`,
              //       height: `${image.heightTablet}px`,
              //       transition: 'transform 0.3s ease-in-out',
              //     }}
              //   >
              //     <CardBody className="group/card h-full w-full rounded-xl transition-transform duration-300 ease-in-out">
              //       <CardItem
              //         translateZ={image.translateZ}
              //         className="h-full w-full transform group-hover/card:h-[164px] group-hover/card:w-[340px]"
              //       >
              //         <Link
              //           href={image.link}
              //           target="_blank"
              //           rel="noopener noreferrer"
              //           className="cursor-none"
              //         >
              //           <Image
              //             src={image.src}
              //             className="rounded-xl object-cover group-hover/card:shadow-xl"
              //             alt={image.name}
              //             style={{
              //               width: '100%',
              //               height: '100%',
              //               transition:
              //                 'width 0.3s ease-in-out, height 0.3s ease-in-out',
              //             }}
              //           />
              //         </Link>
              //       </CardItem>
              //     </CardBody>
              //   </CardContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
