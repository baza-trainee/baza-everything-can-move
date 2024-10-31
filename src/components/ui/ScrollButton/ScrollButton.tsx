"use client";
import "./style.css";
export default function ScrollButton() {
  return (
    <button
      // onClick={openModal}
      type="button"
      className="absolute right-[20px] btn-support mr-[24px] xl:h-[132px] xl:w-[132px] h-[88px] w-[88px]  xl:bottom-[-40%] bottom-[-20%] animate-pulse rounded-full bg-accent text-center text-m font-medium uppercase text-white custom-shadow transition-all duration-300 hover:bg-hover flex items-center justify-center z-10">
      contact
    </button>
  );
}
