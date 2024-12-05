import Container from '@/components/ui/DesignBySvitlna/Container';
import Header from './components/Header';
import GloboTeam from './components/GloboTeam';
import ListTeam from './components/ListTeam';
// import { useMediaQuery } from 'react-responsive';
// import TeamSliderMobile from './components/TeamSliderMobile';

function TeamSectionSV() {
  // const isMobile = useMediaQuery({ query: '(max-width: 1439.5px)' });
  return (
    <section className="relative overflow-hidden border-t border-t-white pb-[140px] pt-20 lg:pb-[178px] lg:pt-[160px] 2xl:pb-[110px] 2xl:pt-[100px]">
      <Container className="">
        <Header />
        <GloboTeam />
      </Container>
      {/* {isMobile ? <TeamSliderMobile /> : 
      } */}
      <ListTeam />
    </section>
  );
}

export default TeamSectionSV;
