'use client';

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation,Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    review:
      "Fantastic courts! The turf is well maintained, and booking was quick and easy. Highly recommended.",
    date: "2026-06-15",
  },
  {
    id: 2,
    name: "Priya Verma",
    rating: 4,
    review:
      "Great atmosphere and friendly staff. The floodlights were excellent for our evening game.",
    date: "2026-06-20",
  },
  {
    id: 3,
    name: "Arjun Mehta",
    rating: 5,
    review:
      "One of the best football turfs in the city. Clean facilities and quality playing surface.",
    date: "2026-06-28",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    rating: 5,
    review:
      "Loved the experience! Easy online booking and plenty of parking available.",
    date: "2026-07-01",
  },
];

export default function Reviews() {
  return (
          //  <section className="rounded-2xl border border-neutral-500 bg-neutral-900 p-8 shadow-xl">
            <section className="max-w-6xl mx-auto px-6">
  {/* Static */}
  <p className="font-mono text-xs uppercase tracking-widest2 text-amber mb-4">
    What People Say About Us
  </p>

  <h2 className="font-display text-4xl sm:text-5xl uppercase text-chalk leading-[0.95] mb-12">
    Reviews
  </h2>

  {/* Only this slides */}
       <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={24}
  slidesPerView={1.15}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
  pagination={{ clickable: true, el: ".gallery-pagination" }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop
  className="!pb-2"
>
    {reviews.map((review) => (
      <SwiperSlide key={review.id}
      >
             <h3 className="text-2xl font-bold text-white"> 
            {review.name} 
        </h3> 
        <p className="mt-2 text-yellow-400"> 
            {"⭐".repeat(review.rating)} 
        </p> 
        <p className="mt-6 text-neutral-300 leading-8">
             {review.review} 
        </p>
        <p className="mt-6 text-sm text-neutral-500"> 
            {review.date} 
        </p>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Static */}
  <div className="mt-8 flex justify-end gap-3">
    <button className="prev-btn">
      <ArrowLeft />
    </button>

    <button className="next-btn">
      <ArrowRight />
    </button>
  </div>

</section>
  );
}