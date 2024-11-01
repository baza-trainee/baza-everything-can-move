'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import Circle from '../../../../public/assets/icons/circle.svg';
import styles from './styles.module.css';
import { scrollWrap } from '@/components/ui/SwiperFoto/ScrollWrap';
import { ButtonSlide } from './ButtonSlider';
import { ObjectArrayFoto } from './types';

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

const FotoSwiper = ({ arrayImages }: { arrayImages: ObjectArrayFoto[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = scrollWrap(0, arrayImages.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPage(([prevPage]) => [prevPage - 1, -1]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex w-full justify-between">
        <div className="flex w-full max-w-16 flex-col justify-center gap-6">
          <motion.ul className="relative flex h-full max-h-[172px] flex-col items-center">
            <AnimatePresence initial={false} custom={direction}>
              {[imageIndex - 1, imageIndex, imageIndex + 1].map(
                (index, position) => {
                  const wrappedIndex = scrollWrap(0, arrayImages.length, index);
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
                          priority
                          width={64}
                          height={64}
                          src={arrayImages[wrappedIndex].urlImage}
                          className={clsx(
                            'h-[40px] w-[40px] overflow-hidden rounded-full object-cover',
                            position === 1 && 'h-[64px] w-[64px]'
                          )}
                          alt={`фото учасника команди ${arrayImages[wrappedIndex].name}`}
                        />
                      </div>
                    </motion.li>
                  );
                }
              )}
            </AnimatePresence>
          </motion.ul>
          <div className="flex flex-col gap-3">
            <ButtonSlide
              onClick={() => paginate(1)}
              ariaLabel="кнопка попереднє фото"
            />
            <ButtonSlide
              className="rotate-180"
              onClick={() => paginate(1)}
              ariaLabel="кнопка наступне фото"
            />
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
            <div className="flex h-[300px] w-[255px] justify-center lg:h-[300px] lg:w-[240px] 2xl:h-[364px] 2xl:w-[365px]">
              <Image
                width={365}
                height={364}
                src={arrayImages[imageIndex].urlImage}
                alt={arrayImages[imageIndex].name}
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-1 text-center text-[14px] text-olga-light-grey">
              {arrayImages[imageIndex].name}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FotoSwiper;
