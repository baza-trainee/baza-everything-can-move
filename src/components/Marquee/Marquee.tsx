"use client"; // Додайте це, якщо використовуєте Next.js

import React from "react";
import Marquee from "react-double-marquee"; // Переконайтеся, що назва правильна
import "./marquee.css";
export default function FooComponent() {
  return (
    <div className="w-full whitespace-nowrap overflow-hidden marque-item">
      <Marquee direction="left" className="marque-item">
        baza trainee baza trainee baza trainee baza trainee baza trainee baza
        trainee baza trainee baza trainee baza trainee
      </Marquee>
      <Marquee direction="right" className="marque-item">
        baza trainee baza trainee baza trainee baza trainee baza trainee baza
        trainee baza trainee baza trainee baza trainee
      </Marquee>
    </div>
  );
}
