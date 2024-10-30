import FutureSection from '@/components/sections/Future/FutureSection';
import FutureHeroText from '@/components/sections/Future/TextSections/FutureText';



function Page() {
  return (
    <section className="text-white">
      <div className="container">
        <FutureSection title='Майбутнє' subtitle='Плануй з нами' >
          <FutureHeroText />
        </FutureSection>
      </div>
    </section>
  );
}

export default Page;
