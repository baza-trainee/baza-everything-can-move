'use client'

import React, {useEffect} from 'react'
// import SingleBubble2D from './SingleBubble2D'
// import clsx from 'clsx';
import styles from './bubble2d.module.css'
// import useSound from 'use-sound';

// import bubble from '../../../../assets/sounds/bubble.mp3';

// const bubbles = [
//     {
//         number: '812+',
//         content: 'учасників',
//         design: true,
//         top: '183px',
//         left: '0px',
//         colStart: '1',
//         colEnd: '2',
//         rowStart: '2',
//         rowEnd: '3',
//     },
//     {
//         number: '47+',
//         content: 'живих проектів',
//         design: false,
//         top: '183px',
//         left: '0px',
//         colStart: '1',
//         colEnd: '2',
//         rowStart: '2',
//         rowEnd: '3',
//     },
//     {
//         number: '102+',
//         content: 'працевлаштовано',
//         design: true,
//         top: '0px',
//         left: '0px',
//         colStart: '1',
//         colEnd: '2',
//         rowStart: '2',
//         rowEnd: '3',
//     },
//     {
//         number: '14+',
//         content: 'технологій',
//         design: false,
//         top: '183px',
//         left: '100px',
//         colStart: '1',
//         colEnd: '2',
//         rowStart: '2',
//         rowEnd: '3',
//     },
//     {
//         number: '15+',
//         content: 'бібліотек',
//         design: true,
//         top: '183px',
//         left: '0px',
//         colStart: '1',
//         colEnd: '2',
//         rowStart: '2',
//         rowEnd: '3',
//     },
// ]

const Bubbles2D:React.FC = () => {

    useEffect(() => {
        const wiggleBlock = document.querySelectorAll(`#${styles.wiggleBlock}`);

        for (let i = 0; i < wiggleBlock.length; i++){
            wiggleBlock[i].addEventListener('mouseenter', () => {
                // const bubbleStyles = wiggleBlock[i].className;
                // const bubbleChild1 = wiggleBlock[i].children[0];
                // const bubbleChild2 = wiggleBlock[i].children[1];
                // const bubbleStyles = wiggleBlock[i].className;
                // console.log(wiggleBlock[i].children[0]);
                // console.log(wiggleBlock[i].children[1]);
                // console.log(bubbleChild1);
                setTimeout(() => wiggleBlock[i].className += ' hidden', 1000);
                // setTimeout(() => wiggleBlock[i].className += ' absolute top-0 left-0',500);

                // console.log(wiggleBlock[i].className);
                // const newDiv = document.createElement('div')
                // newDiv.className += bubbleStyles;
                // newDiv.appendChild(bubbleChild1);
                // newDiv.appendChild(bubbleChild2);
                // console.log(newDiv);

                // console.log(wiggleBlock[i].className);
                // setTimeout(() => wiggleBlock[i].className += ' block', 500);
                // console.log(wiggleBlock[i].className);
            });
            // if(wiggleBlock[i].className.includes('hidden')){
                // console.log(wiggleBlock[i].className)
                // wiggleBlock[i].className += ' block';
            // }
        }
        // for (let i = 0; i < wiggleBlock.length; i++){
        //     if(wiggleBlock[i].className === ' hidden'){
        //         wiggleBlock[i].className += ' block absolute top-0 left-0';
        //     }
        // }               
            
    },[]);



  return (
    <div className='absolute top-0 left-0 grid grid-cols-5 grid-rows-3 gap-x-28 gap-y-2'>
        {/* {bubbles.map(bubble => (
            <SingleBubble2D key={bubble.content} number={bubble.number} content={bubble.content} design={bubble.design} top={bubble.top} colStart={bubble.colStart} colEnd={bubble.colEnd} rowStart={bubble.rowStart} rowEnd={bubble.rowEnd}/>
        ))} */}

        <div id={styles.wiggleBlock} className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green delay-75 hover:scale-150 hover:opacity-0 duration-1000'>
            <div className="text-xl leading-[72px] font-medium hover:opacity-0 duration-1000">{'812+'}</div>
            <div className="text-s leading-[21px] font-regular hover:opacity-0 duration-1000">{'учасників'}</div>
        </div> 
        <div id={styles.wiggleBlock} className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green hover:scale-150 hover:opacity-0 duration-1000'>
            <div className="text-xl leading-[72px] font-medium hover:opacity-0 duration-1000">{'47+'}</div>
            <div className="text-s leading-[21px] font-regular hover:opacity-0 duration-1000">{'живих проектів'}</div>
        </div>
        <div id={styles.wiggleBlock} className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green delay-75 hover:scale-150 hover:opacity-0 duration-1000'>
            <div className="text-xl leading-[72px] font-medium hover:opacity-0 duration-1000">{'102+'}</div>
            <div className="text-s leading-[21px] font-regular hover:opacity-0 duration-1000">{'працевлаштовано'}</div>
        </div>
        <div id={styles.wiggleBlock} className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green hover:scale-150 hover:opacity-0 duration-1000'>
            <div className="text-xl leading-[72px] font-medium hover:opacity-0 duration-1000">{'14+'}</div>
            <div className="text-s leading-[21px] font-regular hover:opacity-0 duration-1000">{'технологій'}</div>
        </div>
        <div id={styles.wiggleBlock} className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green delay-75 hover:scale-150 hover:opacity-0 duration-1000'>
            <div className="text-xl leading-[72px] font-medium hover:opacity-0 duration-1000">{'15+'}</div>
            <div className="text-s leading-[21px] font-regular hover:opacity-0 duration-1000">{'бібліотек'}</div>
        </div>
    </div>
  )
}

export default Bubbles2D