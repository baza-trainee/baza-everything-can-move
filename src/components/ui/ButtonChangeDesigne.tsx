'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDesignStore } from '@/useDesignStore';
import styles from './buttonChangeDesign.module.css';

import { cn } from '@/lib/utils';

const durtionAnimationFlyButton = 3;
const timeBeetwenAnimation = 20;
function ButtonChangeDesigne() {
  const [isOpenButton, setIsOpenButton] = useState<boolean>(false);
  const { designType, toggleDesignType, toggleIsChangingDesign } =
    useDesignStore();
  const [animationCircles, setAnimationCircles] = useState(false);
  useEffect(() => {
    if (isOpenButton) return;

    const interval = setInterval(() => {
      setAnimationCircles(true);
      setTimeout(() => {
        setAnimationCircles(false);
      }, durtionAnimationFlyButton * 1000);
    }, timeBeetwenAnimation * 1000);
    return () => clearInterval(interval);
  }, [isOpenButton]);

  const handleButtonChangeDesign = () => {
    toggleIsChangingDesign(true);
    setTimeout(() => toggleDesignType(), 2000);
    setTimeout(() => toggleIsChangingDesign(false), 4000);
  };

  return (
    <motion.div
      whileHover={{ width: 210 }}
      transition={{ duration: 1 }}
      animate={{
        width: animationCircles ? 150 : 88,
      }}
      onHoverStart={() => setIsOpenButton(true)}
      onHoverEnd={() => setIsOpenButton(false)}
      className="fixed bottom-14 left-14 z-50 w-max rounded-[50px] border-[1px] border-solid border-white bg-black p-5"
    >
      <motion.div className="relative h-[48px] w-full min-w-[48px]">
        <DesignButton
          position="left"
          onClick={() => handleButtonChangeDesign()}
          designType={designType}
          invertDesign={true}
          animationCircles={animationCircles}
        />
        <DesignButton
          invertDesign={false}
          position="right"
          onClick={() => handleButtonChangeDesign()}
          designType={designType}
          animationCircles={animationCircles}
        />

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
  animationCircles,
}: {
  position: 'left' | 'right';
  onClick: () => void;
  invertDesign: boolean;
  designType: string;
  animationCircles: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      animate={{
        x: animationCircles
          ? position === 'left'
            ? [0, -5, 50, 5, 0]
            : [0, 5, -50, -5, 0]
          : 0,
        y: animationCircles
          ? position === 'left'
            ? [0, -60, 0]
            : [0, -60, 0]
          : 0,
      }}
      transition={{
        duration: animationCircles ? durtionAnimationFlyButton : 0.3,
      }}
      aria-label="Змінити дизайн"
      className={cn(
        'absolute top-[12px] z-50 h-[24px] w-[24px] rounded-full border-[2px] border-solid border-white',
        position === 'left' && 'left-[12px]',
        position === 'right' && 'right-[12px]',
        invertDesign
          ? designType === 'designBySvitlana'
            ? 'bg-olga-green'
            : 'bg-[#8f8ded]'
          : designType === 'designBySvitlana'
            ? 'bg-[#8f8ded]'
            : 'bg-olga-green'
      )}
    />
  );
}
