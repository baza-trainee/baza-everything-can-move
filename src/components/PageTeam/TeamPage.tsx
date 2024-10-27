import SectionGeografy from './SectionGeografy';
import SectionJoin from './SectionJoin';
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
