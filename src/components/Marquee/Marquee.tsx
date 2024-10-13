"use client"; // Якщо використовуєте useEffect
import { useEffect } from "react";
import gsap from "gsap";
import "./marquee.css";

const Marquee = () => {
  useEffect(() => {
    const marqueeContent = document.querySelector(".marquee-content");

    gsap.to(marqueeContent, {
      xPercent: -150, // Переміщуємо на 100% ширини
      repeat: -1, // Нескінченне повторення
      duration: 15, // Тривалість однієї повної анімації (15 секунд)
      ease: "linear", // Лінійна анімація
    });
  }, []);

  return (
    <div className="marquee">
      <div className="marquee-content">
        <span>Frontend animation example - Frontend animation example - </span>
        <span>Frontend animation example - Frontend animation example - </span>
      </div>
    </div>
  );
};

export default Marquee;
