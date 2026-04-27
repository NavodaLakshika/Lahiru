'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';
import GallerySection from '../components/GallerySection';
import PhotoGrid from '../components/PhotoGrid';
import MapSection from '../components/MapSection';
import CountdownTimer from '../components/CountdownTimer';
import Footer from '../components/Footer';
import WishesSection from '../components/WishesSection';
import HeartRain from '../components/HeartRain';

export default function InvitationPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeartRain, setShowHeartRain] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    let interval: any;
    if (isOpen) {
      setShowHeartRain(true);
      interval = setInterval(() => {
        setShowHeartRain(prev => !prev);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isOpen]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (isOpen && !isPlaying && audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => { });
    }
  }, [isOpen]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#fdfbf7] font-serif">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        src="/music/sahilmadan.mp3"
        loop
      />

      <AnimatePresence>
        {showHeartRain && <HeartRain />}
      </AnimatePresence>

      {/* Music Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleAudio}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-[#8b7355]/20 text-[#8b7355]"
        >
          {isPlaying ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Music size={18} />
            </motion.div>
          ) : (
            <VolumeX size={18} />
          )}
        </motion.button>
      </div>
      {/* Background Content (Revealed after opening) */}
      <div className="absolute inset-0 flex flex-col items-center justify-start bg-[#fcf9f2] overflow-y-auto z-0 pt-0">
        {/* Traditional Background Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 border-[40px] border-[#8b7355] rounded-full opacity-20" />
          <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] border-[2px] border-[#8b7355] rounded-full opacity-10" />

          {/* Subtle Mandala Watermarks */}
          <img src="/mandala2.png" className="absolute top-1/4 -left-48 w-[500px] opacity-20 rotate-45 mix-blend-multiply" alt="" />
          <img src="/mandala2.png" className="absolute bottom-1/4 -right-48 w-[600px] opacity-20 -rotate-12 mix-blend-multiply" alt="" />

          {/* Decorative Vines (Liyawel Style) */}
          <svg className="absolute top-0 right-0 w-64 h-64 text-[#8b7355] opacity-30 transform scale-x-[-1]" viewBox="0 0 100 100">
            <path d="M100,0 Q80,10 70,30 T50,60 T20,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="70" cy="30" r="1" fill="currentColor" />
            <circle cx="50" cy="60" r="1.5" fill="currentColor" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="relative w-full flex flex-col items-center z-10"
        >
          {/* Top Header Photo - Optimized Full Width Banner */}
          <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
            <img
              src="/gallery/25.jpeg"
              className="w-full h-full object-cover object-center"
              alt="Couples Header"
            />
            {/* Multi-layered seamless feathered transition (Confined to bottom for focus) */}
            <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#fcf9f2] via-[#fcf9f2] to-transparent via-[20%] opacity-100" />
            <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#fcf9f2] to-transparent opacity-100" />

            {/* Floating Timer over image */}
            <div className="absolute bottom-16 left-0 w-full z-20">
              <CountdownTimer isLight />
            </div>
          </section>

          {/* Content Container (Constrained Width with Padding) */}
          <div className="max-w-3xl w-full space-y-8 text-center px-8 md:px-0 py-12">
            {/* Header Section (Parents) - Fade in instead of typewriter */}
            <section className="space-y-4 border-b border-[#8b7355]/10 pb-10 mt-[-10px]">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-[10px] uppercase tracking-[0.4em] text-[#8b7355]"
              >
                With the blessings of the almighty
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <div className="text-2xl md:text-3xl text-[#5d4037] font-[family:var(--font-playball)] tracking-wide">
                    Mr. & Mrs. Senadeera
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-8 bg-[#8b7355]/10" />
                  <div className="text-[10px] uppercase tracking-[0.4em] text-[#8b7355]/60  font-light">
                    and
                  </div>
                  <div className="h-px w-8 bg-[#8b7355]/10" />
                </div>

                <div className="space-y-1">
                  <div className="text-2xl md:text-3xl text-[#5d4037] font-[family:var(--font-playball)] tracking-wide">
                    Mr. & Mrs. Darmasiri
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1 }}
                className="text-[10px] uppercase tracking-[0.2em] text-[#8b7355] leading-relaxed max-w-xs mx-auto"
              >
                Joyfully announce the forthcoming wedding of their beloved children
              </motion.p>
            </section>

            {/* Names Section - Slow Typewriter Reveal */}
            <section className="relative">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2, delayChildren: 1.5 }
                  }
                }}
                className="text-6xl md:text-8xl font-light text-[#5d4037] tracking-[0.2em]"
              >
                {"Shasini".split("").map((char, i) => (
                  <motion.span key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{char}</motion.span>
                ))}
              </motion.h1>
              <div className="flex justify-center items-center gap-4 py-4">
                <div className="h-px w-8 bg-[#8b7355]/30" />
                <div className="text-[#e11d48]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                </div>
                <div className="h-px w-8 bg-[#8b7355]/30" />
              </div>
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2, delayChildren: 1.5 }
                  }
                }}
                className="text-6xl md:text-8xl font-light text-[#5d4037] tracking-[0.2em]"
              >
                {"Lahiru".split("").map((char, i) => (
                  <motion.span key={i} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{char}</motion.span>
                ))}
              </motion.h1>
            </section>

            {/* Invitation Text - Fade in instead of typewriter */}
            <section className="space-y-6 max-w-md mx-auto">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3, duration: 1 }}
                className="text-xs uppercase tracking-widest text-[#8b7355]"
              >
                We warmly invite
              </motion.p>
              <div className="border-b border-dotted border-[#8b7355]/40 py-2">
              </div>
              <p className="text-xs uppercase tracking-widest text-[#5d4037] leading-loose">
                To join us in celebrating this joyful union and to bless the couple with your presence.
              </p>
            </section>

            {/* New Cinematic Gallery Section */}
            <div className="mt-[-80px]">
              <GallerySection />
            </div>

            {/* Date & Time Section - Artistic Save the Date Style */}
            <section className="py-12 border-y border-[#8b7355]/10 flex flex-col items-center space-y-8 mt-[-30px] relative">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl text-[#5d4037] font-[family:var(--font-playball)]"
              >
                January
              </motion.h3>

              <div className="flex items-center justify-center gap-10 md:gap-16 relative">
                <div className="text-right space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8b7355]">Tuesday</p>
                  <p className="text-xs text-[#5d4037]/60">2027</p>
                </div>

                <div className="relative flex items-center justify-center">
                  {/* Solid Red Heart Centerpiece - Matching the Names Heart */}
                  <div className="absolute text-[#e11d48] scale-[2.5] mt-3">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                  </div>

                  <div className="text-3xl md:text-4xl font-bold text-white relative z-10 mt-[-2px]">26</div>
                </div>

                <div className="text-left space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8b7355]">10:00 AM</p>
                  <p className="text-xs text-[#5d4037]/60">Onward</p>
                </div>
              </div>
            </section>




            {/* Venue Section */}
            <section className="space-y-3">
              <h3 className="text-sm font-medium uppercase tracking-widest text-[#5d4037]">The Tea Tree Resort, Bandarawela</h3>
              <p className="text-xs uppercase tracking-widest text-[#8b7355]">Poruwa Ceremony 10:42 AM</p>
            </section>

            {/* Google Maps Location Section */}
            <div className="mt-[-90px]">
              <MapSection />
            </div>

            {/* Full Photo Grid Section (24 Images) */}
            <div className="mt-[-90px]">
              <PhotoGrid />
            </div>

            <div className="mt-[-150px]">
              <WishesSection />
            </div>

          </div>

          <div className="mt-[-150px]">
            <Footer />
          </div>

        </motion.div>
      </div>

      {/* Opening Doors (Window) */}
      <div className={`relative z-10 flex h-screen w-full overflow-hidden ${isOpen ? 'pointer-events-none' : ''}`}>

        {/* Left Door */}
        <motion.div
          animate={isOpen ? { x: '-100%' } : { x: '0%' }}
          transition={{ duration: 1.5, ease: [0.45, 0.05, 0.55, 0.95] }}
          className="relative h-full w-1/2 bg-[#fdfbf7] border-r border-black/5 flex items-center justify-end overflow-hidden shadow-2xl origin-left"
        >
          <div className="texture-bg absolute inset-0 opacity-50" />

          {/* Wedding Announcement Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center md:items-end p-4 md:pr-24 lg:pr-32 z-20 text-center">
            <div className="w-full max-w-[350px] md:max-w-[140px] space-y-6">

              <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#8b7355] font-medium leading-relaxed">
                The Wedding <br /> of
              </h2>

              <h1 className="text-4xl md:text-5xl font-light text-[#5d4037] tracking-tight leading-tight">
                Lahiru
                <br />
                <span className="text-2xl serif text-[#8b7355] opacity-60">
                  &
                </span>
                <br />
                Shenali
              </h1>

              <div className="h-[1px] w-12 bg-[#8b7355]/20 mx-auto" />

              <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7355] leading-relaxed">
                December <br /> 24, 2026
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Door */}
        <motion.div
          animate={isOpen ? { x: '100%' } : { x: '0%' }}
          transition={{ duration: 1.5, ease: [0.45, 0.05, 0.55, 0.95] }}
          className="relative h-full w-1/2 bg-[#fdfbf7] flex items-center justify-start overflow-hidden shadow-2xl origin-right"
        >
          <div className="texture-bg absolute inset-0 opacity-20" />

          {/* Ornate Flower Mandala Image */}
          <div className="absolute left-0 h-full flex items-center justify-start opacity-100 z-10">
            <img
              src="/mandala2.png"
              alt="Ornate Flower Mandala"
              className="h-[40%] w-auto object-contain mix-blend-multiply"
              style={{
                filter: 'brightness(0.9) contrast(1.1)'
              }}
            />
          </div>
        </motion.div>

        {/* Center Clickable Seal */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <motion.div
            animate={isOpen
              ? { opacity: 0, scale: 1.5, pointerEvents: 'none' }
              : {
                opacity: 1,
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 10px 30px rgba(212,175,55,0.2)',
                  '0 10px 50px rgba(212,175,55,0.4)',
                  '0 10px 30px rgba(212,175,55,0.2)'
                ],
                pointerEvents: 'auto'
              }
            }
            transition={isOpen
              ? { duration: 0.8 }
              : {
                scale: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                boxShadow: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                opacity: { duration: 0.5 }
              }
            }
            onClick={handleOpen}
            className="group relative flex h-20 w-20 items-center justify-center rounded-full gold-gradient shadow-[0_10px_30px_rgba(0,0,0,0.15)] ring-1 ring-white cursor-pointer pointer-events-auto hover:scale-110 transition-transform"
          >
            {/* Glossy Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-50" />

            {/* Text Logo */}
            <div className="relative z-20 flex flex-col items-center">
              <span className="text-[18px] font-bold tracking-tighter text-[#5d4037] drop-shadow-sm">
                L | S
              </span>
            </div>

            {/* Subtle Inner Glow */}
            <div className="absolute inset-2 rounded-full border border-white/30" />
          </motion.div>
        </div>

        {/* Click Hint at Bottom of Page */}
        {!isOpen && (
          <div className="absolute bottom-10 left-0 w-full flex justify-center z-30 pointer-events-none">
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="whitespace-nowrap text-[10px] uppercase tracking-[0.5em] text-[#8b7355] font-bold"
            >
              Click to Open
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
