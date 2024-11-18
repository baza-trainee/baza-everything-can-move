'use client'
import { useDesignStore } from '@/useDesignStore';
import SectionFuture from '@/components/sections/Future/designedByOlga/sectionFuture/SectionFuture';
import SectionDevelopment from '@/components/sections/Future/designedByOlga/sectionDevelopment/SectionDevelopment';
import SectionPlan from '@/components/sections/Future/designedByOlga/sectionPlan/SectionPlan';
import SectionJoin from '@/components/sections/PageTeam/designeByOlga/SectionJoin/SectionJoin';
import SectionFutureHero from '@/components/sections/Future/designedBySvitlana/sectionFuture/SectionFutureHero';

function Page() {
  const { designType } = useDesignStore();

  return (
    <>
      {designType === 'designByOlga' && (
        <div className="text-white">
          <SectionFuture />
          <SectionPlan />
          <SectionDevelopment />
          <SectionJoin />
        </div>
      )}
      {designType === 'designBySvitlana' && (
        <div className="text-white">
          <SectionFutureHero />
        </div>
      )}
    </>
  );
}

export default Page;
