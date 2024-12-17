'use client';

import { InfiniteMovingCards } from '@/components/ui/SharedDesigns/InfiniteMovingCards';
import { PartnersArrProps } from '@/constants/partnersArr';

import React from 'react';

interface MovingPartnersCardsProps {
  items: PartnersArrProps;
  speed?: 'fast' | 'normal' | 'slow';
}

const MovingPartnersCards: React.FC<MovingPartnersCardsProps> = ({
  items,
  speed,
}) => {
  const divClass = 'mb-8 h-16 ';
  return (
    <InfiniteMovingCards speed={speed} addClass={divClass}>
      {items.map((item, index) => (
        <div className="relative mr-9 shrink-0 grow-0" key={item.name + index}>
          <item.Icon />
        </div>
      ))}
    </InfiniteMovingCards>
  );
};

export default MovingPartnersCards;
