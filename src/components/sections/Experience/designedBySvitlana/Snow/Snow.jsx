'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './snow.module.css';
import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';
import Container from '@/components/ui/DesignBySvitlna/Container';

const Snow = () => {
  let mouseX = 0,
    mouseY = 0;
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;
  const materials = [];
  const canvasSnow = useRef(null);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 1000;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0008);
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const textureLoader = new THREE.TextureLoader();
    const assignSRGB = (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
    };
    const sprite1 = textureLoader.load(
      '/assets/images/Experience/snowflake1.png',
      assignSRGB
    );
    const sprite2 = textureLoader.load(
      '/assets/images/Experience/snowflake2.png',
      assignSRGB
    );
    const sprite3 = textureLoader.load(
      '/assets/images/Experience/snowflake3.png',
      assignSRGB
    );
    const sprite4 = textureLoader.load(
      '/assets/images/Experience/snowflake4.png',
      assignSRGB
    );
    const sprite5 = textureLoader.load(
      '/assets/images/Experience/snowflake5.png',
      assignSRGB
    );
    for (let i = 0; i < 10000; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      vertices.push(x, y, z);
    }
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    const parameters = [
      [[0.6667, 0.88, 0.84], sprite2, 20],
      [[0.6667, 0.88, 0.84], sprite3, 15],
      [[0.6667, 0.88, 0.84], sprite1, 10],
      [[0.6667, 0.88, 0.84], sprite5, 8],
      [[0.6667, 0.88, 0.84], sprite4, 5],
    ];

    for (let i = 0; i < parameters.length; i++) {
      const color = parameters[i][0];
      const sprite = parameters[i][1];
      const size = Number(parameters[i][2]);
      materials[i] = new THREE.PointsMaterial({
        size: size,
        map: sprite,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
      });
      materials[i].color.setHSL(
        color[0],
        color[1],
        color[2],
        THREE.SRGBColorSpace
      );
      const particles = new THREE.Points(geometry, materials[i]);
      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;
      scene.add(particles);
    }
    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    canvasSnow.current?.appendChild(renderer.domElement);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.width = '100%';
    if (screenWidth < 768) {
      renderer.domElement.style.height = '742px';
    }
    if (screenWidth >= 768 && screenWidth < 1440) {
      renderer.domElement.style.height = '924px';
    }
    if (screenWidth >= 1440) {
      renderer.domElement.style.height = '742px';
    }
    canvasSnow.current?.addEventListener('pointermove', onPointerMove);
    window.addEventListener('resize', onWindowResize);
    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onPointerMove(event) {
      if (event.isPrimary === false) return;
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    }
    function animate() {
      render();
    }

    function render() {
      const time = Date.now() * 0.00005;
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      for (let i = 0; i < scene.children.length; i++) {
        const object = scene.children[i];
        if (object instanceof THREE.Points) {
          object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
        }
      }
      for (let i = 0; i < materials.length; i++) {
        const color = parameters[i][0];
        const lighteningAdj =
          (((360 * (0.84 + time * 0.16)) % 360) / 360) * 0.16;
        const lighteningAfterAdj = color[2] + lighteningAdj;
        materials[i].color.setHSL(
          color[0],
          color[1],
          lighteningAfterAdj,
          THREE.SRGBColorSpace
        );
      }
      renderer.render(scene, camera);
    }
  }, []);

  return (
    <>

    <div
      id={styles.snowflakes}
      className="relative h-[796px] pt-[54px] lg:h-[924px] lg:pt-0 2xl:h-[742px] w-full overflow-hidden"
    >
      <div ref={canvasSnow} />
        <div
          className="absolute top-10 lg:top-0 h-20 w-full z-50"
          style={{
            background: ` linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.5) 57.08%, rgba(0, 0, 0, 0.257173) 80.1%, rgba(0, 0, 0, 0) 98.1%)`,
          }}
        ></div>
          <Container className="relative">
            <div className="z-100 absolute inset-x-0 left-[50%] top-[200px] w-[331px] translate-x-[-50%] text-center lg:top-[260px] lg:w-[448px] 2xl:left-20 2xl:top-[132px] 2xl:w-[569px] 2xl:translate-x-0 2xl:text-left">
              <AnimatedTitle title="досвід" className="mb-4" />

              <p className="w-full font-third-family text-m font-regular leading-[150%] 2xl:text-l">
                Досвід — це шлях, яким проходять наші трейні, здобуваючи практичні
                навички та впевненість у своїх силах. Це можливість втілювати в
                життя реальні проєкти, працювати в команді й відкривати для себе
                нові горизонти в ІТ-сфері.
              </p>
              <div
                className="absolute -bottom-10 -left-8 -right-8 -z-10 h-[256px] rounded-[70%] 2xl:-left-10 2xl:-right-10"
                style={{
                  background:
                    'radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0.6814) 71.6%, rgba(0, 0, 0, 0.4) 100%)',
                }}
              ></div>
            </div>
          </Container>
        <div
          className="absolute bottom-0 h-20 w-full z-50"
          style={{ background: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.5) 57.08%, rgba(0, 0, 0, 0.257173) 80.1%, rgba(0, 0, 0, 0) 98.1%)` }}>
        </div>
      </div>
    </>
  );
};

export default Snow;