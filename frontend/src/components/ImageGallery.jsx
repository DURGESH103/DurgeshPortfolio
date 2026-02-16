import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ImageGallery = ({ images, isOpen, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, currentIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close gallery"
          >
            <FiX className="w-6 h-6" />
          </button>

          <div className="absolute top-4 left-4 text-white text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Next image"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageGallery;
