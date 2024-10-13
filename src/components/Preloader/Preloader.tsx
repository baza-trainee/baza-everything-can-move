"use client"; // Якщо використовуєте useEffect

import React, { useEffect } from "react";
import { preLoaderAnim } from "../anomations/index"; // Перевірте шлях
import "./preloader.css"; // Імпортуємо CSS файл
const PreLoader: React.FC = () => {
  useEffect(() => {
    preLoaderAnim(); // Виклик функції анімації
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>F</span>
        <span>r</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>e</span>
        <span>n</span>
        <span>d</span>
        <span> </span>
        {/* <span>Developer, </span> */}
        <span> a </span>
        <span>n </span>
        <span>i </span>
        <span>m </span>
        <span>a </span>
        <span>t </span>
        <span>i </span>
        <span>o </span>
        <span> n</span>
      </div>
    </div>
  );
};

export default PreLoader;
