'use client';
import React from 'react';

import { useDesignStore } from '@/useDesignStore';

import PartnersSection from '@/components/sections/Projects/DesignByOlga/PartnersSection/PartnersSection';
import ProjectsSection from '@/components/sections/Projects/DesignByOlga/ProjectsSection/ProjectsSection';
import BirdsSection from '@/components/sections/Projects/DesignBySvitlana/Birds/BirdsSection';

import ProjectsSectionSecond from '@/components/sections/Projects/DesignBySvitlana/ProjectsSection/ProjectsSection';
import PurposeSection from '@/components/sections/Projects/DesignBySvitlana/PurposeSection/PurposeSection';
import StackSectionWords from '@/components/sections/Projects/DesignBySvitlana/StackSection/StackSectionWords';

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
          <BirdsSection />
          <ProjectsSectionSecond />
          <StackSectionWords />

          <PurposeSection />
        </>
      )}
    </>
  );
};

export default Page;
