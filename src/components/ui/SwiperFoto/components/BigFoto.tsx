import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type BigFotoProps = {
  imageUrl: string;
  name: string;
  duration?: number;
  className?: string;
  width?: number;
  height?: number;
  delay?: number;
  isNameBigFoto?: boolean;
};

const MotionImage = motion.create(Image);

const BigFoto = ({
  imageUrl,
  name,
  className,
  isNameBigFoto = false,
  width = 365,
  height = 364,
}: BigFotoProps) => (
  <AnimatePresence>
    <motion.div>
      <div
        className={cn(
          'flex h-[300px] w-[255px] justify-center lg:h-[300px] lg:w-[240px] 2xl:h-[364px] 2xl:w-[365px]',
          className
        )}
      >
        <MotionImage
          key={imageUrl}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          width={`${width}`}
          height={`${height}`}
          src={imageUrl}
          alt={name || 'Зображення сторінки сайту проекта'}
          className="object-cover"
        />
      </div>
      {isNameBigFoto && (
        <motion.p
          key={name}
          initial={{
            y: '100px',
            opacity: 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="mt-1 text-center text-[14px] text-olga-light-grey"
        >
          {name ?? ''}
        </motion.p>
      )}
    </motion.div>{' '}
  </AnimatePresence>
);

export default BigFoto;
