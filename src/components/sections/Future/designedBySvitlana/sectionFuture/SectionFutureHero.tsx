import React from 'react';
import GalaxySvitlana from './GalaxySvitlana';
import Container from '../../../../ui/DesignBySvitlna/Container';

function SectionFutureHero() {
  return (
    <section className="relative h-heightMobile lg:h-heightLg 2xl:my-[26px] 2xl:h-height2xl">
      <GalaxySvitlana />
      <Container className="flex h-full items-center leading-[1.2]">
        <h2 className="max-w-[446px] text-[80px]">
          <span>плани на </span>Майбутнє
        </h2>
        <div className="absolute bottom-0 left-1/2 z-10 opacity-100 transition-opacity duration-500 xl:block">
          <div className="icon-scroll scroll-to-second-section mb-6 h-10 w-6 cursor-pointer rounded-[20px] border border-white xl:mb-12">
            <span className="mx-auto my-2 block h-2 w-0.5 animate-[scroll_3s_ease_infinite] rounded-full bg-white"></span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionFutureHero;
