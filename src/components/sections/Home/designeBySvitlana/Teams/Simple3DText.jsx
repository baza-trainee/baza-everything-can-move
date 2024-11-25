'use client';
import React, { useRef, useEffect } from "react";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

export default function StrokeText({ text, position, color, strokeColor, strokeWidth, rotation, scale }) {
  const refText = useRef();
  const refStroke = useRef();

  useEffect(() => {
    const fontLoader = new FontLoader();
    fontLoader.load("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json", (loadedFont) => {
      // Текст з обводкою
      const textGeo = new TextGeometry(text, {
        font: loadedFont,
        size: 1,
        height: 0.1,
        curveSegments: 10,
        bevelEnabled: false,  // Без шліфування
      });
      refText.current.geometry = textGeo;

      // Обводка
      const strokeGeo = new TextGeometry(text, {
        font: loadedFont,
        size: 1 + strokeWidth, // збільшуємо розмір для обводки
        height: 0.5,
        bevelEnabled: false,  // Без шліфування
      });
      refStroke.current.geometry = strokeGeo;
    });
  }, [text, strokeWidth]);

  return (
    <>
      {/* Обводка */}
      <mesh ref={refStroke} position={position} rotation={rotation} scale={scale}>
        <meshBasicMaterial color={color} wireframe={true} /> {/* Використовуємо wireframe для прозорого заповнення */}
        <meshBasicMaterial color={strokeColor} />
      </mesh>

      {/* Основний текст (без заливки) */}
      <mesh ref={refText} position={position} rotation={rotation} scale={scale}>
        <meshBasicMaterial color={color} wireframe={true} /> {/* Використовуємо wireframe для прозорого заповнення */}
      </mesh>
    </>
  );
}
