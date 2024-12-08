'use client';

import { useDesignStore } from '@/useDesignStore';

import TeamPageSvitlana from './desingeBySvitlana/TeamPage';
import TeamPageOlga from './designeByOlga/TeamPageOlga';

function TeamPage() {
  const { designType } = useDesignStore();
  if (designType === 'initial') return null;
  return (
    <>
      {designType === 'designByOlga' && <TeamPageOlga />}
      {designType === 'designBySvitlana' && <TeamPageSvitlana />}
    </>
  );
}

export default TeamPage;
