import SectionTitle from '../../../ui/SectionTitle';
import MainImage from './MainImage';
import SubTitle from '@/components/ui/SubTitle';
import ContainerWithCorners from '@/components/ui/ContainerWithCorners';

function SectionTeam() {
  return (
    <section className="pb-[120px] pt-10">
      <div className="container">
        <ContainerWithCorners className="pb-12">
          <div className="">
            <SectionTitle className="text-xl">команди</SectionTitle>
            <SubTitle className="mt-1">{'Об`єднані ідеєю'}</SubTitle>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
            <MainImage />

            <p className="font-normal text-s leading-[1.3] lg:max-w-[320px] lg:text-m 2xl:max-w-[346px] 2xl:text-sm">
              Об&#39;єднані для створення якісних вебсайтів та мобільних
              застосунків з благодійною метою. Наші команди - це синергія
              спільного знання та ентузіазму. Ми об&#39;єднуємо спеціалістів
              різних напрямків, які разом працюють над кожним проєктом, щоб
              реалізувати важливу ідею.
            </p>
          </div>
        </ContainerWithCorners>
      </div>
    </section>
  );
}

export default SectionTeam;
