import SectionTitle from '@/components/ui/SectionTitle';
import BirdsScene from './BirdsScene';

const BirdsComponent = () => {
  return (
    //md:w-[375px] lg:w-[768px] 2xl:w-[1440px]
    <section className="relative m-auto h-[803px] w-full overflow-hidden lg:h-[924px] 2xl:mt-0 2xl:h-[754px]">
      <div className="absolute left-[50%] top-[254px] w-[300px] translate-x-[-50%] text-center lg:top-[238px] lg:w-[409px] 2xl:left-80 2xl:top-[132px] 2xl:w-[450px] 2xl:text-left">
        <SectionTitle secondDesign className="mb-6 lg:mb-[6px]">
          <span className="text-white">Наші</span>
          <br />
          <span>проєкти</span>
        </SectionTitle>
        <p className="font-third-family text-m font-regular leading-s-24 2xl:text-l 2xl:leading-s-36">
          Усі проєкти створюються українцями, які опановують ІТ-спеціальності
          незалежно від віку та досвіду — серед них є трейні, джуніори й
          світчери.
        </p>
      </div>
      <div
        className="absolute top-0 h-20 w-full"
        style={{
          background: ` linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.5) 57.08%, rgba(0, 0, 0, 0.257173) 80.1%, rgba(0, 0, 0, 0) 98.1%)`,
        }}
      ></div>
      <BirdsScene />
      <div
        className="absolute bottom-0 h-20 w-full"
        style={{
          background: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.5) 57.08%, rgba(0, 0, 0, 0.257173) 80.1%, rgba(0, 0, 0, 0) 98.1%)`,
        }}
      ></div>
    </section>
  );
};

export default BirdsComponent;
