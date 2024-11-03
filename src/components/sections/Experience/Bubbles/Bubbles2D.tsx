import React from 'react'
import styles from './bubble2d.module.css'

const bubbles = [
    {
        number: '812+',
        content: 'учасників',
        design: true
    },
    {
        number: '102+',
        content: 'працевлаштовано',
        design: true
    },
    {
        number: '47+',
        content: 'живих проектів',
        design: false
    },
    {
        number: '14+',
        content: 'технологій',
        design: false
    },
    {
        number: '15+',
        content: 'бібліотек',
        design: true
    },
]



const Bubbles2D = () => {
  return (
    <div className='absolute top-0'>
        {bubbles.map(bubble => (
            <SingleBubble2D key={bubble.content} number={bubble.number} content={bubble.content} design={bubble.design}/>
        ))}
    </div>
  )
}

const SingleBubble2D = ({number, content, design}) => {
  return (
    <div id={design ? styles.dottedOutline : ''} className='w-[220px] h-[220px] flex items-center justify-center'>
        <div className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green'>
            <div className="text-xl leading-[72px] font-medium">{number}</div>
            <div className="text-s leading-[21px] font-regular">{content}</div>
        </div>
    </div>
  )
}

export default Bubbles2D