'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-third';
import { FollowerPointerCard } from '@/components/ui/FollowerPointerCard';
import { IMAGES_HOME_PROJECTS } from '@/constants/images/imagesSrc';
import { useMediaQuery } from 'react-responsive';
import MobileCarousel from './MobileCarousel/MobileCarousel';

export function PCardsThird() {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 767.5px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439.5px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return (
    <div className="flex w-full justify-center">
      {/* tablet */}
      {isTablet && (
        <div className="lg:relative lg:block lg:h-[338px] lg:w-[620px]">
          {/* hidden */}
          <FollowerPointerCard>
            {IMAGES_HOME_PROJECTS.map((image, ind) => (
              <CardContainer
                key={image.name + ind}
                className="absolute w-fit"
                style={{
                  top: image.topTablet,
                  left: image.leftTablet,
                  width: `${image.widthTablet}px`,
                  height: `${image.heightTablet}px`,
                  transition: 'transform 0.3s ease-in-out',
                }}
              >
                <CardBody className="group/card h-full w-full rounded-xl transition-transform duration-300 ease-in-out">
                  <CardItem
                    translateZ={image.translateZ}
                    className="h-full w-full transform group-hover/card:h-[164px] group-hover/card:w-[340px]"
                  >
                    <Image
                      src={image.src}
                      className="rounded-xl object-cover group-hover/card:shadow-xl"
                      alt={image.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        transition:
                          'width 0.3s ease-in-out, height 0.3s ease-in-out',
                      }}
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </FollowerPointerCard>
        </div>
      )}
      {/* desktop */}
      {isDesktop && (
        <div className="2xl:relative 2xl:block 2xl:h-[417px] 2xl:w-[1144px]">
          {/* hidden */}
          <FollowerPointerCard>
            {IMAGES_HOME_PROJECTS.map((image, ind) => (
              <CardContainer
                key={image.name + ind}
                className="absolute w-fit"
                style={{
                  top: image.topDesktop,
                  left: image.leftDesktop,
                  width: `${image.widthDesktop}px`,
                  height: `${image.heightDesktop}px`,
                  transition: 'transform 0.3s ease-in-out',
                }}
              >
                <CardBody className="group/card h-full w-full rounded-xl transition-transform duration-300 ease-in-out">
                  <CardItem
                    translateZ={image.translateZ}
                    className="h-full w-full transform group-hover/card:h-[240px] group-hover/card:w-[480px]"
                  >
                    <Image
                      src={image.src}
                      className="rounded-xl object-cover group-hover/card:shadow-xl"
                      alt={image.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        transition:
                          'width 0.3s ease-in-out, height 0.3s ease-in-out',
                      }}
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </FollowerPointerCard>
        </div>
      )}

      {/* mobile */}
      {isMobile && <MobileCarousel images={IMAGES_HOME_PROJECTS} />}
    </div>
  );
}
// box-shadow: 0px 6.65px 5.32px 0px #8C898907;

// box-shadow: 0px 22.34px 17.87px 0px #8C89890B;

// box-shadow: 0px 100px 80px 0px #8C898912;
