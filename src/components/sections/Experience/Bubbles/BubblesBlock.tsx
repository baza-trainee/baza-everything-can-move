'use client'

import React, {useRef} from 'react'
import Bubbles3D from './Bubbles3D'
import Bubbles2D from './Bubbles2D'
import SubTitle from '@/components/ui/SubTitle';
import SectionTitle from '@/components/ui/SectionTitle';

export interface BubblesSectionProps {
  title: string,
  subtitle: string
}


const BubblesBlock = ({title, subtitle}:BubblesSectionProps) => {

  const bubblesBlockRef = useRef<HTMLDivElement | null >(null);

  return (
      <div ref={bubblesBlockRef} className='relative pb-16'>
        <div className='container pb-8'>
          <SectionTitle>{title}</SectionTitle>
          <SubTitle>{subtitle}</SubTitle>
        </div>
        <Bubbles3D/>
        <Bubbles2D/>
      </div>
   )
   
}

export default BubblesBlock