'use client'

// import { useTransform, motion, MotionValue, useScroll } from 'framer-motion';
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
    <div ref={container} className={clsx('flex itens-center justify-center sticky top-0', i === 3 ? 'h-[50vh]' : 'h-[50vh]')}>
      <motion.div 
        style={{ scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className='flex flex-col relative top-[-25%] h-[182px] w-full padding-[25px] origin-top bg-olga-bg border-b border-olga-white-10'
      >
        <div className='flex h-full mt-[10px] flex-row justify-between items-center'>
          <div>
            <div className='text-4xl leading-[103.2px] font-regular text-olga-green'>{numberValue}</div>
            <p className='text-l leading-[31.2px] font-regular uppercase'>{textValue}</p>
          </div>
          <p className='text-xl leading-[72px] font-medium uppercase'>{text}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Card