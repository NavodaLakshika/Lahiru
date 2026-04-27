'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function MapSection() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.568478479532!2d81.01833587483758!3d6.821360093166543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae467a731efc193%3A0x6b77248f2b3b757e!2sThe%20Tea%20Tree%20Resort!5e0!3m2!1sen!2slk!4v1714210000000!5m2!1sen!2slk";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=The+Tea+Tree+Resort+Bandarawela";

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-20 space-y-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 100,
          duration: 0.8,
          delay: 0.2
        }}
        className="relative overflow-hidden shadow-2xl border-4 border-white aspect-video md:aspect-[21/9]"
        style={{ borderRadius: '10px 0px 10px 0px' }}
      >
        <iframe
          src={mapUrl}
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

      <div className="flex flex-col items-center space-y-4">
        <p className="text-sm text-[#8b7355] text-center max-w-sm">
          The Tea Tree Resort, Bandarawela. <br />
          Click below for the most efficient route to our celebration.
        </p>
        <motion.a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-8 py-3 bg-[#5d4037] text-[#fdfbf7] text-xs uppercase tracking-widest rounded-[8px] hover:bg-[#8b7355] transition-colors shadow-lg"
        >
          <Navigation size={14} />
          Get Directions
        </motion.a>
      </div>
    </div>
  );
}
