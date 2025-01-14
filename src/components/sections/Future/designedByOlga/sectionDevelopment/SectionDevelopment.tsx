import ContainerWithCorners from '@/components/ui/DesignByOlga/ContainerWithCorners';
import SubTitle from '@/components/ui/DesignByOlga/SubTitle';
import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';
import BrainAnimation from './BrainAnimation';
import { TEXTS } from '../../../../../constants/text';
import clsx from 'clsx';
import styles from './SectionDevelopment.module.css';

function SectionDevelopment() {
  const texts = TEXTS.slice(0, 4);

  return (
    <section>
      <div className="container">
        <ContainerWithCorners className="mb-[100px]">
          <SectionTitle>Розвиток</SectionTitle>
          <SubTitle>Розвивайся з Базою</SubTitle>
          <div className="overflow-hidden py-[32px]">
            <div
              className={clsx(
                'hidden h-[340px] flex-col overflow-y-auto lg:flex 2xl:h-[376px]',
                styles.scroll
              )}
            >
              <div className="sticky left-0 top-0 h-[340px] w-customLg py-[18px] 2xl:h-[376px] 2xl:w-[69%] 2xl:w-custom2xl 2xl:py-[21px]">
                <BrainAnimation />
              </div>
              {texts.map((item, index) => (
                <div
                  key={index}
                  className={`ml-auto flex min-h-full w-[320px] flex-col justify-center 2xl:w-[346px] 2xl:justify-start ${index === 0 ? '-mt-[340px] 2xl:-mt-[376px]' : ''}`}
                >
                  <h3 className="mb-[29px] text-md uppercase leading-o-130 2xl:text-l">
                    {item.title}
                  </h3>
                  <p className="text-m leading-o-130 2xl:text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className={clsx('flex flex-col lg:hidden', styles.scroll)}>
              <div className="mx-auto mb-[32px] h-[343px] w-[343px] py-[66px] lg:w-[368px]">
                <BrainAnimation />
              </div>
              <div className="h-[121px] overflow-y-auto">
                {TEXTS.map((item, index) => (
                  <div
                    key={index}
                    className={clsx(`flex h-full flex-col`, styles.scroll)}
                  >
                    <h3 className="mb-[20px] text-sm leading-o-130">
                      {item.title}
                    </h3>
                    <p className="text-s leading-o-130">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContainerWithCorners>
      </div>
    </section>
  );
}

export default SectionDevelopment;
