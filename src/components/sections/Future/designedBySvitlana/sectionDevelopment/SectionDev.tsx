import React from 'react';
import DevText from './DevText';
import SceneLogo from '@/components/layout/Header/SceneLogo';
import Container from '../../../../ui/DesignBySvitlna/Container';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';

function SectionDev() {
  return (
    <section className="pb-[200px] pt-[80px]">
      <Container>
        <AnimatedTitle title="Розвиток" className='text-center lg:text-start 2xl:text-center'/>
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
