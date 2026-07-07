"use client";
import ThemeToggle from '@/components/Toggle_button'
import { useEffect, useState } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";


const COURTS = [
  { id: "badminton", name: "Badminton", price: 500 },
  { id: "futsal", name: "Futsal", price: 1200 },
  { id: "tabletennis", name: "Table Tennis", price: 300 },
  // { id: "cricket", name: "Box Cricket", price: 900 },
];

const SLOTS = [
  "6:00 AM-7:00 AM", "7:00 AM-8:00 AM", "8:00 AM-9:00 AM", "9:00 AM-10:00 AM",

];

export default function BookingModal({ onClose }) {
  const [court, setCourt] = useState(COURTS[0].id);
  const [slot, setSlot] = useState(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const selectedCourt = COURTS.find((c) => c.id === court);
  // const canPay = name && date && slot;

const [slots, setSlots] = useState([]); // was: const [slot, setSlot] = useState(null);

const toggleSlot = (s) => {
  setSlots((prev) =>
    prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
  );
};

const canPay = name && date && slots.length > 0;
const total = selectedCourt.price * slots.length;

  return (
   <motion.div
  className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-10 pb-6 sm:items-center sm:py-6"
  onClick={onClose}
>
  <motion.div
    initial={{ opacity: 0, y: 24, scale: 0.97 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 24, scale: 0.97 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
    onClick={(e) => e.stopPropagation()}
    className="relative w-full max-w-lg rounded-xl border border-turf/40 bg-ink p-8 max-h-[85vh] max-h-[85dvh] sm:max-h-[90vh] sm:max-h-[90dvh] overflow-y-auto hide-scrollbar"
  >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-sand hover:text-amber transition-colors"
        >
          <X size={20} />
        </button>

        {/* <p className="font-mono text-xs uppercase tracking-widest2 text-amber mb-2">
          Reserve your slot
        </p>
        <h2 className="font-display text-3xl uppercase text-chalk mb-8">
          Book a Court
        </h2> */}

        {/* Court selection */}
        <div className="mb-6">
          <label className="font-mono text-xs uppercase tracking-widest2 text-sand mb-3 block">
            Choose a court
          </label>
          <div className="grid grid-cols-2 gap-3">
            {COURTS.map((c) => (
              <button
                key={c.id}
                onClick={() => setCourt(c.id)}
                className={`rounded-lg border p-3 text-left transition-colors ${
                  court === c.id
                    ? "border-amber bg-amber/10 text-amber"
                    : "border-turf/40 text-sand hover:border-amber/50"
                }`}
              >
                <div className="font-display text-sm uppercase">{c.name}</div>
                <div className="font-mono text-xs mt-1">₹{c.price}/hr</div>
              </button>
            ))}
          </div>
        </div>

        {/* Name + Date */}
        <div className="grid gap-4 sm:grid-cols-2 mb-6">
          <div>
            <label className="font-mono text-xs uppercase tracking-widest2 text-sand mb-2 block">
              Your name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="w-full rounded-lg border border-turf/40 bg-transparent p-3 text-chalk placeholder:text-sand/50 focus:border-amber focus:outline-none"
            />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-widest2 text-sand mb-2 block">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-turf/40 bg-transparent p-3 text-chalk focus:border-amber focus:outline-none [color-scheme:dark]"
            />
          </div>
        </div>

        {/* Time slots */}
        <div className="mb-8">
          <label className="font-mono text-xs uppercase tracking-widest2 text-sand mb-3 block">
            Available slots
          </label>
          {/* <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {SLOTS.map((s) => (
              <button
                key={s}
                onClick={() => setSlot(s)}
                className={`rounded-lg border py-2 font-mono text-xs transition-colors ${
                  slot === s
                    ? "border-amber bg-amber text-ink"
                    : "border-turf/40 text-sand hover:border-amber/50"
                }`}
              >
                {s}
              </button>
            ))}
          </div> */}
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {SLOTS.map((s) => (
              <button
                key={s}
                onClick={() => toggleSlot(s)}
                className={`rounded-lg border py-2 font-mono text-xs transition-colors ${
                  slots.includes(s)
                    ? "border-amber bg-amber text-ink"
                    : "border-turf/40 text-sand hover:border-amber/50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Summary + Pay */}
        {/* <div className="border-t border-turf/40 pt-6 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest2 text-sand">Total</p>
            <p className="font-display text-2xl text-chalk">₹{selectedCourt.price}</p>
          </div>
          <button
            disabled={!canPay}
            className="rounded-6 bg-amber px-8 py-4 font-mono text-sm uppercase tracking-widest2 text-ink transition-opacity hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Proceed to pay
          </button>
        </div> */}
        <div className="border-t border-turf/40 pt-6 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest2 text-sand">
              Total {slots.length > 0 && `· ${slots.length} slot${slots.length > 1 ? "s" : ""}`}
            </p>
            <p className="font-display text-2xl text-chalk">₹{total}</p>
          </div>
          <button
            disabled={!canPay}
            className="rounded-6 bg-amber px-8 py-4 font-mono text-sm uppercase tracking-widest2 text-ink transition-opacity hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Proceed to pay
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}