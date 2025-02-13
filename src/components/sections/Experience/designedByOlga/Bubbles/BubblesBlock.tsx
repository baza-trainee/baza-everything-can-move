'use client';

import React from 'react';
import Bubbles2D from './Bubbles2D';
import Bubbles2Dgreen from './Bubbles2Dgreen';
import SubTitle from '@/components/ui/DesignByOlga/SubTitle';
import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';

export interface BubblesSectionProps {
  title: string;
  subtitle: string;
}

const BubblesBlock = ({ title, subtitle }: BubblesSectionProps) => {

  return (
    <div className='container relative px-4 lg:px-6 2xl:px-[120px] pb-[100px] lg:pb-20 2xl:pb-[64px]'>
        <SectionTitle className='mt-[54px] lg:mt-20 2xl:mt-10'>{title}</SectionTitle>
        <SubTitle className='mt-1'>{subtitle}</SubTitle>
        <Bubbles2D />
        <Bubbles2Dgreen />
    </div>
  );
};

export default BubblesBlock;
