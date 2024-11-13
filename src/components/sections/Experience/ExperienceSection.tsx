import React from 'react'
import BubblesBlock from './Bubbles/BubblesBlock';
import Achievements from './Achievements/Achievements';
import FuckUpSection from './FuckUps/FuckUps';


const ExperienceSection:React.FC = () => {
  return (
    <div>
      <BubblesBlock title={'Досвід'} subtitle={'Найбільша цінність'}/>
      <Achievements title={'Досягнення'} subtitle={'Далі буде...'}/>
      <FuckUpSection title={'Факапи'} subtitle={'І це теж досвід'}/>
    </div>
  )
}

export default ExperienceSection