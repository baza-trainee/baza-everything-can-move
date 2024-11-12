import React from 'react'
import SubTitle from '@/components/ui/SubTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import WiresAnimationComponent from './WiresAnimation';
import ContainerWithCorners from '@/components/ui/ContainerWithCorners';

export interface FuckUpsSectionProps {
  title: string,
  subtitle: string
}

const FuckUpSection = ({title, subtitle}:FuckUpsSectionProps) => {
  return (

    <ContainerWithCorners>
        <div className='container pb-8'>
            <SectionTitle>{title}</SectionTitle>
            <SubTitle>{subtitle}</SubTitle>
        </div>
    <div className='container flex flex-row justify-between sticky'>
      <p className=''>Неправильно збілдили проєкт для<br/>деплою. Папки завернули через<br/>рівень. Довго мучились...</p>
      <p className=''>Зверстали першу сторінку сайту<br/>на bootstrap з жорсткою<br/> структурою.<br/><br/>Переписували заново фактично всю<br/> сторінку.</p>
    </div>
        <WiresAnimationComponent />
    <p className='container absolute bottom-0 right-0 overflow-clip'>Підключили Back-end розробника<br/> на останньому етапі.<br/><br/>В результаті чого тестувальники<br/> працювали на 2 тижні довше.</p>
    </ContainerWithCorners>

  )
}

export default FuckUpSection