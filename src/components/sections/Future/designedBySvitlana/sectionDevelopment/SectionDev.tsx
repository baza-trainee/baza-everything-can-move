import React from 'react';
import DevText from './DevText';
import SceneLogo from './SceneLogo';
import Container from '../../../../ui/DesignBySvitlna/Container';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';

function SectionDev() {
  return (
    <section className="pb-[200px] pt-[80px]">
      <Container>
        <AnimatedTitle
          title="Розвиток"
          className="text-center lg:mb-[90px] lg:text-start 2xl:text-center"
        />
        <div className="relative">
          <div className="left-0 top-0 mx-auto my-[60px] h-[200px] w-[200px] lg:sticky lg:mx-0 lg:my-0 2xl:left-[50%] 2xl:h-[220px] 2xl:w-[220px] 2xl:-translate-x-[50%]">
            <SceneLogo />
          </div>
          <DevText />
        </div>
      </Container>
    </section>
  );
}

export default SectionDev;
