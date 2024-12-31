import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';
import Container from '@/components/ui/DesignBySvitlna/Container';
import React from 'react';
import SceneRobot from './SceneRobot';

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
      </Container>
    </section>
  );
};

export default Exp;
