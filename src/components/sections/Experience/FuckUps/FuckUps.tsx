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
      <ICONS_SHARED.CORNER_TOP className=" absolute right-[227px] top-0" />

      <div className='container pb-8'>
          <SectionTitle>{title}</SectionTitle>
          <SubTitle>{subtitle}</SubTitle>
      </div>
      <WiresAnimationComponent />

      <div className="relative px-[227px]"><ICONS_SHARED.CORNER_BOTTOM  /></div>

      {/* <p className='uppercase text-l leading-[31.2px] font-regular bg-olga-btn-menu py-10 px-[124px] my-16'>Baza Trainee UKRAINE це синергія ініціативності та ентузіазму. Віримо, що найм джуніорів — це не лише інвестиція в майбутнє компанії, а й можливість ростити власних професіоналів з індивідуальним підходом та свіжим баченням.</p> */}
    </div>
  )
}

export default FuckUpSection