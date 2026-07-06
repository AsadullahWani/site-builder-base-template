import CourtLines from "./CourtLines";

const HOURS = [
  { day: "Monday – Friday", time: "6:00 AM – 12:00 AM" },
  { day: "Saturday", time: "6:00 AM – 1:00 AM" },
  { day: "Sunday", time: "7:00 AM – 11:00 PM" },
];

export default function Location() {
  return (
    <section id="location" className="relative bg-ink py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -left-32 bottom-0 hidden w-[480px] opacity-[0.15] lg:block">
        <CourtLines />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest2 text-amber mb-4">
          Find us
        </p>
        <h2 className="font-display text-4xl sm:text-5xl uppercase text-chalk leading-[0.95] mb-12">
          On the ground
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest2 text-sand mb-2">
                Address
              </h3>
              <p className="text-xl text-chalk leading-snug">
                
                <br />
                Kathmandu, Nepal
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest2 text-sand mb-3">
                Hours
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  {HOURS.map((row) => (
                    <tr key={row.day} className="border-b border-turf/40">
                      <td className="py-3 text-chalk">{row.day}</td>
                      <td className="py-3 text-right font-mono text-amber">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest2 text-sand mb-2">
                  Phone
                </h3>
                <a href="tel:+911141234519" className="text-chalk hover:text-amber transition-colors">
                  +91 11 4123 4519
                </a>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest2 text-sand mb-2">
                  Email
                </h3>
                <a
                  href="mailto:play@court19.example"
                  className="text-chalk hover:text-amber transition-colors"
                >
                  play@boxarena.onground.com
                </a>
              </div>
            </div>
          </div>

          {/* <div className="aspect-[4/3] w-full border border-turf/40">
            <iframe
              title="COURT19 location map"
              src="https://www.google.com/maps?q=Vasant+Kunj,New+Delhi&output=embed"
              className="h-full w-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div> */}
          <div className="relative aspect-[4/3] w-full border border-turf/40 overflow-hidden">
            {/* <iframe
              title="COURT19 location map"
              src="https://maps.app.goo.gl/MsNBa6FJLr57Nrwx5"
              className="h-full w-full grayscale contrast-125 brightness-90 invert-[0.92] hue-rotate-[15deg] saturate-150"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            /> */}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.75100378201415!2d85.33256014758587!3d27.71679039488908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199206504cd1%3A0x32568b6a5f314aff!2sBoxArena-%20Pickleball%2C%20Futsal%20%26%20Badminton!5e0!3m2!1sen!2snl!4v1783320438759!5m2!1sen!2snl" 
              className="h-full w-full  contrast-125 brightness-90 invert-[0.92] hue-rotate-[15deg] saturate-150"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" >
</iframe>
            {/* amber tint overlay, blended so it doesn't block map interaction */}
            <div className="pointer-events-none absolute inset-0 bg-amber/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}


