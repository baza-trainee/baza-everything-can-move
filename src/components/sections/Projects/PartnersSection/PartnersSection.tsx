import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';

const PartnersSection: React.FC = () => {
  return (
    <div className="container">
      <section className="pb-[100px] lg:pb-20">
        <div className="mb-8 text-white 2xl:mb-0">corner</div>
        <SectionTitle className="mb-1"> Наші партнери</SectionTitle>
        <h2 className="mb-8 text-white">долучайтесь</h2>
        <div className="mb-8">Logo Section</div>
        <div className="text-white">corner</div>
      </section>
    </div>
  );
};

export default PartnersSection;
