'use client';

import { projectsArray } from './progectsArray';
import ReadMore from './ReadMore';
import DescriptionFoto from '@/components/ui/SwiperFoto/components/DescriptionFoto';
import { AnimatePresence, motion } from 'framer-motion';
import BigFoto from '@/components/ui/SwiperFoto/components/BigFoto';
import { ButtonSlide } from '@/components/ui/SwiperFoto/ButtonSlider';
import Image from 'next/image';
import clsx from 'clsx';
import CircleTimer from '@/components/ui/SwiperFoto/components/CircleTimer';
import { useFotoSwiper } from '@/components/ui/SwiperFoto/useFotoSwiper';

const Slider = () => {
  const {
    positionIndexes,
    indexBigFoto,
    arrayReverse,
    handleNext,
    handlePrev,
    position,
    newVariants,
  } = useFotoSwiper(projectsArray);
  return (
    <div className="text-white">
      <AnimatePresence>
        <ul className="relative flex h-full max-h-[172px] flex-col items-center">
          <motion.li
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            exit={{
              scale: 0,
              y: 20,
            }}
            key={indexBigFoto}
            className={'absolute top-[-8%]'}
          >
            <CircleTimer />
          </motion.li>
          {projectsArray.map((image, index) => (
            <motion.li
              className="absolute"
              key={index}
              variants={newVariants}
              transition={{ duration: 1 }}
              initial="center"
              animate={position[positionIndexes[index]]}
            >
              <div className="relative">
                <Image
                  priority
                  width={64}
                  height={64}
                  src={image.urlImage}
                  className={clsx(
                    'h-[40px] w-[40px] overflow-hidden rounded-full object-cover'
                  )}
                  alt={`фото учасника команди ${image.name}`}
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </AnimatePresence>
      <div className="flex flex-col gap-3">
        <ButtonSlide
          onClick={handlePrev}
          ariaLabel="кнопка для переходу до попереднього фото"
        />
        <ButtonSlide
          className="rotate-180"
          onClick={handleNext}
          ariaLabel="кнопка для переходу до наступного фото"
        />
      </div>
      <AnimatePresence>
        <BigFoto
          imageUrl={arrayReverse[indexBigFoto]?.urlImage}
          name={arrayReverse[indexBigFoto]?.name ?? ''}
        />
      </AnimatePresence>
      <AnimatePresence>
        <DescriptionFoto
          key={arrayReverse[indexBigFoto].title}
          title={arrayReverse[indexBigFoto].title ?? 'no title'}
          description={
            arrayReverse[indexBigFoto].description ?? 'no description'
          }
        />
      </AnimatePresence>
      <ReadMore />
    </div>
  );
};

export default Slider;
