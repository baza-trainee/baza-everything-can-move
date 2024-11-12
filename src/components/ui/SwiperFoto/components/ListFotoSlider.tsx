import Image from 'next/image';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import CircleTimer from './CircleTimer';
import { ObjectArrayFoto } from '../ui/types';
import clsx from 'clsx';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  indexBigFoto: number;
  arrayImages: ObjectArrayFoto[];
  position: string[];
  positionIndexes: number[];
  newVariants: Variants;
  widthFoto?: number;
  heightFoto?: number;
  isCicleTimer?: boolean;
  directionHorizontal?: boolean;
};

function ListFotoSlider({
  className,
  indexBigFoto,
  arrayImages,
  position,
  positionIndexes,
  newVariants,
  directionHorizontal = false,
  widthFoto = 64,
  heightFoto = 64,
  isCicleTimer = false,
}: Props) {
  return (
    <AnimatePresence>
      <ul
        className={cn(
          'relative flex h-[172px] flex-col items-center',
          className
        )}
      >
        {!directionHorizontal && (
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
            {isCicleTimer && <CircleTimer />}
          </motion.li>
        )}
        {directionHorizontal && (
          <motion.li
            initial={{ scale: 0, x: 20 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{
              scale: 0,
              x: 20,
            }}
            key={indexBigFoto}
            className={'absolute -left-[12px]'}
          >
            {isCicleTimer && <CircleTimer />}
          </motion.li>
        )}
        {arrayImages.map((image, index) => (
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
                width={`${widthFoto}`}
                height={`${heightFoto}`}
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
  );
}

export default ListFotoSlider;
