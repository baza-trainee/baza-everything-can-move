import clsx from 'clsx';

export interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  modal?: boolean;
}

export default function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  return (
    <h2
      className={clsx(
        'font-main-family leading-o-150 text-lg font-medium uppercase text-white lg:text-[36px] 2xl:text-xl',
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
