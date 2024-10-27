'use client'; // Додайте це, якщо використовуєте Next.js
import React from 'react';
import Image from 'next/image';
import './marquee.css';

const Marquee: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Рядок рухається вліво */}
      <div className="animate-marquee-reverse relative inline-block whitespace-nowrap w-[100%]">
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
        TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE
        BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA
        TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE
      </div>

      {/* Ще один рядок рухається вліво */}
      <div className="animate-marquee-reverse inline-block whitespace-nowrap text-[40px]">
        BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA
        TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE
        BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA
        TRAINEE BAZA TRAINEE BAZA TRAINEE BAZA TRAINEE
      </div>

      {/* Ще один рядок рухається вправо */}
      <div className="animate-marquee w-[100%] inline-block whitespace-nowrap">
        <Image
          src="/assets/images/HomeImg/line.svg"
          alt="Line Image"
          width={100}
          height={20}
        />
      </div>
    </div>
  );
};

export default Marquee;
