'use client';

import { ICONS } from '@/constants/icons/icons';
import SceneLogo from '../Header/Shared/SceneLogo';
import Marquee from './Marquee/Marquee';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { SocialMediaData } from '@/constants/data/SocialMediaData';
import { useDesignStore } from '@/useDesignStore';
import clsx from 'clsx';

const Footer: React.FC = () => {
  const { designType } = useDesignStore();

  return (
    <>
    {designType !== 'initial' && (
    <footer className="bg-black z-[9000]">
      <div
        className={clsx(
          'w-full overflow-hidden whitespace-nowrap border-b border-white',
          designType === 'designByOlga' && 'border-opacity-10'
        )}
      >
        <Marquee />
      </div>

      <div
        className={clsx(
          'container flex w-full flex-col border-b border-white py-[32px] lg:flex-row lg:items-start lg:justify-between',
          designType === 'designByOlga' && 'border-opacity-10 2xl:py-16',
          designType === 'designBySvitlana' &&
            'border-opacity-0 lg:py-10 2xl:border-opacity-100 2xl:py-[60px]'
        )}
      >
        <div
          className={clsx(
            'flex flex-row items-center lg:justify-start',
            designType === 'designByOlga' && 'justify-between',
            designType === 'designBySvitlana' && 'justify-start lg:items-start gap-8'
          )}
          >
          <div className={clsx(designType === 'designBySvitlana' && 'h-[74px] w-[74px] lg:h-[60px] lg:w-[60px] 2xl:h-[84px] 2xl:w-[84px]', designType === 'designByOlga' && 'h-[80px] w-[80px]')}>
            <SceneLogo />
            </div>
          <div
            className={clsx(
              designType === 'designBySvitlana' && 'hidden lg:block'
            )}
          >
            <div
              className={clsx(
                'flex flex-row items-center gap-2 pb-2',
                designType === 'designByOlga' &&
                  'text-s font-regular leading-[18.2px] lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px]',
                designType === 'designBySvitlana' &&
                  'text-m font-regular leading-6 2xl:text-l 2xl:leading-9'
              )}
            >
              <ICONS.PHONE />
              <a href="tel:+380636286630">+380 63 628 66 30</a>
            </div>
            <div
              className={clsx(
                'flex flex-row items-center gap-2 pb-2',
                designType === 'designByOlga' &&
                  'text-s font-regular leading-[18.2px] lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px]',
                designType === 'designBySvitlana' &&
                  'text-m font-regular leading-6 2xl:text-l 2xl:leading-9'
              )}
            >
              <ICONS.PHONE />
              <a href="tel:+380956621073">+380 95 662 10 73</a>
            </div>
            <div
              className={clsx(
                'flex flex-row items-center gap-2 pb-2',
                designType === 'designByOlga' &&
                  'text-s font-regular leading-[18.2px] lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px]',
                designType === 'designBySvitlana' &&
                  'text-m font-regular leading-6 2xl:text-l 2xl:leading-9'
              )}
            >
              <ICONS.EMAIL />
              <a href="mailto:info@baza-trainee.tech">info@baza-trainee.tech</a>
            </div>
          </div>
          <ul
            className={clsx(
              'flex list-none flex-row flex-wrap items-center text-left text-m font-regular leading-6 lg:mt-[0px] lg:text-md lg:leading-[26px] 2xl:text-l 2xl:leading-[31.2px]',
              designType === 'designByOlga' && 'hidden',
              designType === 'designBySvitlana' && 'block lg:hidden'
            )}
          >
            <li className={clsx("w-[50%] py-2 hover:text-s-light-purple", designType === 'designByOlga' && 'hidden', designType === 'designBySvitlana' && 'lg:hidden')}>
              <Link href="/team">Команди</Link>
            </li>
            <li className={clsx("w-[50%] py-2 hover:text-s-light-purple", designType === 'designByOlga' && 'hidden', designType === 'designBySvitlana' && 'lg:hidden')}>
              <Link href="/projects">Проєкти</Link>
            </li>
            <li className={clsx("w-[50%] py-2 hover:text-s-light-purple", designType === 'designByOlga' && 'hidden', designType === 'designBySvitlana' && 'lg:hidden')}>
              <Link href="/experience">Досвід</Link>
            </li>
            <li className={clsx("w-[50%] py-2 hover:text-s-light-purple", designType === 'designByOlga' && 'hidden', designType === 'designBySvitlana' && 'lg:hidden')}>
              <Link href="/future">Майбутнє</Link>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <ul
            className={clsx(
              'inline-block text-left',
              designType === 'designBySvitlana' &&
                'hidden lg:block lg:text-m lg:font-regular lg:leading-6 2xl:text-l 2xl:leading-9',
              designType === 'designByOlga' &&
                'mb-[24px] mt-[32px] list-none text-sm font-regular leading-[23.4px] lg:mt-[0px] lg:text-md lg:leading-[26px] 2xl:text-l 2xl:leading-[31.2px]'
            )}
          >
            <li
              className={clsx(
                designType === 'designByOlga' && 'pb-2 uppercase',
                designType === 'designBySvitlana' &&
                  'capitalize hover:text-s-light-purple lg:pb-2'
              )}
            >
              <Link href="/team">Команди</Link>
            </li>
            <li
              className={clsx(
                designType === 'designByOlga' && 'pb-2 uppercase',
                designType === 'designBySvitlana' &&
                  'capitalize hover:text-s-light-purple lg:pb-2'
              )}
            >
              <Link href="/experience">Досвід</Link>
            </li>
            <li
              className={clsx(
                designType === 'designByOlga' && 'pb-2 uppercase',
                designType === 'designBySvitlana' &&
                  'capitalize hover:text-s-light-purple lg:pb-2'
              )}
            >
              <Link href="/projects">Проєкти</Link>
            </li>
            <li
              className={clsx(
                designType === 'designByOlga' && 'uppercase',
                designType === 'designBySvitlana' &&
                  'capitalize hover:text-s-light-purple lg:pb-2'
              )}
            >
              <Link href="/future">Майбутнє</Link>
            </li>
          </ul>
        </div>
        <div
          className={clsx(
            'flex flex-col',
            designType === 'designBySvitlana' && 'pt-10 lg:pt-0'
          )}
        >
          {SocialMediaData.map((social) => {
            return (
              <Button
                key={social.link}
                disabled={false}
                className={clsx(
                  designType === 'designByOlga' &&
                    'mb-4 border-olga-green-extra uppercase visited:border-olga-green-extra hover:bg-olga-green-extra active:bg-olga-green-extra',
                  designType === 'designBySvitlana' &&
                    'mb-6 text-m font-regular capitalize leading-6 hover:bg-white hover:text-black active:bg-white active:text-black lg:mb-4 lg:px-[43.5px] lg:py-1 2xl:px-[27.5px] 2xl:text-l 2xl:leading-9'
                )}
              >
                <Link href={social.link}>{social.name}</Link>
              </Button>
            );
          })}
        </div>
        <div
          className={clsx(
            'pt-4',
            designType === 'designByOlga' && 'hidden',
            designType === 'designBySvitlana' && 'block lg:hidden'
          )}
        >
          <div className="flex flex-row items-center gap-2 pb-2 text-m font-regular leading-6 2xl:text-l 2xl:leading-9">
            <ICONS.PHONE />
            <a href="tel:+380636286630">+380 63 628 66 30</a>
          </div>
          <div className="flex flex-row items-center gap-2 pb-2 text-m font-regular leading-6 2xl:text-l 2xl:leading-9">
            <ICONS.PHONE />
            <a href="tel:+380956621073">+380 95 662 10 73</a>
          </div>
          <div className="flex flex-row items-center gap-2 pb-2 text-m font-regular leading-6 2xl:text-l 2xl:leading-9">
            <ICONS.EMAIL />
            <a href="mailto:info@baza-trainee.tech">info@baza-trainee.tech</a>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'py-[24px] font-regular',
          designType === 'designBySvitlana' &&
            'border-t border-white text-left text-m font-regular leading-6 lg:text-center 2xl:border-none 2xl:text-md 2xl:leading-s-30',
          designType === 'designByOlga' &&
            'text-center text-s leading-[18.2px] lg:text-m lg:leading-[20.8px] 2xl:py-[32px] 2xl:text-sm 2xl:leading-[23.4px]'
        )}
      >
        <p className="container">
          Компанія направляє 10% прибутку{' '}
          <br
            className={clsx(
              designType === 'designByOlga' && 'hidden',
              designType === 'designBySvitlana' && 'block lg:hidden'
            )}
          />{' '}
          на підтримку{' '}
          <br
            className={clsx(
              designType === 'designByOlga' && 'hidden lg:block 2xl:hidden',
              designType === 'designBySvitlana' && 'hidden'
            )}
          />{' '}
          59-тої бригади ім.Якова Гандзюка
        </p>
        <p className="container pt-3 lg:pt-1 2xl:pt-3">
          Baza Trainee Ukraine 2024 &copy;
          <br
            className={clsx(
              designType === 'designByOlga' && 'block lg:hidden',
              designType === 'designBySvitlana' && 'block lg:hidden'
            )}
          />
          Усі права захищені
        </p>
      </div>
    </footer>
    )}
    </>
  );
};

export default Footer;
