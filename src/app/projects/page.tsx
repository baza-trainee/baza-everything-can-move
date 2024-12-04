'use client';
import React from 'react';

import { useDesignStore } from '@/useDesignStore';

import PartnersSection from '@/components/sections/Projects/DesignByOlga/PartnersSection/PartnersSection';
import ProjectsSection from '@/components/sections/Projects/ProjectsSection/ProjectsSection';
import BirdsComponent from '@/components/sections/Projects/DesignBySvitlana/Birds/BirdsComponent';
import ProjectsSectionSecond from '@/components/sections/Projects/DesignBySvitlana/ProjectsSection/ProjectsSection';
import PurposeSection from '@/components/sections/Projects/DesignBySvitlana/PurposeSection/PurposeSection';
import StackSection2 from '@/components/sections/Projects/DesignBySvitlana/StackSection/StackSection2';
import StackSection from '@/components/sections/Projects/DesignBySvitlana/StackSection/StackSection';



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
          <ProjectsSectionSecond />
          <StackSection2 />

          <PurposeSection />
          <StackSection />
        </>
      )}
    </>
  );
};

export default Page;
