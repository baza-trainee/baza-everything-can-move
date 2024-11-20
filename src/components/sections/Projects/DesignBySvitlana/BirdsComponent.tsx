import SectionTitle from '@/components/ui/SectionTitle';
import BirdsScene from './Birds/BirdsScene';

const BirdsComponent = () => {
  return (
    //md:w-[375px] lg:w-[768px] 2xl:w-[1440px]
    <section className="relative m-auto mt-[57px] h-[749px] w-full overflow-hidden lg:mt-[18px] lg:h-[906px] 2xl:mt-0 2xl:h-[749px]">
      <div className="absolute left-[50%] top-[266px] translate-x-[-50%] text-center">
        <SectionTitle
          secondDesign
        //   className="absolute left-[50%] top-[266px] translate-x-[-50%]"
        >
          Наші проєкти
        </SectionTitle>
      </div>

      <BirdsScene />
    </section>
  );
};

export default BirdsComponent;
