import BirdsScene from './BirdsScene';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';
import Container from '@/components/ui/DesignBySvitlna/Container';

const BirdsSection = () => {
  return (
    // <section className="relative m-auto h-[803px] w-full overflow-hidden lg:h-[924px] 2xl:mt-0 2xl:h-[754px]">
    <section className="relative h-[803px] w-full overflow-hidden lg:h-[924px] 2xl:mt-0 2xl:h-[754px]">
      <Container className="relative">
        <div className="absolute left-[50%] top-[254px] w-[340px] translate-x-[-50%] text-center lg:top-[238px] lg:w-[409px] 2xl:left-80 2xl:top-[132px] 2xl:w-[468px] 2xl:text-left">
          <div
            className="absolute -bottom-[10px] -left-[25px] -z-10 h-[154px] w-[349px] rounded-[70%] lg:-bottom-[30px] lg:-left-[37px] lg:h-[126px] lg:w-[484px] 2xl:-bottom-[40px] 2xl:-left-[80px] 2xl:h-[247px] 2xl:w-[543px] 2xl:rounded-[50%]"
            style={{
              background:
                'radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0.6814) 71.6%, rgba(0, 0, 0, 0.4) 100%)',
            }}
          ></div>{' '}
          <AnimatedTitle
            title="Наші проєкти"
            className="pb-6 lg:pb-[6px]"
            wordClasses={['text-white', 'text-s-purple']}
          />
          <p className="font-third-family text-m font-regular leading-s-24 2xl:text-l 2xl:leading-s-36">
            Усі проєкти створюються українцями, які опановують ІТ-спеціальності
            незалежно від віку та досвіду — серед них є трейні, джуніори й
            світчери.
          </p>
        </div>
      </Container>

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

export default BirdsSection;
