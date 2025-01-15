'use client';

import { motion } from 'framer-motion';
import ButtonContact from '@/components/ui/ButtonContact/ButtonContact';
import clsx from 'clsx';

const durationAnimation = 60;

function ButtonJoin() {
  return (
    <div className="flex items-center justify-center p-[70px] lg:w-full lg:max-w-[368px] lg:py-[64px] 2xl:max-w-[658px]">
      <div className='relative flex h-full w-full items-center justify-center bg-[url("/assets/images/PageTeam/bgButton.png")] bg-center bg-no-repeat'>
        <motion.svg
          className={clsx(
            'h-[200px] w-[200px] rounded-full stroke-olga-green-extra shadow-xl 2xl:h-[232px] 2xl:w-[232px]'
          )}
          initial={{
            rotate: 0,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: durationAnimation,
            repeat: Infinity,
            ease: 'linear',
          }}
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            strokeWidth="1"
            strokeDasharray="20, 20"
          />
        </motion.svg>

        <motion.div
          initial={{
            rotate: 0,
          }}
          animate={{ rotate: -360 }}
          transition={{
            duration: durationAnimation,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute h-[148px] w-[148px] rounded-full border-[1px] border-solid border-olga-green-extra 2xl:h-[170px] 2xl:w-[170px]"
        >
          <div className="relative h-full w-full rounded-full">
            <DubbleCircle className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" />
            <DubbleCircle className="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <DubbleCircle className="right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
            <DubbleCircle className="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
          </div>
        </motion.div>

        <ButtonContact className="absolute z-10" />
      </div>
    </div>
  );
}

export default ButtonJoin;

const DubbleCircle = ({ className }: { className: string }) => {
  return (
    <div
      className={clsx(
        'absolute flex h-5 w-5 items-center justify-center rounded-full border-[2px] border-solid border-black bg-olga-green',
        className
      )}
    >
      <div className="h-3.5 w-3.5 rounded-full border-[2px] border-solid border-black bg-olga-green-extra"></div>
    </div>
  );
};
