import Container from '@/components/ui/DesignBySvitlna/Container';
import Header from './components/Header';
import GloboTeam from './components/GloboTeam';
import { cn } from '@/lib/utils';
import SliderEmbla from './components/SliderEmbla';

function TeamSectionSV({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        'relative z-10 overflow-hidden bg-black pb-[140px] pt-20 lg:border-t lg:border-t-white lg:pb-[178px] lg:pt-[160px] 2xl:pb-[110px] 2xl:pt-[100px]',
        className
      )}
    >
      <Container>
        <Header />
        <GloboTeam />
      </Container>

      <SliderEmbla />
    </section>
  );
}

export default TeamSectionSV;
