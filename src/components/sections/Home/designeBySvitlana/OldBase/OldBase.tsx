'use client'; // Додайте це, якщо використовуєте Next.js
import React, { useEffect, useRef, useState } from 'react';
export default function OldBase() {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // 50% видимості для активації
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
    <section className="old-base-section pb-[230px] pt-[114px]">
      <div className="container relative flex justify-end">
        <div className="text lg:max-w-[500px]">
          <h2
            ref={headingRef}
            className={`text-s-title-home mb-10 text-3xl leading-[120%] transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            старт
          </h2>
          <div className="z-10 max-w-[320px] font-third-family text-m font-regular leading-o-150 2xl:max-w-[490px] 2xl:text-l">
            <p className="text-balance">
              Ми почали робити перші проєкти в квітні 2023р. з метою підтримки й
              професійного розвитку джунів та світчерів до сфери IT.
            </p>
            <p className="mt-4">
              Зараз ми пишемо
              <span className="font-medium uppercase 2xl:font-semibold">
                внутрішні і зовнішні
              </span>{' '}
              проєкти як для себе, так і для наших партнерів.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
