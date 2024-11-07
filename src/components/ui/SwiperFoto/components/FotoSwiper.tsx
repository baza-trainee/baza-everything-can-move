'use client';

import { ButtonSlide } from './ButtonSlider';
import { ObjectArrayFoto } from '../ui/types';
import BigFoto from './BigFoto';
import { useFotoSwiper } from '../ui/useFotoSwiper';
import ListFotoSlider from './ListFotoSlider';

const FotoSwiper = ({ arrayImages }: { arrayImages: ObjectArrayFoto[] }) => {
  const {
    positionIndexes,
    indexBigFoto,
    handleNext,
    handlePrev,
    objectBigFoto,
    position,
    newVariants,
  } = useFotoSwiper(arrayImages);

  if (!arrayImages.length) return null;

  return (
    <div className="flex w-full justify-between">
      <div className="flex w-full max-w-16 flex-col justify-center gap-6">
        <ListFotoSlider
          isCicleTimer={true}
          indexBigFoto={indexBigFoto}
          arrayImages={arrayImages}
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
      <div className="flex flex-col gap-1">
        <BigFoto
          isNameBigFoto={true}
          imageUrl={objectBigFoto?.urlImage ?? ''}
          name={objectBigFoto?.name ?? ''}
        />
      </div>
    </div>
  );
};

export default FotoSwiper;
