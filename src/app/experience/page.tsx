'use client'

import ExperienceSectionOlga from '@/components/sections/Experience/designedByOlga/ExperienceSectionOlga';
import ExperienceSectionSvitlana from '@/components/sections/Experience/designedBySvitlana/ExperienceSectionSvitlana';
import { useDesignStore } from '@/useDesignStore';

function Page() {

  const { designType } = useDesignStore();

  return (
    <>
      {designType === 'designByOlga' && (
        <div className="text-white">
          <ExperienceSectionOlga />
        </div>
      )}
      {designType === 'designBySvitlana' && (
        <div className="text-white">
          <ExperienceSectionSvitlana />
        </div>
      )}
    </>
  );
}

export default Page;
