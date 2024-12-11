import React from 'react';
import DevText from './DevText';
import SceneLogo from '@/components/layout/Header/SceneLogo';
import Container from '../../../../ui/DesignBySvitlna/Container';

function SectionDev() {
  return (
    <section className="pb-[200px] pt-[80px]">
      <Container>
        <h2 className="traking-s-2 text-center text-xlg uppercase leading-o-120 lg:text-start lg:text-[80px] 2xl:text-center">
          розвиток
        </h2>
        <div className="relative lg:mt-[90px]">
          <div className="left-0 top-0 mx-auto my-[60px] h-[260px] w-[262px] lg:sticky lg:mx-0 lg:my-0 xl:w-widthXl 2xl:left-[50%] 2xl:h-[386px] 2xl:w-[390px] 2xl:-translate-x-[50%]">
            <SceneLogo />
          </div>
          <DevText />
        </div>
      </Container>
    </section>
  );
}

export default SectionDev;
