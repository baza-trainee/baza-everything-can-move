import React from 'react'
import Bubbles3D from './Bubbles3D'
import Bubbles2D from './Bubbles2D'


const BubblesBlock:React.FC = () => {
  return (
    <div className='relative'>
      <Bubbles3D/>
      <Bubbles2D/>
    </div>
  )
}

export default BubblesBlock