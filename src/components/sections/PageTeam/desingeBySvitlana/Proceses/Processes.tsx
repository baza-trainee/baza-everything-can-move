'use client';
import Container from '@/components/ui/DesignBySvitlna/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const messagesDiscord = [
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/1.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/2.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/3.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/4.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/5.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/6.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/7.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/8.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/9.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/10.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/11.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/12.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/13.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/14.webp' },
];

export default function Processes() {
  const [currentIndexes, setcurrentIndexes] = useState<number[]>([]);
  const [isAnimation, setIsAnimation] = useState(true);

  useEffect(() => {
    if (!isAnimation) return;
    setcurrentIndexes([]);
    const showMessages = setInterval(
      () =>
        setcurrentIndexes((prev) => {
          if (prev.length < messagesDiscord.length) {
            return [...prev, prev.length];
          } else {
            clearInterval(showMessages);
            setIsAnimation(false);
            setcurrentIndexes([]);
            setTimeout(() => {
              setcurrentIndexes([]);
              setIsAnimation(true);
            }, 4000);
            return prev;
          }
        }),
      3000
    );

    return () => clearInterval(showMessages);
  }, [isAnimation]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsAnimation(false);
        setcurrentIndexes([]);
      } else {
        setcurrentIndexes([]);
        setIsAnimation(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const images = messagesDiscord.map((item, index) => (
    <Image
      src={item.url}
      alt={item.url}
      key={item.url}
      priority={true}
      className={cn(
        'h-auto w-[302px] rounded-xl lg:w-[498px] lg:rounded-[20px]',
        index === 3 && 'w-[202px] lg:w-[360px]',
        index === 6 && 'w-[202px] lg:w-[360px]',
        index === 8 && 'w-[202px] lg:w-[360px]'
      )}
      width={498}
      height={50}
    />
  ));
  return (
    <section className="m-0 -mt-[1px] bg-black pt-[80px]">
      <Container>
        <SectionTitle>Процеси</SectionTitle>
        <div className="max-w-[543px] font-third-family text-m font-regular leading-o-150 2xl:text-l">
          <p className="text-balance">
            На цьому проєкті наша команда отримала свій перший досвід створення
            анімації.
          </p>

          <p className="mt-4">
            Процес був з викликами, перемогами та приємним спілкувнням.
          </p>
        </div>
        <div className="relative -mx-5 mt-[70px] w-[375px] lg:-mx-6 lg:mt-[92px] lg:w-[768px] 2xl:mx-auto 2xl:mt-0 2xl:w-[1198px]">
          <Image
            className="absolute -top-[30px] left-1/2 z-10 h-[60px] w-[60px] -translate-x-1/2 lg:-top-[60px] lg:h-[120px] lg:w-[120px]"
            width={120}
            height={120}
            alt="діскорд іконка"
            src={'/assets/images/PageTeam/DesignSvitlna/discord.png'}
          />
          <div className="relative left-1/2 top-0 z-0 h-[978px] w-[375px] -translate-x-1/2 overflow-hidden lg:h-[1500px] lg:w-full 2xl:h-[940px] 2xl:w-[1198px]">
            <div className="absolute left-1/2 top-0 h-[368px] w-[368px] -translate-x-1/2 rounded-full border-[1px] border-solid border-white lg:h-[1198px] lg:w-[1198px]" />
            <div className="absolute left-1/2 top-6 h-[320px] w-[320px] -translate-x-1/2 rounded-full border-[1px] border-solid border-s-purple lg:top-[80px] lg:h-[1000px] lg:w-[1000px]" />
            <div className="absolute left-1/2 top-[50px] h-[268px] w-[268px] -translate-x-1/2 rounded-full border-[1px] border-solid border-white lg:top-[160px] lg:h-[828px] lg:w-[828px]" />
            <Image
              className="absolute left-1/2 top-[62px] h-[708x] w-[326px] -translate-x-1/2 lg:top-[80px] lg:h-[1232px] lg:w-[568px]"
              width={568}
              height={1232}
              alt="мобільний телефон"
              src={'/assets/images/PageTeam/DesignSvitlna/Phone.png'}
            />
          </div>
          <div className="absolute bottom-[248px] left-1/2 -translate-x-1/2 overflow-hidden lg:bottom-[238px] 2xl:bottom-0">
            <div className="relative flex h-[570px] w-[302px] items-end justify-center bg-black lg:h-[1014px] lg:w-[562px] 2xl:h-[692px]">
              {isAnimation && (
                <ul className="flex w-full flex-col gap-4">
                  {images.map((item, index) => {
                    if (currentIndexes[index] !== index) {
                      return null;
                    }

                    return (
                      <li className="flex justify-center" key={index}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              )}
              {!isAnimation && (
                <AnimatePresence>
                  <motion.svg
                    key="discord icon"
                    className="absolute left-[40%] top-1/2 h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
                    initial={{
                      scale: 0,
                      rotate: 0,
                      x: -50,
                      y: 50,
                    }}
                    animate={{
                      scale: [1, 1.2, 0.8, 1],
                      rotate: [0, 360, 720],
                      x: [0, 30, -30, 0],
                      y: [0, -20, 20, 0],
                    }}
                    transition={{
                      duration: 4,
                      ease: 'easeInOut',
                      times: [0, 0.25, 0.75, 1],
                    }}
                    exit={{
                      scale: 0,
                    }}
                    width="100px"
                    height="100px"
                    viewBox="0 0 512 512"
                    fill="#5865f2"
                    aria-label="Discord"
                    role="img"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m386 137c-24-11-49.5-19-76.3-23.7c-.5 0-1 0-1.2.6c-3.3 5.9-7 13.5-9.5 19.5c-29-4.3-57.5-4.3-85.7 0c-2.6-6.2-6.3-13.7-10-19.5c-.3-.4-.7-.7-1.2-.6c-23 4.6-52.4 13-76 23.7c-.2 0-.4.2-.5.4c-49 73-62 143-55 213c0 .3.2.7.5 1c32 23.6 63 38 93.6 47.3c.5 0 1 0 1.3-.4c7.2-9.8 13.6-20.2 19.2-31.2c.3-.6 0-1.4-.7-1.6c-10-4-20-8.6-29.3-14c-.7-.4-.8-1.5 0-2c2-1.5 4-3 5.8-4.5c.3-.3.8-.3 1.2-.2c61.4 28 128 28 188 0c.4-.2.9-.1 1.2.1c1.9 1.6 3.8 3.1 5.8 4.6c.7.5.6 1.6 0 2c-9.3 5.5-19 10-29.3 14c-.7.3-1 1-.6 1.7c5.6 11 12.1 21.3 19 31c.3.4.8.6 1.3.4c30.6-9.5 61.7-23.8 93.8-47.3c.3-.2.5-.5.5-1c7.8-80.9-13.1-151-55.4-213c0-.2-.3-.4-.5-.4Zm-192 171c-19 0-34-17-34-38c0-21 15-38 34-38c19 0 34 17 34 38c0 21-15 38-34 38zm125 0c-19 0-34-17-34-38c0-21 15-38 34-38c19 0 34 17 34 38c0 21-15 38-34 38z" />
                  </motion.svg>
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
