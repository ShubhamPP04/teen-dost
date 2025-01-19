'use client';

import React from 'react';
import { InfiniteSlider } from './infinite-slider';

const LOGOS = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React",
    color: "#61DAFB"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    alt: "Vue",
    color: "#4FC08D"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    alt: "JavaScript",
    color: "#F7DF1E"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    alt: "TypeScript",
    color: "#3178C6"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "Tailwind",
    color: "#38B2AC"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    alt: "Sass",
    color: "#CC6699"
  }
];

// Create a larger array of logos for better coverage
const DUPLICATED_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS];

export function InfiniteSliderDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden py-10">
      <h1 className="relative z-10 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl mb-12">
        Technologies We Use
      </h1>
      <div className="w-full overflow-hidden py-12">
        <InfiniteSlider direction="left" speed={30} className="py-8 pb-16">
          {DUPLICATED_LOGOS.map((logo, idx) => (
            <div 
              key={idx} 
              className="w-20 h-20 md:w-24 md:h-24 relative flex-shrink-0 mx-8 p-4 hover:scale-110 transition-transform duration-200 group"
            >
              <img 
                src={logo.url} 
                alt={logo.alt}
                className="object-contain w-full h-full drop-shadow-lg"
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap bg-white/50 dark:bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm group-hover:bg-white/80 dark:group-hover:bg-black/80 transition-all">
                {logo.alt}
              </div>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
} 