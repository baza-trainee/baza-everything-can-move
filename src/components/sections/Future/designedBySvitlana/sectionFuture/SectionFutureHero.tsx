import React from 'react'
import GalaxySvitlana from './GalaxySvitlana'


function SectionFutureHero() {
  return (
    <section className='relative 2xl:mt-[26px] h-heightMobile lg:h-heightLg 2xl:h-height2xl'>
      <GalaxySvitlana/>
      <div className="container flex items-center leading-[1.2] h-full">
        <h2 className='text-[80px] ' ><span>плани на </span> <br />Майбутнє</h2>
      </div>
    </section>
  )
}

export default SectionFutureHero