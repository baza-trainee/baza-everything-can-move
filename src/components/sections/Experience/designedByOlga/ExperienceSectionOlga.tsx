import React from 'react'
import BubblesBlock from './Bubbles/BubblesBlock';
import Achievements from './Achievements/Achievements';
import FuckUpSection from './FuckUps/FuckUps';


const ExperienceSectionOlga:React.FC = () => {
  return (
    <div className='bg-olga-bg'>
      <BubblesBlock title={'Досвід'} subtitle={'Найбільша цінність'}/>
      <Achievements title={'Досягнення'} subtitle={'Далі буде...'}/>
      <FuckUpSection title={'Факапи'} subtitle={'І це теж досвід'}/>
    </div>
  )
}

export default ExperienceSectionOlga