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
  leftComponent = 'dcdc',
  initialSliderPercentage = 0,
  showHandlebar = true,
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
        <AnimatePresence initial={false}>
          <motion.div
            animate={{
              x: isChangingDesign ? maxRightPosition + 50 : -50,
            }}
            className="from-transparent to-transparent absolute top-0 z-30 m-auto h-full w-px bg-white"
            style={{ x, top: '0', zIndex: 40 }}
            transition={{ duration: 2, ease: 'linear' }}
          >
            <div className="from-indigo-400 via-transparent to-transparent absolute left-0 top-1/2 z-20 h-full w-36 -translate-y-1/2 bg-gradient-to-r opacity-50 [mask-image:radial-gradient(100px_at_left,white,transparent)]" />
            <div className="from-cyan-400 via-transparent to-transparent absolute left-0 top-1/2 z-10 h-1/2 w-10 -translate-y-1/2 bg-gradient-to-r opacity-100 [mask-image:radial-gradient(50px_at_left,white,transparent)]" />
            <div className="absolute -right-10 top-1/2 h-3/4 w-10 -translate-y-1/2 [mask-image:radial-gradient(100px_at_left,white,transparent)]">
              {/* <MemoizedSparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="h-full w-full"
                particleColor="#FFFFFF"
              /> */}
            </div>
            {showHandlebar && (
              <div className="absolute -right-6 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center gap-1 rounded-full bg-s-purple px-5">
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
            )}
          </motion.div>
        </AnimatePresence>
        <div className="pointer-events-none relative z-20 h-full w-full overflow-hidden">
          <AnimatePresence initial={false}>
            {leftComponent ? (
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
