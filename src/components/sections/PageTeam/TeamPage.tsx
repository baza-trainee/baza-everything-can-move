import SectionGeografy from './SectionGeografy/SectionGeografy';
import SectionJoin from './SectionJoin/SectionJoin';
import SectionStatistic from './SectionStatistic/SectionStatistic';
import SectionTeam from './SectionTeam/SectionTeam';

function TeamPage() {
  return (
    <>
      <SectionTeam />
      <SectionStatistic />
      <SectionGeografy />
      <SectionJoin />
    </>
  );
}

export default TeamPage;
