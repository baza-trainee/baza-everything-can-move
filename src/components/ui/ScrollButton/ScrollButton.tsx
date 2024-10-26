"use client";
import "./style.css";
export default function ScrollButton() {
  return (
    <button
      // onClick={openModal}
      type="button"
      className="fixed right-[100px] btn-support mr-[24px] h-[132px] w-[132px] bottom-8 animate-pulse rounded-full bg-accent text-center text-m font-medium uppercase text-white custom-shadow transition-all duration-300 hover:bg-hover flex items-center justify-center z-10">
      contact
    </button>
  );
}
