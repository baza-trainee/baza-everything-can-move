'use client';

import { projectsArray } from './progectsArray';

import {
  BigFoto,
  ButtonSlide,
  DescriptionFoto,
  ListFotoSlider,
  useFotoSwiper,
} from '@/components/ui/SwiperFoto';

const Slider = () => {
  const {
    positionIndexes,
    indexBigFoto,
    handleNext,
    handlePrev,
    position,
    newVariants,
    objectBigFoto,
  } = useFotoSwiper(projectsArray);
  return (
    <div className="flex items-center text-white">
      <div className="flex h-[296px] flex-col justify-between 2xl:mr-14">
        <ListFotoSlider
          isCicleTimer={true}
          indexBigFoto={indexBigFoto}
          arrayImages={projectsArray}
          position={position}
          positionIndexes={positionIndexes}
          newVariants={newVariants}
        />

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
      </div>
      <BigFoto
        className="2xl:h-[256px] 2xl:w-[540px]"
        width={540}
        imageUrl={objectBigFoto.urlImage}
        name={objectBigFoto.name ?? ''}
      />

      <DescriptionFoto
        className="ml-auto max-w-[346px]"
        key={objectBigFoto.title}
        title={objectBigFoto.title ?? 'no title'}
        description={objectBigFoto.description ?? 'no description'}
      />
    </div>
  );
};

export default Slider;
