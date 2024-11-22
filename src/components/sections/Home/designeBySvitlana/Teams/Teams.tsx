'use client'; // Додайте це, якщо використовуєте Next.js
import React, { useEffect, useRef, useState } from 'react';
// import Text from './three';
export default function Teams() {
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
    <section className="teams bg-white text-olga-grid">
      <div className="container">
        <h2
          ref={headingRef}
          className={`mb-10 text-3xl leading-[120%] text-s-title-home transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          команди
        </h2>
        {/* <Text/> */}
      </div>
    </section>
  );
}
