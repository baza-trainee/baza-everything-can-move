import Container from '@/components/DesignBySvitlna/Container';
import Title from '@/components/DesignBySvitlna/Title';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import React from 'react';

function HeroSection() {
  return (
    <section className="pb-[110px] pt-[123px]">
      <Container className="flex gap-[130px]">
        <div className="max-w-[499px]">
          <SectionTitle secondDesign={true}>команди</SectionTitle>
          <div className="mb-10 flex gap-3">
            <svg
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
            <span className="text-[40px]">на Базі</span>
          </div>
          <p className="text-l">
            Ми об&apos;єднуємо спеціалістів різних напрямків, які разом працюють
            над cоціально важливими проєктами. Наші учасники, замовники і
            партнери розсіяні без перебільшення по всьому світу: від Канади до
            Криму.
          </p>
        </div>
        <Image
          width={531}
          height={521}
          alt="planet"
          src={'/assets/images/PageTeam/DesignSvitlna/Planet.jpg'}
        />
      </Container>
    </section>
  );
}

export default HeroSection;
