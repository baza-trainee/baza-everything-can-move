'use client'; // Додайте це, якщо використовуєте Next.js
import Image from 'next/image';
import './style.css';

export default function OldBase() {
  return (
    <section className="oldBase pb-[59px] pt-[114px]">
      <div className="container relative">
        <Image
          className="absolute bottom-0 left-15"
          alt="Низ"
          width={16}
          height={16}
          src={'/assets/images/TemSection/corner.svg'}
        />
        <Image
          className="absolute right-12 top-0 rotate-180"
          alt="Низ"
          width={16}
          height={16}
          src={'/assets/images/TemSection/corner.svg'}
        />
        <div className="oldBase-title">
          <h2 className="text-[48px] uppercase leading-[150%]">старт бази</h2>
          <p className="relative left-5 leading-[150%]">
            <span
              className="absolute left-[-2%] top-2 h-2 w-2 rounded-full"
              style={{ backgroundColor: '#D3FD50' }}
            ></span>
            квітень 2023
          </p>
        </div>

        <div className="lg:flex-nowrap xl:justify-end lg:gap-52 relative flex flex-wrap items-center">
          <div className="orbit relative flex h-[280px] w-[280px] items-center justify-center">
            <div className="orbit-circle big-orbit"></div>
            <div className="orbit-circle middle-orbit"></div>
            <div className="orbit-circle middle-orbit-1"></div>
            <div className="orbit-circle small-orbit _1"></div>
            <div className="orbit-circle middle-orbit-2"></div>
            <div className="orbit-circle small-orbit _3"></div>
            <div className="orbit-circle small-orbit _4"></div>
          </div>
          <div className="lg:w-[400px]">
            <p>
              Квітень 2023 року став стартом написання проєктів на Базі.
              <br />
              <br />
              На тойчас проєкти були внутрішніми, але дуже швидко до нас набігла
              ОООТАКА КУПА замовників.
              <br />
              <br />
              А ще через два місяці до нас звернулись перші роботодавці (із
              міста Запоріжжя) і запросили на роботу першу ТЕСТУВАЛЬНИЦЮ.
              <br />
              <br />
              Так почався наш цикл СТАЖУВАННЯ - ПРАЦЕВЛАШТУВАННЯ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
