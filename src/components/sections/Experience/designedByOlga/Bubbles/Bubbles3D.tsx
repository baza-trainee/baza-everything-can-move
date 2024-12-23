'use client'

import * as THREE from 'three';
import { useEffect, useRef } from 'react';


const API = {
	lightProbeIntensity: 5.0,
	directionalLightIntensity: 2.5,
	envMapIntensity: 1,
    ambientLightIntensity: 0.7,
};
// type Bubbles3DProps = {
//   coordX: number,
//   coordY: number
// }


const Bubbles3D = () => {

    const canvas = useRef<HTMLDivElement | null >(null);

    // console.log(coordX, coordY);
    //to try without using canvas tag

    useEffect(() => {
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
			color: 0xD3FE50,
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
        // const raycaster = new THREE.Raycaster();
        // const pointer = new THREE.Vector2();
        // const mouse = new THREE.Vector2(1,1)
        // let intersects = [];
        // const clickMouse = new THREE.Vector2();
        // const moveMouse = new THREE.Vector2();
        // let draggable: THREE.Object3D;
        renderer.domElement.style.position = 'absolute';
        canvas.current?.appendChild(renderer.domElement);
        
        if (screenWidth < 768) {
            const geometrySm = new THREE.SphereGeometry( 1.2, 64, 32 );
		    const meshSm1 = new THREE.Mesh( geometrySm, material );
		    const meshSm2 = new THREE.Mesh( geometrySm, material );
		    const meshSm3 = new THREE.Mesh( geometrySm, material );
            meshSm1.position.set(-2.5, 1, -1);
            scene.add( meshSm1);
            meshSm2.position.set(1.5,2, -1);
            scene.add( meshSm2);
            meshSm3.position.set(1, 9, -1);
            scene.add( meshSm3);
        } 
        if (screenWidth >= 768 && screenWidth < 1024) {
            const geometryLg = new THREE.SphereGeometry( 1.2, 64, 32 );
            const meshLg1 = new THREE.Mesh( geometryLg, material );
		    const meshLg2 = new THREE.Mesh( geometryLg, material );
		    const meshLg3 = new THREE.Mesh( geometryLg, material );
            meshLg1.position.set(-6, 8, -1);
            scene.add( meshLg1);
            meshLg2.position.set(1, 1, -1);
            scene.add( meshLg2);
            meshLg3.position.set(1, 7, -1);
            scene.add( meshLg3);
        } 
        if (screenWidth >= 1024 && screenWidth < 1440) {
            const geometryXl = new THREE.SphereGeometry( 1.2, 64, 32 );
            const meshXl1 = new THREE.Mesh( geometryXl, material );
		    const meshXl2 = new THREE.Mesh( geometryXl, material );
		    const meshXl3 = new THREE.Mesh( geometryXl, material );
            meshXl1.position.set(-9, 8, -1);
            meshXl1.name='meshXl1';
            scene.add( meshXl1);
            meshXl2.position.set(5.5, 4, -1);
            scene.add( meshXl2);
            meshXl3.position.set(1, -1, -1);
            scene.add( meshXl3);
        } 
        if (screenWidth >= 1440) {
            const geometry2Xl = new THREE.SphereGeometry( 1.5, 64, 32 );
            const mesh2Xl1 = new THREE.Mesh( geometry2Xl, material );
		    const mesh2Xl2 = new THREE.Mesh( geometry2Xl, material );
		    const mesh2Xl3 = new THREE.Mesh( geometry2Xl, material );
            mesh2Xl1.position.set(-10.5, 4, -1);
            scene.add( mesh2Xl1);
            mesh2Xl2.position.set(2.5, 5.5, -1);
            scene.add( mesh2Xl2);
            mesh2Xl3.position.set(-1.5, -1, -1);
            scene.add( mesh2Xl3);
        } 

        // const meshXl1 = scene.getObjectByName("meshXl1");
        // console.log(meshXl1);
    // function mousemove(event){
    // 	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    // 	mouse.y = - ( event.clientY / window.innerHeight) * 2 + 1;
    // }
        // function onPointerMove( event ) {
	    //     pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	    //     pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        // }

    // function update( event ) {
    // 	raycaster.setFromCamera(mouse, camera);
    // 	intersects = raycaster.intersectObject(meshXl1);
    //     console.log(intersects);
    // 	if (intersects.length !== 0) {
    // 		const obj = intersects[0].object;
    // 		obj.material.color.set(0xffff00);
    // 	}
    // }
    // renderer.domElement.addEventListener('pointermove', mousemove, false);
    // renderer.domElement.addEventListener('click', update, false);
        // renderer.domElement.addEventListener('click', onClick, false);
        // function onClick(event: MouseEvent) {
        //     event.preventDefault();
        //     mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    	//     mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        //             	raycaster.setFromCamera(mouse, camera);
        // 	intersects = raycaster.intersectObject(meshXl1);
        // 	if (intersects.length !== 0) {
        // 		const obj = intersects[0].object;
        //         console.log(obj);
        // 		obj.material.color.set(0xffff00);
        // 	}
        // }
        // function update( event:MouseEvent ) {
        // 	raycaster.setFromCamera(mouse, camera);
        // 	intersects = raycaster.intersectObject(meshXl1);
        // 	if (intersects.length !== 0) {
        // 		const obj = intersects[0].object;
        //         console.log(obj);
        // 		// obj.material.color.set(0xffff00);
        // 	}
        // }
        // function render() {
        //     raycaster.setFromCamera( pointer, camera );
	    //     const intersects = raycaster.intersectObjects( scene.children );
        //         console.log(intersects);
	    //     for ( let i = 0; i < intersects.length; i ++ ) {
        //         console.log(intersects[ i ]);
        //       	// intersects[ i ].object.material.color.set( 0xff0000 );
	    //     }
	    // renderer.render( scene, camera );
        // }
        // window.addEventListener( 'pointermove', onPointerMove );

          

        // window.addEventListener( 'click', event => {
        //     clickMouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	    //     clickMouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        //     raycaster.setFromCamera(clickMouse, camera);
        //     const found = raycaster.intersectObjects( scene.children );
        //     console.log(found);
        //     if(found.length > 0 && found[0].object.userData.draggable) {
        //         console.log('hello');
        //     }
        // } );

        function render() {
            window.requestAnimationFrame(render);     
            renderer.render( scene, camera )
            }
        render(); 
    },[])
    			

    return (
        <div id='Block3D' className='h-[546px] absolute top-[210px] lg:top-[250px] 2xl:top-[290px] w-full'>
            <div ref={canvas} className='mx-0 bg-olga-bg w-full'/>           
        </div>
    )
}

export default Bubbles3D;







