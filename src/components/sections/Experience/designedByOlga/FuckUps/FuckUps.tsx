'use client';

import React from 'react';
import SubTitle from '@/components/ui/DesignByOlga/SubTitle';
import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';
import WiresAnimationComponent from './WiresAnimation';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
import HideWiresSM from './HideWiresSM';
import HideWires2XL from './HideWires2XL';

export interface FuckUpsSectionProps {
  title: string;
  subtitle: string;
}


const FuckUpSection = ({ title, subtitle }: FuckUpsSectionProps) => {

  return (
    <>
    <div className="h-[3305px]">
      <div className="sticky top-[600px]">
        <div className='container mb-8'>
          <ICONS_SHARED.CORNER_TOP className="float-right" />
          <SectionTitle>{title}</SectionTitle>
          <SubTitle>{subtitle}</SubTitle>
        </div>
        <WiresAnimationComponent />
      </div>
    </div>
    <HideWiresSM/>
    <HideWires2XL/>
    </>
  );
};

export default FuckUpSection; 
