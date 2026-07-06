import Image from 'next/image'
export default function Footer() {
  return (
    <footer className="bg-ink border-t border-turf/40 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* <p className="font-display text-lg uppercase text-chalk">
          COURT<span className="text-amber">19</span>
        </p> */}
         <Image 
                  src = "/img-canva.png"
                  alt = 'logo'
                  width = {150}
                  height = {50}
                  />
        <p className="font-mono text-[11px] uppercase tracking-widest2 text-sand text-center">
          Kathmandu, Nepal — Open 6am to midnight, daily
        </p>
        <p className="font-mono text-[11px] text-sand">
          &copy; {new Date().getFullYear()} BOXARENA.
        </p>
      </div>
    </footer>
  );
}
