// "use client";
// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';

// const MouseTrail: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext('2d');
//     let mouseCoords = { mouseX: 0, mouseY: 0 };

//     if (canvas && ctx) {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       let radius = 100;
//       const color = 'rgba(173, 255, 47, 0.6)';

//       const draw = (x: number, y: number) => {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
//         gradient.addColorStop(0, color);
//         gradient.addColorStop(1, 'rgba(173, 255, 47, 0)');
        
//         ctx.fillStyle = gradient;
//         ctx.beginPath();
//         ctx.arc(x, y, radius, 0, Math.PI * 2);
//         ctx.fill();
//       };

//       const animate = () => {
//         draw(mouseCoords.mouseX, mouseCoords.mouseY);
//         requestAnimationFrame(animate);
//       };

//       animate();

//       const onMouseMove = (e: MouseEvent) => {
//         gsap.to(mouseCoords, {
//           mouseX: e.clientX,
//           mouseY: e.clientY,
//           duration: 0.2,
//           ease: 'power2.out',
//           onUpdate: () => draw(mouseCoords.mouseX, mouseCoords.mouseY),
//         });
//       };

//       window.addEventListener('mousemove', onMouseMove);

//       window.addEventListener('resize', () => {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//       });

//       return () => {
//         window.removeEventListener('mousemove', onMouseMove);
//       };
//     }
//   }, []);

//   return <canvas ref={canvasRef} style={{ width: '100%', height: '100%'}} />;
// };

// export default MouseTrail;
