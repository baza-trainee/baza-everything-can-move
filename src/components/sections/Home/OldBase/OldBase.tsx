"use client"; // Додайте це, якщо використовуєте Next.js
import "./style.css";

export default function OldBase() {
  return (
    <section className="oldBase pt-[114px]">
      <div className="container">
        <h3 className="text-[48px] leading-[150%] uppercase">старт бази</h3>
        <span className="leading-[150%]">квітень 2023</span>
        <div className="flex justify-between">
          <div className="orbit">
            <div className="orbit-circle big-orbit"></div>
            <div className="orbit-circle middle-orbit"></div>
            <div className="orbit-circle small-orbit _1"></div>
            <div className="orbit-circle middle-orbit-2"></div>
            <div className="orbit-circle small-orbit _2"></div>
            <div className="orbit-circle small-orbit _3"></div>
          </div>
          <div className="w-[400px]">
            <p>
              Квітень 2023 року став стартом написання проєктів на Базі.
              <br />
              <br />
              На тойчас проєкти були внутрішніми, але дуже швидко до нас набігла ОООТАКА КУПА замовників.
              <br />
              <br />
              А ще через два місяці до нас звернулись
              перші роботодавці (із міста Запоріжжя) і запросили на роботу першу
              ТЕСТУВАЛЬНИЦЮ.
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
