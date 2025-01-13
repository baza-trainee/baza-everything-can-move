'use client';

import React from 'react';
import SubTitle from '@/components/ui/DesignByOlga/SubTitle';
import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';
import WiresAnimationComponent from './WiresAnimation';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
// import HideWires from './HideWires';

export interface FuckUpsSectionProps {
  title: string;
  subtitle: string;
}


const FuckUpSection = ({ title, subtitle }: FuckUpsSectionProps) => {
  // const refElement = React.useRef<HTMLDivElement | null >(null);
  return (
    <div className="h-[2700px]">
      <div className="sticky top-[600px] ">
        <div className='container mb-8'>
          <ICONS_SHARED.CORNER_TOP className="float-right" />
          <SectionTitle>{title}</SectionTitle>
          <SubTitle>{subtitle}</SubTitle>
        </div>
        <WiresAnimationComponent />
      </div>

      {/* <HideWires/> */}
    </div>
  );
};

export default FuckUpSection; 
