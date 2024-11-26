'use client';// Додайте це, якщо використовуєте Next.js
import Background from '@/components/ui/DesignBySvitlna/BackgroundComponent';
import Link from 'next/link';

export default function Projects() {
  return (
    <Background text="04 // Майбутнє" bg='s-gray'>
          <section className="">
              <div className="container">
                  <h2> pa</h2>
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
      </section>
    </Background>
  );
}
