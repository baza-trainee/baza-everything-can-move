import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CardContainer,
  CardItem,
  CardBody,
} from '@/components/ui/SharedDesigns/ParallaxCard';
import { FollowerPointerCard } from '@/components/ui/DesignByOlga/FollowerPointerCard';

import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
import { ImagesHomeProjectsProps } from '@/constants/images/imagesSrc';

interface ProjectsSliderProps {
  images: ImagesHomeProjectsProps;
}

const ProjectCardsTablet: React.FC<ProjectsSliderProps> = ({ images }) => {
  return (
    <div
      className="lg:relative lg:block lg:h-[338px] lg:w-[620px]"
      style={{
        perspective: '1000px',
      }}
    >
      <FollowerPointerCard>
        {images.map((image, ind) => (
          <CardContainer
            key={image.name + ind}
            scale={1 / image.scaleTablet}
            className="absolute w-fit"
            style={{
              top: image.topTablet,
              left: image.leftTablet,
            }}
          >
            <CardBody className="group/card relative h-full w-full">
              <CardItem
                translateZ={image.translateZ}
                className="group/card relative transform group-hover/card:shadow-xl"
                style={{
                  width: 352,
                  height: 168,
                }}
              >
                <Link
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer "
                  className="relative inset-0 flex h-[168px] w-[352px] cursor-none"
                >
                  <Image
                    src={image.src}
                    className="object-cover transition-all duration-500 ease-linear"
                    alt={image.name}
                    quality={90}
                    fill={true}
                    sizes="(max-width: 768px) 704px"
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
                className="absolute -bottom-7 hidden h-6 w-full transform items-center justify-center opacity-0 transition-opacity duration-500 ease-linear group-hover/card:flex group-hover/card:opacity-100"
              >
                <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 left-0 w-4" />

                <p
                  style={{
                    whiteSpace: 'nowrap',
                  }}
                  className="text-s leading-o-130 text-olga-light-grey"
                >
                  {image.name}
                </p>

                <ICONS_SHARED.CORNER_TOP
                  style={{
                    transform: `rotate(90deg ) `,
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

export default ProjectCardsTablet;
