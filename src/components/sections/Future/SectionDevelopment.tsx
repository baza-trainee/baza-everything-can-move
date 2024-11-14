import ContainerWithCorners from '@/components/ui/ContainerWithCorners';
import SubTitle from '@/components/ui/SubTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import BrainAnimation from './AnimatedSections/BrainAnimation';
import { TEXTS } from '../../../constants/text';
import clsx from 'clsx';
import styles from './SectionDevelopment.module.css';

const SectionDevelopment = () => {
  
  return (
    <section>
      <div className="container">
        <ContainerWithCorners className="mb-[100px] lg:mb-[80px] 2xl:mb-[64px]">
          <SectionTitle>Розвиток</SectionTitle>
          <SubTitle>Розвивайся з Базою</SubTitle>
          <div className="overflow-hidden py-[32px]">
            <div
              className={clsx(
                'hidden lg:flex flex-col overflow-y-auto h-[340px] 2xl:h-[376px]',
                styles.scroll
              )}
            >
              <div className="sticky  left-0 2xl:left-[66px] top-0 2xl:h-[376px] h-[340px]  w-[368px] 2xl:w-[656px] py-[18px] 2xl:py-[21px]">
                <BrainAnimation />
              </div>
              {TEXTS.map((item, index) => (
                <div
                  key={index}
                  className={`flex min-h-full flex-col  2xl:justify-start ml-auto w-[320px] justify-center  2xl:w-[346px] ${index === 0 ? '-mt-[340px] 2xl:-mt-[376px]' : ''}`}
                >
                  <h3 className="2xl:text-l leading-o-130 mb-[29px] text-md uppercase">
                    {item.title}
                  </h3>
                  <p className="2xl:text-sm  leading-o-130 text-m">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
            <div
              className={clsx(
                'flex flex-col lg:hidden',
                styles.scroll
              )}
            >
              <div className="mb-[32px]  mx-auto  h-[343px]  w-[343px] lg:w-[368px]  py-[66px]">
                <BrainAnimation />
              </div>
              <div className='h-[121px] overflow-y-auto'>
              {TEXTS.map((item, index) => (
                <div
                  key={index}
                  className={clsx(`flex  flex-col h-full`, styles.scroll)}
                >
                  <h3 className="mb-[20px] text-sm leading-o-130">
                    {item.title}
                  </h3>
                  <p className="text-s leading-o-130 ">
                    {item.text}
                  </p>
                </div>
              ))}
              </div>
             
              
            </div>
          </div>
        </ContainerWithCorners>
      </div>
    </section>
  );
};

export default SectionDevelopment;
