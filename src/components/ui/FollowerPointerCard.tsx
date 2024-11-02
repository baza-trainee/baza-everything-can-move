'use client';
import React, { useEffect, useState } from 'react';

import {
  motion,
  AnimatePresence,
  useMotionValue,
  MotionValue,
} from 'framer-motion';
import { cn } from '@/lib/utils';

export const FollowerPointerCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false); // Add this line
  console.log('inside', isInside);
  useEffect(() => {
    if (typeof window !== 'undefined' && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setRect(rect);
    }
    // if (ref.current) {
    //   const rect = ref.current.getBoundingClientRect();
    //   // console.log(
    //   //   `Bounding rect - left: ${rect.left}, top: ${rect.top}, width: ${rect.width}, height: ${rect.height}`
    //   // );
    //   setRect(rect);
    // }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      // const scrollX = window.scrollX;
      // const scrollY = window.scrollY;
      // const newX = e.clientX - rect.left + scrollX;
      // const newY = e.clientY - rect.top + scrollY;
      //var 2 so so
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;
      //var 3 bad
      // const newX = e.pageX - rect.left;
      // const newY = e.pageY - rect.top;
      // var 5
      // const newX = Math.min(Math.max(0, e.pageX - rect.left), rect.width);
      // const newY = Math.min(Math.max(0, e.pageY - rect.top), rect.height);
      x.set(newX);
      y.set(newY);

      // console.log(`clientX: ${e.clientX}, clientY: ${e.clientY}`);
      // console.log(`newX: ${newX}, newY: ${newY}`);
      // console.log(`rect.width: ${rect.width}, rect.height: ${rect.height}`);
    }
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        cursor: 'none',
      }}
      ref={ref}
      className={cn('relative', className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  title?: string | React.ReactNode;
}) => {
  return (
    <motion.div
      className="absolute z-50 flex h-12 w-12 items-center justify-center rounded-full border border-olga-green-extra bg-olga-green/30"
      style={{
        top: y,
        left: x,
        pointerEvents: 'none',
        transform: 'none',
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <motion.div
        // style={{
        //   backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        // }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className={
          'min-w-max whitespace-nowrap rounded-full px-2 py-2 text-xs text-white'
        }
      >
        {title || `click`}
      </motion.div>
    </motion.div>
  );
};
