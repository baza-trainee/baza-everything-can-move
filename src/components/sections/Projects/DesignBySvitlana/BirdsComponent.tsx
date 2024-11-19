import BirdsScene from './Birds/BirdsScene';

const BirdsComponent = () => {
  return (
    //md:w-[375px] lg:w-[768px] 2xl:w-[1440px]
    <section className="m-auto h-[749px] w-full overflow-hidden pt-[57px] lg:h-[906px] lg:pt-[18px] 2xl:h-[749px] 2xl:pt-0">
      <BirdsScene />
    </section>
  );
};

export default BirdsComponent;
