"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    console.log('Next clicked');
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    console.log('Prev clicked');
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-20 touch-pan-y", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
        <div>
          <div className="relative h-64 sm:h-72 md:h-80 w-full touch-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 touch-none"
              >
                <img
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  className="h-full w-full rounded-2xl md:rounded-3xl object-cover object-center select-none"
                  draggable="false"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-2 md:py-4 touch-pan-y">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="touch-pan-y"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white select-none">
                {testimonials[active].name}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 select-none">
                {testimonials[active].designation}
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mt-4 md:mt-8">
                {testimonials[active].quote}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-3 md:gap-4 pt-8 md:pt-12">
            <button
              onClick={handlePrev}
              className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors active:scale-95 touch-none"
            >
              <IconArrowLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors active:scale-95 touch-none"
            >
              <IconArrowRight className="h-5 w-5 md:h-6 md:w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 