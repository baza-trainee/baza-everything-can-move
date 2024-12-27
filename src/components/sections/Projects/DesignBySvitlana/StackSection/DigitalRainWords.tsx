'use client';

import { useEffect, useRef } from 'react';

export default function DigitalRainWords() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<number[]>([]);
  const columnWordsRef = useRef<
    { word: string; charIndex: number; color: string }[]
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fontSize = 16;
    let columns = 0;

    const wordsArr = [
      'return',
      'React',
      'const',
      'useState',
      'handleDragEnd',
      'useMemo',
      'window',
      'useRef',
      '}',
      '(',
      '[',
      ']',
      '{',
      'current',
      'Index',
      'addEventListener',
      'event',
      "useCallback'",
      '=>',
      'width',
      'let',
      'useEffect',
      'if',
      'function',
      'for',
      '[i]',
      'size',
      'array',
    ];
    const colorsArr = ['#ffffff', '#8f8ded', '#bcbbf9']; //'#bcbbf9' '#363535'

    function initializeCanvas() {
      if (!canvas || !ctx) return;

      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      columns = Math.floor(canvas.width / fontSize);

      // Обновляем массивы `drops` и `columnWords`
      dropsRef.current = new Array(columns).fill(1);
      columnWordsRef.current = Array.from({ length: columns }, () => ({
        word: '',
        charIndex: 0,
        color: '',
      }));
    }
    function draw() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < dropsRef.current.length; i++) {
        const columnWord = columnWordsRef.current[i];
        if (
          columnWord.word === '' ||
          columnWord.charIndex >= columnWord.word.length
        ) {
          columnWordsRef.current[i] = {
            word: wordsArr[Math.floor(Math.random() * wordsArr.length)],
            charIndex: 0,
            color: colorsArr[Math.floor(Math.random() * colorsArr.length)],
          };
        }

        const { word, charIndex, color } = columnWordsRef.current[i];
        const text = word[charIndex];

        ctx.fillStyle = color;

        ctx.fillText(text, i * fontSize, dropsRef.current[i] * fontSize);

        columnWordsRef.current[i].charIndex++;

        if (
          dropsRef.current[i] * fontSize > canvas.height &&
          Math.random() > 0.95
        ) {
          dropsRef.current[i] = 0;
        }

        dropsRef.current[i]++;
      }
    }
    function handleResize() {
      initializeCanvas();
    }
    initializeCanvas();

    const intervalId = setInterval(draw, 32);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(intervalId);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
