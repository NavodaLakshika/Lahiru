'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function GallerySection() {
  const images = [
    '/gallery/1.jpeg',
    '/gallery/2.jpeg',
    '/gallery/3.jpeg',
  ];

  return (
    <div className="w-full py-16 px-4 flex flex-col items-center space-y-12 bg-transparent">
      {/* Top Monogram */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl serif italic text-[#8b7355] opacity-80"
      >
      </motion.div>

      {/* 3-Panel Gallery */}
      <div className="relative flex justify-center items-center gap-4 h-[450px] w-full max-w-md">
        {/* Left Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="w-1/3 h-[85%] rounded-sm overflow-hidden shadow-xl self-start mt-4"
        >
          <img src={images[0]} alt="Gallery 1" className="h-full w-full object-cover" />
        </motion.div>

        {/* Center Panel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="w-1/3 h-[95%] rounded-sm overflow-hidden shadow-2xl relative"
        >
          <img src={images[1]} alt="Gallery 2" className="h-full w-full object-cover" />
        </motion.div>

        {/* Right Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="w-1/3 h-[85%] rounded-sm overflow-hidden shadow-xl self-end mb-4"
        >
          <img src={images[2]} alt="Gallery 3" className="h-full w-full object-cover" />
        </motion.div>
      </div>

      {/* Date at Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-sm tracking-[0.4em] text-[#8b7355] font-light"
      >
        24 . 12 . 27
      </motion.div>
    </div>
  );
}
