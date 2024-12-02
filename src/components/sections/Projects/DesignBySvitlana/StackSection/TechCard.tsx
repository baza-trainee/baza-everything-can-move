import React from 'react';
import { Stack } from '@/constants/stackArr';

interface TechCardProp {
  oneStack: Stack;
}

const TechCard: React.FC<TechCardProp> = ({ oneStack }) => {
  return (
    <div className="flex h-[200px] w-[220px] flex-col rounded-2xl border border-white font-second-family text-l font-medium leading-o-120 tracking-s-2 text-white 2xl:text-md">
      <div className="flex h-[134px] w-full items-center justify-center border-b border-white">
        <oneStack.Icon />
      </div>
      <div className="flex h-[64px] w-full items-center justify-center">
        <p>{oneStack.name}</p>
      </div>
    </div>
  );
};

export default TechCard;
