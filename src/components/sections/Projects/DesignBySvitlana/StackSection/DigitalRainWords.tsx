'use client';

import { useEffect, useRef } from 'react';

export default function DigitalRainWords() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvasRef.current.clientWidth;
    canvas.height = canvasRef.current.clientHeight;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    const drops: number[] = new Array(columns).fill(1);

    const columnWords: { word: string; charIndex: number; color: string }[] =
      Array.from({ length: columns }, () => ({
        word: '',
        charIndex: 0,
        color: '',
      }));

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

    function draw() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (
          columnWords[i].word === '' ||
          columnWords[i].charIndex >= columnWords[i].word.length
        ) {
          columnWords[i] = {
            word: wordsArr[Math.floor(Math.random() * wordsArr.length)],
            charIndex: 0,
            color: colorsArr[Math.floor(Math.random() * colorsArr.length)],
          };
        }

        const { word, charIndex, color } = columnWords[i];
        const text = word[charIndex];

        ctx.fillStyle = color;

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        columnWords[i].charIndex++;

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const intervalId = setInterval(draw, 32);

    function handleResize() {
      if (!canvas) return;

      canvas.width = canvasRef.current.clientWidth;
      canvas.height = canvasRef.current.clientHeight;
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(intervalId);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
