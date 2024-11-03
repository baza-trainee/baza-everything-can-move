'use client'

import * as THREE from 'three';
import { useEffect, useRef } from 'react';


const API = {
	lightProbeIntensity: 5.0,
	directionalLightIntensity: 2.5,
	envMapIntensity: 1,
    ambientLightIntensity: 0.7,
};

const Bubbles3D:React.FC = () => {

    const canvasRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true  });
        const renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.toneMapping = THREE.NoToneMapping;
        const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.set( 0, 0, 30 );
        canvasRef.current?.appendChild(renderer.domElement);

		const lightProbe = new THREE.LightProbe();
		scene.add( lightProbe )
		const directionalLight = new THREE.DirectionalLight( 0xffffff, API.directionalLightIntensity );
		directionalLight.position.set( -5, 4, 5 );
		scene.add( directionalLight );
        const ambientLight = new THREE.AmbientLight( 0xD3FE50, API.ambientLightIntensity );
        scene.add( ambientLight );
        

        const geometry = new THREE.SphereGeometry( 1.5, 64, 32 );
		const material = new THREE.MeshStandardMaterial( {
			color: 0xD3FE50,
			metalness: 0,
			roughness: 0,
		} );

		const mesh1 = new THREE.Mesh( geometry, material );
		const mesh2 = new THREE.Mesh( geometry, material );
		const mesh3 = new THREE.Mesh( geometry, material );
		
        mesh1.position.set(-11, 6, -1);
        scene.add( mesh1);
        mesh2.position.set(-2,-1, -1);
        scene.add( mesh2);
        mesh3.position.set(4, 5, -1);
        scene.add( mesh3);

        // renderer.setAnimationLoop( animate );
        // function animate() {
    	//     cube.rotation.x += 0.01;
    	//     cube.rotation.y += 0.01;
    	//     renderer.render( scene, camera );
        // }

        render();

        function render() {renderer.render( scene, camera );}

    //     return () => {
    //         renderer.forceContextLoss();
    //         renderer.dispose();
    //         mesh1.geometry.dispose();
    //         mesh1.material.dispose();
    //         mesh2.geometry.dispose();
    //         mesh2.material.dispose();
    //         mesh3.geometry.dispose();
    //         mesh3.material.dispose();
    // };

    },[])
    			

    return <div ref={canvasRef} />;

}

export default Bubbles3D;



