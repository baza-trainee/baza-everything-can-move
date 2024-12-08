'use client';
import Container from '@/components/ui/DesignBySvitlna/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Processes() {
  const isDesctop = useMediaQuery({ query: '(min-width: 1439.5px)' });
  if (!isDesctop) return null;
  return (
    <section className="m-0 bg-black pt-[78px]">
      <Container>
        <SectionTitle>Процеси</SectionTitle>{' '}
        <div className="max-w-[543px] font-third-family text-l font-regular leading-o-150">
          <p className="text-balance">
            На цьому проєкті наша команда отримала свій перший досвід створення
            анімації.
          </p>

          <p className="mt-4">
            Процес був з викликами, перемогами та приємним спілкувнням.
          </p>
        </div>
        <div className="relative mx-auto w-[1198px]">
          <Image
            className="absolute -top-[60px] left-1/2 z-10 -translate-x-1/2"
            width={120}
            height={120}
            alt="діскорд іконка"
            src={'/assets/images/PageTeam/DesignSvitlna/discord.png'}
          />
          <div className="relative z-0 h-[940px] w-[1198px] overflow-hidden">
            <div className="absolute top-0 h-[1198px] w-[1198px] rounded-full border-[1px] border-solid border-white" />
            <div className="absolute left-1/2 top-[80px] h-[1000px] w-[1000px] -translate-x-1/2 rounded-full border-[1px] border-solid border-s-purple" />
            <div className="absolute left-1/2 top-[160px] h-[828px] w-[828px] -translate-x-1/2 rounded-full border-[1px] border-solid border-white" />
            <Image
              className="absolute left-1/2 top-[80px] -translate-x-1/2"
              width={568}
              height={1232}
              alt="мобільний телефон"
              src={'/assets/images/PageTeam/DesignSvitlna/Phone.png'}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
