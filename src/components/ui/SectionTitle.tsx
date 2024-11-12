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
          ? 'tracking-s-2 lg:tracking-s-1 2xl:tracking-s-2 font-font5 text-xl font-semibold leading-o-120 text-s-purple lg:text-3xl 2xl:text-4xl 2xl:leading-o-150'
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
