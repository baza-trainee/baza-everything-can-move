'use client';
//from big to small- I use it
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CardContainer, CardItem, CardBody } from '@/components/ui/3d-third-3';
import { FollowerPointerCard } from '@/components/ui/FollowerPointerCard';
import { IMAGES_HOME_PROJECTS } from '@/constants/images/imagesSrc';

import { useMediaQuery } from 'react-responsive';
import MobileCarousel from './MobileCarousel/MobileCarousel';
import Link from 'next/link';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

const NewPCards3: React.FC = () => {
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
      {/* tablet isTablet*/}
      {isTablet && (
        <div
          className="lg:relative lg:block lg:h-[338px] lg:w-[620px]"
          style={{
            perspective: '1000px',
          }}
        >
          <FollowerPointerCard>
            {IMAGES_HOME_PROJECTS.map((image, ind) => (
              <CardContainer
                key={image.name + ind}
                scale={1 / image.scaleTablet}
                className="absolute w-fit"
                style={{
                  top: image.topTablet,
                  left: image.leftTablet,
                  //transition: 'transform 0.5s linear',
                }}
              >
                <CardBody
                  className="group/card relative h-full w-full"
                  // style={{
                  //   transition: 'transform 0.5s linear',
                  // }}
                >
                  <CardItem
                    translateZ={image.translateZ}
                    className="group/card relative transform group-hover/card:shadow-xl"
                    style={{
                      //transition: ' 0.5s linear',
                      width: 352,
                      height: 168,
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
                        className="object-cover transition-all duration-500 ease-linear"
                        alt={image.name}
                        quality={90}
                        fill={true}
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
                      //transformOrigin: 'left center',
                      transition: ' 0.5s linear',
                    }}
                    // mt-5
                    className="absolute -bottom-7 hidden h-6 w-full transform items-center justify-center opacity-0 transition-opacity duration-500 ease-linear group-hover/card:flex group-hover/card:opacity-100"
                  >
                    <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 left-0 w-4" />

                    <p
                      style={{
                        whiteSpace: 'nowrap',
                      }}
                      //text-sm
                      className="text-s leading-o-130 text-olga-light-grey"
                    >
                      {image.name}
                    </p>

                    <ICONS_SHARED.CORNER_TOP
                      // scaleY(${1 / image.scaleTablet}
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
      )}
      {/* desktop isDesktop*/}
      {isDesktop && (
        <div className="2xl:relative 2xl:block 2xl:h-[417px] 2xl:w-[1144px]">
          <FollowerPointerCard>
            {IMAGES_HOME_PROJECTS.map((image, ind) => (
              <CardContainer
                key={image.name + ind}
                scale={1 / image.scaleDesktop}
                className="absolute w-fit"
                style={{
                  top: image.topDesktop,
                  left: image.leftDesktop,
                }}
              >
                <CardBody
                  className="group/card relative h-full w-full"
                  // style={{
                  //   transition: 'transform 0.5s linear',
                  // }}
                >
                  <CardItem
                    translateZ={image.translateZ}
                    className="group/card relative transform group-hover/card:shadow-xl"
                    style={{
                      //  transition: '  0.5s linear',
                      width: 512,
                      height: 249,
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
                        className="object-cover transition-all duration-500 ease-linear"
                        alt={image.name}
                        quality={90}
                        fill={true}
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
                      // transformOrigin: 'left center',
                      transition: ' 0.5s linear',
                    }}
                    className="absolute -bottom-7 hidden h-6 w-full transform items-center justify-center text-center opacity-0 transition-opacity duration-500 ease-linear group-hover/card:flex group-hover/card:opacity-100"
                  >
                    <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 left-0 w-4" />

                    <p
                      style={{
                        whiteSpace: 'nowrap',
                      }}
                      //7text-sm
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
      )}

      {/* mobile */}
      {isMobile && <MobileCarousel images={IMAGES_HOME_PROJECTS} />}
    </div>
  );
};
export default NewPCards3;
