import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';

// import { PCardsThird } from './PCardsThird';
import { NewPCards } from './NewPCards';
import { NewPCards2 } from './NewPCards-2';

const ProjectsHomeSection: React.FC = () => {
  return (
    <section className="pb-[100px] 2xl:pb-[120px]">
      <div className="container">
        <SectionTitle className="mb-8">проєкти бази</SectionTitle>

        {/* <PCardsThird /> */}
        <NewPCards />
        <NewPCards2 />
      </div>
    </section>
  );
};

export default ProjectsHomeSection;
