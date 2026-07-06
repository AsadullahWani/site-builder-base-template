import CourtLines from "./CourtLines";
import Image from 'next/image'

const STATS = [
  { value: "03", label: "Courts" },
  { value: "18", label: "Hrs open daily" },
  { value: "04", label: "Sports" },
  { value: "07", label: "Days a week" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Faint court diagram, purely atmospheric */}
      <div className="pointer-events-none absolute -right-24 top-16 hidden w-[560px] opacity-[0.18] lg:block">
        <CourtLines />
      </div>
      {/* Player silhouette, anchored bottom-right */}
  <div className="pointer-events-none absolute right-0 bottom-65 block w-[140px] opacity-100 sm:bottom-20 sm:w-[220px] sm:opacity-70 lg:bottom-40 lg:w-[380px] lg:opacity-100">
    <Image
      src="/man-badminton-amber.png"
      alt=""
      width={400}
      height={550}
      className="object-contain w-full h-auto"
    />
  </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest2 text-amber mb-6">
          Kathmandu, Nepal
        </p>

        <h1 className="font-display text-[15vw] leading-[0.85] sm:text-[7.5rem] lg:text-[8.5rem] text-chalk uppercase max-w-4xl">
          Book the court.
          <br />
          Own the game.
        </h1>

        <p className="mt-8 max-w-xl text-base sm:text-lg text-sand leading-relaxed">
          Badminton, futsal and box cricket on regulation-marked courts, open
          every day from 6am to midnight. Walk in, warm up, play.
          
        </p>
        

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#location"
            className="bg-amber text-ink font-mono text-sm uppercase tracking-widest2 px-7 py-4 hover:bg-chalk transition-colors"
          >
            Check availability
          </a>
          <a
            href="#about"
            className="border border-sand/40 text-chalk font-mono text-sm uppercase tracking-widest2 px-7 py-4 hover:border-amber hover:text-amber transition-colors"
          >
            See the venue
          </a>
        
        </div>

        {/* Scoreboard stat strip — functional, not decorative: tells a first-time
            visitor exactly what's on offer before they read another word. */}
        <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-turf/50 pt-10 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-mono scoreboard-digit text-4xl sm:text-5xl text-amber">
                {stat.value}
              </dd>
              <dd className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-sand">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
