"use client";

import { useState } from "react";
import CourtLines from "./CourtLines";

const FAQS = [
  {
    q: "Do I need to be a member to book a court?",
    a: "No. BOXARENA is walk-in and pay-per-slot. Members get priority booking on weekend evenings, but anyone can book a court online or at the front desk.",
  },
  {
    q: "Can I rent equipment on site?",
    a: "Yes. Rackets, futsal boots, cricket kits and bibs are all available to rent at the front desk for a flat fee per session.",
  },
  {
    q: "How far in advance should I book?",
    a: "Weekday mornings and afternoons are usually open same-day. Weeknight and weekend slots between 6pm and 10pm fill up 3–5 days ahead, so book those early.",
  },
  {
    q: "Is coaching available?",
    a: "Badminton and futsal coaching sessions run on weekday mornings for individuals and small groups. Ask at the front desk or mention it when you book.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Cancel or reschedule up to 4 hours before your slot for a full credit. Cancellations inside that window forfeit the booking.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-turf/40">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg sm:text-xl uppercase text-chalk">{item.q}</span>
        <span
          className={`font-mono text-2xl text-amber shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sand leading-relaxed max-w-2xl">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-ink py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <CourtLines variant="divider" className="mb-16 h-10" />

        <p className="font-mono text-xs uppercase tracking-widest2 text-amber mb-4">
          Before you book
        </p>
        <h2 className="font-display text-4xl sm:text-5xl uppercase text-chalk leading-[0.95] mb-12">
          Frequently asked
        </h2>

        <div>
          {FAQS.map((item, index) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
