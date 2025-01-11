import React from 'react';
import GalaxySvitlana from './GalaxySvitlana';
import Container from '../../../../ui/DesignBySvitlna/Container';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';

function SectionFutureHero() {
  return (
    <section className="h-heightMobile lg:h-heightLg 2xl:h-[860px]">
      <Container className="relative h-full">
        <div className="align-center flex h-full flex-col pt-4 justify-center lg:justify-center 2xl:flex-row 2xl:items-center 2xl:justify-between">
          <div className="mx-auto max-w-[454px] self-center text-center 2xl:mx-0 2xl:max-w-[547px] 2xl:text-start">
            <AnimatedTitle
              title="Плани на майбутнє"
              wordClasses={['text-white', 'text-white', 'text-s-purple']}
              className="text-center 2xl:text-start mb-4"
            />
            <p className="mb-[6.4%] font-third-family text-m leading-o-150 2xl:text-l">
              Наші плани спрямовані на створення кращого майбутнього для України
              через розвиток талантів у сфері ІТ. Кожен успішний проєкт і новий
              фахівець — це внесок у зміцнення країни та її інноваційний
              потенціал.
            </p>
          </div>
          <GalaxySvitlana />
        </div>
      </Container>
    </section>
  );
}

export default SectionFutureHero;
