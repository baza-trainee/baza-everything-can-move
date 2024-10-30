'use client';

import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards';

// import Image from 'next/image';
import React from 'react';

interface MovingPartnersCardsProps {
  items: {
    name: string;
    // imgSrc: string;
    Icon: React.FC;
  }[];
  speed?: 'fast' | 'normal' | 'slow';
}

const MovingPartnersCards: React.FC<MovingPartnersCardsProps> = ({ items }) => {
  const divClass = 'mb-8 h-16';
  return (
    <InfiniteMovingCards speed="normal" addClass={divClass}>
      <>
        {items.map((item, index) => (
          <div className="relative shrink-0 grow-0" key={item.name + index}>
            {/* <Image
              src={item.imgSrc}
              alt={`Logo of ${item.name}`}
              width={150}
              height={64}
              quality={100}
              className="h-16 w-auto"
            /> */}
            <item.Icon />
          </div>
        ))}
      </>
    </InfiniteMovingCards>
  );
};

export default MovingPartnersCards;
