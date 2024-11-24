'use client'
import React, {useEffect, useRef} from 'react'
import * as THREE from 'three';
import styles from './head.module.css'
import SectionTitle from '@/components/ui/SectionTitle';
import clsx from 'clsx';

const Head = () => {
  	let camera, scene, renderer, parameters;
	let mouseX = 0, mouseY = 0;
	let windowHalfX = window.innerWidth / 2;
	let windowHalfY = window.innerHeight / 2;
	const materials = [];
	const canvasSnow = useRef(null);
	const screenWidth = window.innerWidth;

    useEffect(() => {

      	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 2000 );
		camera.position.z = 1000;
		scene = new THREE.Scene();
		scene.fog = new THREE.FogExp2( 0x000000, 0.0008 );
		const geometry = new THREE.BufferGeometry();
		const vertices = [];
		const textureLoader = new THREE.TextureLoader();
		const assignSRGB = ( texture ) => {
			texture.colorSpace = THREE.SRGBColorSpace;
			// texture.color = '#8f8ded';
			// console.log(texture);
		};
		const sprite1 = textureLoader.load( '/assets/images/Experience/snowflake1.png', assignSRGB );
		const sprite2 = textureLoader.load( '/assets/images/Experience/snowflake2.png', assignSRGB );
		const sprite3 = textureLoader.load( '/assets/images/Experience/snowflake3.png', assignSRGB );
		const sprite4 = textureLoader.load( '/assets/images/Experience/snowflake4.png', assignSRGB );
		const sprite5 = textureLoader.load( '/assets/images/Experience/snowflake5.png', assignSRGB );
		for ( let i = 0; i < 10000; i ++ ) {
			const x = Math.random() * 2000 - 1000;
			const y = Math.random() * 2000 - 1000;
			const z = Math.random() * 2000 - 1000;
			vertices.push( x, y, z );
		}
        geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
		parameters = [
			[[ 1.0, 0.2, 0.5 ], sprite2, 20 ],
			[[ 0.95, 0.1, 0.5 ], sprite3, 15 ],
			[[ 0.90, 0.05, 0.5 ], sprite1, 10 ],
			[[ 0.85, 0, 0.5 ], sprite5, 8 ],
			[[ 0.80, 0, 0.5 ], sprite4, 5 ]
		];
		for ( let i = 0; i < parameters.length; i ++ ) {
			const color = parameters[ i ][ 0 ];
			const sprite = parameters[ i ][ 1 ];
			const size = parameters[ i ][ 2 ];
			materials[ i ] = new THREE.PointsMaterial( { size: size, map: sprite, blending: THREE.AdditiveBlending, depthTest: false, transparent: true } );
			// console.log(materials[ i ].color);
			materials[ i ].color.setHSL( color[ 0 ], color[ 1 ], color[ 2 ], THREE.SRGBColorSpace );
			// console.log(materials[ i ].color);
			const particles = new THREE.Points( geometry, materials[ i ] );
			particles.rotation.x = Math.random() * 6;
			particles.rotation.y = Math.random() * 6;
			particles.rotation.z = Math.random() * 6;
			scene.add( particles );
		}
		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.setAnimationLoop( animate );
		canvasSnow.current?.appendChild( renderer.domElement );
		renderer.domElement.style.position = 'absolute';
		if (screenWidth < 768) {
			renderer.domElement.style.height = '742px';
        }
		if (screenWidth >= 768 && screenWidth < 1440) {
			renderer.domElement.style.height = '924px';
        }
		if (screenWidth >= 1440) {
			renderer.domElement.style.height = '742px';
        }    

		document.body.style.touchAction = 'none';
		canvasSnow.current?.addEventListener( 'pointermove', onPointerMove );
		window.addEventListener( 'resize', onWindowResize );
	    function onWindowResize() {
			windowHalfX = window.innerWidth / 2;
			windowHalfY = window.innerHeight / 2;
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( window.innerWidth, window.innerHeight );
		}

	function onPointerMove( event ) {
		if ( event.isPrimary === false ) return;
		mouseX = event.clientX - windowHalfX;
		mouseY = event.clientY - windowHalfY;
	}
	function animate() {
		render();
	}

    function render() {
		const time = Date.now() * 0.00005;
		camera.position.x += ( mouseX - camera.position.x ) * 0.05;
		camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
		camera.lookAt( scene.position );
		for ( let i = 0; i < scene.children.length; i ++ ) {
			const object = scene.children[ i ];
			if ( object instanceof THREE.Points ) {
				object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );
			}
		}
		for ( let i = 0; i < materials.length; i ++ ) {
			// const color = parameters[ i ][ 0 ];
			// const h = ( 360 * ( color[ 0 ] + time ) % 360 ) / 360;
			// console.log(h);
			// materials[ i ].color.setHSL( h, color[ 1 ], color[ 2 ], THREE.SRGBColorSpace );
		}
		renderer.render( scene, camera );
	}
    },[]);


  return (
    <div id={styles.snowflakes} className='h-[796px] pt-[54px] lg:h-[924px] lg:pt-0 2xl:h-[742px]'>
	    <div ref={canvasSnow}/>
		<SectionTitle className='absolute z-100 top-[200px] lg:top-[260px] 2xl:top-[132px] inset-x-0 text-center 2xl:container 2xl:text-left' secondDesign={true}>досвід</SectionTitle>
		<p className='absolute z-100 top-[253px] lg:top-[364px] 2xl:top-[245px] inset-x-0 text-center 2xl:text-left text-m leading-6 font-regular font-sans 2xl:container'>Досвід — це шлях, яким проходять наші <br className='block lg:hidden'/>трейні, <br className='hidden lg:block' /> здобуваючи практичні навички та <br className='block lg:hidden'/> впевненість у <br className='hidden lg:block' />  своїх силах. Це можливість <br className='block lg:hidden'/> втілювати знання в <br className='hidden lg:block' />  реальні проєкти,<br className='block lg:hidden'/> працювати в команді й <br className='hidden lg:block' /> відкривати для <br className='block lg:hidden'/> себе нові горизонти в ІТ-сфері.</p>
	</div>
  )

}

export default Head