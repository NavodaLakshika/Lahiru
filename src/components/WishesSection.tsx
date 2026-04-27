'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function WishesSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message) {
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
      setName('');
      setMessage('');
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-20 space-y-12 relative flex flex-col items-center">
      <div className="text-center space-y-4 w-full">
        <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#8b7355] font-medium">Guest Book</h3>
        <h2 className="text-4xl md:text-5xl font-light text-[#5d4037] font-[family:var(--font-playball)]">
          Best Wishes
        </h2>
        <div className="h-[1px] w-24 bg-[#8b7355]/20 mx-auto mt-2" />
        
        <p className="text-xs md:text-sm text-[#8b7355] font-light tracking-wide leading-relaxed max-w-lg mx-auto pt-4">
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a message, we would be delighted to read it!
        </p>
      </div>

      <motion.form 
        onSubmit={handleSubmit}
        className="w-full max-w-full space-y-10 bg-[#fdfbf7] border border-[#8b7355]/10 p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative"
        style={{ 
          borderRadius: '20px 0px 20px 0px',
        }}
      >
        <div className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.2em] text-[#8b7355] font-bold px-1">Your Name</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="JOHN DOE"
            className="w-full px-1 py-4 bg-transparent border-b border-[#8b7355]/20 focus:outline-none focus:border-[#8b7355] transition-colors text-[#5d4037] text-[10px] tracking-widest placeholder:text-[#8b7355]/30"
            required
          />
        </div>

        <div className="space-y-4">
          <label className="text-[10px] uppercase tracking-[0.2em] text-[#8b7355] font-bold px-1">Your Message</label>
          <textarea 
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="WISHING YOU A LIFETIME OF HAPPINESS..."
            className="w-full px-1 py-4 bg-transparent border-b border-[#8b7355]/20 focus:outline-none focus:border-[#8b7355] transition-colors text-[#5d4037] text-[10px] tracking-widest resize-none placeholder:text-[#8b7355]/30 uppercase"
            required
          />
        </div>

        <div className="flex justify-center pt-8">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-3.5 bg-[#5d4037] text-[#fdfbf7] text-[10px] uppercase tracking-[0.3em] font-bold rounded-[10px] shadow-xl hover:bg-[#8b7355] transition-all"
          >
            {isSent ? "THANK YOU" : "SEND WISHES"}
          </motion.button>
        </div>

        {isSent && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[10px] uppercase tracking-widest text-[#8b7355]/60 mt-4"
          >
            Message Sent Successfully
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}
