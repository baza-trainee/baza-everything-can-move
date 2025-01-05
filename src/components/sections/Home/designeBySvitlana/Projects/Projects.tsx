'use client'; 
import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import Link from 'next/link';
import Slider from './Slider';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';

export default function Projects() {
  return (
    <Background text="02 // Проєкти" bg="s-gray" xl={840} isNoContainer={true}>
      <section className="relative mb-32 overflow-visible px-0">
        <div className="container">
          <div className="mb-12 items-center justify-between 2xl:flex">
            <div className="title">
              <AnimatedTitle title="Проєкти" className="lg-text-[76px]" />
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
