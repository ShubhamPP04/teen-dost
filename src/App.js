import React from 'react';
import { HeroScrollDemo } from './components/ui/container-scroll-animation.demo';
import { AnimatedTestimonialsDemo } from './components/ui/animated-testimonials.demo';
import { ThemeToggle } from './components/ui/theme-toggle';
import { Waves } from './components/ui/waves-background';
import { ThemeProvider, useTheme } from './lib/ThemeContext';
import { StackedCircularFooter } from './components/ui/stacked-circular-footer';
import { OrbitingCirclesDemo } from './components/ui/orbiting-circles.demo';
import { InfiniteSliderDemo } from './components/ui/infinite-slider.demo';
import { NavBarDemo } from './components/ui/tubelight-navbar.demo';

function AppContent() {
  const { isDark } = useTheme();
  
  return (
    <>
      <div className="fixed inset-0 z-0">
        <Waves 
          lineColor={isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)"} 
          backgroundColor={isDark ? "#000000" : "#ffffff"}
          waveOpacity={isDark ? 0.4 : 0.5}
        />
      </div>

      <div className="fixed top-4 right-4 z-[100]">
        <ThemeToggle />
      </div>

      <NavBarDemo />

      <main className="relative z-10 min-h-screen">
        <section id="home">
          <HeroScrollDemo />
        </section>
        <section id="people" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Who We Are
            </h2>
            <AnimatedTestimonialsDemo />
          </div>
        </section>
        <section id="tech" className="py-12">
          <InfiniteSliderDemo />
        </section>
        <section id="projects" className="py-12">
          <OrbitingCirclesDemo />
        </section>
        <StackedCircularFooter />
      </main>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
