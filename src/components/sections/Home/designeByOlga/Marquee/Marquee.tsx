'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import '../Marquee/marquee.module.css';

const Marquee = () => {
  const [animationDuration] = useState(30);
  // Налаштування анімації вліво
  const marqueeAnimationLeft = {
    x: ['0%', '-100%'], // Початкова і кінцева позиції
    transition: {
      duration: 20, // Тривалість циклу
      ease: 'linear', // Лінійна анімація
      repeat: Infinity, // Повторюється безкінечно
    },
  };
  const marqueeAnimationRight = {
    x: ['-100%', '0%'], // Початкова і кінцева позиції
    transition: {
      duration: 20, // Тривалість циклу
      ease: 'linear', // Лінійна анімація
      repeat: Infinity, // Повторюється безкінечно
    },
  };

  return (
    // marquee-container
    <div className="relative overflow-hidden py-3">
      <div className="no-repeat absolute h-[100%] w-[100%] bg-[url('/assets/images/HomeImg/background.png')] bg-cover bg-center bg-no-repeat"></div>
      {/* Бігучий рядок // upper line*/}
      <div
        //decor
        className="relative inline-block w-[100%] whitespace-nowrap"
        style={{
          //
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
      {/* upper row */}
      <motion.div
        animate={marqueeAnimationLeft}
        //marquee-content
        className="flex whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        {/* Дублюємо контент кілька разів для безперервності */}
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex shrink-0 grow-0 basis-auto items-center gap-x-6"
            >
              <p
                // id="stroke"
                className="font-font3 text-[40px] font-regular leading-[72px]"
                style={{
                  WebkitTextFillColor: 'black',
                  WebkitTextStroke: '1px rgba(255, 255, 255, 1)',
                }}
              >
                BAZA TRAINEE UKRAINE
              </p>

              <p className="font-font3 mr-4 text-[40px] font-regular leading-[72px] text-white">
                BAZA TRAINEE UKRAINE
              </p>
            </div>
          ))}
      </motion.div>
      {/* down row */}
      <motion.div
        animate={marqueeAnimationRight}
        //marquee-content
        className="flex whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        {/* Дублюємо контент кілька разів для безперервності */}
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex shrink-0 grow-0 basis-auto items-center gap-x-6"
            >
              <p
                // id="stroke"
                className="font-font3 mr-4 text-[40px] font-regular leading-[72px]"
                style={{
                  WebkitTextFillColor: 'black',
                  WebkitTextStroke: '1px rgba(255, 255, 255, 1)',
                }}
              >
                BAZA TRAINEE UKRAINE
              </p>

              <p className="font-font3 mr-4 text-[40px] font-regular leading-[72px] text-white">
                BAZA TRAINEE UKRAINE
              </p>
            </div>
          ))}
      </motion.div>
      {/*down  line */}
      <div
        //decor
        className="relative inline-block w-[100%] whitespace-nowrap"
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
  );
};

export default Marquee;
