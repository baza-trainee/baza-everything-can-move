'use client'; // Додайте це, якщо використовуєте Next.js
import ScrollButton from '../../../ui/ScrollButton/ScrollButton';
import ColoredGirl from '../../../Girl/ColoredGirl';

import './Hero.css';

export default function Hero() {
  return (
    <section className="hero pb-[200px] pt-[60px]">
      <div className="items-top container relative text-[40px] flex flex-wrap lg:flex-nowrap xl:text-[86px]">
        <div className="relative uppercase leading-[120%]">
          <h1 className="text-animation">
            створювали ми <br />{' '}
            <span style={{ color: '#D3FD50' }}>анімацію</span>
            <br />
            на базі
            <img
              className="absolute left-2 ellipse-animation w-[500px] bottom-[-15px]"
              src="/assets/images/HomeImg/ellipse_hero.png"
              alt=""
            />
          </h1>
          <div className="elips">
            <img
              className="rotate absolute  right-[9%] xl:h-[118px] h-[80px] xl:left-[72%]"
              src="/assets/images/HomeImg/Vector.svg"
              alt="Еліпс"
            />
          </div>
        </div>
          <ColoredGirl />
        <ScrollButton />
      </div>
    </section>
  );
}
