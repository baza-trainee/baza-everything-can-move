'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import teamImages from './ArrayTeamImages';
import { wrap } from 'popmotion';
import clsx from 'clsx';
import IconRow from '../../../../public/assets/images/TemSection/IconRow.svg';
import Circle from '../../../../public/assets/images/TemSection/circle.svg';
import styles from './styles.module.css';
import { div } from 'framer-motion/client';

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPage(([prevPage, prevDirection]) => [prevPage - 1, -1]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="flex gap-14">
        <div className="flex w-full max-w-16 flex-col justify-center gap-12">
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
                      drag="y"
                      dragElastic={1}
                      className={clsx(
                        'absolute',
                        position === 0 && 'top-0',
                        position === 1 && 'top-[calc(50%-32px)]',
                        position === 2 && 'bottom-0'
                      )}
                    >
                      <div className="relative">
                        {position === 0 && (
                          <div
                            className={clsx(
                              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                              styles.icon
                            )}
                          >
                            <Circle width={60} height={60} />
                          </div>
                        )}
                        <Image
                          width={64}
                          height={64}
                          src={teamImages[wrappedIndex].url}
                          className={clsx(
                            'h-[40px] w-[40px] overflow-hidden rounded-full',
                            position === 1 && 'h-[64px] w-[64px]'
                          )}
                          alt={`фото учасника команди ${teamImages[wrappedIndex].name}`}
                        />
                      </div>
                    </motion.li>
                  );
                }
              )}
            </AnimatePresence>
          </motion.ul>
          <div className="hidden flex-col xl:flex">
            <button type="button" className="mb-3" onClick={() => paginate(-1)}>
              <IconRow
                width={64}
                height={33}
                alt="Кнопка вліво"
                className="transition-srtoke transition-fill stroke-olga-green-extra duration-1000 ease-in-out hover:fill-olga-green-extra hover:stroke-black"
              />
            </button>
            <button type="button" onClick={() => paginate(1)}>
              <IconRow
                width={64}
                height={33}
                alt="Кнопка вправо"
                className="transition-srtoke transition-fill rotate-180 stroke-olga-green-extra duration-1000 ease-in-out hover:fill-olga-green-extra hover:stroke-black"
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
      <div className="mt-4 flex items-center justify-between xl:hidden">
        <button type="button" className="" onClick={() => paginate(-1)}>
          <IconRow
            width={64}
            height={33}
            alt="Кнопка вліво"
            className="transition-srtoke transition-fill stroke-olga-green-extra duration-1000 ease-in-out hover:fill-olga-green-extra hover:stroke-black"
          />
        </button>
        <button type="button" onClick={() => paginate(1)}>
          <IconRow
            width={64}
            height={33}
            alt="Кнопка вправо"
            className="transition-srtoke transition-fill rotate-180 stroke-olga-green-extra duration-1000 ease-in-out hover:fill-olga-green-extra hover:stroke-black"
          />
        </button>
      </div>
    </div>
  );
};

export default FotoSwiper;
