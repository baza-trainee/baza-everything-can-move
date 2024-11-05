'use client'
import { useEffect } from "react"
import clsx from 'clsx';
import styles from './bubble2d.module.css'

interface Bubbles2DProps {
    number: string,
    content: string,
    design: boolean,
    width?: string,
    height?: string,
}


const SingleBubble2D:React.FC<Bubbles2DProps> = ({number, content, design}) => {

  // var positionX = Math.random() * window.innerWidth
  // let positionY = Math.random() * window.innerHeight

  // useEffect(() => {
  //    positionX = 
  //    positionY = 
  // })

  // console.log(positionY);

  return (
    // <div id={design ? styles.dottedOutline : ''} className={clsx('w-[220px] h-[220px] flex items-center justify-center absolute', `top-[${positionY}] left-[${positionX}]`)}>
    <div id={design ? styles.dottedOutline : ''} className={clsx('w-[220px] h-[220px] flex items-center justify-center absolute')}>
        <div className='bg-[#1D1D1C] rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center text-olga-green'>
            <div className="text-xl leading-[72px] font-medium">{number}</div>
            <div className="text-s leading-[21px] font-regular">{content}</div>
        </div>
    </div>
  )
}

export default SingleBubble2D