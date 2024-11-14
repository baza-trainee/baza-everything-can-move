'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import '../Marquee/marquee.css';

const Marquee = () => {
  const marqueeLeft = {
    x: ['0%', '-100%'],
    transition: {
      duration: 30,
      ease: 'linear',
      repeat: Infinity,
    },
  };

  const marqueeRight = {
    x: ['0%', '100%'],
    transition: {
      duration: 30,
      ease: 'linear',
      repeat: Infinity,
    },
  };

  return (
    <div className="olga flex w-full flex-col items-center space-y-4 overflow-x-hidden py-3">
      {/* Верхній рядок - рухається вліво */}
      <motion.div
        animate={marqueeLeft}
        className="flex min-w-min shrink-0 grow-0 basis-auto items-center gap-x-6 whitespace-nowrap"
      >
        <p
          id="stroke"
          className="inline-block font-font3 text-[40px] font-medium leading-[72px]"
        >
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-1.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />
        <p className="inline-block font-font3 text-[40px] font-medium leading-[72px] text-white">
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-2.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />
        <p
          id="stroke"
          className="inline-block font-font3 text-[40px] font-medium leading-[72px]"
        >
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-1.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />
        <p className="inline-block font-font3 text-[40px] font-medium leading-[72px] text-white">
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-2.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />
        <p className="inline-block font-font3 text-[40px] font-medium leading-[72px] text-white">
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-1.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />
        <p className="inline-block font-font3 text-[40px] font-medium leading-[72px] text-white">
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-2.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />{' '}
        <p className="inline-block font-font3 text-[40px] font-medium leading-[72px] text-white">
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-1.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />{' '}
        <p className="inline-block font-font3 text-[40px] font-medium leading-[72px] text-white">
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-2.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />
      </motion.div>

      {/* Нижній рядок - рухається вправо */}
      <motion.div
        animate={marqueeRight}
        className="flex min-w-min shrink-0 grow-0 basis-auto items-center gap-x-6 whitespace-nowrap"
      >
        <p
          id="stroke"
          className="inline-block font-font3 text-[40px] font-medium leading-[72px]"
        >
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-1.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />
        <p className="inline-block font-font3 text-[40px] font-medium leading-[72px] text-white">
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-2.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />
        <p
          id="stroke"
          className="inline-block font-font3 text-[40px] font-medium leading-[72px]"
        >
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-1.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />
        <p className="inline-block font-font3 text-[40px] font-medium leading-[72px] text-white">
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-2.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />
        <p className="inline-block font-font3 text-[40px] font-medium leading-[72px] text-white">
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-1.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />
        <p className="inline-block font-font3 text-[40px] font-medium leading-[72px] text-white">
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-2.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />{' '}
        <p className="inline-block font-font3 text-[40px] font-medium leading-[72px] text-white">
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-1.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />{' '}
        <p className="inline-block font-font3 text-[40px] font-medium leading-[72px] text-white">
          BAZA TRAINEE UKRAINE
        </p>
        <Image
          className="images"
          src="/assets/images/HomeImg/Star-2.svg"
          alt="Еліпс"
          width={100} // Вкажи потрібну ширину SVG
          height={100} // Вкажи потрібну висоту SVG
        />
      </motion.div>
    </div>
  );
};

export default Marquee;
