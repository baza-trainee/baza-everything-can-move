// var 2
// components/BirdScene.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

class BirdGeometry extends THREE.BufferGeometry {
  constructor() {
    super();
    const BIRDS = 16384;
    const trianglesPerBird = 3;
    const triangles = BIRDS * trianglesPerBird;
    const points = triangles * 3;

    const vertices = new Float32Array(points * 3);
    const references = new Uint32Array(points);
    const birdVertex = new Uint32Array(points);

    this.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    this.setAttribute('reference', new THREE.BufferAttribute(references, 1));
    this.setAttribute('birdVertex', new THREE.BufferAttribute(birdVertex, 1));

    let v = 0;
    const wingsSpan = 20;

    function vertsPush(...args: number[]) {
      for (let i = 0; i < args.length; i++) {
        vertices[v++] = args[i];
      }
    }

    for (let f = 0; f < BIRDS; f++) {
      vertsPush(0, 0, -20, 0, -8, 10, 0, 0, 30);
      vertsPush(0, 0, -15, -wingsSpan, 0, 5, 0, 0, 15);
      vertsPush(0, 0, 15, wingsSpan, 0, 5, 0, 0, -15);
    }

    for (let i = 0; i < triangles * 3; i++) {
      const triangleIndex = Math.floor(i / 3);
      const birdIndex = Math.floor(triangleIndex / trianglesPerBird);
      references[i] = birdIndex;
      birdVertex[i] = i % 9;
    }

    this.scale(0.2, 0.2, 0.2);
  }
}

const BirdScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container: HTMLDivElement | null = containerRef.current;
    if (!container) return;

    let camera: THREE.PerspectiveCamera,
      scene: THREE.Scene,
      renderer: THREE.WebGLRenderer;
    let stats: Stats;

    const BIRDS = 16384;
    const BOUNDS = 800;
    const BOUNDS_HALF = BOUNDS / 2;

    function init() {
      camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        5000
      );
      camera.position.z = 1000;

      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0xffffff, 700, 3000);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container!.appendChild(renderer.domElement);

      stats = new Stats();
      container!.appendChild(stats.dom);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.update();

      const birdGeometry = new BirdGeometry();
      const birdMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        side: THREE.DoubleSide,
      });

      const birdMesh = new THREE.Mesh(birdGeometry, birdMaterial);
      scene.add(birdMesh);

      animate();
    }

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      stats.update();
    }

    init();

    return () => {
      container!.removeChild(renderer.domElement);
      container!.removeChild(stats.dom);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default BirdScene;
