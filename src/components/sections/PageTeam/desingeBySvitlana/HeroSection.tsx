import Container from '@/components/DesignBySvitlna/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { SubTitle } from '@/components/ui/SubTitleSvitlana/SubTitle';
import React from 'react';
import Cobe from './Cobe';

function HeroSection() {
  return (
    <section className="pb-[110px] pt-[123px]">
      <Container className="flex flex-col gap-10 lg:gap-0 lg:-space-y-[50px] 2xl:flex-row 2xl:gap-[130px] 2xl:-space-y-0">
        <div className="max-w-[499px]">
          <SectionTitle secondDesign={true} className="mb-6">
            команди
          </SectionTitle>
          <div className="mb-5 flex items-end gap-4 lg:mb-8 lg:gap-10">
            <svg
              className="h-[35px] w-[37px] lg:h-[51px] lg:w-[52px]"
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.2704 1.04849L49.3961 49.2706M49.3961 49.2706L1.174 49.3964M49.3961 49.2706L1.04824 1.17424"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <SubTitle className="mb-3 lg:mb-0" />
          </div>
          <p className="z-10 max-w-[335px] text-balance font-third-family text-m font-regular leading-o-150 2xl:max-w-[500px] 2xl:text-l">
            Ми об&apos;єднуємо спеціалістів різних напрямків, які разом працюють
            над cоціально важливими проєктами. <br /> <br /> Наші учасники,
            замовники і партнери розсіяні без перебільшення по всьому світу:
            <span className="font-medium 2xl:font-semibold">
              від Канади до Криму.
            </span>
          </p>
        </div>
        <div className="z-0 ml-auto mr-auto h-[307px] w-[314px] overflow-visible lg:mr-0 lg:h-[455px] lg:w-[465px]">
          <Cobe />
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
