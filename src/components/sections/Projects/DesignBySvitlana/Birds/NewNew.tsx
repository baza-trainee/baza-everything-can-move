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

const NewNew: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null); //!
  const WIDTH = 32;
  const BOUNDS = 800; //!

  useEffect(() => {
    const BOUNDS_HALF = BOUNDS / 2; //!
    let scene: THREE.Scene, //!
      camera: THREE.PerspectiveCamera, //!
      renderer: THREE.WebGLRenderer; //!
    let mouseX = 0, //!
      mouseY = 0; //!
    // const windowHalfX = window.innerWidth / 2; //! change???
    // const windowHalfY = window.innerHeight / 2; //! change???
    let last = performance.now(); //!
    let gpuCompute: GPUComputationRenderer; //!

    let velocityVariable: Variable, positionVariable: Variable; //!

    let positionUniforms: { [key: string]: THREE.IUniform }, //!
      velocityUniforms: { [key: string]: THREE.IUniform }; //!

    let birdUniforms: {
      //!
      [key: string]: THREE.IUniform;
    };

    init();
    function init() {
      if (!containerRef.current) return;

      scene = new THREE.Scene(); //!
      scene.background = new THREE.Color(0xffffff); //!
      scene.fog = new THREE.Fog(0xffffff, 100, 1000);
      camera = new THREE.PerspectiveCamera( //!
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        1,
        3000
      );
      camera.position.z = 350; //!
      //console.log('Number of objects in scene:', scene.children.length);
      //WHY Width????
      //   let canvasElement = containerRef.current.querySelector('canvas');

      //   renderer = new THREE.WebGLRenderer({
      //     //!
      //     canvas: canvasElement as HTMLCanvasElement,
      //   });
      ///////////////////////////
      renderer = new THREE.WebGLRenderer({ antialias: true });

      renderer.setPixelRatio(window.devicePixelRatio); //!
      renderer.setSize(
        //!
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      renderer.setAnimationLoop(animate); //!
      // containerRef.current.appendChild(renderer.domElement);
      // WHY Width
      /*  if (!canvasElement) {
        //!
        canvasElement = document.createElement('canvas');
        containerRef.current.appendChild(canvasElement);
      } */
      containerRef.current.appendChild(renderer.domElement);
      initComputeRenderer(); //!
      containerRef.current.style.touchAction = 'none'; //!
      containerRef.current.addEventListener('pointermove', onPointerMove); //!
      const effectController = {
        //!
        separation: 20.0,
        alignment: 20.0,
        cohesion: 20.0,
        freedom: 0.75,
      };
      const valuesChanger = function () {
        //!
        velocityUniforms['separationDistance'].value =
          effectController.separation;
        velocityUniforms['alignmentDistance'].value =
          effectController.alignment;
        velocityUniforms['cohesionDistance'].value = effectController.cohesion;
        velocityUniforms['freedomFactor'].value = effectController.freedom;
      };

      valuesChanger(); //!

      initBirds(); //!
    }

    function initComputeRenderer() {
      gpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, renderer); //!

      const dtPosition = gpuCompute.createTexture(); //!
      const dtVelocity = gpuCompute.createTexture(); //!
      fillPositionTexture(dtPosition); //!
      fillVelocityTexture(dtVelocity); //!

      velocityVariable = gpuCompute.addVariable(
        //!
        'textureVelocity',
        fragmentShaderVelocity,
        dtVelocity
      );
      positionVariable = gpuCompute.addVariable(
        //!
        'texturePosition',
        fragmentShaderPosition,
        dtPosition
      );

      gpuCompute.setVariableDependencies(velocityVariable, [
        //!
        positionVariable,
        velocityVariable,
      ]);
      gpuCompute.setVariableDependencies(positionVariable, [
        //!
        positionVariable,
        velocityVariable,
      ]);

      positionUniforms = positionVariable.material.uniforms; //!
      velocityUniforms = velocityVariable.material.uniforms; //!

      //   positionUniforms['BOUNDS'] = { value: BOUNDS };was
      //   velocityUniforms['BOUNDS'] = { value: BOUNDS };was

      positionUniforms['time'] = { value: 0.0 }; //!
      positionUniforms['delta'] = { value: 0.0 }; //!
      velocityUniforms['time'] = { value: 1.0 }; //new THREE.Uniform(1.0);//!
      velocityUniforms['delta'] = { value: 0.0 }; //new THREE.Uniform(0.0);//!
      velocityUniforms['testing'] = { value: 1.0 }; //!
      velocityUniforms['separationDistance'] = { value: 1.0 }; //!
      velocityUniforms['alignmentDistance'] = { value: 1.0 }; //!
      velocityUniforms['cohesionDistance'] = { value: 1.0 }; //!
      velocityUniforms['freedomFactor'] = { value: 1.0 }; //!
      // velocityUniforms['predator'] = new THREE.Uniform(new THREE.Vector3());was
      velocityUniforms['predator'] = { value: new THREE.Vector3() }; //!
      velocityVariable.material.defines.BOUNDS = BOUNDS.toFixed(2); //!
      velocityVariable.wrapS = THREE.RepeatWrapping; //!
      velocityVariable.wrapT = THREE.RepeatWrapping; //!
      positionVariable.wrapS = THREE.RepeatWrapping; //!
      positionVariable.wrapT = THREE.RepeatWrapping; //!

      const error = gpuCompute.init(); //!
      if (error !== null) {
        //!
        console.error(error);
      }
    }

    function initBirds() {
      const geometry = new BirdGeometry(); //!
      // For Vertex and Fragment
      birdUniforms = {
        //!
        color: { value: new THREE.Color(0xff2200) }, //0xff2200
        texturePosition: { value: null },
        textureVelocity: { value: null },
        time: { value: 1.0 },
        delta: { value: 0.0 },
      };
      // THREE.ShaderMaterial
      const material = new THREE.ShaderMaterial({
        //!
        uniforms: birdUniforms,
        vertexShader: birdVertexShader,
        fragmentShader: birdFragmentShader,
        side: THREE.DoubleSide,
      });

      const birdMesh = new THREE.Mesh(geometry, material); //!
      birdMesh.rotation.y = Math.PI / 2; //!
      birdMesh.matrixAutoUpdate = false; //!
      birdMesh.updateMatrix(); //!

      scene.add(birdMesh); //!
    }

    function fillPositionTexture(texture: THREE.DataTexture) {
      //!
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

    function fillVelocityTexture(texture: THREE.DataTexture) {
      //!
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

    function onPointerMove(event: PointerEvent) {
      //!
      if (event.isPrimary === false) return;

      if (containerRef.current) {
        mouseX = event.clientX - containerRef.current.clientWidth / 2;
        mouseY = event.clientY - containerRef.current.clientHeight / 2;
      }
    }

    function animate() {
      render(); //!
      //was
      //   positionUniforms['time'].value = performance.now() / 1000;
      //   gpuCompute.compute();
      //   birdUniforms['texturePosition'].value =
      //     gpuCompute.getCurrentRenderTarget(positionVariable).texture;
      //   birdUniforms['textureVelocity'].value =
      //     gpuCompute.getCurrentRenderTarget(velocityVariable).texture;
      //   renderer.render(scene, camera);
    }

    function render() {
      //!
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

      if (containerRef.current) {
        velocityUniforms['predator'].value.set(
          (0.5 * mouseX) / containerRef.current.clientWidth,
          (-0.5 * mouseY) / containerRef.current.clientHeight,
          0
        );
      }

      mouseX = 10000;
      mouseY = 10000;

      gpuCompute.compute();

      birdUniforms['texturePosition'].value =
        gpuCompute.getCurrentRenderTarget(positionVariable).texture;
      birdUniforms['textureVelocity'].value =
        gpuCompute.getCurrentRenderTarget(velocityVariable).texture;

      renderer.render(scene, camera);
    }
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '500px' }} />;
};

export default NewNew;

// renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(
//   containerRef.current.clientWidth,
//   containerRef.current.clientHeight
// );
// containerRef.current.appendChild(renderer.domElement);
