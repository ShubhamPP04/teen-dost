'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

export function InfiniteSlider({
  children,
  direction = 'left',
  speed = 50,
  className = ''
}) {
  const [ref, { width }] = useMeasure();
  const [contentRef, { width: contentWidth }] = useMeasure();
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (contentWidth) {
      setDuration(contentWidth / speed);
    }
  }, [contentWidth, speed]);

  return (
    <div
      className={className}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
      }}
      ref={ref}
    >
      <motion.div
        animate={{
          x: direction === 'left' ? [-contentWidth/2, -contentWidth] : [0, contentWidth/2]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop'
        }}
        style={{
          width: 'fit-content',
          display: 'flex'
        }}
      >
        <div ref={contentRef} className="flex gap-16 px-8">
          {children}
          {children}
          {children}
        </div>
      </motion.div>
    </div>
  );
} 