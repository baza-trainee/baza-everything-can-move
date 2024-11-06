import FutureSection from '@/components/sections/Future/FutureSection';
import FutureHeroText from '@/components/sections/Future/TextSections/FutureText';
import GalaxyAnimation from '@/components/sections/Future/AnimatedSections/GalaxyAnimation';
import BrainAnimation from '../../components/sections/Future/AnimatedSections/BrainAnimation';
import DevelopmentText from '@/components/sections/Future/TextSections/DevelopmentText';
import PlanText from '@/components/sections/Future/TextSections/PlanText';
import PlanAnimation from '@/components/sections/Future/AnimatedSections/PlanAnimation';



function Page() {
  return (
    <section className="text-white">
      <div className="container">
        <FutureSection title='Майбутнє' subtitle='Плануй з нами'  AnimationComponent={GalaxyAnimation}>
          <FutureHeroText />
        </FutureSection>
        <FutureSection title='Наші плани' subtitle='Планування це База'  AnimationComponent={PlanAnimation}>
          <PlanText/>
        </FutureSection>
        <FutureSection title='Розвиток' subtitle='Розвивайся з Базою'  AnimationComponent={BrainAnimation}>
          <DevelopmentText/>
        </FutureSection>
      </div>
    </section>
  );
}

export default Page;
