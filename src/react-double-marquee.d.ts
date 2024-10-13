declare module "react-double-marquee" {
  import React from "react";

  interface MarqueeProps {
    direction?: "left" | "right";
    speed?: number;
    delay?: number;
    // Додайте інші властивості, якщо потрібно
  }

  const Marquee: React.FC<MarqueeProps>;
  export default Marquee;
}
