'use client';

import { motion } from 'framer-motion';
import ButtonContact from '@/components/ui/ButtonContact/ButtonContact';
import Image from 'next/image';
import clsx from 'clsx';

const MotionImage = motion.create(Image);

function ButtonJoin() {
  return (
    <div className="flex items-center justify-center p-[70px] lg:w-full lg:max-w-[368px] lg:py-[64px] 2xl:max-w-[658px]">
      <div className='relative flex h-full w-full items-center justify-center bg-[url("/assets/images/PageTeam/bgButton.png")] bg-center bg-no-repeat'>
        <motion.svg
          className={clsx(
            'h-[200px] w-[200px] rounded-full stroke-olga-green-extra shadow-xl 2xl:h-[232px] 2xl:w-[232px]'

            // '[box-shadow:0px_4px_4px_0px_rgba(255,255,255,0.25),0px_4px_4px_0px_rgba(0,0,0,0.25)]'
          )}
          style={{ transformOrigin: 'center' }}
          initial={{
            rotate: 0,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
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

        <MotionImage
          style={{ transformOrigin: 'center' }}
          initial={{
            rotate: 0,
          }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute h-[158px] w-[158px] 2xl:h-[172px] 2xl:w-[172px]"
          width={158}
          height={158}
          alt="circles"
          src={'/assets/images/PageTeam/MidleCircle.svg'}
        />

        <ButtonContact className="absolute z-10" />
      </div>
    </div>
  );
}

export default ButtonJoin;
