import React from 'react';
import { motion } from 'framer-motion';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

const BtnAnimated = () => {
  return (
    // btn

    <div className="flex text-white transition-colors duration-300 hover:text-s-gray ease-linear">
      {' '}
      <motion.div
        className="relative inline-block h-12 w-[214px] cursor-pointer overflow-hidden rounded-full border border-white bg-white text-center"
        initial="rest"
        whileHover="hover"
        whileTap="hover"
        animate="rest"
      >
        {/* gray cicle */}
        <motion.div
          //
          className="absolute left-0 right-0 z-0 mx-auto rounded-full bg-s-gray transition-all duration-300 ease-out"
          // h-[214px] w-[214px]  variants={{
          //   rest: { y: '-120%', transition: { duration: 0.5 } },
          //   hover: { y: '-45%', transition: { duration: 0.5 } },
          // }}
          variants={{
            rest: {
              y: '-38px',
              width: 28,
              height: 28,
              //transition: { duration: 0.3 },
            },
            hover: {
              y: '-83px',
              width: 214,
              height: 214,
              //transition: { duration: 0.3 },
            },
          }}
        />
        {/*gray text */}
        <motion.span
          className="absolute inset-0 z-10 flex items-center justify-center font-third-family text-md uppercase leading-s-100 tracking-s-1 text-s-gray"
          variants={{
            rest: {
              y: '0px',
              opacity: 1,
              transition: { duration: 0.4, ease: 'linear' },
            },
            hover: {
              y: '-48px',
              opacity: 0,
              transition: { duration: 0.4, ease: 'linear' },
            },
          }}
        >
          переглянути
        </motion.span>
        {/* white text */}
        <motion.span
          className="absolute inset-0 z-10 flex items-center justify-center font-third-family text-md uppercase leading-s-100 tracking-s-1 text-white"
          variants={{
            rest: {
              y: '48px',
              opacity: 0,
              transition: { duration: 0.4, ease: 'linear' },
            },
            hover: {
              y: '0px',
              opacity: 1,
              transition: { duration: 0.4, ease: 'linear' },
            },
          }}
        >
          переглянути
        </motion.span>
        {/*  stroke-current transition-colors delay-200*/}
      </motion.div>
      <div className="relative h-12">
        <ICONS_SHARED.ARROW_BTN_ICON className="absolute -right-[14px] top-[10px] z-30" />
      </div>
    </div>

    // {/* </div> */}
  );
};

export default BtnAnimated;
