//new one
'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { extend, useThree, useFrame } from '@react-three/fiber';
import {
  GPUComputationRenderer,
  Variable,
} from 'three/examples/jsm/misc/GPUComputationRenderer.js';
import {
  fragmentShaderPosition,
  fragmentShaderVelocity,
} from '@/assets/shaders/fragmentShader';
import BirdGeometry from './BirdGeometryClass';

const WIDTH = 32;
const BIRDS = WIDTH * WIDTH;
const BOUNDS = 800;
const BOUNDS_HALF = BOUNDS / 2;

// extend({ GPUComputationRenderer });

const BirdSimulation: React.FC = () => {
  const { gl, camera } = useThree();
  const gpuCompute = useRef<GPUComputationRenderer | null>(null);
  const velocityVariable = useRef<Variable | null>(null);
  const positionVariable = useRef<Variable | null>(null);

  useEffect(() => {
    camera.position.z = 350;
    gpuCompute.current = new GPUComputationRenderer(WIDTH, WIDTH, gl);
    const dtPosition = gpuCompute.current.createTexture();
    const dtVelocity = gpuCompute.current.createTexture();
    fillPositionTexture(dtPosition);
    fillVelocityTexture(dtVelocity);
    velocityVariable.current = gpuCompute.current.addVariable(
      'textureVelocity',
      fragmentShaderVelocity,
      dtVelocity
    );
    positionVariable.current = gpuCompute.current.addVariable(
      'texturePosition',
      fragmentShaderPosition,
      dtPosition
    );
    gpuCompute.current.setVariableDependencies(velocityVariable.current, [
      positionVariable.current,
      velocityVariable.current,
    ]);
    gpuCompute.current.setVariableDependencies(positionVariable.current, [
      positionVariable.current,
      velocityVariable.current,
    ]);
    // const velocityUniforms = velocityVariable.current.material.uniforms;

    // velocityUniforms['time'] = { value: 1.0 };
    // velocityUniforms['delta'] = { value: 0.0 };
    // velocityUniforms['separationDistance'] = { value: 20.0 };
    // velocityUniforms['alignmentDistance'] = { value: 20.0 };
    // velocityUniforms['cohesionDistance'] = { value: 20.0 };
    // velocityUniforms['freedomFactor'] = { value: 0.75 };
    // velocityUniforms['predator'] = { value: new THREE.Vector3() };
    // velocityVariable.current.material.defines.BOUNDS = BOUNDS.toFixed(2);
    // const positionUniforms = positionVariable.current.material.uniforms;
    // positionUniforms['time'] = { value: 0.0 };
    // positionUniforms['delta'] = { value: 0.0 };
    gpuCompute.current.init();
  }, [gl, camera]);

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
  return null;
};

export default BirdSimulation;
