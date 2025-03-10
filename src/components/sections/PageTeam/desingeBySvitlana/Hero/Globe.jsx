'use client';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import { useMediaQuery } from 'react-responsive';

const Globes = () => {
  const globeEl = useRef();
  const isMobile = useMediaQuery({ query: '(max-width: 767.5px)' });

  const isDesktop = useMediaQuery({ query: '(min-width: 1399.5px)' });

  const dimentionsGloge = isMobile
    ? { width: 420, height: 420 }
    : !isDesktop
      ? { width: 665, height: 665 }
      : { width: 750, height: 750 };

  useEffect(() => {
    const globe = globeEl.current;
    if (!globe) return;

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;
    globe.controls().enableZoom = false;
    globe.controls().enableRotate = false;
    globe.controls().enablePan = false;

    const CLOUDS_IMG_URL = '/clouds.png';
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.006;

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(
          globe.getGlobeRadius() * (1 + CLOUDS_ALT),
          75,
          75
        ),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });
  }, []);
  return (
    <Globe
      width={dimentionsGloge.width}
      height={dimentionsGloge.height}
      ref={globeEl}
      animateIn={false}
      backgroundColor="#000000"
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      enablePointerInteraction={false}
    />
  );
};

export default Globes;
