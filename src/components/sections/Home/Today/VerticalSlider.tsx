import React, { useState } from 'react';

interface Slide {
  id: number;
  content: string;
}

const slides: Slide[] = [
  { id: 1, content: 'сайти' },
  { id: 2, content: 'лендінги' },
  { id: 3, content: 'CRM системи застосунки' },
  { id: 4, content: 'сайти для донатів' },
  { id: 5, content: 'адміністративні панелі' },
];

const VerticalSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = (event: React.WheelEvent) => {
    event.preventDefault(); // Запобігаємо прокрутці сторінки

    if (scrolling) return;

    if (event.deltaY > 0) {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    } else {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
    }

    setScrolling(true);
    setTimeout(() => setScrolling(false), 500);
  };

  const getStyle = (index: number) => {
    const position = index - currentSlide;
    const isCenter = position === 0;
    const isAdjacent = Math.abs(position) === 1;

    return {
      transform: `translateY(${position * 60}px)`,
      opacity: isCenter ? 1 : isAdjacent ? 0.6 : 0,
      fontSize: isCenter ? '2rem' : '1rem',
      color: isCenter ? 'white' : 'gray',
      transition: 'transform 0.5s, opacity 0.5s, font-size 0.5s, color 0.5s',
      position: 'absolute',
    };
  };

  return (
    <div
      onWheel={handleScroll}
      className="relative w-full h-96 overflow-hidden flex flex-col items-center justify-center bg-black"
      style={{ overflowY: 'hidden' }} // Hide the vertical scrollbar
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="flex items-center justify-center"
          style={getStyle(index)}
        >
          <h2>{slide.content}</h2>
        </div>
      ))}
    </div>
  );
};

export default VerticalSlider;
