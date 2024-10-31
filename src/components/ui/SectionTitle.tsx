import clsx from 'clsx';

export interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  return (
    <h2
      className={clsx(
        'font-main-family text-lg font-medium uppercase leading-o-150 text-white lg:text-[36px] 2xl:text-xl',
        // 'leading-o-150 font-medium uppercase text-white ',
        className
      )}
    >
      {children}
    </h2>
  );
}

//example how to use
{
  /* <SectionTitle className="mb-3 tablet:hidden"> проєкти</SectionTitle>
   */
}
