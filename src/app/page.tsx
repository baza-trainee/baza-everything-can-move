'use client';
import { useDesignStore } from '@/useDesignStore';
import Hero from '../components/sections/Home/Hero/designeByOlga/Hero';
import HeroSection from '../components/sections/Home/Hero/designeBySvitlana/Hero';
import Marquee from '../components/sections/Home/Marquee/Marquee';
import OldBase from '../components/sections/Home/OldBase/OldBase';
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
        </>
      )}
    </>
  );
}

export default Home;