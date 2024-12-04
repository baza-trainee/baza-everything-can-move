import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';

import { PCardsThird } from './PCardsThird';

const NewSection: React.FC = () => {
  return (
    <section className="pb-[100px] 2xl:pb-[120px]">
      <div className="container">
        <SectionTitle className="mb-8">проєкти бази</SectionTitle>

        <PCardsThird />
      </div>
    </section>
  );
};

export default NewSection;
