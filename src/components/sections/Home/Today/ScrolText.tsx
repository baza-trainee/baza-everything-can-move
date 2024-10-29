import React, { useRef, useEffect, useState } from 'react';

const ScrollText = () => {
  const textRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const items = [
    "сайти", 
    "лендінги", 
    "CRM системи", 
    "застосунки", 
    "сайти для донатів", 
    "адміністративні панелі"
  ];

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(event.target.scrollTop);
    };

    const container = textRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden bg-black text-white">
      <div 
        ref={textRef} 
        className="text-center overflow-auto" 
        style={{ height: '300px', width: '700px' }} // Встановіть бажану висоту та ширину
      >
        {items.map((item, index) => {
          const scaleFactor = Math.max(0, 1 - (scrollTop / 200)); // Зменшення до 0
          const fontSize = `${Math.max(18, 48 * scaleFactor)}px`; // Мінімальний розмір шрифту 18px
          const color = `rgba(255, 255, 255, ${0.5 + 0.5 * scaleFactor})`; // Зміна кольору

          return (
            <div
              key={index}
              className={`transition-all duration-500`}
              style={{
                fontSize,
                color,
                // opacity: scaleFactor, // Зміна прозорості
                height: '100px', // Встановіть висоту для кожного рядка
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollText;
