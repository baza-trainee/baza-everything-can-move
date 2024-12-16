import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';

import ProjectCardsShowcase from './ProjectCardsShowcase';

const ProjectsHomeSection: React.FC = () => {
  return (
    <section className="pb-[100px] 2xl:pb-[120px]">
      <div className="container">
        <SectionTitle className="mb-8">проєкти бази</SectionTitle>

        {/* <PCardsThird /> */}
        {/* <p className="my-4 text-center text-white">
          Var 1- scale from small to big
        </p>
        <NewPCards /> */}
        {/*<p className="my-4 text-center text-white">
          Var 2- hover to right side.
        </p>
        <NewPCards2 /> */}

        <ProjectCardsShowcase />
      </div>
    </section>
  );
};

export default ProjectsHomeSection;
