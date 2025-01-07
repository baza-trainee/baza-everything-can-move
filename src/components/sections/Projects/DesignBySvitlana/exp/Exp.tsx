import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';
import Container from '@/components/ui/DesignBySvitlna/Container';
import React from 'react';
import SceneRobot from './SceneRobot';
//import SceneLogo from '@/components/sections/Future/designedBySvitlana/sectionDevelopment/SceneLogo';

const Exp = () => {
  return (
    <section className="w-full pb-[100px]">
      <Container>
        <AnimatedTitle
          title="Robot"
          className="mx-auto"
          wordClasses={['text-s-purple']}
        />
        <SceneRobot />
        {/* <SceneLogo /> */}
      </Container>
    </section>
  );
};

export default Exp;
