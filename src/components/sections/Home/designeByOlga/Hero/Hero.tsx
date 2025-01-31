'use client'; // Додайте це, якщо використовуєте Next.js
import ScrollButton from '../../../../ui/ContaktButton/ContaktButton';
import ColoredGirl from '../../../../Girl/ColoredGirl';
import Image from 'next/image';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero pb-[550px] pt-[84px] 2xl:pb-[280px]">
      <div className="items-top container relative flex flex-wrap">
        <div className="relative">
          <h1 className="text-animation text-[40px] uppercase leading-[120%] lg:text-[64px] 2xl:text-[86px]">
            створювали ми <br />
            <span style={{ color: '#D3FD50' }}>анімацію</span>
            <br />
            на базі
            <Image
              className="ellipse-animation absolute bottom-[-15px] left-2 w-[70%]"
              src="/assets/images/HomeImg/ellipse_hero.png"
              alt="ellipseHero"
              width={700} // Вкажи потрібну ширину зображення
              height={300}
            />
          </h1>
          <div className="elips absolute right-[-10%] h-[80px] w-[80px] lg:bottom-[-24%] lg:left-[60%] 2xl:left-[70%] 2xl:w-[120px]">
            <Image
              className="rotate"
              src="/assets/images/HomeImg/Vector.svg"
              alt="Еліпс"
              width={100} // Вкажи потрібну ширину SVG
              height={100} // Вкажи потрібну висоту SVG
            />
          </div>
        </div>
        <ColoredGirl />
        <ScrollButton />
      </div>
    </section>
  );
}
