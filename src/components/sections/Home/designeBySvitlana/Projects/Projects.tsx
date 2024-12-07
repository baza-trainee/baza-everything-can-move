'use client'; // Додайте це, якщо використовуєте Next.js
import React, { useEffect, useRef, useState } from 'react';
import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import Link from 'next/link';
import Slider from './Slider';

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
    <Background text="02 // Проєкти" bg="s-gray" xl={940} isContainer={true}>
      <section className="relative mb-32 overflow-visible px-0">
        <div className="container">
          <div className="mb-12 items-center justify-between 2xl:flex">
            <div className="title">
              <h2
                ref={headingRef}
                className={`text-xlg uppercase leading-[120%] text-s-title-home transition-all duration-700 lg:text-3xl ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                Проєкти
              </h2>
              <p className="mb-4 text-md uppercase lg:text-lg xl:mb-0">
                baza trainee ukraine
              </p>
            </div>
            <div className="flex flex-col xl:-space-y-7 xl:space-x-80">
              <p className="hidden max-w-[590px] leading-9 text-white xl:block">
                Усі наші проєкти мають різний рівень складності та контентент.
              </p>
              <Link
                href="/projects"
                className="border-sky-500 bg-transparent hover:bg-sky-700 relative flex max-w-48 items-center rounded-full border-2 border-solid px-6 py-2 text-md uppercase text-white transition-all"
              >
                ПЕРЕГЛЯНУТИ
                <div className="absolute -right-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="none"
                    viewBox="0 0 28 28"
                  >
                    <circle cx="14" cy="14" r="14" fill="#8F8DED" />
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.623 7.632c3.332 1.675 7.992 3.304 7.992 3.304m0 0s-1.108 2.789-1.277 8.984m1.277-8.984L8.407 17.37"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Slider />
      </section>
    </Background>
  );
}
