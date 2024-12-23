import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';
import SubTitle from '@/components/ui/DesignByOlga/SubTitle';
import VerticalSlider from './VerticalSlider';

function Today() {
  return (
    <section className="taday">
      <div className="container">
        <SectionTitle className="mb-1">Сьогодні</SectionTitle>
        <SubTitle className="mb-8">2024</SubTitle>
        <div className="flex flex-wrap items-center justify-between lg:flex-nowrap">
          <div className="text max-w-80">
            <p className="mb-[20px]">
            Зараз ми реалізовуємо внутрішні та зовінішні проєкти як для себе, так і для наших партнерів.
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
