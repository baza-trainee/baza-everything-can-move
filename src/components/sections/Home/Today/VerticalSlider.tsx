'use client'; // Додайте це, якщо використовуєте Next.js
import React, { useState, useEffect } from 'react';

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
  const [fontSize, setFontSize] = useState('2rem'); // Initial font size

  const handleScroll = (event: React.WheelEvent) => {
    event.preventDefault();

    if (scrolling) return;

    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);

    setScrolling(true);
    setTimeout(() => setScrolling(false), 500);
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(autoScroll);
  }, []);

  // Update font size based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setFontSize('1.2rem'); // Small screens
      } else if (width < 1024) {
        setFontSize('1.5rem'); // Medium screens
      } else {
        setFontSize('2rem'); // Large screens
      }
    };

    handleResize(); // Set initial font size
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getStyle = (index: number): React.CSSProperties => {
    const position = index - currentSlide;
    const isCenter = position === 0;
    const isAdjacent = Math.abs(position) === 1;

    return {
      transform: `translateY(${position * 60}px)`,
      opacity: isCenter ? 1 : isAdjacent ? 0.6 : 0,
      fontSize: isCenter ? fontSize : '1rem',
      color: isCenter ? 'white' : 'gray',
      transition: 'transform 0.5s, opacity 0.5s, font-size 0.5s, color 0.5s',
      position: 'absolute',
    };
  };

  return (
    <div
      onWheel={handleScroll}
      className="relative w-full h-96 overflow-hidden flex flex-col items-center justify-center bg-black"
      style={{ overflowY: 'hidden' }}
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
      <div className="flex items-center justify-center" style={getStyle(slides.length)}>
        <h2>{slides[0].content}</h2>
      </div>
    </div>
  );
};

export default VerticalSlider;
