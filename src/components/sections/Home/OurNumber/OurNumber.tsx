'use client'; // Додайте це, якщо використовуєте Next.js
import clsx from 'clsx';
import Label from './Label';

export default function OurNumber() {
  return (
    <section className="outnumber py-5">
      <div
        className={clsx(
          "relative overflow-hidden bg-[url('/assets/images/TemSection/VectorStat.png')] bg-contain bg-center"
        )}
      >
        <ul className="container z-10 grid h-[632px] grid-cols-2 xl:grid-cols-3">
          <li className="relative">
            <Label
              className="transform 2xl:translate-x-36  lg:translate-x-20 lg:translate-y-28 translate-y-0"
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
              className="transform 2xl:translate-x-44 xl:translate-x-16 xl:translate-y-52"
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
          <li className="relative ">
            <Label
              className="translate-x-40 translate-y-24 max-w-36 text- transform"
              textTop="кожен -й"
              textBottom="знаходіть роботу в обраному напрямку"
              number={4}
              showPercentage={false}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
