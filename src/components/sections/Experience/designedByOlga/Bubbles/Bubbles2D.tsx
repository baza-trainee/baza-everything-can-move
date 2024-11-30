'use client'

import React, {useEffect} from 'react'
// import clsx from 'clsx';
import styles from './bubble2d.module.css'
// import useSound from 'use-sound';
// import bubble from '../../../../assets/sounds/bubble.mp3';


const Bubbles2D:React.FC = () => {

    useEffect(() => {
        const wiggleBlock = document.querySelectorAll(`#${styles.wiggleBlock}`);
        const Block2D = document.getElementById('Block2D');
        const screenWidth = window.innerWidth;

        for (let i = 0; i < wiggleBlock.length; i++){

            const leftAttributeSm = wiggleBlock[i].getAttribute('data-leftsm')
            const leftAttributeLg = wiggleBlock[i].getAttribute('data-leftlg')
            const leftAttribute2Xl = wiggleBlock[i].getAttribute('data-left2xl')
            const topAttributeSm = wiggleBlock[i].getAttribute('data-topsm')
            const topAttributeLg = wiggleBlock[i].getAttribute('data-toplg')
            const topAttribute2Xl = wiggleBlock[i].getAttribute('data-top2xl')
             const leftCoord = screenWidth > 1440 ? `2xl:left-[${leftAttribute2Xl}px]`: screenWidth > 768 ? `lg:left-[${leftAttributeLg}px]` : `left-[${leftAttributeSm}px]`;
            const topCoord = screenWidth > 1440 ? `2xl:top-[${topAttribute2Xl}px]`: screenWidth > 768 ? `lg:top-[${topAttributeLg}px]` : `top-[${topAttributeSm}px]`;
            const bubbleStyles = 'bg-[#1D1D1C] rounded-full w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] 2xl:w-[164px] 2xl:h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10';

            wiggleBlock[i].addEventListener('mouseenter', () => {
                if(!Block2D){ return }
                Block2D.children[i].classList.remove('hidden'); 
                Block2D.children[i].classList.add('block'); 
            });
             wiggleBlock[i].addEventListener('click', () => {
                if(!Block2D){ return }
                 setTimeout(() => 
                 {
                    Block2D.children[i].classList.remove('hidden'); 
                    Block2D.children[i].classList.add('block'); 
                    wiggleBlock[i].className = '';
                    wiggleBlock[i].className = bubbleStyles;
                    wiggleBlock[i].classList.add('opacity-0', 'top-[500px]', `${leftCoord}`);
                 }, 300);

                setTimeout(() => {                
                    wiggleBlock[i].className = '';
                    wiggleBlock[i].className = bubbleStyles;
                    wiggleBlock[i].classList.remove('opacity-0', 'top-[500px]', `${leftCoord}`);
                    wiggleBlock[i].classList.add('opacity-100', `${topCoord}`, `${leftCoord}`);
                }, 5000);

                setTimeout(() => {
                    Block2D.children[i].classList.remove('block'); 
                    Block2D.children[i].classList.add('hidden'); 
                }, 5100);
            })
            wiggleBlock[i].addEventListener('mouseleave', () => {
                if(!Block2D){ return }
                if(wiggleBlock[i].classList.contains('opacity-100')){
                    Block2D.children[i].classList.remove('block'); 
                    Block2D.children[i].classList.add('hidden'); 
                }
            });
        }            
    },[]);


  return (
    <div id='Block2D' className='relative h-[546px] lg:h-[466px] 2xl:h-[526px] w-full'>
        <div className='h-[210px] w-[210px] lg:h-[240px] lg:w-[240px] 2xl:h-[350px] 2xl:w-[350px] absolute left-[117px] top-[332px] lg:left-[-50px] lg:top-[84px] 2xl:top-[90px] 2xl:left-[-90px] rounded-full opacity-100 bg-radial-gradien z-10 hidden'/>
        <div className='h-[210px] w-[210px] lg:h-[240px] lg:w-[240px] 2xl:h-[350px] 2xl:w-[350px] absolute left-[19px] top-[127px] lg:left-[108px] lg:top-[272px] 2xl:top-[227px] 2xl:left-[166px] rounded-full opacity-100 bg-radial-gradien z-10 hidden'/>
        <div className='h-[210px] w-[210px] lg:h-[240px] lg:w-[240px] 2xl:h-[350px] 2xl:w-[350px] absolute top-[46px] left-[167px] lg:left-[162px] lg:top-[41px] 2xl:top-[36px] 2xl:left-[441px] rounded-full opacity-100 bg-radial-gradien z-10 hidden'/>
        <div className='h-[210px] w-[210px] lg:h-[240px] lg:w-[240px] 2xl:h-[350px] 2xl:w-[350px] absolute top-[397px] left-[3px] lg:left-[480px] lg:top-[-34px] 2xl:top-[145px] 2xl:left-[636px] rounded-full opacity-100 bg-radial-gradien z-10 hidden'/>
        <div className='h-[210px] w-[210px] lg:h-[240px] lg:w-[240px] 2xl:h-[350px] 2xl:w-[350px] absolute left-[-13px] top-[-23px] lg:top-[159px] lg:left-[480px] 2xl:top-[145px] 2xl:left-[909px] rounded-full opacity-100 bg-radial-gradien z-10 hidden'/>

         <div id={styles.wiggleBlock} data-leftsm='162' data-leftlg='0' data-left2xl='0' data-topsm='377' data-toplg='134' data-top2xl='183' className='bg-[#1D1D1C] rounded-full w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] 2xl:w-[164px] 2xl:h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 left-[162px] top-[377px] lg:left-[0px] lg:top-[134px] 2xl:top-[183px] 2xl:left-[0px]'>
            <div className="text-lg leading-s-48 2xl:text-xl 2xl:leading-[72px] font-medium z-50">{'812+'}</div>
            <div className="text-xs leading-[18px] 2xl:text-s 2xl:leading-[21px] font-regular z-50">{'учасників'}</div>
        </div> 
        <div id={styles.wiggleBlock} data-leftsm='64' data-topsm='167' data-toplg='322' data-leftlg='158' data-top2xl='320' data-left2xl='259' className='bg-[#1D1D1C] rounded-full w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] 2xl:w-[164px] 2xl:h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 left-[64px] top-[167px] lg:left-[158px] lg:top-[322px] 2xl:top-[320px] 2xl:left-[259px]'>
            <div className="text-lg leading-s-48 2xl:text-xl 2xl:leading-[72px] font-medium duration-200">{'47+'}</div>
            <div className="text-xs leading-[18px] 2xl:text-s 2xl:leading-[21px] font-regular duration-200">{'живих проектів'}</div>
        </div>
        <div id={styles.wiggleBlock} data-leftsm='212' data-topsm='91' data-toplg='91' data-leftlg='212' data-top2xl='129' data-left2xl='534' className='bg-[#1D1D1C] rounded-full w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] 2xl:w-[164px] 2xl:h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100  top-[91px] left-[212px] lg:left-[212px] lg:top-[91px] 2xl:top-[129px] 2xl:left-[534px]'>
            <div className="text-lg leading-s-48 2xl:text-xl 2xl:leading-[72px] font-medium">{'102+'}</div>
            <div className="text-xs leading-[18px] 2xl:text-s 2xl:leading-[21px] font-regular">{'працевлаштовано'}</div>
        </div>
        <div id={styles.wiggleBlock} data-leftsm='48' data-topsm='442' data-toplg='16' data-leftlg='530' data-top2xl='238' data-left2xl='729' className='bg-[#1D1D1C] rounded-full w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] 2xl:w-[164px] 2xl:h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 top-[442px] left-[48px] lg:left-[530px] lg:top-[16px] 2xl:top-[238px] 2xl:left-[729px]'>
            <div className="text-lg leading-s-48 2xl:text-xl 2xl:leading-[72px] font-medium">{'14+'}</div>
            <div className="text-xs leading-[18px] 2xl:text-s 2xl:leading-[21px]font-regular">{'технологій'}</div>
        </div>
        <div id={styles.wiggleBlock} data-leftsm='32' data-topsm='22' data-toplg='209' data-leftlg='530' data-top2xl='238' data-left2xl='1002' className='bg-[#1D1D1C] rounded-full w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] 2xl:w-[164px] 2xl:h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 left-[32px] top-[22px] lg:top-[209px] lg:left-[530px] 2xl:top-[238px] 2xl:left-[1002px]'>
            <div className="text-lg leading-s-48 2xl:text-xl 2xl:leading-[72px] font-medium">{'15+'}</div>
            <div className="text-xs leading-[18px] 2xl:text-s 2xl:leading-[21px]font-regular">{'бібліотек'}</div>
        </div>
    </div>
  )
}

export default Bubbles2D