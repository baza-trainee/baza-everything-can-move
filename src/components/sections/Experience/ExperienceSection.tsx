import React from 'react'
import BubblesBlock from './Bubbles/BubblesBlock';
import Achievements from './Achievements/Achievements';
import FuckUpSection from './FuckUps/FuckUps';


const ExperienceSection:React.FC = () => {
  return (
    <div className='bg-olga-bg'>
      <BubblesBlock title={'Досвід'} subtitle={'Найбільша цінність'}/>
      <Achievements title={'Досягнення'} subtitle={'Далі буде...'}/>
      <FuckUpSection title={'Факапи'} subtitle={'І це теж досвід'}/>
      <div className='relative h-[25vh] -translate-y-[187%]'><p className='sticky uppercase text-l leading-[31.2px] font-regular bg-olga-btn-menu py-10 px-[124px] my-16'>Baza Trainee UKRAINE це синергія ініціативності та ентузіазму. Віримо, що найм джуніорів — це не лише інвестиція в майбутнє компанії, а й можливість ростити власних професіоналів з індивідуальним підходом та свіжим баченням.</p></div>
    </div>
  )
}

export default ExperienceSection