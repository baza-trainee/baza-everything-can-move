'use client';
// we use it !!!
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

export interface SubTitleBtnProps {
  className?: string;
  subTitleArr: string[];
  color: 'black' | 'white';
}

const SubTitleBtn = ({ className, subTitleArr, color }: SubTitleBtnProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalLength = subTitleArr.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLength);
    }, 2500);
    return () => clearInterval(interval);
  }, [totalLength]);

  const itemArrVariants = {
    initial: {
      opacity: 0.1,
      transition: {
        ease: 'linear',
      },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,

        ease: 'linear',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'linear',
        delay: 0.5,
        duration: 0.5,
      },
    },
    // animate: {
    //   opacity: 0.5,
    //   transition: {
    //     duration: 0.5,
    //     ease: 'linear',
    //   },
    // },

    // center: {
    //   opacity: 1,
    //   transition: {
    //     duration: 1,
    //     ease: 'linear',
    //   },
    //},
  };
  return (
    <div
      className={clsx('relative inline-flex h-8 min-w-32 lg:h-11', className)}
    >
      <div className="absolute inline-flex h-8 items-center justify-center rounded-[100px] border px-4 lg:h-11 lg:px-8">
        <AnimatePresence mode="wait">
          {subTitleArr && (
            <motion.div
              key={`motion-${currentIndex}`}
              variants={itemArrVariants}
              initial="initial"
              exit="exit"
              animate="animate"
              className={clsx(
                'font-second-family text-m font-bold uppercase leading-s-100 tracking-s-2 lg:text-md lg:font-medium',
                color === 'black' && 'border-black text-black',
                color === 'white' && 'border-white text-white'
              )}
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              {subTitleArr[currentIndex]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SubTitleBtn;
