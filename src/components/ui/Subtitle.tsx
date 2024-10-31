import clsx from 'clsx';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

interface SubTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SubTitle({ children, className }: SubTitleProps) {
  return (
    <div
      className={clsx(
        'flex items-center font-main-family text-xs font-regular leading-o-150 text-white lg:text-s',

        className
      )}
    >
      <ICONS_SHARED.ELIPSE_SUB_TITLE className="mr-1 2xl:mr-[6px]" />
      <span>{children}</span>
    </div>
  );
}
// Example how to use
// <SubTitle className="mb-8"> Долучайтесь</SubTitle>
