'use client';
import React, { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import "./booking-popup.css";

const COURTS = [
  { id: "badminton", name: "Badminton", price: 500 },
  { id: "futsal", name: "Futsal", price: 1200 },
  { id: "tabletennis", name: "Table Tennis", price: 300 },
];

const SLOTS = [
  "6:00 AM-7:00 AM",
  "7:00 AM-8:00 AM",
  "8:00 AM-9:00 AM",
  "9:00 AM-10:00 AM",
];

const BookingModal = ({
  open,
  // isOpen,
  title,
  setIsOpen,
  children,
  width = "760px",
  closeOnBackdrop = true,
  className = "",
}) => {
  const modalOpen = open;
  const titleId = useId();

  const [court, setCourt] = useState(COURTS[0].id);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);

  const selectedCourt = COURTS.find((c) => c.id === court);
  const canPay = name && date && slots.length > 0;
  const total = selectedCourt.price * slots.length;
  const [mounted,setMounted] = useState(false);

  const toggleSlot = (s) => {
    setSlots((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  useEffect(()=>{
    setMounted(true);
  },[]);

  useEffect(() => {
    if (!modalOpen) return;

    const body = document.body;
    const html = document.documentElement;
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const vv = window.visualViewport;

    let rafId = 0;
    const timeoutIds = [];

    const applyModalViewport = () => {
      const viewportHeight = vv?.height || window.innerHeight;
      const viewportWidth = vv?.width || window.innerWidth;
      const viewportTop = vv?.offsetTop || 0;
      const viewportLeft = vv?.offsetLeft || 0;

      html.style.setProperty("--rm-vv-height", `${viewportHeight}px`);
      html.style.setProperty("--rm-vv-width", `${viewportWidth}px`);
      html.style.setProperty("--rm-vv-top", `${viewportTop}px`);
      html.style.setProperty("--rm-vv-left", `${viewportLeft}px`);
    };

    const syncModalViewport = () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(applyModalViewport);
    };

    const syncModalViewportAfterKeyboard = () => {
      syncModalViewport();
      timeoutIds.push(window.setTimeout(syncModalViewport, 80));
      timeoutIds.push(window.setTimeout(syncModalViewport, 250));
    };

    applyModalViewport();

    const prevBody = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
      touchAction: body.style.touchAction,
    };

    const prevHtmlOverflow = html.style.overflow;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    body.style.touchAction = prevBody.touchAction;
    html.style.overflow = "hidden";

    window.addEventListener("resize", syncModalViewport);
    window.addEventListener("orientationchange", syncModalViewportAfterKeyboard);
    window.addEventListener("focusin", syncModalViewportAfterKeyboard);
    window.addEventListener("focusout", syncModalViewportAfterKeyboard);

    vv?.addEventListener("resize", syncModalViewport);
    vv?.addEventListener("scroll", syncModalViewport);

    return () => {
      window.removeEventListener("resize", syncModalViewport);
      window.removeEventListener("orientationchange", syncModalViewportAfterKeyboard);
      window.removeEventListener("focusin", syncModalViewportAfterKeyboard);
      window.removeEventListener("focusout", syncModalViewportAfterKeyboard);

      vv?.removeEventListener("resize", syncModalViewport);
      vv?.removeEventListener("scroll", syncModalViewport);

      if (rafId) window.cancelAnimationFrame(rafId);
      timeoutIds.forEach((id) => window.clearTimeout(id));

      html.style.removeProperty("--rm-vv-height");
      html.style.removeProperty("--rm-vv-width");
      html.style.removeProperty("--rm-vv-top");
      html.style.removeProperty("--rm-vv-left");

      body.style.position = prevBody.position;
      body.style.top = prevBody.top;
      body.style.left = prevBody.left;
      body.style.right = prevBody.right;
      body.style.width = prevBody.width;
      body.style.overflow = prevBody.overflow;
      body.style.touchAction = prevBody.touchAction;
      html.style.overflow = prevHtmlOverflow;

      window.scrollTo(0, scrollY);
    };
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalOpen, setIsOpen]);


  const modalContent = (
    <div
      className="rm-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
      aria-label={!title ? "Modal" : undefined}
    >
      <div
        className="rm-backdrop"
        onClick={() => {
          if (closeOnBackdrop) {
            setIsOpen(false)};
        }}
      />

      <div
        className={`rm-card ${className}`}
        style={{ "--rm-max-width": width }}
      >
        {/* <div className="rm-head">
          {title ? (
            <h3 className="rm-title" id={titleId}>
              {title}
            </h3>
          ) : null}

        </div> */}
          <button
            className="absolute right-6 top-3 text-sand hover:text-amber transition-colors"
            onClick={()=>setIsOpen(false)}
            aria-label="Close"
          >
            <X size={20} />
          </button>

        {/* Everything below is now inside the scrollable body,
            so it respects rm-body's max-height + overflow-y on mobile */}
        <div className="rm-body">
          <div className="mb-5">
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
                className="w-full rounded-lg border border-turf/40 bg-transparent p-3 text-base text-chalk placeholder:text-sand/50 focus:border-amber focus:outline-none"
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
                className="w-full rounded-lg border border-turf/40 bg-transparent p-3 text-base text-chalk focus:border-amber focus:outline-none [color-scheme:dark]"
              />
            </div>
          </div>

          {/* Time slots */}
          <div className="mb-5">
            <label className="font-mono text-xs uppercase tracking-widest2 text-sand mb-3 block">
              Available slots
            </label>
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
          <div className="border-t border-turf/40 pt-6 flex items-center justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest2 text-sand">
                Total{" "}
                {slots.length > 0 &&
                  `· ${slots.length} slot${slots.length > 1 ? "s" : ""}`}
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

          {children}
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;
  if (!modalOpen) return null;
  return createPortal(modalContent, document.body);
};

export default BookingModal;