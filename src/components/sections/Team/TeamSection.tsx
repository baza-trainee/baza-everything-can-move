import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FotoSwiper from './FotoSwiper';

function TeamSection() {
  return (
    <section className="py-16">
      <div className="container relative text-white">
        <Image
          className="absolute bottom-0 left-0"
          alt="Низ"
          width={16}
          height={16}
          src={'/assets/images/TemSection/corner.svg'}
        />
        <Image
          className="absolute right-0 top-0 rotate-180"
          alt="Низ"
          width={16}
          height={16}
          src={'/assets/images/TemSection/corner.svg'}
        />
        <h2 className="text-5xl/normal font-medium uppercase">Команди</h2>
        <div className="mt-8 flex flex-col items-center justify-between gap-10 xl:flex-row">
          <FotoSwiper />

          <div className="flex max-w-[346px] flex-col justify-center gap-6">
            <p className="text-sm">
              На старті розвитку Бази на проєктах було залучено по 20-25 осіб до
              команди. <br />
              {''} <br /> Наразі наш оптимальний склад — до 10 учасників, це —
              до трьох дизайнерів, до трьох фронт девелоперів, до трьох
              тестувальників та Іван.
            </p>
            <Link href={'/team'} className="group ml-auto flex gap-2">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 group-hover:after:w-full">
                читати далі
              </span>

              <Image
                width={24}
                height={24}
                alt="Кнопка читати далі"
                src={'/assets/images/TemSection/icon_arrow.svg'}
                className="transition-all duration-500 ease-in-out group-hover:scale-125"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
