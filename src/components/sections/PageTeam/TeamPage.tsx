'use client';

import { useDesignStore } from '@/useDesignStore';
import SectionGeografy from './designeByOlga/SectionGeografy/SectionGeografy';
import SectionJoin from './designeByOlga/SectionJoin/SectionJoin';
import SectionStatistic from './designeByOlga/SectionStatistic/SectionStatistic';
import SectionTeam from './designeByOlga/SectionTeam/SectionTeam';
import HeroSection from './desingeBySvitlana/HeroSection';

function TeamPage() {
  const { designType } = useDesignStore();
  return (
    <>
      {designType === 'designByOlga' && (
        <>
          <SectionTeam />
          <SectionStatistic />
          <SectionGeografy />
          <SectionJoin />
        </>
      )}
      {designType === 'designBySvitlana' && (
        <>
          <HeroSection />
        </>
      )}
    </>
  );
}

export default TeamPage;
