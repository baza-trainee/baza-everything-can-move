import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  GPUComputationRenderer,
  Variable,
} from 'three/examples/jsm/misc/GPUComputationRenderer.js';
import {
  fragmentShaderPosition,
  fragmentShaderVelocity,
} from '@/assets/shaders/fragmentShader';
import { birdVertexShader } from '@/assets/shaders/birdVertexShader';
import { birdFragmentShader } from '@/assets/shaders/birdFragmentShader';
import BirdGeometry from './BirdGeometryClass';

const NewBirdScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const WIDTH = 32;
  const BOUNDS = 800;
  const BOUNDS_HALF = BOUNDS / 2;

  useEffect(() => {
    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer;
    let gpuCompute: GPUComputationRenderer;

    let velocityVariable: Variable, positionVariable: Variable;

    let positionUniforms: { [key: string]: THREE.IUniform },
      velocityUniforms: { [key: string]: THREE.IUniform };
    // {
    //     [key: string]: THREE.IUniform<
    //       number | THREE.Vector3 | THREE.Color | null
    //     >;
    //   };
    let birdUniforms: {
      [key: string]: THREE.IUniform;
    };

    const init = () => {
      if (!containerRef.current) return;

      // Создаем сцену и камеру
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x3cb371);
      camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        1,
        3000
      );
      camera.position.z = 350;
      console.log('Number of objects in scene:', scene.children.length);
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      containerRef.current.appendChild(renderer.domElement);

      initComputeRenderer();
      initBirds();

      window.addEventListener('resize', onWindowResize);
      renderer.setAnimationLoop(animate);
    };

    const initComputeRenderer = () => {
      gpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, renderer);

      const dtPosition = gpuCompute.createTexture();
      const dtVelocity = gpuCompute.createTexture();
      fillPositionTexture(dtPosition);
      fillVelocityTexture(dtVelocity);

      velocityVariable = gpuCompute.addVariable(
        'textureVelocity',
        fragmentShaderVelocity,
        dtVelocity
      );
      positionVariable = gpuCompute.addVariable(
        'texturePosition',
        fragmentShaderPosition,
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

      positionUniforms['BOUNDS'] = { value: BOUNDS };
      velocityUniforms['BOUNDS'] = { value: BOUNDS };

      positionUniforms['time'] = { value: 0.0 };
      positionUniforms['delta'] = { value: 0.0 };
      velocityUniforms['time'] = new THREE.Uniform(1.0);
      velocityUniforms['delta'] = new THREE.Uniform(0.0);
      velocityUniforms['predator'] = new THREE.Uniform(new THREE.Vector3());

      const error = gpuCompute.init();
      if (error !== null) {
        console.error(error);
      }
    };

    const initBirds = () => {
      // Создаем геометрию птиц и материал
      const geometry = new BirdGeometry();
      birdUniforms = {
        color: { value: new THREE.Color(0xffffff) }, //0xff2200
        texturePosition: { value: null },
        textureVelocity: { value: null },
        time: { value: 1.0 },
        delta: { value: 0.0 },
      };

      const material = new THREE.ShaderMaterial({
        uniforms: birdUniforms,
        vertexShader: birdVertexShader,
        fragmentShader: birdFragmentShader,
        side: THREE.DoubleSide,
      });

      const birdMesh = new THREE.Mesh(geometry, material);
      birdMesh.rotation.y = Math.PI / 2;
      birdMesh.matrixAutoUpdate = false;
      birdMesh.updateMatrix();

      scene.add(birdMesh);
    };

    const fillPositionTexture = (texture: THREE.DataTexture) => {
      const data = texture.image.data;
      for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.random() * BOUNDS - BOUNDS_HALF;
        data[i + 1] = Math.random() * BOUNDS - BOUNDS_HALF;
        data[i + 2] = Math.random() * BOUNDS - BOUNDS_HALF;
        data[i + 3] = 1;
      }
    };

    const fillVelocityTexture = (texture: THREE.DataTexture) => {
      const data = texture.image.data;
      for (let i = 0; i < data.length; i += 4) {
        data[i] = (Math.random() - 0.5) * 10;
        data[i + 1] = (Math.random() - 0.5) * 10;
        data[i + 2] = (Math.random() - 0.5) * 10;
        data[i + 3] = 1;
      }
    };

    const onWindowResize = () => {
      if (containerRef.current) {
        camera.aspect =
          containerRef.current.clientWidth / containerRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
          containerRef.current.clientWidth,
          containerRef.current.clientHeight
        );
      }
    };

    const animate = () => {
      positionUniforms['time'].value = performance.now();
      gpuCompute.compute();
      birdUniforms['texturePosition'].value =
        gpuCompute.getCurrentRenderTarget(positionVariable).texture;
      birdUniforms['textureVelocity'].value =
        gpuCompute.getCurrentRenderTarget(velocityVariable).texture;
      renderer.render(scene, camera);
      console.log('scene', scene);
      //   console.log(
      //     'Time Uniform:',
      //     positionUniforms['time'].value,
      //     velocityUniforms['time'],
      //     velocityUniforms['predator']
      //   );
    };

    init();

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, [BOUNDS_HALF]);

  return <div ref={containerRef} style={{ width: '100%', height: '500px' }} />;
};

export default NewBirdScene;
