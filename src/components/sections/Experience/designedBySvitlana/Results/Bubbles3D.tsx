'use client'
import React, {useEffect, useRef} from 'react'
import * as THREE from 'three';
// import clsx from 'clsx';

const API = {
	lightProbeIntensity: 5.0,
	directionalLightIntensity: 2.5,
	envMapIntensity: 1,
    ambientLightIntensity: 1.7,
};

const Bubbles3D = ({isOpen}:{isOpen:boolean}) => {

    const canvas = useRef<HTMLDivElement | null >(null);

    useEffect(()=>{
        const screenWidth = window.innerWidth;
        const renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight);  
        renderer.toneMapping = THREE.NoToneMapping;
        renderer.setClearColor( 0xffffff, 0);
        renderer.domElement.style.width = '100%';
        const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.set( 0, 0, 30 );
        const material = new THREE.MeshStandardMaterial( {
			color: 0x8282D2,
			metalness: 0,
			roughness: 0,
		} );
		const lightProbe = new THREE.LightProbe();
		scene.add( lightProbe )
		const directionalLight = new THREE.DirectionalLight( 0xffffff, API.directionalLightIntensity );
		directionalLight.position.set( -5, 4, 5 );
		scene.add( directionalLight );
        const ambientLight = new THREE.AmbientLight( 0xFFFFFF, API.ambientLightIntensity );
        scene.add( ambientLight );
		
        
        
        // renderer.setAnimationLoop( animate );
		canvas.current?.appendChild( renderer.domElement );
		renderer.domElement.style.position = 'absolute';
		// renderer.domElement.style.zIndex = '500';
		// renderer.domElement.style.overflow = 'clip';
        // if(isOpen){
            // renderer.domElement.style.top = '500px'
            // renderer.domElement.style.left = '-1500px'
        // }
        // console.log(renderer.domElement.style);
		// renderer.domElement.style.width = '100%';
        if (screenWidth < 768) {
			// renderer.domElement.style.height = '763px';
        }
		if (screenWidth >= 768 && screenWidth < 1440) {
			// renderer.domElement.style.height = '710px';
        }
		if (screenWidth >= 1440) {
			// renderer.domElement.style.height = '509px';
        }    
        


        // const geometrySM = new THREE.SphereGeometry( 1.1, 64, 32 );
        // const geometryLG = new THREE.SphereGeometry( 1.5, 64, 32 );
		// const mesh1 = new THREE.Mesh( geometrySM, material );
		// const mesh2 = new THREE.Mesh( geometrySM, material );
		// const mesh3 = new THREE.Mesh( geometrySM, material );
        // const mesh4 = new THREE.Mesh( geometryLG, material );
		// const mesh5 = new THREE.Mesh( geometryLG, material );
		// const mesh6 = new THREE.Mesh( geometryLG, material );

        if (screenWidth < 768 ) {
            const geometrySM = new THREE.SphereGeometry( 1.2, 64, 32 );
            const mesh1 = new THREE.Mesh( geometrySM, material );
		    const mesh2 = new THREE.Mesh( geometrySM, material );
		    const mesh3 = new THREE.Mesh( geometrySM, material );
            mesh1.position.set(-2.5, 1, -1);
            scene.add( mesh1);
            mesh2.position.set(2.5,-4, -1);
            scene.add( mesh2);
            mesh3.position.set(2.5, 7, -1);
            scene.add( mesh3);
        }
        if (screenWidth >= 768 && screenWidth < 1024) {
            const geometryLG = new THREE.SphereGeometry( 1.5, 64, 32 );
            const mesh4 = new THREE.Mesh( geometryLG, material );
		    const mesh5 = new THREE.Mesh( geometryLG, material );
		    mesh4.position.set(2.5, 7, -1);
            scene.add( mesh4);
            mesh5.position.set(2.5, 7, -1);
            scene.add( mesh5);
        } 
        if (screenWidth >= 1024 && screenWidth < 1440) {
            const geometryLG = new THREE.SphereGeometry( 1.5, 64, 32 );
            const mesh4 = new THREE.Mesh( geometryLG, material );
		    const mesh5 = new THREE.Mesh( geometryLG, material );
		    mesh4.position.set(2.5, 7, -1);
            scene.add( mesh4);
            mesh5.position.set(2.5, 7, -1);
            scene.add( mesh5);
        } 
        if (screenWidth >= 1440) {
            const geometryLG = new THREE.SphereGeometry( 1.5, 64, 32 );
            const mesh4 = new THREE.Mesh( geometryLG, material );
		    const mesh5 = new THREE.Mesh( geometryLG, material );
		    const mesh6 = new THREE.Mesh( geometryLG, material );
            mesh4.position.set(2.5, 7, -1);
            scene.add( mesh4);
            mesh5.position.set(2.5, 7, -1);
		    mesh6.position.set(2.5, 7, -1);
            scene.add( mesh6);
        } 

        // function animate() {
		//     render();
	    // }
        function render() {
            window.requestAnimationFrame(render);     
            renderer.render( scene, camera )
        }
        render(); 
    }, [isOpen])

  return (
    <div className='h-[763px] lg:h-[710px] 2xl:h-[509px] relative w-full' >
        <div ref={canvas} className='w-full mx-0'/>
        {/* {isOpen &&<div ref={canvas} />} */}
        {/* <div ref={canvas} className={clsx(isOpen ? 'block' : 'hidden')}/> */}
    
    </div>
  )
}

export default Bubbles3D