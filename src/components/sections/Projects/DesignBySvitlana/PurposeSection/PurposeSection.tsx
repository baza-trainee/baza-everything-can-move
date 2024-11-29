import Container from '@/components/ui/DesignBySvitlna/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { ICONS_PURPOSE } from '@/constants/icons/iconsSrc';
import React from 'react';

const PurposeSection: React.FC = () => {
  return (
    <section className="bg-white py-20 font-second-family">
      <Container>
        <SectionTitle secondDesign className="mb-6">
          Наша мета
        </SectionTitle>
        <div className="mb-6 w-[280px]">
          <p className="text-md font-semibold uppercase leading-o-120 tracking-s-2 text-black">
            Проєкт створено для взаємної підтримки двох соціальних груп.
          </p>
        </div>
      </Container>
      <div className="">
        <div className="relative h-[168px] w-[168px]">
          <ICONS_PURPOSE.STAR_BIG className="h-[168px] w-[168px] fill-s-gray" />
          <ICONS_PURPOSE.STAR_SMALL className="absolute left-1/2 top-1/2 h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 fill-s-light-purple" />
        </div>

        <ICONS_PURPOSE.STAR_BIG className="ml-5 h-[168px] w-[168px] fill-s-light-purple" />
      </div>
    </section>
  );
};

export default PurposeSection;
