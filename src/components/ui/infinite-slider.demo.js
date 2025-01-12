'use client';

import React from 'react';
import { InfiniteSlider } from './infinite-slider';

const LOGOS = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React Logo"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    alt: "Vue Logo"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    alt: "JavaScript Logo"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    alt: "TypeScript Logo"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "Tailwind Logo"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    alt: "Sass Logo"
  }
];

// Create a larger array of logos for better coverage
const DUPLICATED_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

export function InfiniteSliderDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <h1 className="relative z-10 bg-gradient-to-b from-neutral-800 to-neutral-500 bg-clip-text text-4xl font-medium text-transparent md:text-7xl mb-12">
        Technologies We Use
      </h1>
      <div className="w-full overflow-hidden">
        <InfiniteSlider direction="left" speed={150}>
          {DUPLICATED_LOGOS.map((logo, idx) => (
            <div key={idx} className="w-12 h-12 md:w-16 md:h-16 relative flex-shrink-0">
              <img 
                src={logo.url} 
                alt={logo.alt}
                className="object-contain w-full h-full dark:invert"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
} 