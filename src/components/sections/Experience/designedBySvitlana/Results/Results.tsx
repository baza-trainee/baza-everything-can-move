'use client'

// import { useEffect, useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
// import Bubbles3D from './Bubbles3D';
import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import { ICONS } from '@/constants/icons/icons';
// import clsx from 'clsx';

const Results = () => {

  //  const [isOpen, setIsOpen] = useState<boolean>(false);
// 
  //  function toggleBubbles(){
  //    setIsOpen(!isOpen);
  //  }
// console.log(isOpen);
  // useEffect(() => {
    // const blockHeight = document.body.children[1].children[0].children[0].children[3]
    // console.log(document.body.children[1].children[0].children[0].children[3].classList);
  // },[]);
  
  return (
    <Background text="РЕЗУЛЬТАТИ" bg="s-gray" xl={0} isContainer={false} className='2xl:relative'>
      <div className='flex flex-col 2xl:flex-row'>
        <div>
          <div className='flex justify-start items-center gap-[14px] pb-8 lg:gap-[69px] 2xl:gap-[3px] pt-[22px] lg:pt-[10px] 2xl:pt-[131px]'>
            <SectionTitle  className='text-left' secondDesign={true}>Результати</SectionTitle>
            <ICONS.VIOLET_WHITE_STAR_SM className='lg:hidden'/>
            <ICONS.VIOLET_WHITE_STAR_LG className='hidden lg:block 2xl:hidden'/>
            <ICONS.WHITE_VIOLET_STAR_2XL className='hidden 2xl:block 2xl:translate-y-[-47px]'/>
          </div>
          <div className='2xl:flex 2xl:flex-row 2xl:items-center 2xl:relative'>
            <p className='text-m leading-6 font-regular w-[318px] lg:w-[578px] 2xl:w-[498px] pb-1 lg:pb-2 2xl:pb-6 2xl:text-l 2xl:leading-s-36 2xl:tracking-tighter'>Ми тримаємо фокус на уроках та покращенні процесів. Долаючи<br className='lg:block 2xl:hidden'/> труднощі ми розвивали в собі нові навички й покращували вже надбані.</p>
            <ICONS.ARROW_2XL className='hidden 2xl:block 2xl:translate-x-[-170px] 2xl:translate-y-[-15px]'/>
          </div>
          <ICONS.VIOLET_WHITE_STAR_LG  className='hidden 2xl:block'/>
          <div className='flex flex-row pt-1 lg:pt-2 pl-10 gap-[52px] lg:pl-[110px] lg:gap-[112px] 2xl:hidden'>
            <ICONS.WHITE_VIOLET_STAR_SM className='lg:hidden'/>
            <ICONS.ARROW_SM className='lg:hidden'/>
            <ICONS.WHITE_VIOLET_STAR_LG className='hidden lg:block 2xl:hidden'/>
            <ICONS.ARROW_LG className='hidden lg:block 2xl:hidden'/>
          </div>
        </div>
        <div className=''>
          <div className=''>
            <div><div>Взаємодія</div></div>
            <div><div>Лідерство</div></div>
            <div><div>Стратегія</div></div>
          </div>
          <div className=''>
            <div><div>Гнучкість</div></div>
            <div><div>Колаборація</div></div>
            <div><div>Креативність</div></div>
          </div>
          <div className=''>
            <div><div>Системність</div></div>
            <div><div>Емпатія</div></div>
            <div><div>Аналітика</div></div>
            <div><div>Ефективність</div></div>
          </div>
        </div>
      </div>
    </Background>
  )
}

export default Results