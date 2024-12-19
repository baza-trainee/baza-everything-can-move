'use client'; // Додайте це, якщо використовуєте Next.js
import React, { useEffect, useRef, useState } from 'react';
import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import Link from 'next/link';
// import Scene from './Scene';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Логіка спостереження за елементом
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);
  return (
    <Background text="04 // Майбутнє" bg="s-gray" xl={0}>
      <section className="mb-32 flex items-center gap-12 2xl:flex-nowrap flex-wrap">
        <div className="title">
          <h2
            ref={headingRef}
            className={`mb-5 text-xlg uppercase leading-[120%] text-s-title-home transition-all duration-700 lg:text-3xl font-bold ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            Майбутнє
          </h2>
          <div className="mb-6 items-center gap-8 text-lg uppercase lg:flex">
            <p className='lg:mb-0 mb-3'>Ми пишемо</p>
            <p className="border-sky-500 rounded-3xl border-2 border-solid px-6 py-1 text-md text-center max-w-32">
              сайти
            </p>
          </div>
          <div className="xl:text-l lg:leading-9 leading-6 lg:lg:w-[575px]">
            <p className="mb-4">
              По мірі розвитку наші проєкти ускладнюються, команди професійно
              розвиваються, а ринок вимагає іновацій.
            </p>
            <p className="mb-4">А чом би і не анімація? - подумали ми.</p>
            <p className="mb-10">І реалізували.</p>
          </div>
          <Link
            href="/future"
            className="border-sky-500 hover:bg-sky-700 relative flex max-w-48 rounded-3xl border-2 border-solid bg-s-gray py-2 pb-2 pl-8 text-md uppercase text-white"
          >
            переглянути
            <div className="absolute -right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 28 28"
              >
                <circle cx="14" cy="14" r="14" fill="#8F8DED"></circle>
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.623 7.632c3.332 1.675 7.992 3.304 7.992 3.304m0 0s-1.108 2.789-1.277 8.984m1.277-8.984L8.407 17.37"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
        <video
          src="/assets/videos/Baza.mp4" // шлях до твого відеофайлу
          controls
          autoPlay
          loop
          muted
          className="h-[74%] 2xl:w-[50%]"
        />
         {/* <Scene />  */}
      </section>
    </Background>
  );
}
