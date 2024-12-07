'use client'

import { useEffect, useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Bubbles3D from './Bubbles3D';
import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
// import clsx from 'clsx';

const Results = () => {

   const [isOpen, setIsOpen] = useState<boolean>(false);

   function toggleBubbles(){
     setIsOpen(!isOpen);
    //  document.body.children[1].children[0].children[0].children[3].classList.toggle('hidden');
     // document.body.children[1].children[0].children[0].children[3].classList.toggle('block');
     // document.body.children[1].children[0].children[0].children[3].classList.toggle('animate-pulse');
     // document.body.children[1].children[0].children[0].children[3].classList.toggle('transition-transform');
     // document.body.children[1].children[0].children[0].children[3].classList.toggle('duration-200');
     // document.body.children[1].children[0].children[0].children[3].classList.toggle('ease-in-out');
   }
console.log(isOpen);
  useEffect(() => {
    // const blockHeight = document.body.children[1].children[0].children[0].children[3]
    // console.log(document.body.children[1].children[0].children[0].children[3].classList);

  },[]);
  
  return (
    <div onClick={toggleBubbles} className='relative'>
      <Background text="РЕЗУЛЬТАТИ" bg="s-gray" xl={0}>
        {/* <div className='bg-s-gray relative'> */}
        {/* <div className='container'> */}
          <SectionTitle  className='text-left pb-8' secondDesign={true}>Результати </SectionTitle>
          <p className='text-[16px] leading-6 font-regular 2xl:w-[551px]'>Ми тримаємо фокус на уроках та покращенні процесів . Долаючи<br className='lg:block 2xl:hidden'/> труднощі ми розвивали в собі нові навички й покращували вже надбані.</p>
          <div className='absolute -top-[60px] w-[220px] h-[60px] bg-s-gray rounded-t-[20px] lg:left-[100px] 2xl:left-[80%]'/>
        {/* </div> */}
        <Bubbles3D isOpen={isOpen}/>

      {/* </div> */}
      
    
      </Background>
    </div>
  )
}

export default Results