"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageModal({ mediaList, currentIndex, onClose, onNavigate }) {
  const media = mediaList[currentIndex];

  const goPrev = (e) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + mediaList.length) % mediaList.length);
  };

  const goNext = (e) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % mediaList.length);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md sm:bg-black/70 sm:backdrop-blur-md p-0 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative w-full h-full sm:h-auto sm:max-w-6xl lg:max-w-[90vw]"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:-top-12 sm:right-0 lg:top-4 lg:right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-amber hover:text-ink transition-colors"
        >
          <X size={20} />
        </button>

        <button
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 p-3 text-white hover:bg-amber hover:text-ink transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 p-3 text-white hover:bg-amber hover:text-ink transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        <div className="relative flex items-center justify-center h-full sm:h-auto sm:max-h-[85vh] lg:max-h-[92vh]">
          {media.type === "video" ? (
            <video
              key={media.src}
              controls
              autoPlay
              className="h-full w-full object-contain sm:h-auto sm:max-h-[85vh] sm:w-auto sm:max-w-full sm:rounded-xl lg:max-h-[92vh] lg:max-w-[85vw]"
              src={media.src}
            />
          ) : (
            <Image
              key={media.src}
              src={media.src}
              alt={media.title || ""}
              width={1600}
              height={1000}
              className="h-full w-full object-contain sm:h-auto sm:max-h-[85vh] sm:w-auto sm:max-w-full sm:rounded-xl lg:max-h-[92vh] lg:max-w-[85vw]"
            />
          )}
        </div>

        <div className="mt-4 hidden sm:flex items-center justify-between px-1">
          <h3 className="font-display text-lg text-chalk uppercase">{media.title}</h3>
          <span className="font-mono text-xs text-sand">
            {currentIndex + 1} / {mediaList.length}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}