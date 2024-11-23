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

//   const [coordX, setCoordX] = useState<number>(0)
//   const [coordY, setCoordY] = useState<number>(0)

//  useEffect(() => {
//   const BubblesBlock = document.getElementById('BubblesBlock');
//   BubblesBlock?.addEventListener('click', (event: MouseEvent) => {
//     event.preventDefault();
//     setCoordX(event.clientX)
//     setCoordY(event.clientY)
//     })
//  })

  return (
    <>
      <div className='container relative pb-[100px] lg:pb-20 2xl:pb-16 overflow-clip'>
        <SectionTitle>{title}</SectionTitle>
        <SubTitle>{subtitle}</SubTitle>
        <Bubbles2D/>

      </div>
        <Bubbles3D/>
    </>   
   )
   
}

export default BubblesBlock