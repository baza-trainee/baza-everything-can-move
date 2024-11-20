'use client';

import React from 'react'
import SubTitle from '@/components/ui/SubTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import WiresAnimationComponent from './WiresAnimation';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

export interface FuckUpsSectionProps {
  title: string,
  subtitle: string
}

const FuckUpSection = ({title, subtitle}:FuckUpsSectionProps) => {


  return (
    <div className='relative'>
      
      <div className='container pb-8 sticky'>
      <ICONS_SHARED.CORNER_TOP className="float-right" />
          <SectionTitle>{title}</SectionTitle>
          <SubTitle>{subtitle}</SubTitle>
      </div>
      <WiresAnimationComponent />
      <div className='relative xl:sticky xl:translate-y-[-470px] 2xl:translate-y-[-515px]'><p className='lg:uppercase text-sm 2xl:text-l leading-[23.4px] 2xl:leading-[31.2px] font-regular bg-olga-btn-menu py-10 lg:py-8 xl:py-10 2xl:py-14 px-4 lg:px-6 2xl:px-[124px] my-16'>Baza Trainee UKRAINE це синергія ініціативності та ентузіазму. Віримо, що найм джуніорів — це не лише інвестиція в майбутнє компанії, а й можливість ростити власних професіоналів з індивідуальним підходом та свіжим баченням.</p></div>

    </div>
  )
}

export default FuckUpSection