'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { Label } from './Label';
import clsx from 'clsx';

function MainImage() {
  return (
    <div className="relative flex h-[222px] w-full max-w-[836px] items-center justify-center bg-center lg:h-[340px] 2xl:h-[540px] 2xl:bg-[url('/assets/images/TemSection/gradient.png')]">
      <motion.div
        className="absolute"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 120 }}
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
      >
        <motion.svg
          className={clsx(
            styles.icon,
            'h-[175px] w-[175px] lg:h-[280px] lg:w-[280px] 2xl:h-[428px] 2xl:w-[428px]'
          )}
          width="428"
          height="428"
          viewBox="0 0 428 428"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M369.035 130.5L364 134.5C380.741 173.155 384.618 192.741 383 225H376C373.015 252.667 369.332 266.072 358.5 285.5L369.572 295.5M361.389 309.278L353.5 296.5C294.5 381 187.5 403.5 107 329.5L95.8279 340.5M86.4303 330.938L99 320.5L90.5 309.5L76.3775 318.85M63 128.618L76.002 143.5C61.7188 162.64 57.7162 175.201 58.502 201.5H51.002C49.5846 239.922 52.3408 260.301 69.502 292.5L63.3461 299M113.5 402L122.5 386C197.665 419.568 239.843 417.682 315 386L321 398.214M110 28L119 43.4746C194.165 9.90705 236.343 11.7925 311.5 43.4746L318.5 28.3531M338 89.2261L327.004 98.0003C272.5 39.5 144.5 31.0009 84.0039 128.5L70.422 116.5M348 209C348 281.902 288.902 341 216 341C143.098 341 84 281.902 84 209C84 136.098 143.098 77 216 77C288.902 77 348 136.098 348 209ZM390 213.5C390 309.874 311.874 388 215.5 388C119.126 388 41 309.874 41 213.5C41 117.126 119.126 39 215.5 39C311.874 39 390 117.126 390 213.5ZM427 214C427 331.637 331.637 427 214 427C96.3633 427 1 331.637 1 214C1 96.3633 96.3633 1 214 1C331.637 1 427 96.3633 427 214Z"
            stroke="#D3FD50"
            strokeWidth="2"
          />
        </motion.svg>
        <Label
          text="FRONT-END"
          className={clsx(
            '-left-10 bottom-6',
            'lg:-left-10 lg:bottom-32',
            '2xl:-left-5 2xl:bottom-28'
          )}
        />
        <Label
          text="BACK-END"
          className={clsx(
            '-left-5 top-7',
            'lg:left-6 lg:top-2',
            '2xl:left-20 2xl:top-24'
          )}
        />
        <Label
          text="DESIGN"
          className={clsx(
            '-right-5 bottom-2',
            'lg:bottom-4 lg:right-28',
            '2xl:bottom-5 2xl:right-16'
          )}
        />
        <Label
          text="QA"
          className={clsx(
            'right-3 top-[70px]',
            'lg:right-3 lg:top-36',
            '2xl:right-16 2xl:top-44'
          )}
        />
        <Label
          text="PM"
          className={clsx(
            '-right-5 top-3',
            'lg:right-14 lg:top-10',
            '2xl:-right-4 2xl:top-28'
          )}
        />
      </motion.div>
    </div>
  );
}

export default MainImage;
