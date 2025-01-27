import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center pb-[190px] pt-[60px]">
      <div className="mb-10 h-[227px] w-[361px] pt-[27px] leading-o-150">
        <Image
          src="/assets/images/404/404.png"
          alt="404"
          width={500}
          height={500}
        />
      </div>

      <p className="text-center text-sm text-white">
        Сталася якась біда. Сторінку не знайдено.
      </p>
      <p className="mb-16 text-center text-sm text-white">
        Поверніться на головну.
      </p>
      <div className="relative h-[60px] w-[330px] border-2 border-white transition-colors hover:bg-white hover:text-black">
        <Link
          href="/"
          className="mx-auto flex h-full w-full items-center justify-center text-l font-regular uppercase leading-o-130"
        >
          На головну
        </Link>
        <ICONS_SHARED.RECT404 className="absolute -left-[9px] -top-[9px]" />
        <ICONS_SHARED.RECT404 className="absolute -left-[9px] -bottom-[9px]" />
        <ICONS_SHARED.RECT404 className="absolute -right-[9px] -top-[9px]" />
        <ICONS_SHARED.RECT404 className="absolute -right-[9px] -bottom-[9px]" />
      </div>
    </section>
  );
};

export default NotFoundPage;
