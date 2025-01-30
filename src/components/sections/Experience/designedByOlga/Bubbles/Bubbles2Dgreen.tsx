'use client'

import React, {useEffect} from 'react'
// import clsx from 'clsx';
import styles from './bubble2d.module.css'
// import useSound from 'use-sound';
// import bubble from '../../../../assets/sounds/bubble.mp3';


const Bubbles2Dgreen:React.FC = () => {

    useEffect(() => {
        const bubbles = document.querySelectorAll(`#${styles.bubbles}`);
        const Block2Dgreen = document.getElementById('Block2Dgreen');
        const screenWidth = window.innerWidth;

        for (let i = 0; i < bubbles.length; i++){

            const leftAttributeSm = bubbles[i].getAttribute('data-leftsm')
            const leftAttributeLg = bubbles[i].getAttribute('data-leftlg')
            const leftAttribute2Xl = bubbles[i].getAttribute('data-left2xl')
            const topAttributeSm = bubbles[i].getAttribute('data-topsm')
            const topAttributeLg = bubbles[i].getAttribute('data-toplg')
            const topAttribute2Xl = bubbles[i].getAttribute('data-top2xl')
            const leftCoord = screenWidth > 1440 ? `2xl:left-[${leftAttribute2Xl}px]`: screenWidth > 768 ? `lg:left-[${leftAttributeLg}px]` : `left-[${leftAttributeSm}px]`;
            const topCoord = screenWidth > 1440 ? `2xl:top-[${topAttribute2Xl}px]`: screenWidth > 768 ? `lg:top-[${topAttributeLg}px]` : `top-[${topAttributeSm}px]`;
            const bubbleStyles = 'bg-[#c3ff0a] rounded-full w-[100px] h-[100px] 2xl:w-[124px] 2xl:h-[124px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10';
            setTimeout(() => {
                bubbles[i].className = '';
                bubbles[i].className = bubbleStyles;
                bubbles[i].classList.add('top-[700px]', `${leftCoord}`);
                Block2Dgreen?.classList.add('translate-x-[-15%]', 'transition-all');
            }, 1);
            setTimeout(() => {
                bubbles[i].classList.remove('top-[700px]');
                bubbles[i].classList.add('opacity-100', `${topCoord}`, `${leftCoord}`, 'duration-5000', 'transition-all', 'ease-in-out', 'animate-wiggle');
                Block2Dgreen?.classList.remove('translate-x-[-15%]');
                Block2Dgreen?.classList.add('animate-x-axis', 'transition-all');
            }, 3900);

            bubbles[i].addEventListener('mouseenter', () => {
                if(!Block2Dgreen){ return }
                Block2Dgreen.children[i].classList.remove('hidden'); 
                Block2Dgreen.children[i].classList.add('block'); 
            });
             bubbles[i].addEventListener('click', () => {
                if(!Block2Dgreen){ return }
                setTimeout(() => 
                {
                    Block2Dgreen.children[i].classList.remove('hidden'); 
                    Block2Dgreen.children[i].classList.add('block'); 
                    bubbles[i].className = '';
                    bubbles[i].className = bubbleStyles;
                    bubbles[i].classList.add(`${topCoord}`, `${leftCoord}`, 'opacity-0');
                 }, 0);
                 setTimeout(() => 
                 {
                    bubbles[i].classList.remove(`${topCoord}`);
                    bubbles[i].classList.add('top-[700px]');
                 }, 1000);

                setTimeout(() => {                
                    bubbles[i].className = '';
                    bubbles[i].className = bubbleStyles;
                    bubbles[i].classList.remove('top-[700px]', `${leftCoord}`);
                    bubbles[i].classList.add('opacity-100', `${topCoord}`, `${leftCoord}`, 'duration-5000', 'transition-all', 'ease-in-out');
                }, 5000);

                setTimeout(() => {
                    Block2Dgreen.children[i].classList.remove('block'); 
                    Block2Dgreen.children[i].classList.add('hidden'); 
                }, 5100);
            })
            bubbles[i].addEventListener('mouseleave', () => {
                if(!Block2Dgreen){ return }
                if(bubbles[i].classList.contains('opacity-100')){
                    Block2Dgreen.children[i].classList.remove('block'); 
                    Block2Dgreen.children[i].classList.add('hidden'); 
                }
            });
        }            
    },[]);


  return (
    <div id='Block2Dgreen' className='absolute bottom-[100px] 2xl:bottom-[50px] h-[546px] lg:h-[466px] 2xl:h-[526px] w-full px-4 lg:px-6 2xl:px-[120px]'>
        <div className='h-[200px] w-[200px] lg:h-[250px] lg:w-[250px] 2xl:h-[280px] 2xl:w-[280px] absolute left-[110px] -top-[55px] lg:left-[55px] lg:-top-[70px] 2xl:top-[75px] 2xl:left-[205px] rounded-full opacity-100 bg-radial-gradien z-10'/>
        <div className='h-[200px] w-[200px] lg:h-[250px] lg:w-[250px] 2xl:h-[280px] 2xl:w-[280px] absolute -left-[20px] top-[260px] lg:left-[325px] lg:top-[5px] 2xl:-top-[15px] 2xl:left-[650px] rounded-full opacity-100 bg-radial-gradien z-10'/>
        <div className='h-[200px] w-[200px] lg:h-[250px] lg:w-[250px] 2xl:h-[280px] 2xl:w-[280px] absolute top-[220px] left-[130px] lg:left-[325px] lg:top-[262px] 2xl:top-[260px] 2xl:left-[500px] rounded-full opacity-100 bg-radial-gradien z-10'/>

        <div id={styles.bubbles} data-leftsm='162' data-leftlg='124' data-left2xl='290' data-topsm='0' data-toplg='0' data-top2xl='166' className='bg-[#c3ff0a] rounded-full w-[100px] h-[100px] 2xl:w-[124px] 2xl:h-[124px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 left-[162px] top-[0px] lg:left-[124px] lg:top-[0px] 2xl:top-[146px] 2xl:left-[290px]'>
        </div> 
        <div id={styles.bubbles} data-leftsm='32' data-topsm='315' data-toplg='67' data-leftlg='398' data-top2xl='62' data-left2xl='730' className='bg-[#c3ff0a] rounded-full w-[100px] h-[100px] 2xl:w-[124px] 2xl:h-[124px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 left-[32px] top-[315px] lg:left-[398px] lg:top-[67px] 2xl:top-[62px] 2xl:left-[730px]'>
        </div>
        <div id={styles.bubbles} data-leftsm='187' data-topsm='265' data-toplg='332' data-leftlg='398' data-top2xl='332' data-left2xl='584' className='bg-[#c3ff0a] rounded-full w-[100px] h-[100px] 2xl:w-[124px] 2xl:h-[124px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100  top-[265px] left-[187px] lg:left-[398px] lg:top-[332px] 2xl:top-[332px] 2xl:left-[584px]'>
        </div>
    </div>
  )
}

export default Bubbles2Dgreen