import React from 'react'


export interface SubtitleProps {
  children: React.ReactNode,
}

function SectionSubtitle({children}: SubtitleProps) {
  return (
    <div className="flex items-center gap-1.5 text-s font-normal leading-normal">
      <span className='h-2 w-2 rounded-full bg-olga-green'></span>
      <h3 className='leading-o-150 text-s text-white relative pl-[14px]'>{children}</h3>
    </div>
  )
}

export default SectionSubtitle