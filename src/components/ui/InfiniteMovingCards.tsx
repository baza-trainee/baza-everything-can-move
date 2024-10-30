'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState, useCallback } from 'react';

export const InfiniteMovingCards = ({
  items,
  direction = 'right',
  speed = 'normal',
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    imgSrc: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);

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

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      //scroller
      className={cn('relative z-20 w-full overflow-hidden', className)}
    >
      <div
        ref={scrollerRef}
        className={cn(
          'mb-8 flex h-16 w-full shrink-0 grow-0 flex-nowrap gap-9',
          start && 'animate-marquee', //'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
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
      </div>
    </div>
  );
};
