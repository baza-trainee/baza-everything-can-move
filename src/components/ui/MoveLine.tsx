'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  duration?: number;
  className?: string;
  direction: 'right' | 'left' | 'up' | 'down';
  position: 'bottom-0' | 'top-0' | 'left-0' | 'right-0';
  repeat?: number | 'infinity';
  width?: number;
  height?: number;
  src?: string;
};

const MotionImage = motion.create(Image);

function MoveLine({
  duration = 60,
  className,
  direction = 'right',
  position = 'bottom-0',
  repeat = 'infinity',
  width = 80,
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
    <MotionImage
      {...animationProps}
      transition={{
        duration: duration,
        repeat: repeat === 'infinity' ? Infinity : repeat,
        ease: 'linear',
      }}
      className={clsx('absolute', position, className)}
      width={width}
      height={height}
      alt="line"
      src={src}
    />
  );
}

export default MoveLine;
