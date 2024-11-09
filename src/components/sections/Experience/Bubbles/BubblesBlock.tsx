'use client'

import React, {useRef} from 'react'
import Bubbles3D from './Bubbles3D'
import Bubbles2D from './Bubbles2D'


const BubblesBlock:React.FC = () => {

  const bubblesBlockRef = useRef<HTMLDivElement | null >(null);

  return (
      <div ref={bubblesBlockRef} className='relative pb-16'>
        <Bubbles3D/>
        <Bubbles2D/>
      </div>
   )
   
}

export default BubblesBlock