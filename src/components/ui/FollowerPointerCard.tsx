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

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      console.log(
        `Bounding rect - left: ${rect.left}, top: ${rect.top}, width: ${rect.width}, height: ${rect.height}`
      );
      setRect(rect);
    }
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
      className="absolute z-50 flex h-12 w-12 items-center justify-center rounded-full border bg-olga-green/30 border-olga-green-extra "
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
      {/* <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="text- stroke-sky-600 h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg> */}
      {/*  <span className="absolute left-0 top-full text-xs text-white">
        x: {x.get().toFixed(2)}, y: {y.get().toFixed(2)}
      </span> */}
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
