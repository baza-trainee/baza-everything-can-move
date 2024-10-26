import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';

function SectionTeam() {
  return (
    <section className="pb-16 pt-10">
      <div className="container">
        <div className="flex-none">
          <SectionTitle>команди</SectionTitle>
          <p className="mt-1 flex items-center gap-2 text-s font-normal leading-normal">
            <span className="h-2 w-2 rounded-full bg-olga-green"></span>
            <span>Обєднані ідеєю</span>
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-[836px] bg-white">
            <Image
              width={835}
              height={540}
              alt="bg gradient"
              src={'/assets/images/PageTeam/gradient.png'}
            />
          </div>
          <p className="max-w-[346px] text-sm font-normal leading-snug">
            Обєдні для створення якісних вебсайтів та мобільних застосунків з
            благодійною метою. Наші команди це синергія спільного знання та
            ентузіазму. Ми обєднуємо спеціалістів різних напрямків, які разом
            працюють над кожним проєктом, щоб реалізувати важливу ідею.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionTeam;
