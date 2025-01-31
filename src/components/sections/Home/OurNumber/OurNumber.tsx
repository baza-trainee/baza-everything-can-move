'use client'; // Додайте це, якщо використовуєте Next.js
import clsx from 'clsx';
import Image from 'next/image';
import './marquee.css';
import Label from './Label';

export default function OurNumber() {
  return (
    <section className="outnumber relative overflow-hidden pt-5 pb-[120px]">
      {/* Рядок рухається вліво */}
      <div className="animate-marquee-reverse decor relative inline-block w-[100%] whitespace-nowrap">
        <Image
          className='w-[100px] h-[20px]'
          src="/assets/images/HomeImg/line.svg"
          alt="Line Image"
          width={100}
          height={20}
        />
      </div>
      <div
        className={clsx(
          "relative overflow-hidden bg-[url('/assets/images/TemSection/VectorStat.png')] w-[100%] bg-contain bg-center"
        )}
      >
        <ul className="container z-10 grid h-[632px] grid-cols-2 2xl:grid-cols-3">
          <li className="relative">
            <Label
              className="translate-y-0 transform lg:translate-x-14 lg:translate-y-10 2xl:translate-x-36 2xl:translate-y-24"
              textTop="учасників"
              textBottom="приймають участь в 2-3 проєктах"
              number={72}
              showPercentage={true}
            />
          </li>
          <li className="relative">
            <Label
              className="translate-x-[-97%] translate-y-96 transform lg:translate-x-20 lg:translate-y-32 2xl:translate-y-16 2xl:translate-x-48"
              textTop="учасників"
              textBottom="задоволені практикою і вважають цілі досягнуті"
              number={99}
              showPercentage={true}
            />
          </li>
          <li className="relative">
            <Label
              className="-translate-y-24 translate-x-36 transform lg:translate-x-16 lg:translate-y-40 2xl:translate-x-16 2xl:translate-y-64 2xl:translate-x-44"
              textTop="анкет за 2024 рік"
              textBottom="від бажаючих прийняти участь в проєктах"
              number={2300}
              showPercentage={false}
            />
          </li>
          <li className="relative">
            <Label
              className="-translate-x-40 translate-y-[15%] transform lg:translate-x-[-6.65rem] 2xl:translate-x-16 2xl:translate-y-20"
              textTop="учасника"
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
              className="text- max-w-36 translate-x-40 translate-y-[-90%] transform lg:translate-x-[27rem] 2xl:translate-x-[10rem] 2xl:translate-y-28"
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
          className='w-[100px] h-[20px]'
          src="/assets/images/HomeImg/line.svg"
          alt="Line Image"
          width={100}
          height={20}
        />
      </div>
    </section>
  );
}
