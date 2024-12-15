// 'use client';

import BackgroundComponent from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import SubTitleBtn from '@/components/ui/DesignBySvitlna/SubTitle/SubTitleBtn';
import BallScene from './BallScene';

function JoinUs() {
  return (
    <BackgroundComponent
      isAlwaysOpen
      text="соціальні мережі"
      bg="white"
      className="relative h-[772px] lg:h-[975px] 2xl:h-[788px]"
    >
      <BallScene />
      <div className="pointer-events-none font-third-family font-semibold text-black">
        <h2 className="z-[99999] flex text-xlg uppercase leading-o-150 tracking-custom-tight text-s-purple lg:flex-col lg:text-3xl 2xl:flex-row 2xl:gap-12">
          <span> Приєднуйся </span>
          <div className="flex gap-12">
            <span className="hidden lg:block"> до </span>
            <span className="hidden lg:block">нас</span>
          </div>
        </h2>

        <div className="z-[99999] mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
          <p className="text-md uppercase leading-o-120 tracking-custom-tight lg:text-lg lg:font-medium">
            хочеш?
          </p>
          <SubTitleBtn
            color="black"
            subTitleArr={[
              'приєднатися до команди',
              'здобувати досвід',
              'створювати продукти',
              'бути спонсором',
              'бути замовником',
            ]}
          />
        </div>
        <p className="mt-6 font-second-family text-m font-regular leading-o-150 2xl:text-l">
          Підписуйся, слідкуй за нами та пиши!
        </p>
      </div>
    </BackgroundComponent>
  );
}

export default JoinUs;
