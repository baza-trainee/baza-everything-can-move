import React from 'react';

import WhiteGirl from '@/components/Girl/WhiteGirl';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center py-[200px] lg:py-[150px]">
      <div className="relative mx-auto mb-2 w-[350px]">
        <h1 className="text-center text-xl text-white">Ups ...</h1>
        <div className="absolute -top-14 right-2 h-[200px] w-[200px]">
          <WhiteGirl />
        </div>
      </div>

      <p className="mb-16 text-center text-lg">такої сторінки немає</p>
      <Link
        href="/"
        className="mx-auto rounded-full border-[1px] px-[12.8px] py-[12.5px] text-sm font-regular leading-[23.4px] transition-colors hover:bg-white hover:text-black lg:px-[20px] lg:py-[9px] lg:text-md lg:leading-[26px] 2xl:py-[6.5px] 2xl:text-l 2xl:leading-[31.2px]"
      >
        На головну
      </Link>
    </section>
  );
};

export default NotFoundPage;
