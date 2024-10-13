"use client"; // Додайте це, якщо використовуєте Next.js

import React from "react";
import Marquee from "react-double-marquee"; // Переконайтеся, що назва правильна

export default function FooComponent() {
  return (
    <div
      style={{
        width: "100%",
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
    >
      <Marquee direction="left">
        Some really really really really really long text Some really really
        really really really long text Some really really really really really
        long text Some really really really really really long text
      </Marquee>
    </div>
  );
}
