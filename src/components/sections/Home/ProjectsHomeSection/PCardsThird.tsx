'use client';

import React from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-third';
import { FollowerPointerCard } from '@/components/ui/FollowerPointerCard';

import { IMAGES_HOME_PROJECTS } from '@/constants/images/imagesSrc';

import ProjectsSlider from './ProjectsSlider3';

export function PCardsThird() {
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
      <ProjectsSlider images={IMAGES_HOME_PROJECTS} />
    </>
  );
}
// box-shadow: 0px 6.65px 5.32px 0px #8C898907;

// box-shadow: 0px 22.34px 17.87px 0px #8C89890B;

// box-shadow: 0px 100px 80px 0px #8C898912;
