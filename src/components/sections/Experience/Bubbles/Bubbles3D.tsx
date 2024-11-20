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

    const canvasRefSm = useRef<HTMLDivElement | null >(null);
    const canvasRefLg = useRef<HTMLDivElement | null >(null);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        // const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true  });
        const renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight);
        renderer.toneMapping = THREE.NoToneMapping;
        renderer.setClearColor( 0xffffff, 0);
        const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.set( 0, 0, 30 );
        
        if (canvasRefSm.current?.childNodes[0] === undefined && screenWidth < 768) {
            canvasRefSm.current?.appendChild(renderer.domElement);
        } 
        if (canvasRefLg.current?.childNodes[0] === undefined && screenWidth > 768 && screenWidth < 1440) {
            canvasRefLg.current?.appendChild(renderer.domElement);
        } 

		const lightProbe = new THREE.LightProbe();
		scene.add( lightProbe )
		const directionalLight = new THREE.DirectionalLight( 0xffffff, API.directionalLightIntensity );
		directionalLight.position.set( -5, 4, 5 );
		scene.add( directionalLight );
        const ambientLight = new THREE.AmbientLight( 0xD3FE50, API.ambientLightIntensity );
        scene.add( ambientLight );
        

        const geometrySm = new THREE.SphereGeometry( 1.2, 64, 32 );
        const geometryLg = new THREE.SphereGeometry( 1.2, 64, 32 );
		const material = new THREE.MeshStandardMaterial( {
			color: 0xD3FE50,
			metalness: 0,
			roughness: 0,
		} );

		const meshSm1 = new THREE.Mesh( geometrySm, material );
		const meshSm2 = new THREE.Mesh( geometrySm, material );
		const meshSm3 = new THREE.Mesh( geometrySm, material );
        const meshLg1 = new THREE.Mesh( geometryLg, material );
		const meshLg2 = new THREE.Mesh( geometryLg, material );
		const meshLg3 = new THREE.Mesh( geometryLg, material );
		
        meshSm1.position.set(-2.5, 1, -1);
        scene.add( meshSm1);
        meshSm2.position.set(1.5,2, -1);
        scene.add( meshSm2);
        meshSm3.position.set(1, 9, -1);
        scene.add( meshSm3);
        meshLg1.position.set(-2.5, 1, -1);
        scene.add( meshLg1);
        meshLg2.position.set(1.5,2, -1);
        scene.add( meshLg2);
        meshLg3.position.set(1, 9, -1);
        scene.add( meshLg3);
        

        // console.log(scene.children[3].position);

        // renderer.setAnimationLoop( animate );
        // function animate() {
    	//     mesh1.position.x += 0.01;
    	//    mesh1.position.x -= 0.01;
        //      renderer.render( scene, camera );
        // }

        function render() {renderer.render( scene, camera );}

        render(); 
        

    },[])
    			

    return (
        <>
        <div ref={canvasRefSm} className='mx-0 bg-olga-bg absolute top-0 lg:hidden'/>;
        <div ref={canvasRefLg} className='mx-0 bg-olga-bg absolute top-0 sm:hidden lg:block'/>;
                
        </>
    )
    // return <canvas ref={canvasRef} />;

}

export default Bubbles3D;







