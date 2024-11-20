'use client';

import { useDesignStore } from '@/useDesignStore';
import PartnersSection from '@/components/sections/Projects/PartnersSection/PartnersSection';
import ProjectsSection from '@/components/sections/Projects/ProjectsSection/ProjectsSection';
// import ProjectsSection from '@/components/sections/Projects/ProjectsSection/ProjectsSection';
import React from 'react';
import BirdsComponent from '@/components/sections/Projects/DesignBySvitlana/BirdsComponent';

const Page = (): JSX.Element => {
  const { designType } = useDesignStore();
  return (
    <>
      {designType === 'designByOlga' && (
        <>
          <ProjectsSection />
          <PartnersSection />
        </>
      )}
      {designType === 'designBySvitlana' && (
        <>
          <BirdsComponent />
        </>
      )}
    </>
  );
};

export default Page;
