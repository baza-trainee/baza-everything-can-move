'use client'

import { useTransform, motion, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import clsx from 'clsx';


type CardsProps = {
    numberValue: string;
    textValue: string;
    text: string;
    i: number;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
}

const Card: React.FC<CardsProps> = ({i, progress, range, targetScale, text, numberValue, textValue}) => {

  const container = useRef<HTMLDivElement | null>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={clsx('flex items-center justify-center sticky top-0 ', i === 3 ? 'lg:h-[50vh]' : 'lg:h-[50vh]')}>
      <motion.div 
        style={{ scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className='flex flex-col items-start lg:items-stretch relative top-[-25%] 2xl:h-[182px] w-full 2xl:p-[25px] origin-top bg-olga-bg border-b border-olga-white-10'
      >
        <div className='flex gap-6 my-6 2xl:h-full 2xl:mt-[10px] flex-col lg:flex-row justify-evenly lg:justify-between items-start lg:items-center'>
          <div>
            <div className='text-[44px] lg:text-2xl 2xl:text-4xl leading-[52.8px] lg:leading-[76.8px] 2xl:leading-[103.2px] font-regular text-olga-green'>{numberValue}</div>
            <p className='text-sm lg:text-md 2xl:text-l  leading-s-24 lg:leading-[26px] 2xl:leading-[31.2px] font-regular uppercase'>{textValue}</p>
          </div>
          <p className='text-lg lg:text-[36px] 2xl:text-xl leading-s-48 lg:leading-[54px] 2xl:leading-[72px] font-medium uppercase '>{text}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Card