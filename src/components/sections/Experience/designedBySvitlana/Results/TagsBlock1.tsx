'use client';

import React, { useRef, useEffect } from 'react';

const TagsBlock1 = (props:{hovered:boolean, mouseX:number, mouseY:number}) => {

    const tagsBlock1 = useRef<HTMLDivElement | null >(null);
    const {hovered, mouseX, mouseY} = props

    useEffect(() => {
        if(!tagsBlock1.current) return;
        const randomIndexX = Math.random() > 0.5 ? '': '-';
        const randomIndexY = Math.random() > 0.5 ? '': '-';

        const handleMouseOver = (): void => {
            if(!tagsBlock1.current) return;
            tagsBlock1.current.style.left = `${randomIndexX}${8}%`;
            tagsBlock1.current.style.top = `${randomIndexY}${8}%`;
        }

    if (tagsBlock1) {
        tagsBlock1.current.addEventListener('mouseover', handleMouseOver);
    }
      return () => {
        tagsBlock1.current?.removeEventListener('mouseover', handleMouseOver);
      };
    }, [hovered, mouseX, mouseY])



  return (
    <div  ref={tagsBlock1} className='w-full uppercase h-[355px] absolute duration-1000'>
      <div className='absolute inline-block top-[0px] left-[calc(50%-80px)] rotate-[4deg]'>
        <div className="rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
          Взаємодія
        </div>
      </div>
      <div className="absolute inline-block left-[calc(50%)]  top-[235px] -rotate-[4deg]" >
        <div className="rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
          Лідерство
        </div>
      </div>
      <div className="absolute inline-block left-[calc(50%-150px)]  top-[140px] -rotate-[5deg]" >
        <div className="rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
          Стратегія
        </div>
      </div>
    </div>
  )
}

export default TagsBlock1


