'use client'; // Додайте це, якщо використовуєте Next.js
import clsx from 'clsx';
import Image from 'next/image';
import './marquee.css';
import Label from './Label';

export default function OurNumber() {
  return (
    <section className="outnumber py-5 relative overflow-hidden">
      {/* Рядок рухається вліво */}
      <div className="animate-marquee-reverse decor relative inline-block w-[100%] whitespace-nowrap">
        <Image
          src="/assets/images/HomeImg/line.svg"
          alt="Line Image"
          width={100}
          height={20}
        />
      </div>
      <div
        className={clsx(
          "relative overflow-hidden bg-[url('/assets/images/TemSection/VectorStat.png')] bg-contain bg-center"
        )}
      >
        <ul className="container z-10 grid h-[632px] grid-cols-2 xl:grid-cols-3">
          <li className="relative">
            <Label
              className="translate-y-0 transform lg:translate-x-20 lg:translate-y-28 2xl:translate-x-36"
              textTop="учасників"
              textBottom="приймають участь в 2-3 проєктах"
              number={72}
              showPercentage={true}
            />
          </li>
          <li className="relative">
            <Label
              className="translate-y-20 transform lg:translate-x-20 2xl:translate-x-52"
              textTop="учасників"
              textBottom="задоволені практикою і вважають цілі досягнуті"
              number={99}
              showPercentage={true}
            />
          </li>
          <li className="relative">
            <Label
              className="transform xl:translate-x-16 xl:translate-y-52 2xl:translate-x-44"
              textTop="анкет за 2024 рік"
              textBottom="від бажаючих прийняти участь в проєктах"
              number={2300}
              showPercentage={false}
            />
          </li>
          <li className="relative">
            <Label
              className="-translate-x-1/3 translate-y-20 transform lg:translate-x-16"
              textTop="жінок"
              textBottom="працевлаштовані"
              number={102}
              showPercentage={false}
            />
          </li>
          {/* <li className="relative">
            <Label
              className="translate-x-3 translate-y-0 transform lg:translate-x-20"
              textTop="учасників"
              textBottom="світчери"
              number={40}
              showPercentage={true}
            />
          </li> */}
          <li className="relative">
            <Label
              className="text- max-w-36 translate-x-40 translate-y-24 transform"
              textTop="кожен -й"
              textBottom="знаходіть роботу в обраному напрямку"
              number={4}
              showPercentage={false}
            />
          </li>
        </ul>
      </div>
      <div className="animate-marquee inline-block w-[100%] whitespace-nowrap">
        <Image
          src="/assets/images/HomeImg/line.svg"
          alt="Line Image"
          width={100}
          height={20}
        />
      </div>
    </section>
  );
}
