'use client'; 
import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import BtnAnimated from '@/components/ui/DesignBySvitlna/BtnAnimated';
import Slider from './Slider';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';

export default function Projects() {
  return (
    <Background text="02 // Проєкти" bg="s-gray" xl={940} isNoContainer={true}>
      <section className="relative mb-32 overflow-visible px-0">
        <div className="container">
          <div className="mb-12 items-center justify-between gap-x-20 xl:flex flex-wrap">
            <div className="title">
              <AnimatedTitle title="Проєкти" className="lg-text-[76px]" />
              <p className="mb-4 text-md uppercase lg:text-lg 2xl:mb-0">
                baza trainee ukraine
              </p>
            </div>
            <div className="flex flex-col xl:-space-y-7 xl:space-x-[456px] max-w-[690px]">
              <p className="hidden leading-9 text-white xl:block lg:text-l">
                Усі наші проєкти мають різний рівень складності та контентент.
              </p>
              <BtnAnimated color="white" href="/experience" className="mb-8 mr-auto" />
            </div>
          </div>
        </div>
        <Slider />
      </section>
    </Background>
  );
}
