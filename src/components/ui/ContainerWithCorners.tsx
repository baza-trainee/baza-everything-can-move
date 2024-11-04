import React from 'react';
import clsx from 'clsx';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

interface ContainerWithCornersProps {
  children: React.ReactNode;
  className?: string;
}

const ContainerWithCorners: React.FC<ContainerWithCornersProps> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx('relative w-full', className)}>
      <ICONS_SHARED.CORNER_TOP className="absolute right-0 top-0" />
      {children}
      <ICONS_SHARED.CORNER_BOTTOM className="absolute bottom-0 left-0" />
    </div>
  );
};

export default ContainerWithCorners;

//Example how to use
{
  /* <ContainerWithCorners className="pt-8 2xl:pt-0">
  <SectionTitle className="mb-1"> Наші партнери</SectionTitle>
  <h2 className="mb-8 text-white">долучайтесь</h2>

  <MovingPartnersCards items={PARTNERS_ARR} speed="slow" />
</ContainerWithCorners>; */
}
