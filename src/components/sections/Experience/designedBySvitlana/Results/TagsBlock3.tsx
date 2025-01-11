'use client';

import React, { useRef, useEffect } from 'react';

const TagsBlock3 = (props:{hovered:boolean, mouseX:number, mouseY:number}) => {

    const tagsBlock3 = useRef<HTMLDivElement | null >(null);
    const {hovered, mouseX, mouseY} = props

    useEffect(() => {
        if(!tagsBlock3.current) return;
        const randomIndexX = Math.random() > 0.5 ? '': '-';
        const randomIndexY = Math.random() > 0.5 ? '': '-';

        const handleMouseOver = (): void => {
            if(!tagsBlock3.current) return;
            tagsBlock3.current.style.left = `${randomIndexX}${8}%`;
            tagsBlock3.current.style.top = `${randomIndexY}${8}%`;
        }

    if (tagsBlock3) {
        tagsBlock3.current.addEventListener('mouseover', handleMouseOver);
    }
      return () => {
        tagsBlock3.current?.removeEventListener('mouseover', handleMouseOver);
      };
    }, [hovered, mouseX, mouseY])



  return (
    <div  ref={tagsBlock3} className='w-full uppercase h-[355px] absolute duration-1000'> 
              <div className="absolute inline-block translate-x-[30px] translate-y-[210px] rotate-[1.56deg]" >
                <div className="pointer-events-auto rounded border border-white bg-black px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-white duration-300 hover:bg-s-light-purple">
                  Системність
                </div>
              </div>
              <div className="absolute inline-block translate-x-[155px] translate-y-[172px]" >
                <div className="pointer-events-auto rounded bg-white px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-black duration-300 hover:bg-s-light-purple hover:text-white">
                  Емпатія
                </div>
              </div>
              <div className="absolute inline-block translate-x-[5px] translate-y-[45px] -rotate-[12deg]" >
                <div className="pointer-events-auto rounded border border-white bg-black px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-white duration-300 hover:bg-s-light-purple">
                  Аналітика
                </div>
              </div>
              <div className="absolute inline-block translate-x-[175px] translate-y-[125px] rotate-[6deg]" >
                <div className="pointer-events-auto rounded border border-white bg-black px-[24.5px] py-[9.65px] text-md font-medium leading-5 text-white duration-300 hover:bg-s-light-purple">
                  Ефективність
                </div>
              </div>
    </div>
  )
}

export default TagsBlock3


