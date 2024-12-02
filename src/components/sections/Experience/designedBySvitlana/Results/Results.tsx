import React from 'react'
import SectionTitle from '@/components/ui/SectionTitle';


const Results = () => {
  return (
    <div className='bg-s-gray relative'>
        <div className='container'>
            <SectionTitle  className='text-left pb-8 pt-[100px] lg:pt-20 2xl:pt-[100px]' secondDesign={true}>Результати </SectionTitle>
            <p className='text-[16px] leading-6 font-regular 2xl:w-[551px]'>Ми тримаємо фокус на уроках та покращенні процесів . Долаючи<br className='lg:block 2xl:hidden'/> труднощі ми розвивали в собі нові навички й покращували вже надбані.</p>
        <div className='absolute -top-[60px] w-[220px] h-[60px] bg-s-gray rounded-t-[20px] lg:left-[100px] 2xl:left-[80%]'/>
        </div>

    </div>
  )
}

export default Results