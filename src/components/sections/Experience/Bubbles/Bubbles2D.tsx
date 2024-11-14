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

        for (let i = 0; i < wiggleBlock.length; i++){
            
            const leftCoord = wiggleBlock[i].getAttribute('data-left');
            const topCoord = wiggleBlock[i].getAttribute('data-top');
            const bubbleStyles = 'bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10';
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
                    Block2D.children[i].className = shadowShownStyles[i];
                    wiggleBlock[i].className = '';
                    wiggleBlock[i].className = bubbleStyles;
                    wiggleBlock[i].className += ` opacity-0 top-[500px] left-[${leftCoord}px]`;
                 }, 300);

                setTimeout(() => {
                    wiggleBlock[i].className = '';
                    wiggleBlock[i].className = bubbleStyles;
                    wiggleBlock[i].className += ` opacity-100 top-[${topCoord}px] left-[${leftCoord}px]`;
                }, 5000);

                setTimeout(() => Block2D.children[i].className = shadowHiddenStyles[i], 5100);
            })
            wiggleBlock[i].addEventListener('mouseleave', () => {
                if(!Block2D){ return }
                if(wiggleBlock[i].className === `${bubbleStyles} opacity-100 top-[${topCoord}px] left-[${leftCoord}px]`){
                    Block2D.children[i].className = shadowHiddenStyles[i];
                }
            });
        }            
    },[]);


  return (
    <div id='Block2D' className='absolute top-0 left-0 right-0 bottom-0 w-full'>
        <div className='h-[350px] w-[350px] absolute translate-x-[30px] translate-y-[220px] rounded-full opacity-100 bg-radial-gradient z-0 hidden'/>
        <div className='h-[350px] w-[350px] absolute translate-x-[285px] translate-y-[360px] rounded-full opacity-100 bg-radial-gradient z-0 hidden'/>
        <div className='h-[350px] w-[350px] absolute translate-x-[450px] translate-y-[50px] rounded-full opacity-100 bg-radial-gradient z-0 hidden'/>
        <div className='h-[350px] w-[350px] absolute translate-x-[735px] translate-y-[250px] rounded-full opacity-100 bg-radial-gradient z-0 hidden'/>
        <div className='h-[350px] w-[350px] absolute translate-x-[1000px] translate-y-[250px] rounded-full opacity-100 bg-radial-gradient z-0 hidden'/>

         <div id={styles.wiggleBlock} data-left='120' data-top='312' className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 top-[312px] left-[120px]'>
            <div className="text-xl leading-[72px] font-medium z-50">{'812+'}</div>
            <div className="text-s leading-[21px] font-regular z-50">{'учасників'}</div>
        </div> 
        <div id={styles.wiggleBlock} data-left='379' data-top='449' className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 top-[449px] left-[379px]'>
            <div className="text-xl leading-[72px] font-medium duration-200">{'47+'}</div>
            <div className="text-s leading-[21px] font-regular duration-200">{'живих проектів'}</div>
        </div>
        <div id={styles.wiggleBlock} data-left='534' data-top='129' className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 top-[129px] left-[534px]'>
            <div className="text-xl leading-[72px] font-medium">{'102+'}</div>
            <div className="text-s leading-[21px] font-regular">{'працевлаштовано'}</div>
        </div>
        <div id={styles.wiggleBlock} data-left='828' data-top='346' className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 top-[346px] left-[828px]'>
            <div className="text-xl leading-[72px] font-medium">{'14+'}</div>
            <div className="text-s leading-[21px] font-regular">{'технологій'}</div>
        </div>
        <div id={styles.wiggleBlock} data-left='1094' data-top='339' className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green duration-400 absolute z-10 opacity-100 top-[339px] left-[1094px]'>
            <div className="text-xl leading-[72px] font-medium">{'15+'}</div>
            <div className="text-s leading-[21px] font-regular">{'бібліотек'}</div>
        </div>
    </div>
  )
}

export default Bubbles2D