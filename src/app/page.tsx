'use client';
import { useDesignStore } from '@/useDesignStore';
import Hero from '../components/sections/Home/designeByOlga/Hero/Hero';
import HeroSection from '../components/sections/Home/designeBySvitlana/Hero/Hero';
import Marquee from '../components/sections/Home/designeByOlga/Marquee/Marquee';
import MarqueeSection from '../components/sections/Home/designeBySvitlana/Marquee/Marquee';
import OldBase from '../components/sections/Home/designeByOlga/OldBase/OldBase';
import OldBaseSection from '../components/sections/Home/designeBySvitlana/OldBase/OldBase';
import Today from '../components/sections/Home/Today/Today';
import OurNumber from '../components/sections/Home/OurNumber/OurNumber';
import TeamSection from '@/components/sections/Home/Team/TeamSection';
import ProjectsHomeSection from '@/components/sections/Home/ProjectsHomeSection/ProjectsHomeSection';

function Home() {
  const { designType } = useDesignStore();
  return (
    <>
      {designType === 'designByOlga' && (
        <>
          <Hero />
          <Marquee />
          <OldBase />
          <Today />
          <OurNumber />
          <TeamSection />
          <ProjectsHomeSection />
        </>
      )}
      {designType === 'designBySvitlana' && (
        <>
          <HeroSection />
          <MarqueeSection />
          <OldBaseSection />
        </>
      )}
    </>
  );
}

export default Home;
