import React from 'react';

import WhiteGirl from '@/components/Girl/WhiteGirl';

const NotFoundPage = () => {
  return (
    <section className="py-[200px] lg:py-[150px]">
      <div className="relative mx-auto mb-2 w-[350px]">
        <h1 className="text-center text-xl text-white">Ups ...</h1>
        <div className="absolute -top-14 right-2 h-[200px] w-[200px]">
          <WhiteGirl />
        </div>
      </div>

      <p className="text-center text-lg">такої сторінки немає</p>
    </section>
  );
};

export default NotFoundPage;
