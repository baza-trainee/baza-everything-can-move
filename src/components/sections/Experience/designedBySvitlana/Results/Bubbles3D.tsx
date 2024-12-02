'use client'
import React, {useEffect, useRef} from 'react'
import * as THREE from 'three';

const Bubbles3D = () => {
    const canvas = useRef(null);
    // const screenWidth = window.innerWidth;

    useEffect(()=>{
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 2000 );
		camera.position.z = 1000;
		const scene = new THREE.Scene();
		scene.fog = new THREE.FogExp2( 0x000000, 0.0008 );
		const geometry = new THREE.BufferGeometry();
    }, [])

  return (
    <div ref={canvas}>
    
    </div>
  )
}

export default Bubbles3D