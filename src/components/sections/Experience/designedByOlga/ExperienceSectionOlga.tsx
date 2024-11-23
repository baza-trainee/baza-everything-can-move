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
      {/* <div className='xl:sticky xl:bottom-0 xl:pb-[300px]'><p className='lg:uppercase text-sm 2xl:text-l leading-[23.4px] 2xl:leading-[31.2px] font-regular bg-olga-btn-menu py-10 lg:py-8 2xl:py-10 px-4 lg:px-6 2xl:px-[124px] my-16'>Baza Trainee UKRAINE це синергія ініціативності та ентузіазму. Віримо, що найм джуніорів — це не лише інвестиція в майбутнє компанії, а й можливість ростити власних професіоналів з індивідуальним підходом та свіжим баченням.</p></div> */}
    </div>
  )
}

export default ExperienceSectionOlga