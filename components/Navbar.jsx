"use client";
import ThemeToggle from '@/components/Toggle_button'
import { useEffect, useState } from "react";
import Image from 'next/image';

import { motion } from "framer-motion";



const LINKS = [
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#location", label: "Location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0  inset-x-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-turf/40" : "bg-transparent"
      }`}
    >
  {/* //   <motion.header
  // initial={{ y: -40, opacity: 0 }}
  // animate={{ y: 0, opacity: 1 }}
  // transition={{ duration: 0.5, ease: "easeOut" }}
  // className={`fixed top-0 inset-x-0 z-50 ...`}
  // > */}
      <nav class="flex justify-between items-center px-6 py-4  text-white gap-10">
        <a href="#top" className="font-display text-2xl tracking-wide text-chalk">
          <Image 
          src = "/img-canva.png"
          alt = 'logo'
          width = {150}
          height = {50}
          />
        </a>
        <ul className="hidden sm:flex items-center gap-8 font-mono text-xs uppercase tracking-widest2 text-sand">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-amber transition-colors">
                {link.label}
                  <motion.span
    className="absolute -bottom-1 left-0 h-[1px] bg-amber origin-left"
    initial={{ scaleX: 0 }}
    whileHover={{ scaleX: 1 }}
    transition={{ duration: 0.25 }}
  />
              </a>
              
            </li>
           
          ))}
           {/* <li className=''>
              <ThemeToggle/>
            </li> */}
        </ul>
        {/* <a
          href="#location"
          className="rounded-6 text-amber text-sm font-mono uppercase tracking-widest2 p-4 hover:bg-amber hover:text-white transition-colors "
        > */}
          <motion.a
            href="#location"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-6 text-amber text-sm font-mono uppercase tracking-widest2 p-4 hover:bg-amber hover:text-white transition-colors"
          >
            Book a court
          </motion.a>
          
        {/* </a> */}
      </nav>

{/* </motion.header> */}
     </header>
  );
}
