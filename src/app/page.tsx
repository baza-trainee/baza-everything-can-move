'use client';
import ProjectsHomeSection from '@/components/sections/Home/designeByOlga/ProjectsHomeSection/ProjectsHomeSection';
import TeamSection from '@/components/sections/Home/Team/TeamSection';
import { useDesignStore } from '@/useDesignStore';
import Hero from '../components/sections/Home/designeByOlga/Hero/Hero';
import Marquee from '../components/sections/Home/designeByOlga/Marquee/Marquee';
import OldBase from '../components/sections/Home/designeByOlga/OldBase/OldBase';
import HeroSection from '../components/sections/Home/designeBySvitlana/Hero/Hero';
import MarqueeSection from '../components/sections/Home/designeBySvitlana/Marquee/Marquee';
import OurNumber from '../components/sections/Home/OurNumber/OurNumber';
import Today from '../components/sections/Home/Today/Today';
import Teams from '../components/sections/Home/designeBySvitlana/Teams/Teams';
import OldBaseSection from '../components/sections/Home/designeBySvitlana/OldBase/OldBase';
import ProjectsSection from '@/components/sections/Home/designeBySvitlana/Projects/Projects';
import ExperienceSection from '@/components/sections/Home/designeBySvitlana/Experience/Experience';
import FutureSection from '@/components/sections/Home/designeBySvitlana/Future/Future';

//import NewSection from '@/components/sections/Home/designeByOlga/ProjectsHomeSection/NewSection';

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
          {/* <NewSection /> */}
        </>
      )}
      {designType === 'designBySvitlana' && (
        <>
          <HeroSection />
          <MarqueeSection />
          <OldBaseSection />
          <Teams />
          <ProjectsSection />
          <ExperienceSection />
          <FutureSection />
        </>
      )}
    </>
  );
}

export default Home;
