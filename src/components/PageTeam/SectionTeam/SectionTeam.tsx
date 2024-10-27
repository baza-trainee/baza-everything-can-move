import Image from 'next/image';
import SectionTitle from '../../ui/SectionTitle';
import MainImage from './MainImage';

function SectionTeam() {
  return (
    <section className="pb-16 pt-10">
      <div className="container">
        <div className="relative pb-12">
          <Image
            src={'/assets/icons/corner.svg'}
            className="absolute bottom-0 left-0"
            width={16}
            height={16}
            alt="corners"
          />
          <Image
            src={'/assets/icons/corner.svg'}
            className="absolute right-0 top-0 rotate-180"
            width={16}
            height={16}
            alt="corners"
          />
          <div className="">
            <SectionTitle className="text-xl">команди</SectionTitle>
            <p className="mt-1 flex items-center gap-2 text-s font-normal leading-normal">
              <span className="h-2 w-2 rounded-full bg-olga-green"></span>
              <span>Об'єднані ідеєю</span>
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between xl:flex-row">
            <MainImage />

            <p className="z-[90] max-w-[346px] text-sm font-normal leading-snug">
              Об'єднані для створення якісних вебсайтів та мобільних застосунків
              з благодійною метою. Наші команди - це синергія спільного знання
              та ентузіазму. Ми об'єднуємо спеціалістів різних напрямків, які
              разом працюють над кожним проєктом, щоб реалізувати важливу ідею.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTeam;
