import React from 'react';
import DevAnimation from './DevAnimation';
import DevText from './DevText';
import Container from '../../../../ui/DesignBySvitlna/Container';

function SectionDev() {
  return (
    <section className='pt-[80px] pb-[200px]'>
      <Container>
      <h2 className="traking-s-2 text-xlg lg:text-[80px] leading-o-120 uppercase text-center lg:text-start 2xl:text-center">
      розвиток
        </h2>
        <div className="relative lg:mt-[90px]">
          <DevAnimation />
          <DevText />
        </div>
      </Container>
    </section>
  );
}

export default SectionDev;
