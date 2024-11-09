import React from 'react';
import FotoSwiper from '../../../ui/SwiperFoto/components/FotoSwiper';
import SectionTitle from '@/components/ui/SectionTitle';
import { teamImages } from './ArrayTeamImages';
import SubTitle from '@/components/ui/SubTitle';
import ContainerWithCorners from '@/components/ui/ContainerWithCorners';
import LinkMoreInfo from '@/components/ui/SwiperFoto/components/LinkMoreInfo';

function TeamSection() {
  return (
    <section className="pb-[120px]">
      <div className="container text-white">
        <ContainerWithCorners className="relative flex flex-col gap-8 pb-12">
          <div className="pt-10">
            <SectionTitle className="pb-1 text-lg lg:text-[2.25rem] 2xl:text-[48px]">
              Команди
            </SectionTitle>
            <SubTitle>{'квітень 2023'}</SubTitle>
          </div>
          <div className="flex flex-col items-center gap-[100px] lg:flex-row lg:justify-between lg:gap-0">
            <div className="w-full lg:max-w-[336px] 2xl:max-w-[486px]">
              <FotoSwiper arrayImages={teamImages} />
            </div>

            <div className="flex flex-col justify-center gap-6 text-[14px] lg:max-w-[320px] lg:text-m 2xl:max-w-[346px] 2xl:text-sm">
              <p>
                На старті розвитку Бази на проєктах було залучено по 20-25 осіб
                до команди. <br />
                {''} <br /> Наразі наш оптимальний склад — до 10 учасників, це —
                до трьох дизайнерів, до трьох фронт девелоперів, до трьох
                тестувальників та Іван.
              </p>
              <LinkMoreInfo title="читати далі" />
            </div>
          </div>
        </ContainerWithCorners>
      </div>
    </section>
  );
}

export default TeamSection;
