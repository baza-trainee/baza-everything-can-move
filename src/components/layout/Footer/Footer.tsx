'use client'

import {ICONS} from '@/constants/icons/icons';
import Image from 'next/image';
import Marquee from './Marquee/Marquee';
import Button from '@/components/ui/Button';
import Link from 'next/link';




const Footer: React.FC = () => {

  
    return (
      <footer className="bg-black">

        <div className='w-full whitespace-nowrap overflow-hidden border-b border-white border-opacity-10'>
            <Marquee />
        </div>

        <div className="container w-full">
            <div className='flex flex-col py-[32px] border-b border-white border-opacity-10 lg:flex-row lg:items-start lg:justify-between'>
                <div className='flex flex-row justify-between items-center lg:justify-start'>
                    <Image
                      src="/assets/images/Logo/logo_baza.png"
                      alt="logo"
                      width={83}
                      height={83}
                      className="grow-0 h-[80px] w-[80px] lg:h-[83px] lg:w-[83px] lg:mr-6 2xl:mr-10"
                    />
                    <div>
                        <div className='flex flex-row items-center gap-2 text-s leading-[18.2px] font-regular pb-2 lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px]'>
                            <ICONS.PHONE/>
                            <a href="tel:+380636286630">+380 63 628 66 30</a>
                        </div>
                        <div className='flex flex-row items-center gap-2 text-s leading-[18.2px] font-regular pb-2 lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px]'>
                            <ICONS.PHONE/> 
                            <a href="tel:+380956621073">+380 95 662 10 73</a>
                        </div>
                        <div className='flex flex-row items-center gap-2 text-s leading-[18.2px] font-regular pb-2 lg:text-m lg:leading-[20.8px] 2xl:text-sm 2xl:leading-[23.4px]'>
                            <ICONS.EMAIL/>
                            <a href="mailto:info@baza-trainee.tech">info@baza-trainee.tech</a>
                        </div>
                    </div>
                </div>

                <ul className='text-sm leading-[23.4px] font-regular list-none text-center mt-[32px] mb-[24px] lg:mt-[0px] lg:text-md lg:leading-[26px] 2xl:text-l 2xl:leading-[31.2px]'>
                    <li className='pb-2 uppercase'><Link href='/team'>Команди</Link></li>
                    <li className='pb-2 uppercase'><Link href='/experience'>Досвід</Link></li>
                    <li className='pb-2 uppercase'><Link href='/projects'>Проєкти</Link></li>
                    <li className='uppercase'><Link href='/future'>Майбутнє</Link></li>
                </ul>
                <div className='flex flex-col'>
                    <Button disabled={false} className='mb-4 border-olga-green-extra hover:bg-olga-green-extra'>Telegram</Button>
                    <Button disabled={false} className='mb-4 border-olga-green-extra hover:bg-olga-green-extra'>LinkedIn</Button>
                    <Button disabled={false} className='border-olga-green-extra hover:bg-olga-green-extra'>Facebook</Button>
                </div>

            </div>
            <div className='text-s leading-[18.2px] font-regular text-center py-[24px] lg:text-m lg:leading-[20.8px] 2xl:py-[32px] 2xl:text-sm 2xl:leading-[23.4px]'>
                <p >Компанія направляє 10% прибутку на підтримку <br className='hidden lg:block 2xl:hidden'/> 59-тої бригади ім.Якова Гандзюка</p>
                <p className='pt-3 lg:pt-1 2xl:pt-3'>Baza Trainee Ukraine 2024 &copy;<br className='block lg:hidden'/>Усі права захищені</p>
            </div>
        </div>
      </footer>
    );
  };
  
  export default Footer; 