import React from 'react'
// import SubTitle from '@/components/ui/SubTitle';
// import SectionTitle from '@/components/ui/SectionTitle';
import BubblesBlock from './Bubbles/BubblesBlock';
import Achievements from './Achievements/Achievements';
import FuckUpSection from './FuckUps/FuckUps';

// export interface ExperienceSectionProps {
//   title: string,
//   subtitle: string
// }

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