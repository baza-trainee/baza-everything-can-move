'use client'

import React, {useEffect} from 'react'
// import SingleBubble2D from './SingleBubble2D'
// import clsx from 'clsx';
import styles from './bubble2d.module.css'


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

        console.log(wiggleBlock.length);



},[]);
  return (
    <div className='absolute top-0 left-0 grid grid-cols-5 grid-rows-3 gap-x-28 gap-y-2'>
        {/* {bubbles.map(bubble => (
            <SingleBubble2D key={bubble.content} number={bubble.number} content={bubble.content} design={bubble.design} top={bubble.top} colStart={bubble.colStart} colEnd={bubble.colEnd} rowStart={bubble.rowStart} rowEnd={bubble.rowEnd}/>
        ))} */}

        <div id={styles.wiggleBlock} className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green delay-75'>
            <div className="text-xl leading-[72px] font-medium">{'812+'}</div>
            <div className="text-s leading-[21px] font-regular">{'учасників'}</div>
        </div> 
        <div id={styles.wiggleBlock} className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green'>
            <div className="text-xl leading-[72px] font-medium">{'47+'}</div>
            <div className="text-s leading-[21px] font-regular">{'живих проектів'}</div>
        </div>
        <div id={styles.wiggleBlock} className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green delay-75'>
            <div className="text-xl leading-[72px] font-medium">{'102+'}</div>
            <div className="text-s leading-[21px] font-regular">{'працевлаштовано'}</div>
        </div>
        <div id={styles.wiggleBlock} className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green'>
            <div className="text-xl leading-[72px] font-medium">{'14+'}</div>
            <div className="text-s leading-[21px] font-regular">{'технологій'}</div>
        </div>
        <div id={styles.wiggleBlock} className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green delay-75'>
            <div className="text-xl leading-[72px] font-medium">{'15+'}</div>
            <div className="text-s leading-[21px] font-regular">{'бібліотек'}</div>
        </div>

    </div>
  )
}

export default Bubbles2D