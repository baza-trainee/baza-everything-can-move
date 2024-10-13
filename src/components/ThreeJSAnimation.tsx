// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";

// const ThreeJSAnimation: React.FC = () => {
//   const mountRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     if (mountRef.current) {
//       mountRef.current.appendChild(renderer.domElement);
//     }

//     const geometry = new THREE.SphereGeometry(1, 32, 32);
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const sphere = new THREE.Mesh(geometry, material);
//     scene.add(sphere);

//     camera.position.z = 5;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleMouseMove = (event: MouseEvent) => {
//       const { clientX, clientY } = event;
//       const x = (clientX / window.innerWidth) * 2 - 1;
//       const y = -(clientY / window.innerHeight) * 2 + 1;

//       sphere.position.x = x * 5;
//       sphere.position.y = y * 5;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       if (mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return <div ref={mountRef} />;
// };

// export default ThreeJSAnimation;
