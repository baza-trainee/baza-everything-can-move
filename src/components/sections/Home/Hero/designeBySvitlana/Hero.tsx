'use client'; // Додайте це, якщо використовуєте Next.js
import Test from './Test';
import ColoredGirl from '../../../../Girl/WhiteTrGirl';
// import './Hero.css';

export default function Hero() {
  return (
    <section className="hero pb-[350px] pt-[84px] 2xl:pb-[280px]">
      <div className="items-top container relative flex flex-wrap justify-between">
        <Test />
        <ColoredGirl />
      </div>
    </section>
  );
}
