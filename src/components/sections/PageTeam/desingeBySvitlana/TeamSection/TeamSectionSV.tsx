import Container from '@/components/ui/DesignBySvitlna/Container';
import Header from './components/Header';
import GloboTeam from './components/GloboTeam';
import ListTeam from './components/ListTeam';
import { cn } from '@/lib/utils';

function TeamSectionSV({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        'relative z-10 overflow-hidden border-t border-t-white bg-black pb-[140px] pt-20 lg:pb-[178px] lg:pt-[160px] 2xl:pb-[110px] 2xl:pt-[100px]',
        className
      )}
    >
      <Container>
        <Header />
        <GloboTeam />
      </Container>
      <div className="relative h-[140px] lg:h-0">
        <ListTeam />
      </div>
    </section>
  );
}

export default TeamSectionSV;
