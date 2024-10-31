'use client';

import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards';

import React from 'react';

interface MovingPartnersCardsProps {
  items: {
    name: string;
    Icon: React.FC;
  }[];
  speed?: 'fast' | 'normal' | 'slow';
}

const MovingPartnersCards: React.FC<MovingPartnersCardsProps> = ({ items }) => {
  const divClass = 'mb-8 h-16 ';
  return (
    <InfiniteMovingCards speed="normal" addClass={divClass}>
      {items.map((item, index) => (
        <div className="relative mr-9 shrink-0 grow-0" key={item.name + index}>
          <item.Icon />
        </div>
      ))}
    </InfiniteMovingCards>
  );
};

export default MovingPartnersCards;