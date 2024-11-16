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

             const leftCoord = screenWidth < 375 ? leftAttributeSm: screenWidth < 768 ? leftAttributeLg : leftAttribute2Xl;//change min/max factors
            const topCoord = screenWidth < 375 ? topAttributeSm: screenWidth < 768 ? topAttributeLg : topAttribute2Xl;

            const bubbleStyles = 'bg-[#1D1D1C] rounded-full w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] 2xl:w-[164px] 2xl:h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10';
            const shadowHiddenStyles = ['h-[350px] w-[350px] absolute translate-x-[30px] translate-y-[220px] rounded-full opacity-100 bg-radial-gradient z-0 hidden', 'h-[350px] w-[350px] absolute translate-x-[285px] translate-y-[360px] rounded-full opacity-100 bg-radial-gradient z-0 hidden', 'h-[350px] w-[350px] absolute translate-x-[450px] translate-y-[50px] rounded-full opacity-100 bg-radial-gradient z-0 hidden', 'h-[350px] w-[350px] absolute translate-x-[735px] translate-y-[250px] rounded-full opacity-100 bg-radial-gradient z-0 hidden', 'h-[350px] w-[350px] absolute translate-x-[1000px] translate-y-[250px] rounded-full opacity-100 bg-radial-gradient z-0 hidden'];
            const shadowShownStyles = ['h-[350px] w-[350px] absolute translate-x-[30px] translate-y-[220px] rounded-full opacity-100 bg-radial-gradien z-0 block', 'h-[350px] w-[350px] absolute translate-x-[285px] translate-y-[360px] rounded-full opacity-100 bg-radial-gradien z-0 block', 'h-[350px] w-[350px] absolute translate-x-[450px] translate-y-[50px] rounded-full opacity-100 bg-radial-gradien z-0 block', 'h-[350px] w-[350px] absolute translate-x-[735px] translate-y-[250px] rounded-full opacity-100 bg-radial-gradien z-0 block', 'h-[350px] w-[350px] absolute translate-x-[1000px] translate-y-[250px] rounded-full opacity-100 bg-radial-gradien z-0 block'];

            wiggleBlock[i].addEventListener('mouseenter', () => {
                if(!Block2D){ return }
                Block2D.children[i].className = shadowShownStyles[i];
            });
             wiggleBlock[i].addEventListener('click', () => {
                if(!Block2D){ return }
                 setTimeout(() => 
                 {
                    // debugger;
                   
                    Block2D.children[i].className = shadowShownStyles[i];
                    wiggleBlock[i].className = '';
                    wiggleBlock[i].className = bubbleStyles;
                    wiggleBlock[i].classList.add('opacity-0', 'top-[500px]', `left-[${leftCoord}px]`);
                    // console.log(wiggleBlock[i].classList);
                    //  wiggleBlock[i].classList.remove('absolute');
                    // wiggleBlock[i].classList.add('opacity-0', `${styles.bubbleClickAnimation}`);
                    // // wiggleBlock[i].classList.add('translate-y-10');
                    // console.log(leftCoord);
                    // console.log(topCoord);
                    // console.log(wiggleBlock[i].classList);
                    // wiggleBlock[i].classList.remove('opacity-0','-translate-y-[500px]');
                    //перебрати classList, add translate poacity, then remove, methods add/remove!!!!!
                 }, 300);

                setTimeout(() => {
                    // wiggleBlock[i].classList.remove('opacity-0');
                    //  wiggleBlock[i].classList.add('opacity-100');
                    
                    wiggleBlock[i].className = '';
                    wiggleBlock[i].className = bubbleStyles;
                    wiggleBlock[i].classList.remove('opacity-0', 'top-[500px]');
                    wiggleBlock[i].classList.add('opacity-100', `top-[${topCoord}px]`, `left-[${leftCoord}px]`);
                    // wiggleBlock[i].className += ` opacity-100 top-[${screenWidth < 375 ? topAttributeSm: screenWidth < 768 ? topAttributeLg : topAttribute2Xl}px] left-[${screenWidth < 375 ? leftAttributeSm: screenWidth < 768 ? leftAttributeLg : leftAttribute2Xl}px]`;
                    // wiggleBlock[i].className += ` opacity-100 translate-y-[500px]`;
                    // console.log(wiggleBlock[i].classList);
                }, 5000);

                setTimeout(() => Block2D.children[i].className = shadowHiddenStyles[i], 5100);
            })
            // wiggleBlock[i].addEventListener('mouseleave', () => {
            //     if(!Block2D){ return }
            //     if(wiggleBlock[i].className === `${bubbleStyles} opacity-100 top-[${screenWidth < 375 ? topAttributeSm: screenWidth < 768 ? topAttributeLg : topAttribute2Xl}px] left-[${screenWidth < 375 ? leftAttributeSm: screenWidth < 768 ? leftAttributeLg : leftAttribute2Xl}px]`){
            //         Block2D.children[i].className = shadowHiddenStyles[i];
            //     }
            // });
        }            
    },[]);


  return (
    <div id='Block2D' className='absolute top-0 left-0 right-0 bottom-0 w-full'>
        <div className='h-[350px] w-[350px] absolute translate-x-[30px] translate-y-[220px] rounded-full opacity-100 bg-radial-gradient z-0 hidden'/>
        <div className='h-[350px] w-[350px] absolute translate-x-[285px] translate-y-[360px] rounded-full opacity-100 bg-radial-gradient z-0 hidden'/>
        <div className='h-[350px] w-[350px] absolute translate-x-[450px] translate-y-[50px] rounded-full opacity-100 bg-radial-gradient z-0 hidden'/>
        <div className='h-[350px] w-[350px] absolute translate-x-[735px] translate-y-[250px] rounded-full opacity-100 bg-radial-gradient z-0 hidden'/>
        <div className='h-[350px] w-[350px] absolute translate-x-[1000px] translate-y-[250px] rounded-full opacity-100 bg-radial-gradient z-0 hidden'/>

         <div id={styles.wiggleBlock} data-leftsm='162' data-leftlg='0' data-left2xl='120' data-topsm='377' data-toplg='134' data-top2xl='312' className='bg-[#1D1D1C] rounded-full w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] 2xl:w-[164px] 2xl:h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 left-[162px] top-[377px] lg:left-[0px] lg:top-[134px] 2xl:top-[312px] 2xl:left-[120px]'>
            <div className="text-lg leading-s-48 2xl:text-xl 2xl:leading-[72px] font-medium z-50">{'812+'}</div>
            <div className="text-xs leading-[18px] 2xl:text-s 2xl:leading-[21px] font-regular z-50">{'учасників'}</div>
        </div> 
        <div id={styles.wiggleBlock} data-left='379' data-top='449' className='bg-[#1D1D1C] rounded-full w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] 2xl:w-[164px] 2xl:h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 top-[449px] left-[379px]'>
            <div className="text-lg leading-s-48 2xl:text-xl 2xl:leading-[72px] font-medium duration-200">{'47+'}</div>
            <div className="text-xs leading-[18px] 2xl:text-s 2xl:leading-[21px] font-regular duration-200">{'живих проектів'}</div>
        </div>
        <div id={styles.wiggleBlock} data-left='534' data-top='129' className='bg-[#1D1D1C] rounded-full w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] 2xl:w-[164px] 2xl:h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 top-[129px] left-[534px]'>
            <div className="text-lg leading-s-48 2xl:text-xl 2xl:leading-[72px] font-medium">{'102+'}</div>
            <div className="text-xs leading-[18px] 2xl:text-s 2xl:leading-[21px] font-regular">{'працевлаштовано'}</div>
        </div>
        <div id={styles.wiggleBlock} data-left='828' data-top='346' className='bg-[#1D1D1C] rounded-full w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] 2xl:w-[164px] 2xl:h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 top-[346px] left-[828px]'>
            <div className="text-lg leading-s-48 2xl:text-xl 2xl:leading-[72px] font-medium">{'14+'}</div>
            <div className="text-xs leading-[18px] 2xl:text-s 2xl:leading-[21px]font-regular">{'технологій'}</div>
        </div>
        <div id={styles.wiggleBlock} data-left='1094' data-top='339' className='bg-[#1D1D1C] rounded-full w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] 2xl:w-[164px] 2xl:h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 top-[339px] left-[1094px]'>
            <div className="text-lg leading-s-48 2xl:text-xl 2xl:leading-[72px] font-medium">{'15+'}</div>
            <div className="text-xs leading-[18px] 2xl:text-s 2xl:leading-[21px]font-regular">{'бібліотек'}</div>
        </div>
    </div>
  )
}

export default Bubbles2D