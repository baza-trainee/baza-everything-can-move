import Hero from '../components/sections/Home/Hero/Hero';
import Marquee from '../components/sections/Home/Marquee/Marquee';
// import Preloader from '../components/Preloader/Preloader';
import ScrollButton from '../components/ui/ScrollButton/ScrollButton';
import OldBase from '../components/sections/Home/OldBase/OldBase';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      {/* <Preloader /> */}
      <ScrollButton/>
      <OldBase/>
    </>
  );
}
