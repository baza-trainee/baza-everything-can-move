"use client"; // Додайте це, якщо використовуєте Next.js

export default function OldBase() {
  return (
    <section className="taday">
      <div className="container">
        <h2 className="text-[48px] leading-[150%] uppercase">Сьогодні</h2>
        <p className="leading-[150%] relative left-5 mb-8">
          <span
            className="absolute top-2 left-[-2%]  w-2 h-2 rounded-full"
            style={{ backgroundColor: "#D3FD50" }}></span>
          2024
        </p>
        <div className="flex">
          <div className="text max-w-80">
            <p className="mb-[20px]">
              Зараз ми реалізовуємо внутрішні та зовінішнк проєкти як для себе,
              так і для наших партнерів.
            </p>
            <p>
              І доволі успішно пробуємо себе у складних проєктах для бізнесу.
            </p>
          </div>
					          
        </div>
      </div>
    </section>
  );
}
