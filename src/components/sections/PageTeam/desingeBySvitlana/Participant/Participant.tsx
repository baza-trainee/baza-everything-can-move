import Container from '@/components/ui/DesignBySvitlna/Container';

import { useMediaQuery } from 'react-responsive';
import DesctopLyout from './Layouts/DesctopLyout';
import MobileLayout from './Layouts/MobileLayout';

function Participant() {
  const isMobile = useMediaQuery({ query: '(max-width: 767.5px)' });

  return (
    <section className="py-[80px] lg:py-[220px] 2xl:py-[156px]">
      <Container>{isMobile ? <MobileLayout /> : <DesctopLyout />}</Container>
    </section>
  );
}

export default Participant;
