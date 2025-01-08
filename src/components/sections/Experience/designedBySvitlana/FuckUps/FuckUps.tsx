import React, { useState, useEffect } from 'react';
import { Meteors } from './Meteors';
import { ICONS_EXPERIENCE } from '@/constants/icons/iconsSrc';
import { fuckups } from '@/constants/fuckups';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';
import Container from '@/components/ui/DesignBySvitlna/Container';

const FuckUps = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
    };

    updateIsMobile(); // Перевірка під час завантаження
    window.addEventListener('resize', updateIsMobile);

    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  const toggleHoverOrClick = (
    e: React.SyntheticEvent<HTMLDivElement>,
    forceValue?: boolean
  ) => {
    e.preventDefault();
    const idx = Number(e.currentTarget.dataset.index);
    const value = forceValue !== undefined ? forceValue : !isOpen[idx];
    const copy = [...isOpen];
    copy.splice(idx, 1, value);
    setIsOpen(copy);
  };

  return (
    <div className="pb-[140px] lg:pb-[160px] 2xl:pb-[260px]">
      <Container>
        <AnimatedTitle title="Факапи" />
        <p className="pb-[60px] text-md font-semibold uppercase leading-s-24">
          Іван бурчав, що бек треба <br className="2xl:hidden" /> було планувати
          <br className="hidden 2xl:block" /> від початку.
          <br className="2xl:hidden" /> І він був правий.
        </p>
        <div className="relative flex flex-col gap-4 lg:flex-row lg:justify-center 2xl:justify-between">
          {fuckups.map((fuckup, i) => {
            const IndexIcon = ICONS_EXPERIENCE[i];
            const value = isOpen[i];

            return (
              <motion.div
                key={i}
                data-index={i}
                id="list"
                onMouseEnter={(e) => !isMobile && toggleHoverOrClick(e, true)}
                onMouseLeave={(e) => !isMobile && toggleHoverOrClick(e, false)}
                onClick={(e) => isMobile && toggleHoverOrClick(e)}
                className={clsx(
                  'relative z-10 h-min overflow-hidden rounded-[40px] font-second-family duration-200 ease-in lg:w-[227px] 2xl:w-[364px]',
                  value ? 'border border-white bg-black' : 'bg-white'
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="flex cursor-pointer flex-row items-center justify-center gap-4 px-[62px] py-[42px] text-md font-medium leading-[40px] lg:px-[22px] 2xl:px-[78px] 2xl:py-[41px]">
                  <IndexIcon
                    className={clsx(
                      'h-10 w-8 -rotate-90 leading-6 text-s-purple lg:mx-0',
                      value
                        ? 'text-s-purple lg:text-white 2xl:text-s-purple'
                        : 'lg:text-s-gray'
                    )}
                  />
                  <p
                    className={clsx(
                      'text-lg leading-[32px]',
                      value ? 'text-white' : 'text-s-gray'
                    )}
                  >
                    &#47;&#47;
                  </p>
                  <p
                    className={clsx(
                      'text-md uppercase leading-[20px] 2xl:text-md 2xl:leading-[20px]',
                      value ? 'text-white' : 'text-s-gray'
                    )}
                  >
                    fuck
                    <span
                      className={clsx(
                        'text-lg font-bold leading-[32px]',
                        value
                          ? 'text-s-purple lg:text-white 2xl:text-s-purple'
                          : 'text-s-gray'
                      )}
                    >
                      up
                    </span>
                  </p>
                </div>
                <div
                  className={clsx(
                    value
                      ? 'text-4 block border-t p-[38px] pt-8 text-center font-regular leading-6'
                      : 'hidden',
                    i === 0 && value
                      ? 'lg:px-[25px] lg:pb-8 lg:pt-5 2xl:px-[51px] 2xl:pb-[47px] 2xl:pt-8'
                      : i === 1 && value
                        ? 'lg:px-[32px] lg:pb-[75px] lg:pt-6 2xl:px-[51px] 2xl:pb-[72px] 2xl:pt-8'
                        : 'lg:px-[21px] lg:pb-[56px] lg:pt-5 2xl:px-[39px] 2xl:pb-[72px] 2xl:pt-8'
                  )}
                >
                  <p>{fuckup.textP1}</p>
                  <br className={clsx(value ? 'block' : 'hidden')} />
                  <p>{fuckup.textP2}</p>
                </div>
                {value ? <Meteors number={20} /> : ''}
              </motion.div>
            );
          })}
          <div
            className={clsx(
              'absolute left-[calc(50%-1rem)] top-5 z-[0] h-4/5 w-8 bg-white lg:left-5 lg:top-[50px] lg:h-6 lg:w-4/5 xl:left-1/3 xl:w-1/2 2xl:left-12 2xl:w-4/5'
            )}
          />
        </div>
      </Container>
    </div>
  );
};

export default FuckUps;
