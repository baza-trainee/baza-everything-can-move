"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import teamImages from "../../../../public/assets/images/TemSection/ArrayTeamImages";
import { gsap } from "gsap";

const FotoSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );

    thumbnailsRef.current.forEach((thumbnail, index) => {
      if (thumbnail) {
        if (index === currentIndex) {
          gsap.to(thumbnail, { border: "2px solid yellow", duration: 0.5 });
        } else {
          gsap.to(thumbnail, {
            border: "2px solid transparent",
            duration: 0.5,
          });
        }
      }
    });
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamImages.length) % teamImages.length
    );
  };

  return (
    <div className="flex gap-14">
      <div className="flex flex-col gap-12 justify-center">
        <ul className="flex flex-col items-center gap-3">
          {teamImages.map((foto, index) => (
            <li
              key={index}
              ref={(el) => {
                thumbnailsRef.current[index] = el;
              }}
              className="cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                width={64}
                height={64}
                alt={`фото учасника команди ${index + 1}`}
                src={foto.url}
              />
            </li>
          ))}
        </ul>

        <div className="flex flex-col">
          <button type="button" className="mb-3" onClick={prevSlide}>
            <Image
              width={64}
              height={33}
              alt="Кнопка вліво"
              src={"/assets/images/TemSection/IconRow.svg"}
            />
          </button>
          <button type="button" onClick={nextSlide}>
            <Image
              width={64}
              height={33}
              alt="Кнопка вправо"
              src={"/assets/images/TemSection/IconRow.svg"}
              className="rotate-180"
            />
          </button>
        </div>
      </div>

      <div ref={imageRef}>
        <Image
          src={teamImages[currentIndex].url}
          width={365}
          height={389}
          alt="Фото учасника команди"
          className="mb-4"
        />
        <p className="text-center text-sm">{teamImages[currentIndex].name}</p>
      </div>
    </div>
  );
};

export default FotoSwiper;
