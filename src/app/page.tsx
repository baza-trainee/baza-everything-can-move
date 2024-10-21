import Marquee from '../components/sections/Home/Marquee/Marquee';
import Preloader from '../components/Preloader/Preloader';
import ColoredGirl from '../components/Girl/ColoredGirl';

export default function Home() {
  return (
    <>
      <Marquee />
      <ColoredGirl />
      <Preloader />
    </>
  );
}
