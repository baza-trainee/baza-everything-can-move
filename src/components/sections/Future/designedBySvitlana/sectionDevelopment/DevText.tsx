import { TEXTS } from '@/constants/text';
import React from 'react';

function DevText() {
  return (
    <div className="flex w-full flex-col gap-[40px] lg:-mt-[250px] lg:gap-[80px] 2xl:-mt-[320px] 2xl:gap-[120px]">
      {TEXTS.map((item, idx) => (
        <div
          key={item.title}
          className="w-[345px] lg:self-end 2xl:odd:self-start"
        >
          <h3 className='font-font5 text-lg leading-o-120 uppercase tracking-s-2 flex gap-5 mb-5'>
            <span>{`0${idx + 1}`}</span>
            <span>{'//'}</span>
            <span className='text-s-purple'>{item.title.split(' ')[0]}</span>
          </h3>
          <p className="font-third-family text-m leading-o-150 2xl:text-l">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DevText;
