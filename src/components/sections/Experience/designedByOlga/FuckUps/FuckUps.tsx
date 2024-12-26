'use client';

import React from 'react';
import SubTitle from '@/components/ui/DesignByOlga/SubTitle';
import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';
import WiresAnimationComponent from './WiresAnimation';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

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
      <div className="relative my-[100px] lg:my-[80px] xl:sticky xl:translate-y-[-470px] 2xl:translate-y-[-515px] duration-1000">
        <p className="my-16 bg-olga-btn-menu px-4 py-10 text-sm font-regular leading-[23.4px] lg:px-6 lg:py-8 lg:uppercase xl:py-10 2xl:px-[124px] 2xl:py-14 2xl:text-l 2xl:leading-[31.2px]">
          Baza Trainee UKRAINE це синергія ініціативності та ентузіазму. Віримо, що найм джуніорів — це не лише інвестиція в майбутнє компанії, а й можливість ростити власних професіоналів з індивідуальним підходом та свіжим баченням.
        </p>
      </div>
    </div>
  );
};

export default FuckUpSection;
