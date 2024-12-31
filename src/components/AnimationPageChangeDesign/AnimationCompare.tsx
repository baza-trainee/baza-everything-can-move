'use client';
import React, { useState, ReactNode, useEffect } from 'react';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';

// import { SparklesCore } from './SparklesCore';
import Image from 'next/image';
import StarsBackground from './StarsBackground';
import { useDesignStore } from '@/useDesignStore';

interface CompareProps {
  leftComponent?: ReactNode;
  initialSliderPercentage?: number;
  showHandlebar?: boolean;
}

export const AnimationCompare = ({
  initialSliderPercentage = 0,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [maxRightPosition, setMaxRightPosition] = useState(0);
  const x = useMotionValue(0);
  const { isChangingDesign } = useDesignStore();

  useEffect(() => {
    const updateMaxRightPosition = () => setMaxRightPosition(window.innerWidth);
    updateMaxRightPosition();
    window.addEventListener('resize', updateMaxRightPosition);
    return () => removeEventListener('resize', updateMaxRightPosition);
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      const currentX = x.get();
      const percentSlide = (currentX / maxRightPosition) * 100;
      setSliderXPercent(percentSlide);
    };
    const unsubscribe = x.on('change', updatePosition);
    return () => unsubscribe();
  }, [x, maxRightPosition]);

  return (
    <div className="pointer-events-none fixed bottom-0 top-0 z-[9999999] w-full">
      <div className="relative h-full w-full overflow-hidden">
        <motion.div
          className="absolute h-0 w-0"
          animate={{
            x: isChangingDesign ? [-50, maxRightPosition + 50, -50] : -50,
          }}
          style={{ x }}
          transition={{ duration: 4, ease: 'linear' }}
        />
        <AnimatePresence initial={false}>
          <motion.div
            className="absolute top-0 z-30 m-auto h-full"
            style={{ left: `${sliderXPercent}%`, top: '0', zIndex: 40 }}
            transition={{ duration: 0 }}
          >
            {isChangingDesign ? (
              <div className="relative h-full w-px bg-white">
                <div className="absolute left-1/2 top-1/2 z-30 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-between rounded-full bg-s-purple px-3">
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 11L1 6L6 1"
                      stroke="black"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L6 6L1 1"
                      stroke="black"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>
        <div className="pointer-events-none relative z-20 h-full w-full overflow-hidden">
          <AnimatePresence initial={false}>
            {isChangingDesign ? (
              <motion.div
                className="absolute inset-0 z-20 h-full w-full flex-shrink-0 select-none overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
                }}
                transition={{ duration: 0 }}
              >
                <div className="absolute inset-0 z-20 flex h-full w-full flex-shrink-0 select-none items-center justify-center bg-black">
                  <Image
                    src={'/assets/icons/Frame.svg'}
                    width={1054}
                    height={580}
                    alt="frame image"
                  />
                  <div className="absolute bottom-0 top-0 z-50 w-full">
                    <StarsBackground />
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
// const MemoizedSparklesCore = React.memo(SparklesCore);
