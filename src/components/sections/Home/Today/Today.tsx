'use client'; // Додайте це, якщо використовуєте Next.js
import ScrollText from "./ScrolText";
import './style.css';

function Today() {
  return (
    <section className="taday">
      <div className="container">
        <h2 className="text-[48px] uppercase leading-[150%]">Сьогодні</h2>
        <p className="relative left-5 mb-8 leading-[150%]">
          <span
            className="absolute left-[-2%] top-2 h-2 w-2 rounded-full"
            style={{ backgroundColor: '#D3FD50' }}
          ></span>
          2024
        </p>
        <div className="flex items-center">
          <div className="text max-w-80">
            <p className="mb-[20px]">
              Зараз ми реалізовуємо внутрішні та зовінішнк проєкти як для себе,
              так і для наших партнерів.
            </p>
            <p>
              І доволі успішно пробуємо себе у складних проєктах для бізнесу.
            </p>
          </div>

          <div className="h-[300px] w-[900px] overflow-y-auto flex justify-center items-center h-[35vh] overflow-hidden bg-black text-white">
            <ScrollText/>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Today;
