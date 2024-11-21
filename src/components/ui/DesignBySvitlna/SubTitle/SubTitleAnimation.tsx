import React from 'react';
import clsx from 'clsx';

export interface SubTitleAnimationProps {
  children: React.ReactNode;
  className?: string;
}
const SubTitleAnimation = ({ children, className }: SubTitleAnimationProps) => {
  return (
    <h3
      className={clsx(
        'font-second-family text-md font-semibold uppercase leading-o-120 tracking-s-2 lg:text-lg lg:font-medium',
        className
      )}
    >
      {children}
    </h3>
  );
};

export default SubTitleAnimation;
