'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function PhotoGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const imagesPerPage = 6;
  const totalPhotos = 24;
  const totalPages = Math.ceil(totalPhotos / imagesPerPage);

  const photos = Array.from({ length: totalPhotos }, (_, i) => ({
    id: i + 1,
    url: `/gallery/${i + 1}.jpeg`,
  }));

  const indexOfLastPhoto = currentPage * imagesPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - imagesPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20 space-y-12">
      <div className="text-center space-y-2">
        <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#8b7355] font-medium">Our Story</h3>
        <h2 className="text-3xl md:text-4xl font-light text-[#5d4037] serif ">Photo Gallery</h2>
      </div>

      {/* Paginated Grid with Correct State Management and Staggered Reveal */}
      <div className="relative min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {currentPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  show: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { type: "spring", damping: 20, stiffness: 100 }
                  }
                }}
                onClick={() => setSelectedImage(photo.url)}
                className="relative aspect-[4/5] overflow-hidden rounded-lg group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={photo.url} 
                  alt={`Gallery photo ${photo.id}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                   <span className="text-white text-[10px] uppercase tracking-[0.3em] border border-white/40 px-4 py-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                     View Photo
                   </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-6 mt-12">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          className="p-3 rounded-full border border-[#8b7355]/20 text-[#8b7355] disabled:opacity-20 hover:bg-[#8b7355]/5 transition-colors z-20"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex gap-2 items-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              type="button"
              onClick={() => setCurrentPage(pageNum)}
              className={`w-8 h-8 rounded-full text-[10px] font-medium transition-all duration-300 z-20 ${
                currentPage === pageNum 
                  ? 'bg-[#5d4037] text-white shadow-lg scale-110' 
                  : 'text-[#8b7355] hover:bg-[#8b7355]/10'
              }`}
            >
              {pageNum}
            </button>
          ))}
        </div>

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          className="p-3 rounded-full border border-[#8b7355]/20 text-[#8b7355] disabled:opacity-20 hover:bg-[#8b7355]/5 transition-colors z-20"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button - Moved to Top-Left to avoid music button conflict */}
            <button 
              className="absolute top-6 left-6 z-[110] flex items-center justify-center h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-full max-h-full overflow-hidden rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Selected gallery photo"
                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
