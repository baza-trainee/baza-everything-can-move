import clsx from 'clsx';

export interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  secondDesign?: boolean;
}

export default function SectionTitle({
  children,
  className,
  secondDesign = false,
}: SectionTitleProps) {
  return (
    <h2
      className={clsx(
        'uppercase',
        secondDesign
          ? 'font-second-family text-xlg font-semibold leading-o-150 tracking-s-2 text-s-purple lg:text-3xl lg:leading-o-120 2xl:text-3xl'
          : 'font-main-family text-lg font-medium leading-o-150 text-white lg:text-[36px] 2xl:text-xl',
        // 'leading-o-150 font-medium uppercase text-white ',
        className
      )}
    >
      {children}
    </h2>
  );
}

//example how to use
// Svitlana
{
  /* <SectionTitle secondDesign className="mb-8">
  проєкти бази
</SectionTitle>; */
}
// Olga
//  <SectionTitle className="mb-3 "> проєкти</SectionTitle>
