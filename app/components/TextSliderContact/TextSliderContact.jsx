import React from "react";

export default function TextSliderContact() {
  return (
    <div className="relative overflow-hidden w-full h-custom flex items-center">
      {/* Bewegende tekst */}
      <div className="absolute whitespace-nowrap animate-slideLeft gradient-outline flex space-x-80">
        <span>CONTACT</span>
        <span>CONTACT</span>
        <span>CONTACT</span>
      </div>
    </div>
  );
}
