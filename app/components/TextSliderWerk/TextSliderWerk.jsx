import React from "react";

export default function TextSliderWerk() {
  return (
    <div className="relative overflow-hidden w-full h-custom flex items-center">
      {/* Bewegende tekst */}
      <div className="absolute whitespace-nowrap animate-slideLeft gradient-outline flex space-x-80">
        <span>WERK</span>
        <span>WERK</span>
        <span>WERK</span>
      </div>
    </div>
  );
}
