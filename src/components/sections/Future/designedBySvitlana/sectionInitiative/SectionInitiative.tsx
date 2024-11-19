import React from 'react'
import InitiativeAnimation from './InititativeAnimation'
import InitiativeText from './InitiativeText'

function SectionInitiative() {
  return (
    <section>
      <div className="container">
        <h2>розвиток</h2>
        <div className='relative'>
        <InitiativeAnimation/>
     <InitiativeText/>
        </div>
      </div>
      </section>
  )
}

export default SectionInitiative