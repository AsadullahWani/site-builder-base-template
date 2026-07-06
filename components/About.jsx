import CourtLines from "./CourtLines";
import Gallery from "./Images";
import Image from 'next/image'

const SPORTS = [
  { name: "Badminton", detail: "2 courts, BWF-spec lines" },
  { name: "Futsal", detail: "1 turf court, rebound boards, flood lights" },
  // { name: "Box cricket", detail: "Netted cage, bowling machine on request" },
  { name: "Table tennis", detail: "2 tables, open lounge play" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      {/* top-left silhouette accent */}
      <div className="pointer-events-none absolute -left-2 -top-3 w-[120px] opacity-90 sm:w-[180px] sm:opacity-100 lg:w-[260px] lg:opacity-100">
        <Image
          src="/football-shoot-amber.png"
          alt=""
          width={400}
          height={500}
          className="object-contain w-full h-auto"
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest2 text-amber mb-4">
            About the venue
          </p>
          <h2 className="font-display text-4xl sm:text-5xl uppercase text-chalk leading-[0.95] mb-6">
            Built for players, not spectators
          </h2>
          <p className="text-sand leading-relaxed mb-4">
            BOXARENA opened in 2019 as a single badminton hall and grew into a
            four-sport arena by popular demand. There is no membership desk
            to get past and no minimum booking — just courts, kept in
            match condition, ready when you are.
          </p>
          <p className="text-sand leading-relaxed mb-10">
            Coaching sessions run in the mornings, corporate leagues take
            over on weeknights, and the courts stay open to walk-ins the
            rest of the time. Shoes, rackets and bibs are available to rent
            at the front desk.
          </p>

          <ul className="space-y-5">
            {SPORTS.map((sport) => (
              <li key={sport.name} className="flex items-baseline justify-between border-b border-turf/40 pb-4">
                <span className="font-display text-xl text-chalk uppercase">{sport.name}</span>
                <span className="font-mono text-xs text-sand text-right max-w-[55%]">{sport.detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block aspect-[4/3] w-ful">
          {/* <CourtLines /> */}
          <Gallery/>
        </div>
      </div>
    </section>
  );
}
