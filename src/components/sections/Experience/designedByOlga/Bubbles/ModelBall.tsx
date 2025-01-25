'use client';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Bubbles3DCHatGPT = () => {
      const canvas = useRef<HTMLDivElement | null >(null);

      useEffect(() => {
// Basic Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lights
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Create a few balls
const balls: THREE.Mesh[] = [];
const ballMaterial = new THREE.MeshStandardMaterial({ color: 0x0077ff });

for (let i = 0; i < 3; i++) {
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const ball = new THREE.Mesh(geometry, ballMaterial);
    ball.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
    scene.add(ball);
    balls.push(ball);
}

// Camera position
camera.position.z = 10;

// Raycaster for detecting clicks
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// function onMouseClick() {


// }

// Add event listener for clicks
window.addEventListener('click', (event) =>{
  // if(!balls) return;
      // Convert mouse coordinates to normalized device coordinates
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Set raycaster
    raycaster.setFromCamera(mouse, camera);

    // Check intersections
    const intersects = raycaster.intersectObjects(balls);

    if (intersects.length > 0) {
        const clickedBall =  intersects[0].object as THREE.Mesh;

        // Remove ball from the scene
        scene.remove(clickedBall);

        // Optional: Remove from the balls array
        const index = balls.indexOf(clickedBall);
        if (index > -1) {
            balls.splice(index, 1);
        }
    }
}, false);

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();


      },[]);

    return (
        <div className='h-[546px] absolute top-[210px] lg:top-[250px] 2xl:top-[290px] w-full'>
            <div ref={canvas} className='mx-0 bg-olga-bg w-full'/>           
        </div>
    )

}

export default Bubbles3DCHatGPT;