'use client'; // Додайте це, якщо використовуєте Next.js
import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import StrokeText from './Simple3DText';
import { OrbitControls } from '@react-three/drei';

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
    <Background text="01 // Команда" bg="white">
      <section className="teams l pt-2 text-olga-grid">
        <div className="container">
          <h2
            ref={headingRef}
            className={`mb-5 text-xlg leading-[120%] text-s-title-home transition-all duration-700 lg:text-3xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            команди
          </h2>
          <div className="flex flex-wrap gap-12">
            <div className="mb-[222px]">
              <div className="mb-6 inline-block items-center gap-8 text-lg uppercase lg:flex">
                ми об&apos;єднуємо
                <p className="border-sky-500 rounded-2xl border-2 border-solid px-6 py-1 text-md">
                  дизайнерів
                </p>
              </div>
              <p className="mb-5 lg:w-[485px]">
                На початку у нас заходило по 20-25 осіб до команди. Зараз
                оптимальний розмір - до десяти людей:
              </p>
              <ul className="mb-10 gap-8 lg:flex">
                <li>
                  <p className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 bg-s-light-purple"></span>
                    2-3 дизайнера
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 bg-s-light-purple"></span>
                    2-3 фронта
                  </p>
                </li>
                <li>
                  <p className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 bg-s-light-purple"></span>
                    3 тестувальника
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 bg-s-light-purple"></span>
                    & Іван
                  </p>
                </li>
              </ul>
              <Link
                href="/team"
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
            <div className="absolute w-[72%] lg:right-[-10%] h-[50%] transform lg:translate-y-0 translate-y-80">
              <Canvas camera={{ position: [2, 1, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <OrbitControls
                  enableZoom={true}
                  enablePan={true}
                  autoRotate={false}
                />
                <StrokeText
                  text={`Three.js\nStroke text.`}
                  position={[-4, 1, 3]}
                  color="#fff"
                  strokeColor="#5898b8"
                  strokeWidth={0.1}
                  rotation={[0, 0, 0]}
                  scale={[1, 1, 1]}
                />
              </Canvas>
            </div>
          </div>
        </div>
      </section>
    </Background>
  );
}
