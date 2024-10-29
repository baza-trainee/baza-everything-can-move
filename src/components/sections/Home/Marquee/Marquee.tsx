'use client'; // Додайте це, якщо використовуєте Next.js
import React from 'react';
import Image from 'next/image';
import './marquee.css';
// import { section } from 'framer-motion/client';

const Marquee: React.FC = () => {
  return (
    <section className="relative">
      <div className="no-repeat absolute h-[100%] w-[100%] bg-[url('/assets/images/HomeImg/background.png')] bg-center bg-cover bg-no-repeat"></div>
      <div className="overflow-hidden">
        {/* Рядок рухається вліво */}
        <div className="animate-marquee-reverse decor relative inline-block w-[100%] whitespace-nowrap">
          <Image
            src="/assets/images/HomeImg/line.svg"
            alt="Line Image"
            width={100}
            height={20}
          />
        </div>

        {/* Рядок рухається вправо */}
        <div className="animate-marquee inline-block whitespace-nowrap text-[40px]">
          BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA
          TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA
          TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA
          TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE
        </div>

        {/* Ще один рядок рухається вліво */}
        <div className="animate-marquee-reverse inline-block whitespace-nowrap text-[40px]">
          BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA
          TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA
          TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA
          TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE
        </div>

        {/* Ще один рядок рухається вправо */}
        <div className="animate-marquee inline-block w-[100%] whitespace-nowrap">
          <Image
            src="/assets/images/HomeImg/line.svg"
            alt="Line Image"
            width={100}
            height={20}
          />
        </div>
      </div>
    </section>
  );
};

export default Marquee;
