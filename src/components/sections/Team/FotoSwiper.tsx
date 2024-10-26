'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import teamImages from './ArrayTeamImages';
import { wrap } from 'popmotion';
import clsx from 'clsx';
import IconRow from '/assets/images/TemSection/IconRow.svg';

const variants = {
  enter: (direction: number) => {
    return {
      y: direction > 0 ? 100 : -100,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      y: direction < 0 ? 100 : -100,
      opacity: 0,
    };
  },
};

const FotoSwiper = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, teamImages.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="flex gap-14">
      <div className="flex flex-col justify-center gap-12">
        <motion.ul className="relative flex h-full max-h-[172px] flex-col items-center">
          <AnimatePresence initial={false} custom={direction}>
            {[imageIndex - 1, imageIndex, imageIndex + 1].map(
              (index, position) => {
                const wrappedIndex = wrap(0, teamImages.length, index);
                return (
                  <motion.li
                    variants={variants}
                    key={wrappedIndex}
                    custom={direction}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className={clsx(
                      'absolute',
                      position === 0 && 'top-0',
                      position === 1 && 'top-[calc(50%-32px)]',
                      position === 2 && 'bottom-0'
                    )}
                  >
                    <Image
                      width={64}
                      height={64}
                      src={teamImages[wrappedIndex].url}
                      className={clsx(
                        'h-[40px] w-[40px] cursor-pointer overflow-hidden rounded-full',
                        position === 1 && 'h-[64px] w-[64px]'
                      )}
                      alt={`фото учасника команди ${teamImages[wrappedIndex].name}`}
                    />
                  </motion.li>
                );
              }
            )}
          </AnimatePresence>
        </motion.ul>
        <div className="flex flex-col">
          <button type="button" className="mb-3" onClick={() => paginate(-1)}>
            <Image
              className="h-auto"
              width={64}
              height={33}
              alt="Кнопка вліво"
              src={'/assets/images/TemSection/IconRow.svg'}
            />
          </button>
          <button type="button" onClick={() => paginate(1)}>
            <Image
              width={64}
              height={33}
              alt="Кнопка вправо"
              src={'/assets/images/TemSection/IconRow.svg'}
              className="rotate-180 stroke-white"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <motion.div
          key={imageIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={365}
            height={364}
            src={teamImages[imageIndex].url}
            alt={teamImages[imageIndex].name}
          />
          <p className="text-center text-sm">{teamImages[imageIndex].name}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default FotoSwiper;
