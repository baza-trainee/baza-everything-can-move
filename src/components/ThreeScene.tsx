// src/components/ThreeScene.tsx

"use client"; // Додаємо директиву для клієнтського компонента

import { useEffect } from 'react';
import three from "three"; 
import { gsap } from 'gsap';

const ThreeScene = () => {
    useEffect(() => {
        const scene = new three.Scene();
        const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new three.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new three.BoxGeometry();
        const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new three.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        gsap.to(cube.rotation, {
            x: Math.PI * 2,
            y: Math.PI * 2,
            duration: 2,
            repeat: -1,
            ease: 'linear',
        });

        gsap.to(cube.position, {
            z: 2,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut',
        });

        animate();

        return () => {
            // Clean up: видаляємо рендерер
            renderer.dispose();
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return null; // Не потрібно рендерити нічого з JSX
};

export default ThreeScene;
