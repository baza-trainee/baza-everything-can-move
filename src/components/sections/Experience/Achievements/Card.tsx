'use client'
// import styles from './card.module.css';
// import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';
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

const Card: React.FC<CardsProps> = ({numberValue, textValue, text, i, progress, range, targetScale}) => {

  const container = useRef<HTMLDivElement | null>(null);

    // const container = useRef(null);

    // const { scrollYProgress } = useScroll({
    //   target: container,
    //   offset: ['start end', 'start start']
    // })

  // const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className='h-[350px] flex items-center justify-center sticky top-0 bg-s-purple border-olga-green-dark border-2'>
      <div 
        className={clsx('flex flex-col relative h-[100px] w-[1000px] rounded-3xl p-[10px] origin-top', {'top':`-calc(-5vh + ${i * 25}px)`} )}
        // style={{top:`calc(-5vh + ${i * 25}px)`}}
      >
        <h2 className='text-center m-0'>{numberValue}</h2>
        <div className='flex h-full mt-[50px] gap-[50px]'>
          <div className='w-2/5 relative t-0'>
            <p className=''>{textValue}</p>
            <p>{text}</p>
          </div>

          <div className='relative w-3/5 h-full rounded-3xl overflow-hidden'>
            <motion.div
              className='w-full h-full'
              style={{scale, top:`calc(-5vh + ${i * 25}px)`}}
              >
              {/* <Image
                fill
                src={`/images/${src}`}
                alt="image" 
              /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card