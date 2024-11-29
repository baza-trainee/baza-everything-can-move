import React, {useEffect} from 'react'
import SectionTitle from '@/components/ui/SectionTitle';
// import { Meteors } from './Meteors';
import { fuckups } from '@/constants/fuckups'

const FuckUps = () => {

    useEffect(() => {
        const list = document.getElementById('list')
        //list?.addEventListener('click', (e)=>{
            // console.log(e.target); //to add dataset
        //})
    },[]);

    //const [isOpen, setIsOpen] = useState(false);
    // console.log(isOpen);

  return (
    <div className='container'>
        <SectionTitle  className='text-left' secondDesign={true}>Факапи </SectionTitle>
        <p className='text-md leading-s-24 uppercase font-semibold pb-[60px]'>Іван бурчав, що бек треба <br className='2xl:hidden'/> було планувати<br className='hidden 2xl:block'/>  від початку.<br className='2xl:hidden'/>  І він був  правий.</p>
        <div id='list' className='flex flex-col lg:flex-row gap-4 relative lg:justify-center 2xl:justify-between'>
            {fuckups.map((fuckup, i) => (
                <div key={i} className='bg-white text-md leading-[20px] font-medium font-second-family flex flex-row gap-4 uppercase items-end justify-center px-[64px] py-[42px] lg:px-6 rounded-[40px] 2xl:px-[78px] 2xl:py-[41px] z-10'>
                    <p className='text-s-purple text-lg leading-[32px]'>{fuckup.index}</p>
                    <p className='text-s-gray text-lg leading-[32px] '>//</p>
                    <p className='text-s-gray text-md leading-[20px] 2xl:text-md 2xl:leading-[20px]'>fuck<span className='text-lg leading-[32px] font-bold'>up</span></p>
                    <p className='hidden'>{fuckup.textP1}</p>
                    <p className='hidden'>{fuckup.textP2}</p>
                </div>
            ))}
            <div className='absolute w-8 top-5 left-[calc(50%-1rem)] h-4/5 lg:w-4/5 lg:h-6 lg:left-5 lg:top-[calc(50%-12px)] xl:left-1/3 xl:w-1/2 2xl:left-12 2xl:w-4/5 bg-white z-[0]'/>
       </div>
    </div>
  )
}

export default FuckUps