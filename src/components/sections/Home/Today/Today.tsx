'use client'; // Додайте це, якщо використовуєте Next.js
import SectionTitle from '@/components/ui/SectionTitle';
import SubTitle from '@/components/ui/SubTitle';
import VerticalSlider from './VerticalSlider';
function Today() {
  return (
    <section className="taday">
      <div className="container">
      <SectionTitle className="mb-1">Сьогодні</SectionTitle>
      <SubTitle className="mb-8">2024</SubTitle>
        <div className="flex lg:flex-nowrap flex-wrap items-center justify-between">
          <div className="text max-w-80">
            <p className="mb-[20px]">
              Зараз ми реалізовуємо внутрішні та зовінішнк проєкти як для себе,
              так і для наших партнерів.
            </p>
            <p>
              І доволі успішно пробуємо себе у складних проєктах для бізнесу.
            </p>
          </div>
          <div className="w-[550px]">
            <VerticalSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Today;
