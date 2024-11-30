import React from 'react';
import { ICONS_PURPOSE } from '@/constants/icons/iconsSrc';
import { motion } from 'framer-motion';

const StarsComponent = () => {
  return (
    <>
      {/* first star */}
      <div className="absolute left-8 top-10 h-[168px] w-[168px] lg:left-11 lg:top-16 lg:h-[282px] lg:w-[282px]">
        <ICONS_PURPOSE.STAR_BIG className="h-[168px] w-[168px] fill-s-gray lg:h-[282px] lg:w-[282px]" />
        <div className="absolute left-1/2 top-1/2 h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 lg:h-[84px] lg:w-[84px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'linear',
            }}
            style={{
              willChange: 'transform',
            }}
          >
            <ICONS_PURPOSE.STAR_SMALL className="h-[50px] w-[50px] fill-s-light-purple lg:h-[84px] lg:w-[84px]" />
          </motion.div>
        </div>
      </div>
      {/* second star */}
      <div className="absolute left-[180px] top-[18px] h-[168px] w-[168px] lg:left-[300px] lg:top-[30px] lg:h-[282px] lg:w-[282px]">
        <ICONS_PURPOSE.STAR_BIG className="h-[168px] w-[168px] fill-s-light-purple lg:h-[282px] lg:w-[282px]" />
        <div className="absolute left-1/2 top-1/2 h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 lg:h-[84px] lg:w-[84px]">
          <motion.div
            whileInView={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'linear',
            }}
          >
            <ICONS_PURPOSE.STAR_SMALL className="h-[50px] w-[50px] fill-white lg:h-[84px] lg:w-[84px]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StarsComponent;
