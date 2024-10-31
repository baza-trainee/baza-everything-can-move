import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FotoSwiper from './FotoSwiper';
import SectionTitle from '@/components/ui/SectionTitle';
import Subtitle from '@/components/ui/Subtitle';

function TeamSection() {
  return (
    <section className="pb-[6.25rem]">
      <div className="container text-white">
        <div className="relative flex flex-col gap-8 pb-12">
          <Image
            className="absolute bottom-0 left-0"
            alt="Низ"
            width={16}
            height={16}
            src={'/assets/icons/corner.svg'}
          />
          <Image
            className="absolute right-0 top-0 rotate-180"
            alt="Низ"
            width={16}
            height={16}
            src={'/assets/icons/corner.svg'}
          />
          <div className="pt-10">
            <SectionTitle className="pb-1 text-lg lg:text-[2.25rem] 2xl:text-[48px]">
              Команди
            </SectionTitle>
            <Subtitle text="квітень" year={2024} typeText="month" />
          </div>
          <div className="flex flex-col items-center gap-[100px] lg:flex-row lg:justify-between lg:gap-0">
            <div className="w-full lg:max-w-[336px] 2xl:max-w-[486px]">
              <FotoSwiper />
            </div>

            <div className="flex flex-col justify-center gap-6 text-[14px] lg:max-w-[320px] lg:text-m 2xl:max-w-[346px] 2xl:text-sm">
              <p>
                На старті розвитку Бази на проєктах було залучено по 20-25 осіб
                до команди. <br />
                {''} <br /> Наразі наш оптимальний склад — до 10 учасників, це —
                до трьох дизайнерів, до трьох фронт девелоперів, до трьох
                тестувальників та Іван.
              </p>
              <Link href={'/team'} className="group ml-auto flex gap-2">
                <span className="relative after:absolute after:bottom-0 after:right-0 after:h-[1px] after:w-full after:bg-white after:transition-all after:duration-500 group-hover:after:w-0">
                  читати далі
                </span>

                <Image
                  width={24}
                  height={24}
                  alt="Кнопка читати далі"
                  src={'/assets/icons/icon_arrow.svg'}
                  className="transition-all duration-500 ease-in-out group-hover:scale-125"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
