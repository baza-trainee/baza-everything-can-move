"use client"; // Додайте це, якщо використовуєте Next.js
import ColoredGirl from "../../../Girl/ColoredGirl";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero pt-[160px] pb-[160px]">
      <div className="container flex items-top text-[86px]">
        <div className="uppercase relative">
          <h1 className="text-animation">
            створювали ми <br /> <span>анімацію</span>
            <br />
            на базі
            <img
              className="absolete ellipse-animation"
              src="/assets/images/HomeImg/ellipse_hero.png"
              alt=""
            />
          </h1>
          <div className="elips">
            <img
               className="rotate " 
              src="/assets/images/HomeImg/Vector.svg" alt="Еліпс" />
          </div>
        </div>
        <ColoredGirl />
      </div>
    </section>
  );
}
