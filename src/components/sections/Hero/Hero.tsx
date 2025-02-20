import React from 'react';
import { HeroTitle } from './HeroTitle';
import { HeroContent } from './HeroContent';
import { StarScene } from './StarAnimation/StarScene';
import { GridBackground } from '../../effects/GridBackground';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-20 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <GridBackground />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-black opacity-90" />
      
      {/* Star Animation */}
      <div className="relative z-20 w-full h-[200px] sm:h-[400px]">
        <StarScene />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          <HeroTitle />
          <HeroContent />
        </div>
      </div>
    </section>
  );
}