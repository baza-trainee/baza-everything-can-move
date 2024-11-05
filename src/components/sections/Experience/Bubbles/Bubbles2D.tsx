import React from 'react'
import SingleBubble2D from './SingleBubble2D'


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





const Bubbles2D:React.FC = ({params}) => {
  return (
    <div className='absolute top-0'>
        {bubbles.map(bubble => (
            <SingleBubble2D key={bubble.content} number={bubble.number} content={bubble.content} design={bubble.design}/>
        ))}
    </div>
  )
}

export default Bubbles2D