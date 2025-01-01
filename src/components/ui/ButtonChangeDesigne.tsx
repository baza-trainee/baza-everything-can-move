'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useDesignStore } from '@/useDesignStore';
// import styles from './buttonChangeDesign.module.css';

import { cn } from '@/lib/utils';

const durtionAnimationChangeDesign = 4;

function ButtonChangeDesigne() {
  const [isOpenButton, setIsOpenButton] = useState<boolean>(false);

  const { designType, toggleDesignType, toggleIsChangingDesign } =
    useDesignStore();

  const handleButtonChangeDesign = () => {
    toggleIsChangingDesign(true);
    setTimeout(
      () => toggleDesignType(),
      (durtionAnimationChangeDesign * 1000) / 2
    );
    setTimeout(
      () => toggleIsChangingDesign(false),
      durtionAnimationChangeDesign * 1000
    );
    setIsOpenButton(false);
  };

  return (
    <motion.div
      onHoverStart={() => setIsOpenButton(true)}
      onHoverEnd={() => setIsOpenButton(false)}
      onTap={() => setIsOpenButton(true)}
      className="fixed bottom-14 left-14 z-50 rounded-[50px] border-[1px] border-solid border-white bg-black p-[18px]"
    >
      <motion.div
        className="relative h-6 w-6"
        animate={{
          width: isOpenButton ? 80 : 24,
        }}
        transition={{ duration: 0.5 }}
      >
        <DesignButton
          isOpenButton={isOpenButton}
          position="left"
          onClick={handleButtonChangeDesign}
          invertDesign={true}
          designType={designType}
        />
        <DesignButton
          isOpenButton={isOpenButton}
          position="right"
          onClick={handleButtonChangeDesign}
          invertDesign={false}
          designType={designType}
        />

        {/* <div className={cn(styles.containerLiquid, 'relative w-full')}>
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
        </div> */}
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
  isOpenButton = false,
}: {
  isOpenButton: boolean;
  position: 'left' | 'right';
  onClick: () => void;
  invertDesign: boolean;
  designType: string;
}) {
  return (
    <div
      className={cn(
        'absolute top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full',
        position === 'left' ? 'left-0' : 'right-0'
      )}
    >
      <AnimatePresence>
        {isOpenButton ? (
          <button
            disabled={!isOpenButton}
            onClick={onClick}
            aria-label="Змінити дизайн"
            className={cn(
              'h-6 w-6 rounded-full transition-all duration-500 hover:scale-[1.35]',
              invertDesign
                ? designType === 'designBySvitlana'
                  ? 'bg-olga-green'
                  : 'bg-[#8f8ded]'
                : designType === 'designBySvitlana'
                  ? 'bg-[#8f8ded]'
                  : 'bg-olga-green'
            )}
          />
        ) : (
          <div className="relative">
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: [1, 2.5, 1], opacity: [1, 0.5, 0, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className={cn(
                'flex h-6 w-6 items-center justify-center rounded-full',
                designType === 'designBySvitlana'
                  ? 'bg-s-light-purple'
                  : 'bg-olga-green'
              )}
            ></motion.div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: [1, 2, 2, 1], opacity: [1, 1, 1, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className={cn(
                  'h-3 w-3 rounded-full bg-s-purple',
                  designType === 'designBySvitlana'
                    ? 'bg-[#8f8ded]'
                    : 'bg-olga-green-extra'
                )}
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
