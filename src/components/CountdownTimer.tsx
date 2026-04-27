'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownTimer({ isLight = false }: { isLight?: boolean }) {
  const targetDate = new Date('2027-01-26T10:00:00');
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Digit = ({ value, label, showColon = true }: { value: number, label: string, showColon?: boolean }) => (
    <div className="flex items-center gap-2 md:gap-4">
      <div className="flex flex-col items-center">
        <span 
          style={isLight ? { textShadow: '0 2px 10px rgba(0,0,0,0.5)' } : {}}
          className={`text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-1 font-bold ${
            isLight ? 'text-white' : 'text-[#8b7355]/60'
          }`}
        >
          {label}
        </span>
        <span 
          style={isLight ? { textShadow: '0 4px 15px rgba(0,0,0,0.5)' } : {}}
          className={`text-4xl md:text-6xl font-normal tracking-tighter ${
            isLight ? 'text-white' : 'text-[#5d4037]'
          }`}
        >
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      {showColon && (
        <span className={`text-2xl md:text-4xl font-extralight mt-4 ${
          isLight ? 'text-white/30' : 'text-[#8b7355]/30'
        }`}>:</span>
      )}
    </div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto flex items-end justify-center gap-6 md:gap-8 py-8">
      {/* Prefix Text */}
      <div className="flex flex-col items-end pb-1 pr-2 md:pr-4">
        <span 
          style={isLight ? { textShadow: '0 2px 10px rgba(0,0,0,0.5)' } : {}}
          className={`text-[10px] md:text-[12px] uppercase tracking-[0.3em] font-bold leading-tight ${
            isLight ? 'text-white' : 'text-[#8b7355]'
          }`}
        >
          Wedding
        </span>
        <span 
          style={isLight ? { textShadow: '0 2px 10px rgba(0,0,0,0.5)' } : {}}
          className={`text-[10px] md:text-[12px] uppercase tracking-[0.3em] font-bold leading-tight ${
            isLight ? 'text-white' : 'text-[#8b7355]'
          }`}
        >
          Starts In
        </span>
      </div>

      {/* Countdown Values */}
      <div className="flex items-center gap-2 md:gap-4">
        <Digit value={timeLeft.days} label="Days" />
        <Digit value={timeLeft.hours} label="Hours" />
        <Digit value={timeLeft.minutes} label="Mins" />
        <Digit value={timeLeft.seconds} label="Secs" showColon={false} />
      </div>
    </div>
  );
}
