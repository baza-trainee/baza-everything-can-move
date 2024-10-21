"use client"; // Додайте це, якщо використовуєте Next.js

import React from "react";
import Marquee from "react-double-marquee";
import "./marquee.css";

export default function FooComponent() {
  return (
    <div className="relative w-full whitespace-nowrap overflow-hidden marque-item">
      <Marquee direction="left">
        <span className="absolute-highlight"></span>
        baza trainee baza trainee
        baza trainee baza trainee baza trainee baza trainee baza trainee baza
        trainee baza trainee
      </Marquee>
      <Marquee direction="right">
        baza trainee baza trainee
        baza trainee baza trainee baza trainee baza
        trainee baza trainee baza trainee baza trainee
        <span className="absolute-highlight"></span>
      </Marquee>
    </div>
  );
}
