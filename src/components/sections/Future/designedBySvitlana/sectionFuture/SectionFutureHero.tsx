import React from 'react';
import GalaxySvitlana from './GalaxySvitlana';
import Container from '../../../../ui/DesignBySvitlna/Container';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTilte';

function SectionFutureHero() {
  return (
    <section className="h-heightMobile lg:h-heightLg 2xl:h-height2xl">
      <Container className="relative h-full">
        <div className="align-center flex h-full flex-col justify-center pt-[14%] lg:justify-start lg:pb-[4.5%] 2xl:flex-row 2xl:items-end 2xl:justify-between">
          <div className="mx-auto max-w-[454px] self-center text-center 2xl:mx-0 2xl:max-w-[547px] 2xl:text-start">
            <AnimatedTitle
              title="Плани на майбутнє"
              wordClasses={['text-white', 'text-white', 'text-s-purple']}
              className="text-center 2xl:text-start"
            />
            <p className="mb-[6.4%] font-third-family text-s leading-o-150 lg:text-m 2xl:text-l">
              Наші плани спрямовані на створення кращого майбутнього для України
              через розвиток талантів у сфері ІТ. Кожен успішний проєкт і новий
              фахівець — це внесок у зміцнення країни та її інноваційний
              потенціал.
            </p>
          </div>
          <GalaxySvitlana />
          <div className="absolute bottom-0 left-1/2 z-10 hidden opacity-100 transition-opacity duration-500 2xl:block">
            <div className="icon-scroll scroll-to-second-section mb-6 h-10 w-6 cursor-pointer rounded-[20px] border border-white xl:mb-12">
              <span className="mx-auto my-2 block h-2 w-0.5 animate-[scroll_3s_ease_infinite] rounded-full bg-white"></span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionFutureHero;
