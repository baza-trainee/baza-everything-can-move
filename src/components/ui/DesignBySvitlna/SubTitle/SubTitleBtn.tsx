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
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const itemArrVariants = {
    initial: {
      opacity: 0.1,
      transition: {
        duration: 0.5,
        ease: 'linear',
      },
    },
    animate: {
      opacity: [0.5, 1],
      transition: {
        duration: 1,
        ease: 'linear',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'linear',
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
      <AnimatePresence mode="wait">
        {subTitleArr && (
          <div className="absolute left-0 top-0 inline-flex h-8 items-center justify-center rounded-[100px] border px-4 lg:h-11 lg:px-8">
            <motion.div
              key={subTitleArr[currentIndex]}
              variants={itemArrVariants}
              initial="initial"
              exit="exit"
              animate="animate"
              //var2
              //animate={['animate', 'center']}
              // var4
              // animate={{
              //   opacity: [0.5, 1],
              // }}
              // transition={{
              //   duration: 1.5,
              //   ease: 'linear',
              //   times: [0.5, 1],
              // }}
              //var3
              // animate={{
              //   opacity: [0, 0.5, 1],
              // }}
              // transition={{
              //   duration: 2,
              //   ease: 'linear',
              //   times: [0, 0.5, 1],
              // }}
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
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubTitleBtn;
