// import CustomLightningScene from '@/components/sections/Future/AnimatedSections/CustomLightingScene';
import FutureSection from '@/components/sections/Future/FutureSection';
import FutureHeroText from '@/components/sections/Future/TextSections/FutureText';
import GalaxyAnimation from '@/components/sections/Future/AnimatedSections/GalaxyAnimation';



function Page() {
  return (
    <section className="text-white">
      <div className="container">
        <FutureSection title='Майбутнє' subtitle='Плануй з нами'  AnimationComponent={GalaxyAnimation       }>
          <FutureHeroText />
        </FutureSection>
      </div>
    </section>
  );
}

export default Page;
