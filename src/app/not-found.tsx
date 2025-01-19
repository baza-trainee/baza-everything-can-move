import React from 'react';
// import { useDesignStore } from '@/useDesignStore';
// import Container from '@/components/ui/DesignBySvitlna/Container';
import WhiteGirl from '@/components/Girl/WhiteGirl';
// import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';
// import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';

const NotFoundPage = () => {
  return (
    <section className="py-20">
      <div className="mx-auto flex items-center justify-center">
        <h1 className="text-center text-xl text-white">Ups ...</h1>
        <div className="">
          <WhiteGirl />
        </div>
      </div>

      <p className="text-center text-lg">такої сторінки немає</p>
      {/* <div className="h-[800px] w-full">
        <WhiteGirl />
      </div> */}

      {/* {designType === 'designBySvitlana' && (
        <Container>
          <AnimatedTitle
            title="not found"
            //   className="max-w-[544px]"
            wordClasses={['text-white', 'text-s-purple']}
          />
        </Container>
      )}
      {designType === 'designByOlga' && (
        <div className="container">
          <SectionTitle className="mb-8">not found</SectionTitle>
        </div>
      )} */}
    </section>
  );
};

export default NotFoundPage;
