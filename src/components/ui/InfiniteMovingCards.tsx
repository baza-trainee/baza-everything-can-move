'use client';

import { cn } from '@/lib/utils';

import React, { useEffect, useState, useCallback } from 'react';

export const InfiniteMovingCards = ({
  direction = 'right',
  speed = 'normal',
  pauseOnHover = true,
  className,
  children,
  addClass,
}: {
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
  children: React.ReactNode;
  addClass?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);

  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      const childrenCount = React.Children.count(children);

      if (scrollerContent.length < childrenCount * 2) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed, children]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn('relative z-20 w-full overflow-hidden', className)}
    >
      <div
        ref={scrollerRef}
        className={cn(
          'flex w-max shrink-0 grow-0 flex-nowrap',
          start && 'animate-marqueeCustom', //'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
          addClass
        )}
      >
        {children}
      </div>
    </div>
  );
};

// Example!!!!  how to use  in PartnersSection
//  <MovingPartnersCards items={PARTNERS_ARR} speed="normal" />
// then in MovingPartnersCards
{
  /* <InfiniteMovingCards speed="normal" addClass={divClass}>
  <>
    {items.map((item, index) => (
      <div className="relative shrink-0 grow-0" key={item.name + index}>
        <Image
          src={item.imgSrc}
          alt={`Logo of ${item.name}`}
          width={150}
          height={64}
          quality={100}
          className="h-[64px] w-auto"
        />
      </div>
    ))}
  </>
</InfiniteMovingCards>; */
}
