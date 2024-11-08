'use client'

import React, {useRef} from 'react'
import Bubbles3D from './Bubbles3D'
import Bubbles2D from './Bubbles2D'




const BubblesBlock:React.FC = () => {

  // useEffect(() =>{

  // },[])

   const bubblesBlockRef = useRef<HTMLDivElement | null >(null);
  // let params = bubblesBlockRef.current?.getBoundingClientRect();

  // console.log(params.width, params.height);

  return (
    <div ref={bubblesBlockRef} className='relative'>
      <Bubbles3D/>
      <Bubbles2D/>
    </div>
  )
}

export default BubblesBlock