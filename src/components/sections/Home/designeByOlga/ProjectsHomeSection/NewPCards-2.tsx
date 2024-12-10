'use client';
// new one because of hover
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CardContainer, CardItem } from '@/components/ui/3d-third-2';
import { FollowerPointerCard } from '@/components/ui/FollowerPointerCard';
import { IMAGES_HOME_PROJECTS } from '@/constants/images/imagesSrc';
import { useMediaQuery } from 'react-responsive';
import MobileCarousel from './MobileCarousel/MobileCarousel';
import Link from 'next/link';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

export function NewPCards2() {
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
        <div className="lg:relative lg:block lg:h-[338px] lg:w-[620px]">
          <FollowerPointerCard>
            {IMAGES_HOME_PROJECTS.map((image, ind) => (
              <CardContainer
                key={image.name + ind}
                //scale={image.scaleTablet}
                className="absolute w-fit"
                style={{
                  top: image.topTablet,
                  left: image.leftTablet,
                  //transform: `scale(${1 / image.scaleTablet})`,
                  width: `${image.widthTablet}px`,
                  height: `${image.heightTablet}px`,
                  transition: 'transform 0.5s linear',
                }}
              >
                {/* <CardBody className="group/card h-full w-full transition-transform duration-300 ease-in-out group-hover/card:shadow-xl"> */}
                <CardItem
                  translateZ={image.translateZ}
                  scaleX={image.scaleTablet}
                  scaleY={image.scaleTablet}
                  //group-hover/card:h-[168px] group-hover/card:w-[352px] h-[168px] w-[352px] hover:scale-150
                  className="absolute left-0 top-0 transform"
                  style={{ transition: ' 0.5s linear' }}
                >
                  <Link
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-none"
                  >
                    <Image
                      src={image.src}
                      //group-hover/card:scale-100
                      className="object-cover"
                      alt={image.name}
                      width={352}
                      height={168}
                      style={{
                        // width: '100%',
                        // height: '100%',
                        //transform: `scale(${1 / image.scaleTablet})`,
                        transition: ' 0.5s linear',
                      }}
                    />
                  </Link>
                  <CardItem
                    style={{
                      transformOrigin: 'left center',
                      transition: ' 0.3s linear',
                    }}
                    translateZ={image.translateZ + 30}
                    scaleY={1 / image.scaleTablet}
                    className="absolute -bottom-5 h-6 w-full transform items-center justify-center opacity-0 transition-opacity duration-500 ease-linear group-hover/card:flex group-hover/card:opacity-100"
                  >
                    <ICONS_SHARED.CORNER_BOTTOM
                      style={{
                        transform: `scaleX(${1 / image.scaleTablet})`,
                      }}
                      className="absolute bottom-0 left-0 w-4"
                    />

                    <p
                      style={{
                        transform: `scaleX(${1 / image.scaleTablet})`,
                        whiteSpace: 'nowrap',
                        // overflow: 'hidden',
                        // textOverflow: 'ellipsis',
                      }}
                      //text-sm
                      className="text-s leading-o-130 text-olga-light-grey"
                    >
                      {image.name}
                    </p>

                    <ICONS_SHARED.CORNER_TOP
                      style={{
                        transform: `rotate(90deg ) scaleY(${1 / image.scaleTablet})`,
                      }}
                      className="absolute bottom-0 right-0 w-4"
                    />
                  </CardItem>
                </CardItem>
                {/* </CardBody> */}
              </CardContainer>
            ))}
          </FollowerPointerCard>
        </div>
      )}
      {/* desktop isDesktop*/}
      {isDesktop && (
        <div className="2xl:relative 2xl:block 2xl:h-[417px] 2xl:w-[1144px]">
          {/* hidden */}
          <FollowerPointerCard>
            {IMAGES_HOME_PROJECTS.map((image, ind) => (
              <CardContainer
                key={image.name + ind}
                className="absolute w-fit"
                // scale={image.scaleDesktop}
                style={{
                  top: image.topDesktop,
                  left: image.leftDesktop,
                  width: `${image.widthDesktop}px`,
                  height: `${image.heightDesktop}px`,
                  transition: 'transform 0.5s linear',
                }}
              >
                {/* <CardBody className="group/card relative h-full w-full transition-transform duration-300 ease-in-out group-hover/card:shadow-xl"> */}
                <CardItem
                  translateZ={image.translateZ}
                  scaleX={image.scaleDesktop}
                  scaleY={image.scaleDesktop}
                  // scale={image.scaleDesktop}
                  //group-hover/card:h-[249px] group-hover/card:w-[512px]
                  className="absolute left-0 top-0"
                  style={{ transition: ' 0.5s linear' }}
                >
                  {/* <Link
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-none"
                    > */}
                  <Image
                    src={image.src}
                    className="object-cover"
                    alt={image.name}
                    width={image.widthDesktop * 2}
                    height={image.heightDesktop*2}
                    style={{
                      // width: '100%',
                      // height: '100%',

                      transition: ' 0.5s linear',
                    }}
                  />
                  {/* </Link> */}
                </CardItem>
                <CardItem
                  style={{
                    transformOrigin: 'left center',
                    transition: ' 0.3s linear',
                  }}
                  translateZ={image.translateZ + 30}
                  scaleY={1 / image.scaleDesktop}
                  className="absolute -bottom-5 hidden h-6 w-full transform items-center justify-center text-center opacity-0 transition-opacity duration-500 group-hover/card:flex group-hover/card:opacity-100"
                >
                  <ICONS_SHARED.CORNER_BOTTOM
                    style={{
                      transform: `scaleX(${1 / image.scaleDesktop})`,
                    }}
                    className="absolute bottom-0 left-0 w-4"
                  />

                  <p
                    style={{
                      transform: `scaleX(${1 / image.scaleDesktop})`,
                      whiteSpace: 'nowrap',
                      // overflow: 'hidden',
                      // textOverflow: 'ellipsis',
                    }}
                    //7text-sm
                    className="text-sm leading-o-130 text-olga-light-grey"
                  >
                    {image.name}
                  </p>

                  <ICONS_SHARED.CORNER_TOP
                    style={{
                      transform: `rotate(90deg ) scaleY(${1 / image.scaleDesktop})`,
                    }}
                    className="absolute bottom-0 right-0 w-4"
                  />
                </CardItem>
                {/* </CardBody> */}
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
