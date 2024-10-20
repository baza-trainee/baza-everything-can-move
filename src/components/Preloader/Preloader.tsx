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
        <div className="circular-container">
          <div className="circular-text">
            <span>
              <svg viewBox="0 0 400 400" width="450" height="450">
                {/* Внутрішній круг */}
                <circle cx="200" cy="200" r="50" fill="white" />
                <text
                  x="200"
                  y="200"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="20"
                  fill="black">
                  BAZA
                </text>
                {/* Верхній текст (Маленьке коло) */}
                <path
                  id="small-circle"
                  d="M 200,200 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                  fill="none"
                />
                <text fill="white" transform="rotate(-90, 200, 200)">
                  <textPath
                    href="#small-circle"
                    startOffset="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    textLength="300">
                    BAZA TRAINEE UKRAINE
                  </textPath>
                </text>
                {/* Нижній текст (Маленьке коло) */}
                <text fill="white" transform="rotate(90, 200, 200)">
                  <textPath
                    href="#small-circle"
                    startOffset="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    textLength="300">
                    BAZA TRAINEE UKRAINE
                  </textPath>
                </text>
                {/* Більше зовнішнє коло */}
                <path
                  id="large-circle"
                  d="M 200,200 m -150, 0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
                  fill="none"
                />
                <text fill="white" transform="rotate(-90, 200, 200)">
                  <textPath
                    href="#large-circle"
                    startOffset="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    textLength="450">
                    BAZA TRAINEE UKRAINE
                  </textPath>
                </text>{" "}
                {/* Більше зовнішнє коло */}
                <path
                  id="large-circle"
                  d="M 200,200 m -150, 0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
                  fill="none"
                />
                <text fill="white" transform="rotate(90, 200, 200)">
                  <textPath
                    href="#large-circle"
                    startOffset="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    textLength="450">
                    BAZA TRAINEE UKRAINE
                  </textPath>
                </text>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
