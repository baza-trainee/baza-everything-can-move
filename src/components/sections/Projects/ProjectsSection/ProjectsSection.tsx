import ContainerWithCorners from '@/components/ui/DesignByOlga/ContainerWithCorners';
import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';
import SubTitle from '@/components/ui/DesignByOlga/SubTitle';
import Slider from './Slider/Slider';
import LinkMoreInfo from '@/components/ui/SwiperFoto/components/LinkMoreInfo';
import MoveLine from '@/components/ui/MoveEverything/MoveLine';

export default function ProjectsSection() {
  return (
    <section className="relative overflow-hidden pb-[100px] pt-[54px] lg:pt-[80px] 2xl:pb-[120px] 2xl:pt-10">
      <MoveLine
        direction="left"
        className="absolute top-[516px] w-max lg:top-[532px] 2xl:top-1/2 2xl:-translate-y-1/2"
        type="infinityText"
        infinityText="baza trainee"
        amountOfText={3}
        duration={30}
        gap={40}
      />
      <div className="container">
        <ContainerWithCorners className="pb-12 pt-10 lg:pb-0 2xl:pb-12 2xl:pt-0">
          <SectionTitle className="mb-3">Проєкти</SectionTitle>
          <SubTitle className="mb-8"> Результати Бази</SubTitle>
          <Slider />
          <LinkMoreInfo
            className="ml-auto mt-8 w-max"
            title="Відкрити всі"
            href="https://baza-trainee.tech/uk/projects"
          />
        </ContainerWithCorners>
      </div>
    </section>
  );
}
