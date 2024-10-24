"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import teamImages from "./ArrayTeamImages";

const FotoSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );

    // thumbnailsRef.current.forEach((thumbnail, index) => {
    //   if (thumbnail) {
    //     if (index === currentIndex) {
    //       gsap.to(thumbnail, { border: "2px solid yellow", duration: 0.5 });
    //     } else {
    //       gsap.to(thumbnail, {
    //         border: "2px solid transparent",
    //         duration: 0.5,
    //       });
    //     }
    //   }
    // });
  }, [currentIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
    console.log(currentIndex);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamImages.length) % teamImages.length
    );
  };
  const getThreeImages = () => {
    return [
      teamImages[currentIndex],
      teamImages[(currentIndex + 1) % teamImages.length],
      teamImages[(currentIndex + 2) % teamImages.length],
    ];
  };
  return (
    <div className="flex gap-14">
      <div className="flex flex-col gap-12 justify-center">
        <ul className="flex flex-col items-center gap-3 ">
          {getThreeImages().map((foto, index) => (
            <li
              key={index}
              ref={(el) => {
                thumbnailsRef.current[index] = el;
              }}
              className={`cursor-pointer w-[44px] h-[44px] rounded-full overflow-hidden ${
                index === 0 ? "border-solid border-2 border-yellow-300" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                width={64}
                height={64}
                alt={`фото учасника команди ${foto.name}`}
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
          src={teamImages[(currentIndex + 1) % teamImages.length].url}
          width={365}
          height={389}
          alt={teamImages[(currentIndex + 1) % teamImages.length].name}
          className="mb-4"
        />
        <p className="text-center text-sm">
          {teamImages[(currentIndex + 1) % teamImages.length].name}
        </p>
      </div>
    </div>
  );
};

export default FotoSwiper;
