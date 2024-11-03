import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';

import { PCardsThird } from './PCardsThird';

const ProjectsHomeSection: React.FC = () => {
  return (
    <section className="pb-[100px] lg:pb-20 2xl:pb-16">
      <div className="container">
        <SectionTitle className="mb-8"> проєкти бази</SectionTitle>

        <PCardsThird />
      </div>
    </section>
  );
};

export default ProjectsHomeSection;
