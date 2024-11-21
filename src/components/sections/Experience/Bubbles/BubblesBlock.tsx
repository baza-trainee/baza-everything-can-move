'use client'

import React from 'react'
import Bubbles3D from './Bubbles3D'
import Bubbles2D from './Bubbles2D'
import SubTitle from '@/components/ui/SubTitle';
import SectionTitle from '@/components/ui/SectionTitle';

export interface BubblesSectionProps {
  title: string,
  subtitle: string
}


const BubblesBlock = ({title, subtitle}:BubblesSectionProps) => {

  // const bubblesBlockRef = useRef<HTMLDivElement | null >(null);

  return (

      <div className='container relative pb-[100px] lg:pb-20 2xl:pb-16 overflow-clip'>
        <SectionTitle>{title}</SectionTitle>
        <SubTitle>{subtitle}</SubTitle>
        <Bubbles2D/>
        <Bubbles3D/>
      </div>

   )
   
}

export default BubblesBlock