'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import './marquee.css';
//import '../Marquee/marquee.module.css';

const Marquee = () => {
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
    //marquee-container
    <div className="overflow-x-hidden py-3">
      {/* Бігучий рядок */}
      <motion.div
        animate={marqueeAnimationLeft}
        // marquee-content
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
                className="font-font3 text-[40px] font-medium leading-[72px]"
                style={{
                  WebkitTextFillColor: 'black',
                  WebkitTextStroke: '1px rgba(255, 255, 255, 1)',
                }}
              >
                BAZA TRAINEE UKRAINE
              </p>
              <Image
                //images
                className="h-[50px] w-[50px] shrink-0"
                src="/assets/images/HomeImg/Star-1.svg"
                alt="Еліпс"
                width={50}
                height={50}
              />
              <p className="font-font3 text-[40px] font-medium leading-[72px] text-white">
                BAZA TRAINEE UKRAINE
              </p>
              <Image
                //images
                className="mr-6 h-[50px] w-[50px] shrink-0"
                src="/assets/images/HomeImg/Star-2.svg"
                alt="Еліпс"
                width={50}
                height={50}
              />
            </div>
          ))}
      </motion.div>
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
                className="font-font3 text-[40px] font-medium leading-[72px]"
                style={{
                  WebkitTextFillColor: 'black',
                  WebkitTextStroke: '1px rgba(255, 255, 255, 1)',
                }}
              >
                BAZA TRAINEE UKRAINE
              </p>
              <Image
                // images
                className="h-[50px] w-[50px] shrink-0"
                src="/assets/images/HomeImg/Star-1.svg"
                alt="Еліпс"
                width={50}
                height={50}
              />
              <p className="font-font3 text-[40px] font-medium leading-[72px] text-white">
                BAZA TRAINEE UKRAINE
              </p>
              <Image
                //images
                className="mr-6 h-[50px] w-[50px] shrink-0"
                src="/assets/images/HomeImg/Star-2.svg"
                alt="Еліпс"
                width={50}
                height={50}
              />
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
