'use client';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDesignStore } from '@/useDesignStore';
import styles from './buttonChangeDesign.module.css';

import { cn } from '@/lib/utils';

function ButtonChangeDesigne() {
  const [isOpenButton, setIsOpenButton] = useState<boolean>(false);
  const { designType, toggleDesignType } = useDesignStore();
  const [animationCircles, setAnimationCircles] = useState(false);
  useEffect(() => {
    if (isOpenButton) return;

    const interval = setInterval(() => {
      setAnimationCircles(true);
      setTimeout(() => {
        setAnimationCircles(false);
      }, 3000);
    }, 10000);
    return () => clearInterval(interval);
  }, [isOpenButton]);

  return (
    <motion.div
      whileHover={{ width: 210 }}
      transition={{ duration: 1 }}
      onHoverStart={() => setIsOpenButton(true)}
      onHoverEnd={() => setIsOpenButton(false)}
      className="fixed bottom-14 left-14 z-50 w-max rounded-[50px] border-[1px] border-solid border-white bg-black p-5"
    >
      <motion.div className="relative h-[48px] w-full min-w-[48px]">
        {!animationCircles && (
          <>
            <DesignButton
              position="left"
              onClick={() => toggleDesignType()}
              designType={designType}
              invertDesign={true}
            />
            <DesignButton
              invertDesign={false}
              position="right"
              onClick={() => toggleDesignType()}
              designType={designType}
            />
          </>
        )}
        {animationCircles && (
          <AnimatePresence key={'circles'}>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                x: [0, -40, -60, 10, -30, 0],
                y: [0, -20, 30, -50, 20, 0],
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 3 }}
              className="absolute left-[20px] top-[20px] z-[99999] h-3 w-3 rounded-full bg-white"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                x: [0, 40, 60, -10, 30, 0],
                y: [0, 20, -30, 50, -20, 0],
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 3 }}
              className="absolute left-[20px] top-[20px] z-[99999] h-3 w-3 rounded-full bg-white"
            />
          </AnimatePresence>
        )}
        <div className={cn(styles.containerLiquid, 'relative w-full')}>
          <div className="absolute left-0">
            <div className={clsx(styles.circle, styles.circle1)} />
          </div>
          <div className="absolute right-0">
            <div className={clsx(styles.circle, styles.circle2)} />
          </div>
          <svg className="absolute h-0 w-0">
            <filter id="liquid">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              <feColorMatrix
                values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 20 -10
            "
              ></feColorMatrix>
            </filter>
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ButtonChangeDesigne;

function DesignButton({
  position,
  onClick,
  invertDesign,
  designType,
}: {
  position: 'left' | 'right';
  onClick: () => void;
  invertDesign: boolean;
  designType: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
      aria-label="Змінити дизайн"
      className={cn(
        'absolute top-[12px] z-50 h-[24px] w-[24px] rounded-full border-[2px] border-solid border-white',
        position === 'left' && 'left-[12px]',
        position === 'right' && 'right-[12px]',
        invertDesign
          ? designType === 'designBySvitlana'
            ? 'bg-[#8f8ded]'
            : 'bg-olga-green'
          : designType === 'designBySvitlana'
            ? 'bg-olga-green'
            : 'bg-[#8f8ded]'
      )}
    />
  );
}
