'use client';
//from big to small- I use it
import React, { useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';

import { IMAGES_HOME_PROJECTS } from '@/constants/images/imagesSrc';

import MobileCarousel from './ProjectsComponentVariants/MobileCarousel';
import ProjectCardsTablet from './ProjectsComponentVariants/ProjectCardsTablet';
import ProjectCardsDesktop from './ProjectsComponentVariants/ProjectCardsDesktop';

const ProjectCardsShowcase: React.FC = () => {
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
      {isTablet && <ProjectCardsTablet images={IMAGES_HOME_PROJECTS} />}

      {/* desktop isDesktop*/}
      {isDesktop && <ProjectCardsDesktop images={IMAGES_HOME_PROJECTS} />}

      {/* mobile */}
      {isMobile && <MobileCarousel images={IMAGES_HOME_PROJECTS} />}
    </div>
  );
};
export default ProjectCardsShowcase;
