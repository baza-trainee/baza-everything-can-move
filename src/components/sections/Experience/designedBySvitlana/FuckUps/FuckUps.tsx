import React, { useState } from 'react';
import { Meteors } from './Meteors';
import { ICONS_EXPERIENCE } from '@/constants/icons/iconsSrc';
import { fuckups } from '@/constants/fuckups';
import clsx from 'clsx';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';

const FuckUps = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);

  const toggleHover = (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.preventDefault();
    const idx = Number(e.currentTarget.dataset.index);
    const value = !isOpen[idx];
    const copy = isOpen.slice();
    copy.splice(idx, 1, value);
    setIsOpen(copy);
  };

  return (
    <div className="container pb-[140px] lg:pb-[160px] 2xl:pb-[260px]">
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
            <div
              id="list"
              key={i}
              data-index={i}
              onMouseEnter={toggleHover}
              className={clsx(
                'relative z-10 h-min overflow-hidden rounded-[40px] font-second-family duration-200 ease-in lg:w-[227px] 2xl:w-[364px]',
                value ? 'border border-white bg-black' : 'bg-white'
              )}
            >
              <div className="flex flex-row items-center justify-center gap-4 px-[62px] py-[42px] text-md font-medium leading-[40px] lg:px-[22px] 2xl:px-[78px] 2xl:py-[41px]">
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
            </div>
          );
        })}
        <div
          className={clsx(
            'absolute left-[calc(50%-1rem)] top-5 z-[0] h-4/5 w-8 bg-white lg:left-5 lg:top-[50px] lg:h-6 lg:w-4/5 xl:left-1/3 xl:w-1/2 2xl:left-12 2xl:w-4/5'
          )}
        />
      </div>
    </div>
  );
};

export default FuckUps;
