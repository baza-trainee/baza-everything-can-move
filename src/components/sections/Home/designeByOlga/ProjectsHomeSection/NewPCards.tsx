'use client';
// new one because of scale
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-third';
import { FollowerPointerCard } from '@/components/ui/FollowerPointerCard';
import { IMAGES_HOME_PROJECTS } from '@/constants/images/imagesSrc';
import { useMediaQuery } from 'react-responsive';
import MobileCarousel from './MobileCarousel/MobileCarousel';
import Link from 'next/link';

export function NewPCards() {
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
                  //   width: `${image.widthTablet}px`,
                  //   height: `${image.heightTablet}px`,
                  //   width: `352px`,
                  //   height: `164px`,

                  transition: 'transform 0.5s linear',
                }}
              >
                <CardBody className="group/card h-full w-full rounded-xl transition-transform duration-300 ease-in-out">
                  <CardItem
                    translateZ={image.translateZ}
                    scale={image.scaleTablet}
                    //group-hover/card:h-[164px] group-hover/card:w-[340px]
                    className="h-full w-full transform"
                    style={{
                      width: `${image.widthTablet}px`,
                      height: `${image.heightTablet}px`,
                      transition: ' 0.5s linear',
                    }}
                  >
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-none"
                    >
                      <Image
                        src={image.src}
                        className="rounded-xl object-cover group-hover/card:shadow-xl"
                        alt={image.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          //   width: '352px',
                          //   height: '168px',
                          transition: ' 0.5s linear',
                        }}
                      />
                    </Link>
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
                  //   width: `${image.widthDesktop}px`,
                  //   height: `${image.heightDesktop}px`,
                  transition: 'transform 0.5s linear',
                }}
              >
                <CardBody className="group/card h-full w-full rounded-xl transition-transform duration-300 ease-in-out">
                  <CardItem
                    translateZ={image.translateZ}
                    scale={image.scaleDesktop}
                    //group-hover/card:h-[240px] group-hover/card:w-[480px]
                    className="h-full w-full transform"
                    style={{
                      width: `${image.widthDesktop}px`,
                      height: `${image.heightDesktop}px`,
                      transition: ' 0.5s linear',
                    }}
                  >
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-none"
                    >
                      <Image
                        src={image.src}
                        className="rounded-xl object-cover group-hover/card:shadow-xl"
                        alt={image.name}
                        style={{
                          width: '100%',
                          height: '100%',

                          transition: ' 0.5s linear',
                        }}
                      />
                    </Link>
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
