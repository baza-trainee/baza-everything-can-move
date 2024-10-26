import Hero from "../components/sections/Home/Hero/Hero";
import Marquee from "../components/sections/Home/Marquee/Marquee";
// import Preloader from '../components/Preloader/Preloader';
import ScrollButton from "../components/ui/ScrollButton/ScrollButton";
import OldBase from "../components/sections/Home/OldBase/OldBase";
import Today from "../components/sections/Home/Today/Today";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      {/* <Preloader /> */}
      <ScrollButton />
      <OldBase />
      <Today />
    </>
  );
}
