"use client"; // Додайте це, якщо використовуєте Next.js
import ColoredGirl from "../../../Girl/ColoredGirl";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero pt-[160px] pb-[160px]">
      <div className="container laptop:flex items-top tablet:text-[86px] text-[55px]">
        <div className="uppercase relative leading-[120%]">
          <h1 className="text-animation">
            створювали ми <br />{" "}
            <span style={{ color: "#D3FD50" }}>анімацію</span>
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
              className="rotate mobile:left-[72%] left-[69%] h-[39%] bottom-[-33%]"
              src="/assets/images/HomeImg/Vector.svg"
              alt="Еліпс"
            />
          </div>
        </div>
        <ColoredGirl />
      </div>
    </section>
  );
}
