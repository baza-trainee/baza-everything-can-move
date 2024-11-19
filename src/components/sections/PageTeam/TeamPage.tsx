'use client';

import { useDesignStore } from '@/useDesignStore';
import SectionGeografy from './designeByOlga/SectionGeografy/SectionGeografy';
import SectionJoin from './designeByOlga/SectionJoin/SectionJoin';
import SectionStatistic from './designeByOlga/SectionStatistic/SectionStatistic';
import SectionTeam from './designeByOlga/SectionTeam/SectionTeam';
import HeroSection from './desingeBySvitlana/Hero/HeroSection';
import Participant from './desingeBySvitlana/Participant/Participant';
import TeamSectionSV from './desingeBySvitlana/TeamSectionSV';

function TeamPage() {
  const { designType } = useDesignStore();
  if (designType === 'initial') return null;
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
          <Participant />
          <TeamSectionSV />
        </>
      )}
    </>
  );
}

export default TeamPage;
