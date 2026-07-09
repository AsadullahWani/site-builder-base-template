'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews"
import Gallery from "@/components/Images"
import BookingModal from "@/components/Booking-popup"
import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
  //     useEffect(() => {
  //   document.body.style.overflow = isOpen ? "hidden" : "auto";
  //   return () => { document.body.style.overflow = "auto"; };
  // }, [isOpen]);
//   useEffect(() => {
//   if (isOpen) {
//     const scrollY = window.scrollY;
//     document.body.style.position = "fixed";
//     document.body.style.top = `-${scrollY}px`;
//     document.body.style.width = "100%";
//   } else {
//     const scrollY = document.body.style.top;
//     document.body.style.position = "";
//     document.body.style.top = "";
//     document.body.style.width = "";
//     window.scrollTo(0, parseInt(scrollY || "0") * -1);
//   }

//   return () => {
//     document.body.style.position = "";
//     document.body.style.top = "";
//     document.body.style.width = "";
//   };
// }, [isOpen]);

  return (
    <>
    <div
    className={`
      transition-opacity duration-300
      ${isOpen ? "backdrop-blur-sm pointer-events-none select-none" : ""}
    `}>

      <Navbar setIsOpen = {setIsOpen}/>
      <main>
        <Hero />
        <About />
        <div className="block lg:hidden">
          <Gallery/>
        </div>
        <FAQ />
        
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
        <AnimatePresence>
          {/* {isOpen && <BookingModal onClose={() => setIsOpen(false)} />} */}
          <BookingModal open={isOpen} onOpenChange={setIsOpen} />
        </AnimatePresence>
    </>
  );
}
