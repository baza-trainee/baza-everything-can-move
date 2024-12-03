'use client';

import { useEffect, useRef } from 'react';

export default function DigitalRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvasRef.current.clientWidth;
    canvas.height = canvasRef.current.clientHeight;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    console.log('colum', columns);

    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // const characters =
    //   'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルウォンヴヵヶヷヸヹヺ・ーヽヾヿ';
    const characters =
      'useEffect()=>{React.FC=({images})=>{const[currentIndex,const[containerWidth,setContainerWidth]=useState(0);window.addEventListener(resize,handleResize)';

    const charIndices: number[] = new Array(Math.floor(columns)).fill(0);
    const colorsArr = ['#bcbbf9', '#ffffff', '#8f8ded', '#0F0'];
    function draw() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      //one Color
      // ctx.fillStyle = '#bcbbf9';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        //random character
        // const text = characters.charAt(
        //   Math.floor(Math.random() * characters.length)
        // );
        //random character but in a row
        const randomColor =
          colorsArr[Math.floor(Math.random() * colorsArr.length)];
        ctx.fillStyle = randomColor;
        const text = characters.charAt(charIndices[i]);

        //ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        charIndices[i] = (charIndices[i] + 1) % characters.length;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const intervalId = setInterval(draw, 33);

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

  return (
    // <div className="inset-0 h-full w-full bg-black">
    <canvas ref={canvasRef} className="h-full w-full" />
    // </div>
  );
}
