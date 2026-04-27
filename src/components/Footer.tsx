'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative w-full mt-20">
      {/* Footer Image with Top Dissolve */}
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
        <img 
          src="/Gallery/6.jpeg" 
          className="w-full h-full object-cover object-center"
          alt="Footer Portrait"
        />
        {/* Multi-layered seamless feathered transition (Top Dissolve) */}
        <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#fcf9f2] via-[#fcf9f2] to-transparent via-[20%] opacity-100" />
        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-[#fcf9f2] to-transparent opacity-100" />
        
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 px-6"
          >
             <h2 className="text-4xl md:text-5xl font-light text-white drop-shadow-lg tracking-tight" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.4)' }}>
               Thank You
             </h2>
             <div className="h-px w-12 bg-white/40 mx-auto mt-4" />
             <p className="text-sm md:text-base font-medium text-white drop-shadow-md leading-relaxed max-w-xs mx-auto" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
               Thank you for your time, and we surely hope you will come to our wedding.
             </p>
             <p className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-white/90 drop-shadow-md font-bold mt-6">
               Shasini & Lahiru
             </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
