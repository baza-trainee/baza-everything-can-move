import React from 'react';
import clsx from 'clsx';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

export interface StarsBtnComponentProps {
  classNameDiv?: string;
  classNameIcons?: string;
}

const StarsBtnComponent = ({
  classNameDiv,
  classNameIcons,
}: StarsBtnComponentProps) => {
  return (
    <div className={clsx('flex items-center', classNameDiv)}>
      <ICONS_SHARED.STARS_BTN className={clsx(classNameIcons)} />
      <ICONS_SHARED.STARS_BTN className={clsx(classNameIcons)} />
      <ICONS_SHARED.STARS_BTN className={clsx(classNameIcons)} />
    </div>
  );
};

export default StarsBtnComponent;

//example
// <StarsBtnComponent
//   classNameDiv="gap-[6px]"
//   classNameIcons="h-[14px] w-[26px]"
// />
