'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeartRain() {
  const [hearts, setHearts] = useState<any[]>([]);

  useEffect(() => {
    // Generate 60 random hearts with different positions, sizes, and speeds
    const newHearts = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 5,
      size: 6 + Math.random() * 8,
      opacity: 0.3 + Math.random() * 0.4,
      xOffset: (Math.random() - 0.5) * 150, // horizontal drift
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: -50, x: 0, opacity: 0, rotate: 0 }}
          animate={{ 
            y: '110vh', 
            x: heart.xOffset, 
            opacity: [0, heart.opacity, heart.opacity, 0],
            rotate: 360 
          }}
          transition={{ 
            duration: heart.duration, 
            delay: heart.delay, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute text-red-500"
          style={{ 
            left: heart.left,
            width: heart.size,
            height: heart.size,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
