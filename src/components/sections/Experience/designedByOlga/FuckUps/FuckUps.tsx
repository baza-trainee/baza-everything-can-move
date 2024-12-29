'use client';

import React from 'react';
import SubTitle from '@/components/ui/DesignByOlga/SubTitle';
import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';
import WiresAnimationComponent from './WiresAnimation';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
import HideWires from './HideWires';

export interface FuckUpsSectionProps {
  title: string;
  subtitle: string;
}


const FuckUpSection = ({ title, subtitle }: FuckUpsSectionProps) => {
  return (
    <div className="relative">
      <div className="container sticky pb-8">
        <ICONS_SHARED.CORNER_TOP className="float-right" />
        <SectionTitle>{title}</SectionTitle>
        <SubTitle>{subtitle}</SubTitle>
      </div>
      <WiresAnimationComponent />
      <HideWires/>
    </div>
  );
};

export default FuckUpSection;
