import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BlinkingDots from './BlinkingDots';

function PlanAnimation() {
  return (
    <div className="relative mx-auto my-[86px] flex h-[298px] w-[298px] items-center justify-center lg:my-[100px] lg:mb-[100px] lg:h-[500px] lg:w-[500px] 2xl:absolute 2xl:right-[5%] 2xl:top-[35px] 2xl:my-0">
      <div className="relative h-[203px] w-[203px] lg:h-[340px] lg:w-[340px]">
        <Image fill src="/assets/images/Future/Planet.svg" alt="Planet" />
      </div>

      <motion.div
        initial={{
          rotate: 0,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute left-0 top-0 h-[298px] w-[298px] rounded-full border border-white lg:h-[500px] lg:w-[500px]"
      >
        <div className="font-font-4 z-5 absolute -top-[23px] left-1/2 flex h-[46px] w-[46px] -translate-x-1/2 flex-col items-center justify-center rounded-full bg-s-purple text-[8px] font-bold leading-o-120 text-black lg:-top-[35px] lg:h-[77px] lg:w-[77px] lg:text-s">
          Baza <span className="text-white">Trainee</span>Ukraine
        </div>
      </motion.div>
      <BlinkingDots />
    </div>
  );
}

export default PlanAnimation;
