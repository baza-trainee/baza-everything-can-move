'use client'

import {ICONS} from '@/constants/icons/icons';
import Image from 'next/image';
import Marquee from './Marquee/Marquee';
import Button from '@/components/ui/Button';
import Link from 'next/link';




const Footer: React.FC = () => {

  
    return (
      <footer className="bg-black">

        <div className='w-full whitespace-nowrap pt-[18px] pb-4 overflow-hidden border-b border-white border-opacity-10'>
            <Marquee />
        </div>

        <div className="container">
            <div className='flex flex-row justify-between py-[60px] border-b border-white border-opacity-10'>
                <div className='flex flex-row justify-start'>
                    <Image
                      src="/assets/images/Logo/logo_baza.jpg"
                      alt="logo"
                      width={83}
                      height={83}
                      className="rounded-full mr-10 grow-0 h-[83px] w-[83px]"
                    />
                    <div className=''>
                        <div className='flex flex-row items-center gap-2 text-l leading-[36px] font-regular pb-2'>
                            <ICONS.PHONE/>
                            <a href="tel:+380636286630">+380 63 628 66 30</a>
                        </div>
                        <div className='flex flex-row items-center gap-2 text-l leading-[36px] font-regular pb-2'>
                            <ICONS.PHONE/> 
                            <a href="tel:+380956621073">+380 95 662 10 73</a>
                        </div>
                        <div className='flex flex-row items-center gap-2 text-l leading-[36px] font-regular pb-2'>
                            <ICONS.EMAIL/>
                            <a href="mailto:info@baza-trainee.tech">info@baza-trainee.tech</a>
                        </div>
                    </div>
                </div>

                <ul className='text-l leading-[36px] font-regular list-none'>
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
            <div className='text-md leading-[30px] font-regular text-center py-[42px]'>
                <p >Компанія направляє 10% прибутку на підтримку 59-тої бригади ім.Якова Гандзюка</p>
                <p className='pt-4'>Baza Trainee Ukraine 2024 &copy; Усі права захищені</p>
            </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;