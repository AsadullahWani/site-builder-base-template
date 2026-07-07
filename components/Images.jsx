'use client';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { memo, useState,useRef } from 'react';
import { AnimatePresence } from "framer-motion";
import ImageModal from "./Image-popup";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const images = [
  { id: 1, title: "Futsal Under the Lights", sport: "Futsal", image: "https://loremflickr.com/800/600/futsal" },
  { id: 2, title: "Badminton Smash", sport: "Badminton", image: "https://loremflickr.com/800/600/badminton" },
  { id: 3, title: "Table Tennis Rally", sport: "Table Tennis", image: "https://loremflickr.com/800/600/table-tennis" },
  { id: 5, title: "Futsal Match Action", sport: "Futsal", image: "https://loremflickr.com/800/600/futsal,indoor" },
  { id: 6, title: "Indoor Badminton Court", sport: "Badminton", image: "https://loremflickr.com/800/600/badminton,court" },
  { id: 7, title: "Ping Pong Close-up", sport: "Table Tennis", image: "https://loremflickr.com/800/600/pingpong" },
];

function ImageCard({ image, title, sport, onSelect }) {
  return (
    <div className="group relative overflow-hidden rounded-xl aspect-[3/4] md:aspect-[3/4] sm:aspect-[4/5]">
      <img
        src={image}
        alt={title}
        onClick={() => onSelect({ type: "image", src: image, title })}
        className="h-full w-full object-cover cursor-pointer transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
      <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest2 text-amber bg-ink/70 px-3 py-1 rounded-full">
        {sport}
      </span>
      <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-chalk">
        {title}
      </h3>
    </div>
  );
}

function VideoCard({ src, onSelect }) {
  return (
    <div className="group relative overflow-hidden rounded-xl aspect-[3/4] sm:aspect-[4/5]">
      <video
        className="h-full w-full object-cover cursor-pointer"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        onClick={() => onSelect({ type: "video", src, title: "A Day at the Venue" })}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
      <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest2 text-amber bg-ink/70 px-3 py-1 rounded-full">
        Highlight Reel
      </span>
      <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-chalk">
        A Day at the Venue
      </h3>
    </div>
  );
}

function Gallery() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const mediaList = [
    { type: "video", src: "/venue-highlight.mp4", title: "A Day at the Venue" },
    ...images.map((img) => ({ type: "image", src: img.image, title: img.title })),
  ];

  const [activeIndex, setActiveIndex] = useState(null); // null = closed


  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest2 text-amber mb-4">
          Take a look around
        </p>
        <h2 className="font-display text-4xl sm:text-5xl uppercase text-chalk leading-[0.95] mb-12">
          Our Gallery
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.6 },
            1024: { slidesPerView: 2.4 },
          }}
            loop
            loopAdditionalSlides={6}
            observer
            observeParents
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
          pagination={{ clickable: true, el: ".gallery-pagination" }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          
        >
          <SwiperSlide>
            <VideoCard src="/venue-highlight.mp4" onSelect={() => setActiveIndex(0)} />
          </SwiperSlide>
         {images.map((img, i) => (
            <SwiperSlide key={img.id}>
              <ImageCard
                image={img.image}
                title={img.title}
                sport={img.sport}
                onSelect={() => setActiveIndex(i + 1)} // +1 since video is index 0
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="gallery-pagination flex justify-center gap-2 mt-8" />

        <div className="mt-4 flex justify-end gap-3">
          <button ref={prevRef} className="prev-btn p-3 border border-sand/30 text-chalk hover:border-amber hover:text-amber transition-colors rounded-full">
            <ArrowLeft size={18} />
          </button>
          <button ref={nextRef} className="next-btn p-3 border border-sand/30 text-chalk hover:border-amber hover:text-amber transition-colors rounded-full">
            <ArrowRight size={18} />
          </button>
        </div>

        <AnimatePresence>
          {activeIndex !== null && (
            <ImageModal
              mediaList={mediaList}
              currentIndex={activeIndex}
              onClose={() => setActiveIndex(null)}
              onNavigate={setActiveIndex}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default memo(Gallery);