'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ListText } from './components/ListText';
import MoveComponent from './components/MoveComponent';

type TypeOfMove = {
  infinityText: 'infinityText';
  singleLine: 'line';
  moveComponent: 'component';
};

export type Props = {
  duration?: number;
  className?: string;
  direction: 'right' | 'left' | 'up' | 'down';
  position?: 'bottom-0' | 'top-0' | 'left-0' | 'right-0';
  repeat?: number | 'infinity';
  width?: number;
  height?: number;
  src?: string;
  type: keyof TypeOfMove;
  infinityText?: string;
  amountOfText?: number;
  gap?: number;
};

const MotionImage = motion.create(Image);

function MoveLine({
  duration = 60,
  type = 'singleLine',
  infinityText,
  className,
  direction = 'right',
  position = 'bottom-0',
  repeat = 'infinity',
  width = 80,
  amountOfText = 1,
  gap = 0,
  height = 11,
  src = '/assets/images/HomeImg/line.svg',
}: Props) {
  const animationProps = {
    initial: {},
    animate: {},
  };

  switch (direction) {
    case 'right':
      animationProps.initial = { left: '-10%' };
      animationProps.animate = { left: '110%' };
      break;
    case 'left':
      animationProps.initial = { right: '-10%' };
      animationProps.animate = { right: '110%' };
      break;
    case 'up':
      animationProps.initial = { bottom: '-10%' };
      animationProps.animate = { bottom: '110%' };
      break;
    case 'down':
      animationProps.initial = { top: '-10%' };
      animationProps.animate = { top: '110%' };
      break;
  }

  return (
    <>
      {type === 'singleLine' && (
        <MotionImage
          {...animationProps}
          transition={{
            duration: duration,
            repeat: repeat === 'infinity' ? Infinity : repeat,
            ease: 'linear',
          }}
          className={cn('pointer-events-none absolute', position, className)}
          width={width}
          height={height}
          alt="line"
          src={src}
        />
      )}
      {type === 'infinityText' && (
        <div
          className={cn(
            'pointer-events-none absolute flex w-full overflow-x-hidden',
            className
          )}
        >
          <ListText
            gap={gap}
            duration={duration}
            amountOfText={amountOfText}
            infinityText={infinityText}
          />
          <ListText
            gap={gap}
            duration={duration}
            amountOfText={amountOfText}
            infinityText={infinityText}
          />
        </div>
      )}
      {type === 'moveComponent' && <MoveComponent />}
    </>
  );
}

export default MoveLine;
