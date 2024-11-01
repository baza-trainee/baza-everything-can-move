import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';

// interface ProjectsHomeSectionProps {}

const ProjectsHomeSection: React.FC = () => {
  return (
    <section className="pb-[100px] lg:pb-20 2xl:pb-16">
      <div className="container">
        <SectionTitle className="mb-8"> проєкти бази</SectionTitle>
      </div>
    </section>
  );
};

export default ProjectsHomeSection;
