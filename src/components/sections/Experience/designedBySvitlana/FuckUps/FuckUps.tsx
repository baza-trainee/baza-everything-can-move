import React, {useState} from 'react'
import SectionTitle from '@/components/ui/SectionTitle';
// import { Meteors } from './Meteors';
import { ICONS_EXPERIENCE } from '@/constants/icons/iconsSrc';
import { fuckups } from '@/constants/fuckups'
import clsx from 'clsx';

const FuckUps = () => {

    const [isOpen, setIsOpen] = useState([false, false, false]);

    const toggleClick = (e:React.SyntheticEvent<HTMLDivElement>) => {
        e.preventDefault();
        const idx = Number(e.currentTarget.dataset.index);
        const value = !isOpen[idx];
        const copy = isOpen.slice()
        copy.splice(idx,1,value)
        setIsOpen(copy);
    }


  return (
    <div className='container'>
        <SectionTitle  className='text-left' secondDesign={true}>Факапи </SectionTitle>
        <p className='text-md leading-s-24 uppercase font-semibold pb-[60px]'>Іван бурчав, що бек треба <br className='2xl:hidden'/> було планувати<br className='hidden 2xl:block'/>  від початку.<br className='2xl:hidden'/>  І він був  правий.</p>
        <div className='flex flex-col lg:flex-row gap-4 relative lg:justify-center 2xl:justify-between'>
            {fuckups.map((fuckup, i) => {
                const IndexIcon = ICONS_EXPERIENCE[i]
                const value = isOpen[i]
                return (
                <div id='list' key={i} data-index={i} onClick={toggleClick} className={clsx('font-second-family rounded-[40px] z-10', value ? 'bg-black border border-white' :'bg-white')}>
                    <div className='text-md leading-[20px] font-medium flex flex-row gap-4 items-center justify-center px-[62px] py-[42px] lg:px-6 2xl:px-[78px] 2xl:py-[41px]'>
                        <IndexIcon className='text-s-purple h-10 w-8 leading-[32px] -rotate-90'/>
                        <p className={clsx('text-lg leading-[32px]', value ? 'text-white' : 'text-s-gray')} >&#47;&#47;</p>
                        <p className={clsx('text-md leading-[20px] 2xl:text-md 2xl:leading-[20px] uppercase', value ? 'text-white' : 'text-s-gray')}>fuck<span className={clsx('text-lg leading-[32px] font-bold', value ? 'text-s-purple' : 'text-s-gray')}>up</span></p>
                    </div>
                    <div className={clsx(value ? 'block text-4 leading-6 font-regular text-center p-[38px] pt-8 border-t' : 'hidden')}>
                        <p>{fuckup.textP1}</p>
                        <br className={clsx(value ? 'block' : 'hidden')}/>
                        <p>{fuckup.textP2}</p>
                    </div>
                </div>
                )   
             })}
            <div className='absolute w-8 top-5 left-[calc(50%-1rem)] h-4/5 lg:w-4/5 lg:h-6 lg:left-5 lg:top-[calc(50%-12px)] xl:left-1/3 xl:w-1/2 2xl:left-12 2xl:w-4/5 bg-white z-[0]'/>
       </div>
    </div>
  )
}

export default FuckUps