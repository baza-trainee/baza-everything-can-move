import { FC } from 'react';

import { cn } from '@/lib/utils';
import { DataCards } from '../../participant.props';

export const Card: FC<DataCards> = ({
  value,
  text,
  bg,
  textColor,
  border,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center gap-4 rounded-2xl p-5 uppercase text-black lg:h-[360px] lg:w-[280px] lg:flex-col lg:gap-0 2xl:w-[320px]',
        bg || 'bg-black',
        textColor,
        border && 'border-[1px] border-solid border-white',
        className
      )}
    >
      <span className="text-center font-second-family text-lg font-medium leading-o-120 tracking-custom-tight lg:text-3xl lg:font-semibold 2xl:text-4xl 2xl:leading-o-150">
        {value}%
      </span>
      <p className="text-m font-regular leading-o-150 lg:text-l">{text}</p>
    </div>
  );
};
