import React from "react";

export default function TextSliderOverMij() {
  return (
    <div className="relative overflow-hidden w-full h-custom flex items-center">
      {/* Bewegende tekst */}
      <div className="absolute whitespace-nowrap animate-slideLeft gradient-outline flex space-x-80">
        <span>OVER MIJ</span>
        <span>OVER MIJ</span>
        <span>OVER MIJ</span>
      </div>
    </div>
  );
}
