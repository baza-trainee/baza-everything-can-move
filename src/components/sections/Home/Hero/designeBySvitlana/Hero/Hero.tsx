'use client'; // Додайте це, якщо використовуєте Next.js
import Test from '../Test';
import ColoredGirl from '../../../../../Girl/WhiteTrGirl';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero pb-[350px] pt-[104px] 2xl:pb-[280px]">
      <div className="items-top container relative flex flex-wrap">
        <div className="relative">
          <Test />
        </div>
        <ColoredGirl />
        <div className="absolute bottom-[-10rem] left-1/2 z-10 opacity-100 transition-opacity duration-500 md:block">
          <div className="icon-scroll scroll-to-second-section xl:mb-12 mb-6 h-10 w-6 cursor-pointer rounded-[20px] border border-white">
            <span className="mx-auto my-2 block h-2 w-0.5 animate-[scroll_3s_ease_infinite] rounded-full bg-white"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
