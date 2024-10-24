import ProjectsSection from '@/components/sections/Projects/ProjectsSection/ProjectsSection';
import React from 'react';
//import ColoredGirl from "../../components/Girl/ColoredGirl";
//import dynamic from 'next/dynamic';

// const ColoredGirl = dynamic(() => import('@/components/Girl/ColoredGirl'), {
//   ssr: false,
// });

const Page = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* <ColoredGirl />
      <WhiteTrGirl />
      <WhiteGirl /> */}
      <ProjectsSection />
    </div>
  );
};

export default Page;
