'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export interface SubTitleAnimationProps {
  children: React.ReactNode;
  classNameGeneral?: string;
  subTitleArr: string[];
  color: 'black' | 'white';
  classNameDivForBtn?: string;
}
const SubTitleAnimation = ({
  children,
  classNameGeneral,
  subTitleArr,
  color,
  classNameDivForBtn,
}: SubTitleAnimationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalLength = subTitleArr.length;
  console.log('index', currentIndex);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLength);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const itemArrVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div
      // if center add items-center
      className={clsx(
        'relative flex h-[68px] flex-col justify-center lg:h-11 lg:flex-row',
        color === 'black' && 'text-black',
        color === 'white' && 'text-white',
        classNameGeneral
      )}
    >
      <h3
        className={clsx(
          // mb-3  lg:mb-0 lg:mr-6
          'mb-3 font-second-family text-md font-semibold uppercase leading-o-120 tracking-s-2 lg:mb-0 lg:mr-6 lg:self-center lg:text-lg lg:font-medium'
        )}
      >
        {children}
      </h3>{' '}
      {/* if center add justify-center */}
      <div
        className={clsx(
          'relative inline-flex h-8 min-w-32 lg:h-11 lg:justify-normal',
          classNameDivForBtn
        )}
      >
        <AnimatePresence initial={false}>
          {/* {subTitleArr &&
            subTitleArr.map((item, ind) => ( */}
          {subTitleArr && (
            <motion.button
              key={subTitleArr[currentIndex]}
              variants={itemArrVariants}
              initial="enter"
              animate="center"
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
              className={clsx(
                'absolute inline-flex h-8 items-center justify-center rounded-[100px] border px-4 font-second-family text-m font-bold uppercase leading-s-100 tracking-s-2 lg:h-11 lg:px-8 lg:text-md lg:font-medium',
                color === 'black' && 'border-black text-black',
                color === 'white' && 'border-white text-white'
              )}
              style={{ whiteSpace: 'nowrap' }}
            >
              {subTitleArr[currentIndex]}
            </motion.button>
          )}
          {/* ))} */}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SubTitleAnimation;
