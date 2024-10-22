"use client"; // Додайте це, якщо використовуєте Next.js
import clsx from "clsx";
import ColoredGirl from "../../../Girl/ColoredGirl";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={clsx(styles.hero, "pt-[160px] pb-[160px]")}>
      <div className="container flex items-top text-[86px]">
        <div className="uppercase relative">
          <h1 className={clsx(styles.text_animation)}>
            створювали ми <br /> <span>анімацію</span>
            <br />
            на базі
            {/* <img
              className="absolete ellipse-animation"
              src="/assets/images/HomeImg/ellipse_hero.png"
              alt=""
            /> */}
            <svg
              width="474"
              height="127"
              viewBox="0 0 474 127"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
            >
              <path
                d="M228.941 18.9531C359.248 -5.3215 468.613 -4.97352 473.215 19.7304C477.817 44.4343 375.913 84.1392 245.606 108.414C115.3 132.688 5.93481 132.34 1.33276 107.637C-2.20681 88.6362 57.2578 60.7618 144.191 37.8591"
                stroke="#D3FD50"
              />
            </svg>
          </h1>
          <div className="elips">
            <img
              className={styles.rotate}
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
