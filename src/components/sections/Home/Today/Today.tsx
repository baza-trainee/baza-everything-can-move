'use client'; // Додайте це, якщо використовуєте Next.js
import VerticalSlider from "./VerticalSlider";
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
          <div className=" w-[900px] overflow-auto flex justify-center items-center text-white">
           <VerticalSlider/>
            
          </div>
        </div>
      </div>
    </section>
  );
}
export default Today;
