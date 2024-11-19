'use client'; // Додайте це, якщо використовуєте Next.js
// import Test from './Test';
import React from 'react';
import Scene from './Scene';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero pb-[350px] pt-[104px] 2xl:pb-[280px]">
      <div className="items-top container relative flex flex-wrap">
        {/* <Test /> */}
        <h1 className="text-animation text-[40px] uppercase leading-[120%] lg:text-[64px] 2xl:text-[86px]">
          як ми <span></span> <br />
          <span style={{ color: 'rgba(143, 141, 237, 1)' }}>анімацію</span>
          <br />
          робили
        </h1>
        <Scene />
        <div className="absolute bottom-[-10rem] left-1/2 z-10 opacity-100 transition-opacity duration-500 md:block">
          <div className="icon-scroll scroll-to-second-section mb-6 h-10 w-6 cursor-pointer rounded-[20px] border border-white xl:mb-12">
            <span className="mx-auto my-2 block h-2 w-0.5 animate-[scroll_3s_ease_infinite] rounded-full bg-white"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
