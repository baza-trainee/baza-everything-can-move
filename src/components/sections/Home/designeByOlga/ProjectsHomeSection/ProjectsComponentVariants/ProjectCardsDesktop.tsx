import React from 'react';
import Image from 'next/image';
import {
  CardContainer,
  CardItem,
  CardBody,
} from '@/components/ui/DesignByOlga/ParallaxCard';
import { FollowerPointerCard } from '@/components/ui/DesignByOlga/FollowerPointerCard';

import Link from 'next/link';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
import { ImagesHomeProjectsProps } from '@/constants/images/imagesSrc';

interface ProjectsSliderProps {
  images: ImagesHomeProjectsProps;
}
const ProjectCardsDesktop: React.FC<ProjectsSliderProps> = ({ images }) => {
  return (
    <div
      className="2xl:relative 2xl:block 2xl:h-[417px] 2xl:w-[1144px]"
      style={{
        perspective: '1000px',
      }}
    >
      <FollowerPointerCard>
        {images.map((image, ind) => (
          <CardContainer
            key={image.name + ind}
            scale={1 / image.scaleDesktop}
            className="absolute w-fit"
            style={{
              top: image.topDesktop,
              left: image.leftDesktop,
            }}
          >
            <CardBody className="group/card relative h-full w-full">
              <CardItem
                translateZ={image.translateZ}
                className="group/card relative transform group-hover/card:shadow-xl"
                style={{
                  width: 512,
                  height: 249,
                }}
              >
                <Link
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inset-0 flex h-[249px] w-[512px] cursor-none"
                >
                <Image
                  src={image.src}
                  className="object-cover transition-all duration-500 ease-linear"
                  alt={image.name}
                  quality={90}
                  fill={true}
                  sizes="512px" //1024
                  // style={{
                  //   width: '100%',
                  //   height: '100%',
                  // }}
                />
                </Link>
              </CardItem>
              <CardItem
                translateZ={image.translateZ + 30}
                style={{
                  transition: ' 0.5s linear',
                }}
                className="absolute -bottom-7 hidden h-6 w-full transform items-center justify-center text-center opacity-0 transition-opacity duration-500 ease-linear group-hover/card:flex group-hover/card:opacity-100"
              >
                <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 left-0 w-4" />

                <p
                  style={{
                    whiteSpace: 'nowrap',
                  }}
                  className="text-sm leading-o-130 text-olga-light-grey"
                >
                  {image.name}
                </p>

                <ICONS_SHARED.CORNER_TOP
                  style={{
                    transform: `rotate(90deg )`,
                  }}
                  className="absolute bottom-0 right-0 w-4"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </FollowerPointerCard>
    </div>
  );
};

export default ProjectCardsDesktop;
