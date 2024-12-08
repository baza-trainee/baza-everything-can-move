import Container from '@/components/ui/DesignBySvitlna/Container';

import { useMediaQuery } from 'react-responsive';
import DesctopLyout from './Layouts/DesctopLyout';
import MobileLayout from './Layouts/MobileLayout';
import { FC } from 'react';
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
        <Container className="lg:max-w-[1440px] lg:px-0 lg:pl-6 2xl:max-w-[1920px] 2xl:px-0 2xl:pl-20">
          <DesctopLyout />
        </Container>
      )}
    </section>
  );
}

export default Participant;
