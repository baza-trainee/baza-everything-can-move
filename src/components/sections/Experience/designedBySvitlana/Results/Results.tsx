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
    // <div onClick={toggleBubbles} className='relative'>
    // <div className='relative'>
      <Background text="РЕЗУЛЬТАТИ" bg="s-gray" xl={0} isContainer={false}>
        {/* <div className='bg-s-gray relative'> */}
        {/* <div className='container'> */}
          <div className='flex justify-start items-center gap-[14px] pb-8 lg:gap-[69px]'>
            <SectionTitle  className='text-left' secondDesign={true}>Результати</SectionTitle>
            <ICONS.VIOLET_WHITE_STAR_SM  className='lg:hidden'/>
            <ICONS.VIOLET_WHITE_STAR_LG  className='hidden lg:block 2xl:hidden'/>
          </div>
          <p className='text-m leading-6 font-regular w-[318px] lg:w-[578px] 2xl:[498px] pb-1 lg:pb-2 2xl:pb-6'>Ми тримаємо фокус на уроках та покращенні процесів. Долаючи<br className='lg:block 2xl:hidden'/> труднощі ми розвивали в собі нові навички й покращували вже надбані.</p>
          <ICONS.VIOLET_WHITE_STAR_LG  className='hidden 2xl:block'/>
          {/* <div className='absolute -top-[60px] w-[220px] h-[60px] bg-s-gray rounded-t-[20px] lg:left-[100px] 2xl:left-[80%]'/> */}
        {/* </div> */}
        {/* <Bubbles3D isOpen={isOpen}/> */}

      {/* </div> */}  
      </Background>
    // </div>
  )
}

export default Results