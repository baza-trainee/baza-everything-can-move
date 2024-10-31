import Hero from "../components/sections/Home/Hero/Hero";
import Marquee from "../components/sections/Home/Marquee/Marquee";
import OldBase from "../components/sections/Home/OldBase/OldBase";
import Today from "../components/sections/Home/Today/Today";
import OurNumber from "../components/sections/Home/OurNumber/OurNumber";

import TeamSection from '@/components/sections/Team/TeamSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <OldBase />
      <Today />
      <OurNumber />

      <TeamSection />
      
    </>
  );
}
