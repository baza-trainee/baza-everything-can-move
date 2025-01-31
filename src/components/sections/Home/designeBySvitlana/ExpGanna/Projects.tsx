'use client';
import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import BtnAnimated from '@/components/ui/DesignBySvitlna/BtnAnimated';
import Slider from './Slider';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';
import Container from '@/components/ui/DesignBySvitlna/Container';

export default function ProjectsGanna() {
  return (
    <Background
      text="02 // Проєкти"
      bg="s-gray"
      xl={840}
      isNoContainer={true}
      isNoMaxWidth={true}
    >
      <div className="relative overflow-visible px-0 pb-32 lg:pb-[180px] 2xl:pb-[124px]">
        <Container>
          <div className="mb-[84px] flex-wrap items-center justify-between gap-x-20 lg:mb-[90px] xl:flex 2xl:mb-16">
            <div className="title">
              <AnimatedTitle title="Проєкти" className="lg-text-[76px]" />
              <p className="mb-4 text-md uppercase lg:text-lg 2xl:mb-0">
                baza trainee ukraine
              </p>
            </div>
            <div className="flex max-w-[690px] flex-col xl:-space-y-7 xl:space-x-[456px]">
              <p className="hidden leading-9 text-white lg:text-l xl:block">
                Усі наші проєкти мають різний рівень складності та контентент.
              </p>
              <BtnAnimated
                color="white"
                href="/experience"
                className="mr-auto"
              />
            </div>
          </div>
        </Container>
        <Slider />
      </div>
    </Background>
  );
}
