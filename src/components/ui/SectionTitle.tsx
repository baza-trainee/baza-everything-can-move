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
        'leading-o-150 font-medium uppercase text-white ',
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
