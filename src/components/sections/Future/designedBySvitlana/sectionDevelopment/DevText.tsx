import { TEXTS } from '@/constants/text'
import React from 'react'

function DevText() {
  return (
    <div className='w-full flex flex-col lg:-mt-[246px]  2xl:-mt-[266px] gap-[40px] lg:gap-[80px] 2xl:gap-[120px]'>
      {TEXTS.map((item, idx)=> (
        <div key={item.title} className='w-[345px] lg:self-end 2xl:even:self-end'>
          <h3>{idx +1 + ' // ' + item.title}</h3>
          <p className="font-third-family leading-o-150 text-m 2xl:text-l">{item.text}</p>
        </div>
      ))}
   
  </div>
  )
}

export default DevText