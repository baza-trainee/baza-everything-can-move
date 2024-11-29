'use client'; // Додайте це, якщо використовуєте Next.js
import React, { useEffect, useRef, useState } from 'react';
import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import Link from 'next/link';

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
    <Background text="03 // Досвід" bg="white" xl={840}>
      <section className="mb-32 text-black">
        <div className="flex justify-between">
          <div className="teitle">
            <h2
              ref={headingRef}
              className={`mb-5 text-xlg uppercase leading-[120%] text-s-title-home transition-all duration-700 lg:text-3xl ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              Досвід
            </h2>
            <p className="mb-10 leading-7 lg:max-w-[310px]">
              Тут ви можете дізнатись про наші факапи та досягнення
            </p>
          </div>
          <div className="">
            <p className="text-l lg:max-w-[625px]">
              “Досвід – це назва, яку кожен дає своїм помилкам.”
            </p>
            <br />
            <span className="text-l font-medium"> О. Уайльд</span>
          </div>
        </div>
        <Link
          href="/experience"
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
        <div className="flex items-center">
          <div className="">
            <div className="">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequatur corrupti minima incidunt alias itaque dolor dolores
                nam quam adipisci. Ex exercitationem illo illum eveniet, veniam
                est beatae. Sunt, consequuntur id.
              </p>
            </div>
            <div className="">
              {' '}
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequatur corrupti minima incidunt alias itaque dolor dolores
                nam quam adipisci. Ex exercitationem illo illum eveniet, veniam
                est beatae. Sunt, consequuntur id.
              </p>
            </div>
          </div>
          <div className="">
            {' '}
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur corrupti minima incidunt alias itaque dolor dolores
              nam quam adipisci. Ex exercitationem illo illum eveniet, veniam
              est beatae. Sunt, consequuntur id.
            </p>
          </div>
        </div>
      </section>
    </Background>
  );
}
