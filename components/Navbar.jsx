"use client";
import ThemeToggle from '@/components/Toggle_button'
import { useEffect, useState } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#location", label: "Location" },
];



export default function Navbar({setIsOpen}) {
  const [scrolled, setScrolled] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // useEffect(() => {
  //   document.body.style.overflow = isOpen ? "hidden" : "auto";
  //   return () => { document.body.style.overflow = "auto"; };
  // }, [isOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-turf/40" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center px-6 py-4 text-white gap-10">
        <a href="#top" className="font-display text-2xl tracking-wide text-chalk">
          <Image src="/img-canva.png" alt="logo" width={150} height={50} />
        </a>

        <ul className="hidden sm:flex items-center gap-8 font-mono text-xs uppercase tracking-widest2 text-sand">
          {LINKS.map((link) => (
            <li key={link.href} className="relative">
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
        </ul>

        <button
          onClick={() => setIsOpen(true)}
          className="rounded-6 text-amber text-sm font-mono uppercase tracking-widest2 p-4 hover:bg-amber hover:text-white transition-colors"
        >
          Book a Court
        </button>

        {/* <AnimatePresence>
          {isOpen && <BookingModal onClose={() => setIsOpen(false)} />}
        </AnimatePresence> */}
      </nav>
    </header>
  );
}