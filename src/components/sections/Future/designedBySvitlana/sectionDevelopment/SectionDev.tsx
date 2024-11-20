import React from 'react';
import DevAnimation from './DevAnimation';
import DevText from './DevText';
import Container from '../../../../ui/DesignBySvitlna/Container';

function SectionDev() {
  return (
    <section>
      <Container>
        <h2>розвиток</h2>
        <div className="relative">
          <DevAnimation />
          <DevText />
        </div>
      </Container>
    </section>
  );
}

export default SectionDev;
