import React from 'react';
import { motion } from 'framer-motion';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

const BtnAnimated = () => {
  return (
    // btn
    <motion.div
      className="relative inline-block h-12 w-[214px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white bg-white text-center"
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      animate="rest"
    >
      {/* gray cicle */}
      <motion.div
        //   top-[-214px]
        className="absolute left-0 right-0 z-0 mx-auto rounded-full bg-s-gray text-white transition-all duration-300 ease-out hover:text-s-gray"
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
      {/* -right-[14px] top-[10px] */}
      <ICONS_SHARED.ARROW_BTN_ICON className="absolute z-30 top-[10px]" />
    </motion.div>
  );
};

export default BtnAnimated;
