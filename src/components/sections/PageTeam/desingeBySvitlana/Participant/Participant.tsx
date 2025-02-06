import Container from '@/components/ui/DesignBySvitlna/Container';

import { useMediaQuery } from 'react-responsive';
import DesctopLyout from './Layouts/DesctopLyout';
import MobileLayout from './Layouts/MobileLayout';
import { cn } from '@/lib/utils';
type ParticipantProps = {
  className?: string;
};

function Participant({ className }: ParticipantProps) {
  const isMobile = useMediaQuery({ query: '(max-width: 767.5px)' });

  return (
    <section
      className={cn('py-[80px] lg:py-[220px] 2xl:py-[156px]', className)}
    >
      {isMobile && (
        <Container>
          <MobileLayout />
        </Container>
      )}
      {!isMobile && (
        <div
          className={cn(
            'ml-auto mr-auto w-full lg:max-w-[1440px] lg:pl-6 2xl:max-w-[1920px] 2xl:px-0'
          )}
        >
          <DesctopLyout />
        </div>
      )}
    </section>
  );
}

export default Participant;
