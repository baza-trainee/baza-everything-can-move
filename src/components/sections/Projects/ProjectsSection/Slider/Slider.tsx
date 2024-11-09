'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { projectsArray } from './progectsArray';

import {
  BigFoto,
  ButtonSlide,
  CircleTimer,
  DescriptionFoto,
  ListFotoSlider,
  useFotoSwiper,
} from '@/components/ui/SwiperFoto';
import { useMediaQuery } from 'react-responsive';

const Slider = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const {
    positionIndexes,
    indexBigFoto,
    handleNext,
    handlePrev,
    position,
    newVariantsHorizontal,
    newVariants,
    objectBigFoto,
  } = useFotoSwiper(projectsArray);

  return (
    <div className="flex flex-col items-center gap-[104px] text-white lg:gap-[116px] 2xl:flex-row 2xl:gap-0">
      <div className="flex w-full flex-col-reverse items-center gap-8 lg:flex-row lg:justify-between lg:gap-0 2xl:justify-normal">
        <div className="flex flex-col gap-2 lg:h-[296px] lg:justify-between lg:gap-0 2xl:mr-14">
          {!isTabletOrMobile && (
            <ListFotoSlider
              className="hidden lg:flex"
              isCicleTimer={true}
              indexBigFoto={indexBigFoto}
              arrayImages={projectsArray}
              position={position}
              positionIndexes={positionIndexes}
              newVariants={newVariants}
            />
          )}

          {isTabletOrMobile && (
            <ListFotoSlider
              className="h-[64px] w-[186px] justify-center lg:hidden"
              isCicleTimer={true}
              directionHorizontal={true}
              indexBigFoto={indexBigFoto}
              arrayImages={projectsArray}
              position={position}
              positionIndexes={positionIndexes}
              newVariants={newVariantsHorizontal}
            />
          )}

          {!isTabletOrMobile && (
            <div className="gap-3 lg:flex lg:flex-col">
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
          )}
          {isTabletOrMobile && (
            <div className="flex justify-center gap-3">
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
          )}
        </div>
        <BigFoto
          className="h-[184px] w-[343px] lg:h-[300px] lg:w-[600px] 2xl:h-[256px] 2xl:w-[540px]"
          width={600}
          imageUrl={objectBigFoto.urlImage}
          name={objectBigFoto.name ?? 'Зображення сторінки сайту проекта'}
        />
      </div>
      <div className="relative ml-auto h-[256px] w-full lg:max-w-[320px] 2xl:max-w-[346px]">
        <AnimatePresence mode="sync">
          <motion.div
            key={`${objectBigFoto.title}-${objectBigFoto.description}`}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
          >
            <DescriptionFoto
              className="absolute left-0 top-0 2xl:justify-center"
              title={objectBigFoto.title ?? 'no title'}
              description={objectBigFoto.description ?? 'no description'}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slider;
