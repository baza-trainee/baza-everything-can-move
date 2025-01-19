import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';
import React from 'react';

import ProjectCardsShowcase from './ProjectCardsShowcase';

const ProjectsHomeSection: React.FC = () => {
  return (
    <section className="pb-[100px] 2xl:pb-[240px]">
      <div className="container">
        <SectionTitle className="mb-8">проєкти бази</SectionTitle>

        <ProjectCardsShowcase />
      </div>
    </section>
  );
};

export default ProjectsHomeSection;
