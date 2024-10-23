"use client"; // Додайте це, якщо використовуєте Next.js

import React from "react";
import Marquee from "react-double-marquee";
import "./marquee.css";

export default function FooComponent() {
  return (
    <div className="relative w-full whitespace-nowrap overflow-hidden marque-item">
      <Marquee direction="left">
        <span className="line-dekor"></span>
        baza trainee baza trainee
        baza trainee baza trainee baza trainee baza trainee baza trainee baza
        trainee baza trainee
      </Marquee>
      <Marquee direction="right">
        <span className="line-dekor line-dekor_2"></span>
        baza trainee baza trainee
        baza trainee baza trainee baza trainee baza
        trainee baza trainee baza trainee baza trainee
      </Marquee>
    </div>
  );
}
