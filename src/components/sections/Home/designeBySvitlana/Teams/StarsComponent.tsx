import React from 'react';
import { ICONS_PURPOSE } from '@/constants/icons/iconsSrc';
import { motion } from 'framer-motion';

const StarsComponent = () => {
  return (
    <>
      {/* first star */}
      <div
        style={{
          perspective: '10px',
        }}
        className="left-[23px] top-10 h-[158px] w-[158px] lg:left-[46px]  lg:h-[282px] lg:w-[282px] transform -translate-y-12"
      >
        <div className="absolute h-[150%] w-[150%] rounded-xl bg-[url('/assets/images/HomeImg/puzzles.svg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute h-14 w-14 lg:left-[76px] left-4 lg:-bottom-[64px] -bottom-11 bg-[url('/assets/images/HomeImg/User-icon.svg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute lg:left-[107px] left-14 lg:top-24 top-14 h-[44px] w-[44px] -translate-x-1/2 Z-10 -translate-y-1/2 lg:h-[54px] lg:w-[60px]">
          <motion.div
            animate={{
              rotate: -360,
              translateZ: 150,
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'linear',
            }}
            style={{
              willChange: 'transform',

              transformStyle: 'preserve-3d',
            }}
          >
            <ICONS_PURPOSE.STAR_SMALL className="h-[44px] w-[44px] fill-white lg:h-[60px] lg:w-[60px] "/>
          </motion.div>
        </div>
      </div>
      {/* second star */}
      <div
        style={{
          perspective: '300px',
        }}
        className="absolute left-[16px] top-[20px] h-[158px] w-[158px] lg:left-[300px] lg:top-[30px] lg:h-[282px] lg:w-[282px]"
      >
        <div className="right absolute h-14 w-14 lg:-left-3 -right-10 lg:right-0 lg:-top-3 -top-11 bg-[url('/assets/images/HomeImg/User-icon.svg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute lg:left-4 -right-10 lg:top-[248px] top-20 h-[44px] w-[44px] -translate-x-1/2 -translate-y-1/2 lg:h-[84px] lg:w-[60px] z-10">
          <motion.div
            animate={{ rotate: 360, translateZ: 150 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'linear',
            }}
            style={{
              willChange: 'transform',
              transformStyle: 'preserve-3d',
            }}
          >
            <ICONS_PURPOSE.STAR_SMALL className="h-[44px] w-[44px] fill-white lg:h-[60px] lg:w-[60px]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StarsComponent;
