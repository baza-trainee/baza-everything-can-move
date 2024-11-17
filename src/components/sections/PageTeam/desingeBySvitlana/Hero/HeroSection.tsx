import Container from '@/components/ui/DesignBySvitlna/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { SubTitle } from '@/components/ui/DesignBySvitlna/SubTitle/SubTitle';
import React from 'react';
import { GlobeDemo } from './GlobeDemo';

function HeroSection() {
  return (
    <section className="overflow-hidden pb-[110px] pt-[123px]">
      <Container className="flex flex-col gap-10 lg:gap-0 lg:-space-y-[60px] 2xl:flex-row 2xl:gap-[130px] 2xl:-space-y-0">
        <div className="max-w-[499px]">
          <SectionTitle secondDesign={true} className="mb-6 2xl:mb-[31px]">
            команди
          </SectionTitle>
          <div className="mb-8 flex items-end gap-4 lg:gap-10 2xl:mb-[41px]">
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
            <SubTitle />
          </div>
          <div className="z-10 max-w-[320px] font-third-family text-m font-regular leading-o-150 2xl:max-w-[490px] 2xl:text-l">
            <p className="text-balance">
              Ми об&apos;єднуємо спеціалістів різних напрямків, які разом
              працюють над cоціально важливими проєктами.
            </p>

            <p className="mt-4">
              Наші учасники, замовники і партнери розсіяні без перебільшення по
              всьому світу:{' '}
              <span className="font-medium 2xl:font-semibold">
                від Канади до Криму.
              </span>
            </p>
          </div>
        </div>
        <div className="relative z-0 ml-auto mr-auto flex h-[307px] w-[314px] items-center justify-center overflow-visible lg:mr-0 lg:h-[455px] lg:w-[465px] 2xl:ml-0">
          <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 overflow-visible lg:h-[480px] lg:w-[480px] 2xl:left-0 2xl:top-0 2xl:h-[600px] 2xl:w-[600px] 2xl:translate-x-0 2xl:translate-y-0">
            <GlobeDemo />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
