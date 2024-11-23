'use client'

import {ICONS} from '@/constants/icons/icons';
import Image from 'next/image';
import Marquee from './Marquee/Marquee';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { SocialMediaData } from '@/components/data/SocialMediaData';
import { useDesignStore } from '@/useDesignStore';
import clsx from 'clsx';



const Footer: React.FC = () => {

    const { designType } = useDesignStore();
  
    return (
      <footer className="bg-black">

        <div className={clsx('w-full whitespace-nowrap overflow-hidden border-b border-white', designType === 'designByOlga' && 'border-opacity-10')}>
            <Marquee />
        </div>
        
        <div className={clsx('container w-full flex flex-col py-[32px] border-b border-white lg:flex-row lg:items-start lg:justify-between', designType === 'designByOlga' && '2xl:py-16 border-opacity-10', designType === 'designBySvitlana' && 'lg:py-10 2xl:py-[60px] border-opacity-0 2xl:border-opacity-100')}>
            <div className={clsx('flex flex-row items-center lg:justify-start', designType === 'designByOlga' && 'justify-between', designType === 'designBySvitlana' && 'justify-start gap-8')}>
                <Image
                  src="/assets/images/Logo/logo_baza2.png"
                  alt="logo"
                  width={83}
                  height={83}
                  className={clsx("grow-0 h-[83px] w-[83px] lg:h-[64px] lg:w-[64px] 2xl:h-[83px] 2xl:w-[83px]", designType === 'designByOlga' && 'hidden')}
                />
                <Image
                  src="/assets/images/Logo/logo_baza.png"
                  alt="logo"
                  width={83}
                  height={83}
                  className={clsx("grow-0 h-[80px] w-[80px] lg:h-[83px] lg:w-[83px] lg:mr-6 2xl:mr-10", designType === 'designBySvitlana' && 'hidden')}
                />
                <div className={clsx(designType === 'designBySvitlana' && 'hidden lg:block')}>
                    <div className={clsx('flex flex-row items-center gap-2 pb-2', designType === 'designByOlga' && 'text-s leading-[18.2px] font-regular lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px]', designType === 'designBySvitlana' && 'text-m leading-6 font-regular 2xl:text-l 2xl:leading-9')}>
                        <ICONS.PHONE/>
                        <a href="tel:+380636286630">+380 63 628 66 30</a>
                    </div>
                    <div className={clsx('flex flex-row items-center gap-2 pb-2', designType === 'designByOlga' && 'text-s leading-[18.2px] font-regular lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px]', designType === 'designBySvitlana' && 'text-m leading-6 font-regular 2xl:text-l 2xl:leading-9')}>
                        <ICONS.PHONE/> 
                        <a href="tel:+380956621073">+380 95 662 10 73</a>
                    </div>
                    <div className={clsx('flex flex-row items-center gap-2 pb-2', designType === 'designByOlga' && 'text-s leading-[18.2px] font-regular lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px]', designType === 'designBySvitlana' && 'text-m leading-6 font-regular 2xl:text-l 2xl:leading-9')}>
                        <ICONS.EMAIL/>
                        <a href="mailto:info@baza-trainee.tech">info@baza-trainee.tech</a>
                    </div>
                </div>
                <ul className={clsx('flex flex-row items-center flex-wrap text-m leading-6 font-regular list-none lg:mt-[0px] lg:text-md lg:leading-[26px] 2xl:text-l 2xl:leading-[31.2px] text-left', designType === 'designByOlga' && 'hidden', designType === 'designBySvitlana' && 'block lg:hidden')}>
                    <li className='w-[50%] py-2 hover:text-s-light-purple'><Link href='/team'>Команди</Link></li>
                    <li className='w-[50%] py-2 hover:text-s-light-purple'><Link href='/projects'>Проєкти</Link></li>
                    <li className='w-[50%] py-2 hover:text-s-light-purple'><Link href='/experience'>Досвід</Link></li>
                    <li className='w-[50%] py-2 hover:text-s-light-purple'><Link href='/future'>Майбутнє</Link></li>
                </ul>
            </div>
            <div className='text-center'>
                <ul className={clsx('inline-block text-left', designType === 'designBySvitlana' && 'hidden lg:block lg:text-m lg:leading-6 lg:font-regular 2xl:text-l 2xl:leading-9', designType === 'designByOlga' && 'text-sm leading-[23.4px] font-regular list-none mt-[32px] mb-[24px] lg:mt-[0px] lg:text-md lg:leading-[26px] 2xl:text-l 2xl:leading-[31.2px]')}>
                    <li className={clsx(designType === 'designByOlga' && 'pb-2 uppercase', designType === 'designBySvitlana' && 'capitalize lg:pb-2 hover:text-s-light-purple')}><Link href='/team'>Команди</Link></li>
                    <li className={clsx(designType === 'designByOlga' && 'pb-2 uppercase', designType === 'designBySvitlana' && 'capitalize lg:pb-2 hover:text-s-light-purple')}><Link href='/experience'>Досвід</Link></li>
                    <li className={clsx(designType === 'designByOlga' && 'pb-2 uppercase', designType === 'designBySvitlana' && 'capitalize lg:pb-2 hover:text-s-light-purple')}><Link href='/projects'>Проєкти</Link></li>
                    <li className={clsx(designType === 'designByOlga' && 'uppercase', designType === 'designBySvitlana' && 'capitalize lg:pb-2 hover:text-s-light-purple')}><Link href='/future'>Майбутнє</Link></li>
                </ul>

            </div>
            <div className={clsx('flex flex-col', designType === 'designBySvitlana' && 'pt-10 lg:pt-0')}>
                {SocialMediaData.map((social)=>{
                    return(
                    <Button key={social.link} disabled={false} className={clsx(designType === 'designByOlga' && 'mb-4 border-olga-green-extra hover:bg-olga-green-extra active:bg-olga-green-extra visited:border-olga-green-extra uppercase', designType === 'designBySvitlana' && 'mb-6 text-m leading-6 font-regular capitalize hover:bg-white active:bg-white hover:text-black active:text-black lg:py-1 lg:px-[43.5px] lg:mb-4 2xl:text-l 2xl:leading-9 2xl:px-[27.5px]')}>
                        <Link href={social.link}>{social.name}</Link>
                    </Button>
                    )
                })}
            </div>
            <div className={clsx('pt-4', designType === 'designByOlga' && 'hidden', designType === 'designBySvitlana' && 'block lg:hidden')}>
                <div className='flex flex-row items-center gap-2 text-m leading-6 font-regular pb-2 2xl:text-l 2xl:leading-9'>
                    <ICONS.PHONE/>
                    <a href="tel:+380636286630">+380 63 628 66 30</a>
                </div>
                <div className='flex flex-row items-center gap-2 text-m leading-6 font-regular pb-2 2xl:text-l 2xl:leading-9'>
                    <ICONS.PHONE/> 
                    <a href="tel:+380956621073">+380 95 662 10 73</a>
                </div>
                <div className='flex flex-row items-center gap-2 text-m leading-6 font-regular pb-2 2xl:text-l 2xl:leading-9'>
                    <ICONS.EMAIL/>
                    <a href="mailto:info@baza-trainee.tech">info@baza-trainee.tech</a>
                </div>
            </div>
        </div>

        <div className={clsx('font-regular py-[24px] ', designType === 'designBySvitlana' && 'border-t border-white 2xl:border-none text-left lg:text-center text-m leading-6 font-regular 2xl:text-md 2xl:leading-s-30', designType === 'designByOlga' && 'text-center lg:text-m lg:leading-[20.8px] 2xl:py-[32px] 2xl:text-sm 2xl:leading-[23.4px] text-s leading-[18.2px]')}>
            <p className='container'>Компанія направляє 10% прибутку <br className={clsx(designType === 'designByOlga' && 'hidden', designType === 'designBySvitlana' && 'block lg:hidden')}/> на підтримку <br className={clsx(designType === 'designByOlga' && 'hidden lg:block 2xl:hidden', designType === 'designBySvitlana' && 'hidden')}/> 59-тої бригади ім.Якова Гандзюка</p>
            <p className='container pt-3 lg:pt-1 2xl:pt-3'>Baza Trainee Ukraine 2024 &copy;<br className={clsx(designType === 'designByOlga' && 'block lg:hidden', designType === 'designBySvitlana' && 'block lg:hidden')}/>Усі права захищені</p>
        </div>
      </footer>
    );
  };
  
  export default Footer; 