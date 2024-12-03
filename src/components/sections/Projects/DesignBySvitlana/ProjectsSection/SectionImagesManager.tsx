'use client';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import SliderMobile from './SliderMobile';

import { ProjectsImagesProps } from './types';

import SliderDesktop from './SliderDesktop';
import SliderTablet2 from './SliderTablet2';

const SectionImagesManager: React.FC<ProjectsImagesProps> = ({ images }) => {
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
  console.log('Client', isClient);
  console.log('isMobile', isMobile);
  return (
    <>
      {/* /* mobile */}
      {isMobile && (
        <div>
          <SliderMobile images={images} />
          <div className="m-auto mb-10 w-[273px] text-center">
            <p className="font-third-family text-m font-regular leading-s-24">
              Всі проєкти можна переглянути на сайті Baza Trainee Ukraine.
            </p>
          </div>
        </div>
      )}
      {/* tablet */}
      {isTablet && (
        <>
          <div className="m-auto mb-[60px] w-full text-center">
            <p className="font-third-family text-m font-regular leading-s-24">
              Всі проєкти можна переглянути на сайті Baza Trainee Ukraine.
            </p>
          </div>

          <SliderTablet2 images={images} />
        </>
      )}
      {/* desktop */}
      {isDesktop && (
        <>
          <div className="mx-auto mb-[40px] w-[410px] text-center">
            <p className="font-third-family text-l font-regular leading-s-36">
              Всі проєкти можна переглянути на сайті Baza Trainee Ukraine.
            </p>
          </div>
          <button>Button</button>
          <SliderDesktop images={images} />
        </>
      )}
    </>
  );
};

export default SectionImagesManager;
