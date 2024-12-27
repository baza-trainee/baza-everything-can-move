'use client'; // Додайте це, якщо використовуєте Next.js
import React, { useState } from 'react';
import Image from 'next/image';
import './marquee.css';

const Marquee: React.FC = () => {
  const [animationDuration] = useState(30); // Можна змінити значення за потреби

  return (
    <section className="relative">
      <div className="no-repeat absolute h-[100%] w-[100%] bg-[url('/assets/images/HomeImg/background.png')] bg-cover bg-center bg-no-repeat"></div>
      <div className="overflow-hidden">
        {/* Рядок рухається вліво */}
        <div
          className="decor relative inline-block w-[100%] whitespace-nowrap"
          style={{
            animation: `marquee-reverse ${animationDuration}s linear infinite`,
          }}
        >
          <Image
            src="/assets/images/HomeImg/line.svg"
            alt="Line Image"
            width={100}
            height={20}
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>

        {/* Рядок рухається вправо */}
        <div
          className="whitespace-nowrap text-[40px]"
          style={{
            animation: `marquee ${animationDuration}s linear infinite`,
          }}
        >
          BAZA TRAINEE UKRAINE BAZA TRAINEE UKRAINE BAZA TRAINEE UKRAINE BAZA
          TRAINEE UKRAINE BAZA TRAINEE UKRAINE BAZA TRAINEE UKRAINE BAZA TRAINEE
          UKRAINE BAZA TRAINEE UKRAINE BAZA TRAINEE UKRAINE BAZA TRAINEE UKRAINE
          BAZA TRAINEE UKRAINE BAZA TRAINEE UKRAINE
        </div>

        {/* Ще один рядок рухається вліво */}
        <div
          className="whitespace-nowrap text-[40px]"
          style={{
            animation: `marquee-reverse ${animationDuration}s linear infinite`,
          }}
        >
          BAZA TRAINEE UKRAINE BAZA TRAINEE UKRAINE BAZA TRAINEE UKRAINE BAZA
          TRAINEE UKRAINE BAZA TRAINEE UKRAINE BAZA TRAINEE UKRAINE BAZA TRAINEE
          UKRAINE BAZA TRAINEE UKRAINE BAZA TRAINEE UKRAINE BAZA TRAINEE UKRAINE
          BAZA TRAINEE UKRAINE BAZA TRAINEE UKRAINE
        </div>

        {/* Ще один рядок рухається вправо */}
        <div
          className="inline-block w-[100%] whitespace-nowrap"
          style={{
            animation: `marquee ${animationDuration}s linear infinite`,
          }}
        >
          <Image
            src="/assets/images/HomeImg/line.svg"
            alt="Line Image"
            width={100}
            height={20}
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Marquee;
