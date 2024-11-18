'use client';
import { useEffect } from 'react';

import * as THREE from 'three';

import {
  GPUComputationRenderer,
  // Variable,
} from 'three/examples/jsm/misc/GPUComputationRenderer.js';

// import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';

const WIDTH = 32;
const BIRDS = WIDTH * WIDTH;
const BOUNDS = 800;
const BOUNDS_HALF = BOUNDS / 2;

const BirdSimulation: React.FC = () => {
  useEffect(() => {
    // Scene setup
    const container = document.createElement('div');
    document.body.appendChild(container);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      3000
    );
    camera.position.z = 350;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.fog = new THREE.Fog(0xffffff, 100, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    container.appendChild(renderer.domElement);

    let last = performance.now();

    let velocityVariable;
    let positionVariable;

    let birdUniforms: {
      [key: string]: THREE.IUniform;
    } = {
      // Example uniform values; update based on your shader needs
      time: { value: 1.0 },
      texture: { value: new THREE.Texture() }, // assuming you're passing a texture
    };
    let positionUniforms: {
      [key: string]: THREE.IUniform;
    } = {
      // Example uniform values; update based on your shader needs
      time: { value: 1.0 },
      texture: { value: new THREE.Texture() }, // assuming you're passing a texture
    };
    let velocityUniforms: {
      [key: string]: THREE.IUniform;
    } = {
      // Example uniform values; update based on your shader needs
      time: { value: 1.0 },
      texture: { value: new THREE.Texture() }, // assuming you're passing a texture
    };

    let gpuCompute: GPUComputationRenderer;
    initComputeRenderer();

    function initComputeRenderer() {
      gpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, renderer);

      const dtPosition = gpuCompute.createTexture();
      const dtVelocity = gpuCompute.createTexture();
      fillPositionTexture(dtPosition);
      fillVelocityTexture(dtVelocity);

      velocityVariable = gpuCompute.addVariable(
        'textureVelocity',
        document.getElementById('fragmentShaderVelocity')?.textContent ?? '',
        dtVelocity
      );

      positionVariable = gpuCompute.addVariable(
        'texturePosition',
        document.getElementById('fragmentShaderPosition')?.textContent ?? '',
        dtPosition
      );

      gpuCompute.setVariableDependencies(velocityVariable, [
        positionVariable,
        velocityVariable,
      ]);
      gpuCompute.setVariableDependencies(positionVariable, [
        positionVariable,
        velocityVariable,
      ]);

      positionUniforms = positionVariable.material.uniforms;
      velocityUniforms = velocityVariable.material.uniforms;

      positionUniforms['time'] = { value: 0.0 };
      positionUniforms['delta'] = { value: 0.0 };
      velocityUniforms['time'] = { value: 1.0 };
      velocityUniforms['delta'] = { value: 0.0 };

      velocityVariable.wrapS = THREE.RepeatWrapping;
      velocityVariable.wrapT = THREE.RepeatWrapping;
      positionVariable.wrapS = THREE.RepeatWrapping;
      positionVariable.wrapT = THREE.RepeatWrapping;

      const error = gpuCompute.init();
      if (error !== null) {
        console.error(error);
      }
    }

    function initBirds() {
      const geometry = new BirdGeometry();
      birdUniforms = {
        color: { value: new THREE.Color(0xff2200) },
        texturePosition: { value: null },
        textureVelocity: { value: null },
        time: { value: 1.0 },
        delta: { value: 0.0 },
      };

      const material = new THREE.ShaderMaterial({
        uniforms: birdUniforms,
        vertexShader: document.getElementById('birdVS')?.textContent ?? '', // fallback to an empty string
        fragmentShader: document.getElementById('birdFS')?.textContent ?? '', // fallback to an empty string
        side: THREE.DoubleSide,
      });

      const birdMesh = new THREE.Mesh(geometry, material);
      birdMesh.rotation.y = Math.PI / 2;
      birdMesh.matrixAutoUpdate = false;
      birdMesh.updateMatrix();

      scene.add(birdMesh);
    }

    function fillPositionTexture(texture: THREE.Texture): void {
      const theArray = texture.image.data;

      for (let k = 0, kl = theArray.length; k < kl; k += 4) {
        const x = Math.random() * BOUNDS - BOUNDS_HALF;
        const y = Math.random() * BOUNDS - BOUNDS_HALF;
        const z = Math.random() * BOUNDS - BOUNDS_HALF;

        theArray[k + 0] = x;
        theArray[k + 1] = y;
        theArray[k + 2] = z;
        theArray[k + 3] = 1;
      }
    }

    function fillVelocityTexture(texture: THREE.Texture): void {
      const theArray = texture.image.data;

      for (let k = 0, kl = theArray.length; k < kl; k += 4) {
        const x = Math.random() - 0.5;
        const y = Math.random() - 0.5;
        const z = Math.random() - 0.5;

        theArray[k + 0] = x * 10;
        theArray[k + 1] = y * 10;
        theArray[k + 2] = z * 10;
        theArray[k + 3] = 1;
      }
    }

    function animate() {
      render();
    }

    function render() {
      const now = performance.now();
      let delta = (now - last) / 1000;

      if (delta > 1) delta = 1; // safety cap on large deltas
      last = now;

      positionUniforms['time'].value = now;
      positionUniforms['delta'].value = delta;
      velocityUniforms['time'].value = now;
      velocityUniforms['delta'].value = delta;
      birdUniforms['time'].value = now;
      birdUniforms['delta'].value = delta;

      gpuCompute.compute();

      renderer.render(scene, camera);
    }

    initBirds();
  }, []);

  return null;
};

export default BirdSimulation;

// BirdGeometry class
class BirdGeometry extends THREE.BufferGeometry {
  constructor() {
    super();

    const trianglesPerBird = 3;
    const triangles = BIRDS * trianglesPerBird;
    const points = triangles * 3;

    const vertices = new THREE.BufferAttribute(new Float32Array(points * 3), 3);
    const birdColors = new THREE.BufferAttribute(
      new Float32Array(points * 3),
      3
    );
    const references = new THREE.BufferAttribute(
      new Float32Array(points * 2),
      2
    );
    const birdVertex = new THREE.BufferAttribute(new Float32Array(points), 1);

    this.setAttribute('position', vertices);
    this.setAttribute('birdColor', birdColors);
    this.setAttribute('reference', references);
    this.setAttribute('birdVertex', birdVertex);

    let v = 0;

    function verts_push(...args: number[]): void {
      for (let i = 0; i < args.length; i++) {
        vertices.array[v++] = args[i];
      }
    }

    const wingsSpan = 20;

    for (let f = 0; f < BIRDS; f++) {
      // Body
      verts_push(0, -0, -20, 0, 4, -20, 0, 0, 30);

      // Wings
      verts_push(0, 0, -15, -wingsSpan, 0, 0, 0, 0, 15);
      verts_push(0, 0, 15, wingsSpan, 0, 0, 0, 0, -15);
    }

    for (let v = 0; v < triangles * 3; v++) {
      const triangleIndex = Math.floor(v / 3);
      const birdIndex = Math.floor(triangleIndex / trianglesPerBird);
      const x = (birdIndex % WIDTH) / WIDTH;
      const y = Math.floor(birdIndex / WIDTH) / WIDTH;

      const c = new THREE.Color(
        0x666666 + (Math.floor(v / 9) / BIRDS) * 0x666666
      );

      birdColors.array[v * 3 + 0] = c.r;
      birdColors.array[v * 3 + 1] = c.g;
      birdColors.array[v * 3 + 2] = c.b;

      references.array[v * 2] = x;
      references.array[v * 2 + 1] = y;

      birdVertex.array[v] = v % 9;
    }

    this.scale(0.2, 0.2, 0.2);
  }
}
