import { FC } from 'react';
import { motion } from 'framer-motion';
import { DataCards } from './participant.props';
import { cn } from '@/lib/utils';

export const Card: FC<DataCards> = ({ value, text, bg, textColor, border }) => {
  return (
    <motion.li>
      <div
        className={cn(
          'flex h-[360px] w-[320px] flex-col items-center justify-center rounded-2xl p-5 uppercase text-black',
          bg || 'bg-black',
          textColor,
          border && 'border-[1px] border-solid border-white'
        )}
      >
        <span className="text-center font-second-family text-4xl font-semibold leading-o-150 tracking-custom-tight">
          {value}%
        </span>
        <p className="text-l font-regular leading-o-150">{text}</p>
      </div>
    </motion.li>
  );
};
