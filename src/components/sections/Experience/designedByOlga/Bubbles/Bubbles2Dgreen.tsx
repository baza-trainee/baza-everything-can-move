'use client'

import React, {useEffect} from 'react'
// import clsx from 'clsx';
import styles from './bubble2d.module.css'
// import useSound from 'use-sound';
// import bubble from '../../../../assets/sounds/bubble.mp3';


const Bubbles2Dgreen:React.FC = () => {

    useEffect(() => {
        const wiggleBlock = document.querySelectorAll(`#${styles.wiggleBlock}`);
        const Block2Dgreen = document.getElementById('Block2Dgreen');
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
                if(!Block2Dgreen){ return }
                Block2Dgreen.children[i].classList.remove('hidden'); 
                Block2Dgreen.children[i].classList.add('block'); 
            });
             wiggleBlock[i].addEventListener('click', () => {
                if(!Block2Dgreen){ return }
                 setTimeout(() => 
                 {
                    Block2Dgreen.children[i].classList.remove('hidden'); 
                    Block2Dgreen.children[i].classList.add('block'); 
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
                    Block2Dgreen.children[i].classList.remove('block'); 
                    Block2Dgreen.children[i].classList.add('hidden'); 
                }, 5100);
            })
            wiggleBlock[i].addEventListener('mouseleave', () => {
                if(!Block2Dgreen){ return }
                if(wiggleBlock[i].classList.contains('opacity-100')){
                    Block2Dgreen.children[i].classList.remove('block'); 
                    Block2Dgreen.children[i].classList.add('hidden'); 
                }
            });
        }            
    },[]);


  return (
    <div id='Block2Dgreen' className='relative h-[546px] lg:h-[466px] 2xl:h-[526px] w-full px-4 lg:px-6 2xl:px-[120px] mt-[54px] lg:mt-12 2xl:mt-[60px]'>
        <div className='h-[210px] w-[210px] lg:h-[240px] lg:w-[240px] 2xl:h-[350px] 2xl:w-[350px] absolute left-[117px] top-[332px] lg:left-[-50px] lg:top-[84px] 2xl:top-[90px] 2xl:left-[-90px] rounded-full opacity-100 bg-radial-gradien z-10 hidden'/>
        <div className='h-[210px] w-[210px] lg:h-[240px] lg:w-[240px] 2xl:h-[350px] 2xl:w-[350px] absolute left-[19px] top-[127px] lg:left-[108px] lg:top-[272px] 2xl:top-[227px] 2xl:left-[166px] rounded-full opacity-100 bg-radial-gradien z-10 hidden'/>
        <div className='h-[210px] w-[210px] lg:h-[240px] lg:w-[240px] 2xl:h-[350px] 2xl:w-[350px] absolute top-[46px] left-[167px] lg:left-[162px] lg:top-[41px] 2xl:top-[36px] 2xl:left-[441px] rounded-full opacity-100 bg-radial-gradien z-10 hidden'/>

        <div id={styles.wiggleBlock} data-leftsm='162' data-leftlg='0' data-left2xl='0' data-topsm='377' data-toplg='134' data-top2xl='183' className='bg-[#1D1D1C] rounded-full w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] 2xl:w-[164px] 2xl:h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 left-[162px] top-[377px] lg:left-[0px] lg:top-[134px] 2xl:top-[183px] 2xl:left-[0px]'>
        </div> 
        <div id={styles.wiggleBlock} data-leftsm='64' data-topsm='167' data-toplg='322' data-leftlg='158' data-top2xl='320' data-left2xl='259' className='bg-[#1D1D1C] rounded-full w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] 2xl:w-[164px] 2xl:h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 left-[64px] top-[167px] lg:left-[158px] lg:top-[322px] 2xl:top-[320px] 2xl:left-[259px]'>
        </div>
        <div id={styles.wiggleBlock} data-leftsm='212' data-topsm='91' data-toplg='91' data-leftlg='212' data-top2xl='129' data-left2xl='534' className='bg-[#1D1D1C] rounded-full w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] 2xl:w-[164px] 2xl:h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100  top-[91px] left-[212px] lg:left-[212px] lg:top-[91px] 2xl:top-[129px] 2xl:left-[534px]'>
        </div>
    </div>
  )
}

export default Bubbles2Dgreen