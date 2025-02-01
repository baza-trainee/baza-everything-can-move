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
      className="pb-[118px] lg:pb-[180px] 2xl:pb-[124px]"
    >
      <div className="relative overflow-visible px-0">
        <Container>
          <div className="mb-[84px] flex-wrap items-end justify-between lg:mb-[90px] xl:flex 2xl:mb-16">
            <div className="mb-6 lg:mb-10 2xl:mb-0">
              <AnimatedTitle
                title="Проєкти"
                className="lg-text-[76px] mb-4 lg:mb-6 2xl:mb-4"
              />
              <p className="font-second-family text-md font-semibold uppercase leading-o-120 tracking-s-2 lg:text-lg lg:font-medium">
                baza trainee ukraine
              </p>
            </div>
            {/* // */}
            <div className="flex max-w-[690px] flex-col xl:-space-y-7 xl:space-x-[456px]">
              <p className="mb-10 font-third-family text-m leading-o-150 text-white lg:mb-0 lg:hidden xl:block 2xl:text-l">
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
