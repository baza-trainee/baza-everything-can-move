'use client'; // Додайте це, якщо використовуєте Next.js
import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import Link from 'next/link';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';
// import Scene from './Scene';

export default function Projects() {
  return (
    <Background text="04 // Майбутнє" bg="s-gray" xl={0}>
      <section className="mb-32 flex flex-wrap items-center gap-12 2xl:flex-nowrap">
        <div className="title">
          <AnimatedTitle title="Майбутнє" className="mb-5" />
          <div className="mb-6 items-center gap-8 text-lg uppercase lg:flex">
            <p className="mb-3 lg:mb-0">Ми пишемо</p>
            <p className="border-sky-500 max-w-32 rounded-3xl border-2 border-solid px-6 py-1 text-center text-md">
              сайти
            </p>
          </div>
          <div className="leading-6 lg:lg:w-[575px] lg:leading-9 xl:text-l">
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
        {/* <video
          src="/assets/videos/Baza.mp4" // шлях до твого відеофайлу
          controls
          autoPlay
          loop
          muted
          className="h-[74%] 2xl:w-[50%]"
        /> */}
        
        {/* <Scene /> */}
      </section>
    </Background>
  );
}
