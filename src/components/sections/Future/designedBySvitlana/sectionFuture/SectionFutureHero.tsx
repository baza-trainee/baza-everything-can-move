import React from 'react';
import GalaxySvitlana from './GalaxySvitlana';
import Container from '../../../../ui/DesignBySvitlna/Container';

function SectionFutureHero() {
  return (
    <section className="h-heightMobile lg:h-heightLg 2xl:h-height2xl">
    
      <Container className='h-full relative'>
        <div className="h-full pt-[14%] flex flex-col 2xl:flex-row align-center justify-center lg:justify-start 2xl:justify-between 2xl:items-end h-full  lg:pb-[4.5%] ">
       
        <div className='max-w-[454px] text-center 2xl:max-w-[547px] 2xl:text-start mx-auto 2xl:mx-0 self-center'>
        <h2 className="traking-s-2 text-xlg lg:text-[80px] leading-o-120 uppercase ">
          <span>плани на </span>Майбутнє
        </h2>
        <p className='font-third-family text-s lg:text-m 2xl:text-l leading-o-150  mb-[6.4%]'>Наші плани спрямовані на створення кращого майбутнього для України через розвиток талантів у сфері ІТ. Кожен успішний проєкт і новий фахівець — це внесок у зміцнення країни та її інноваційний потенціал.</p>
        </div>
        <GalaxySvitlana />
        <div className=" hidden absolute bottom-0 left-1/2 z-10 opacity-100 transition-opacity duration-500 2xl:block">
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
