'use client'

import React, {useEffect} from 'react'
// import clsx from 'clsx';
import styles from './bubble2d.module.css'
// import useSound from 'use-sound';
// import gradient from '/assets/images/Experience/gradient.png';
// import bubble from '../../../../assets/sounds/bubble.mp3';

const Bubbles2D:React.FC = () => {

    useEffect(() => {
        const wiggleBlock = document.querySelectorAll(`#${styles.wiggleBlock}`);
        const Block2D = document.getElementById('Block2D');
        const canvas = document.getElementsByTagName('canvas');
        const rect = canvas[0].getBoundingClientRect();
        const rectTop = rect.top;
        const rectLeft = rect.left;
        // console.log(rect.left);
        // console.log(rect.top);

        for (let i = 0; i < wiggleBlock.length; i++){
            
            const leftCoord = wiggleBlock[i].getAttribute('data-left');
            const topCoord = wiggleBlock[i].getAttribute('data-top');
            // const leftShadowCoord = (Number(leftCoord)+Number(rectLeft)).toString();
            // const topShadowCoord = (Number(topCoord)+ Number(rectTop)).toString();   
            const leftShadowCoord = (Number(leftCoord)+60).toString();
            const topShadowCoord = (Number(topCoord)+ 60).toString();       
            // console.log(leftCoord);
            // console.log(topCoord);
            // console.log(leftShadowCoord);
            // console.log(topShadowCoord);

            const bubbleStyles = 'bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green delay-75 hover:scale-150 hover:opacity-0 duration-1000 absolute';

            wiggleBlock[i].addEventListener('mouseenter', () => {

                // const shadow = document.createElement('div');
                // shadow.className = `h-[270px] w-[270px] block absolute left-[${leftCoord}px] top-[${topCoord}px] flex justify-center align-center rounded-full opacity-70 bg-radial-gradient z-0`;
                // Block2D?.appendChild(shadow);
                const shadowBox = document.createElement('div');
                shadowBox.className = `h-full w-full block relative bg-olga-green`;//covers all canvas, gets children absolute imgs
                const shadow = document.createElement('img');
                shadow.setAttribute('src', '/assets/images/Experience/gradient.png');
                shadow.className = `h-[206px] w-[206px] block absolute left-[${leftCoord}px] top-[${topCoord}px] flex justify-center align-center rounded-full `;
                // Block2D?.appendChild(shadow);
                document.body.children[1].children[0].children[0].appendChild(shadow);
                // console.log(document.body.children[1].children[0].children[0]);

                setTimeout(() => wiggleBlock[i].className += ' hidden', 300);
                // setTimeout(() => Block2D?.removeChild(shadow), 5000);
            });

             wiggleBlock[i].addEventListener('mouseleave', () => {
                setTimeout(() => {
                    wiggleBlock[i].className = '';
                    wiggleBlock[i].className = bubbleStyles;
                    wiggleBlock[i].className += ` block top-[500px] left-[${leftCoord}px] opacity-0`;
                }, 600);
                setTimeout(() => {
                    wiggleBlock[i].className = '';
                    wiggleBlock[i].className = bubbleStyles;
                    wiggleBlock[i].className += ` block top-[${topCoord}px] left-[${leftCoord}px] opacity-100`;
                }, 1500);
            });
        }            
            
    },[]);



  return (
    <div id='Block2D' className='absolute top-0 left-0'>
         <div id={styles.wiggleBlock} data-left='0' data-top='183' className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green hover:scale-150 hover:opacity-0 duration-400 absolute top-[183px] left-0'>
            <div className="text-xl leading-[72px] font-medium hover:opacity-0 duration-200">{'812+'}</div>
            <div className="text-s leading-[21px] font-regular hover:opacity-0 duration-200">{'учасників'}</div>
        </div> 
        <div id={styles.wiggleBlock} data-left='259' data-top='320' className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green hover:scale-150 hover:opacity-0 duration-400 absolute top-[320px] left-[259px]'>
            <div className="text-xl leading-[72px] font-medium hover:opacity-0 duration-200">{'47+'}</div>
            <div className="text-s leading-[21px] font-regular hover:opacity-0 duration-200">{'живих проектів'}</div>
        </div>
        <div id={styles.wiggleBlock} data-left='414' data-top='5' className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green hover:scale-150 hover:opacity-0 duration-400 absolute top-[5px] left-[414px]'>
            <div className="text-xl leading-[72px] font-medium hover:opacity-0 duration-200">{'102+'}</div>
            <div className="text-s leading-[21px] font-regular hover:opacity-0 duration-200">{'працевлаштовано'}</div>
        </div>
        <div id={styles.wiggleBlock} data-left='708' data-top='217' className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green hover:scale-150 hover:opacity-0 duration-400 absolute top-[217px] left-[708px]'>
            <div className="text-xl leading-[72px] font-medium hover:opacity-0 duration-200">{'14+'}</div>
            <div className="text-s leading-[21px] font-regular hover:opacity-0 duration-200">{'технологій'}</div>
        </div>
        <div id={styles.wiggleBlock} data-left='974'data-top='210' className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green hover:scale-150 hover:opacity-0 duration-400 absolute top-[210px] left-[974px]'>
            <div className="text-xl leading-[72px] font-medium hover:opacity-0 duration-200">{'15+'}</div>
            <div className="text-s leading-[21px] font-regular hover:opacity-0 duration-200">{'бібліотек'}</div>
        </div>
    </div>
  )
}

export default Bubbles2D