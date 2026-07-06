import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews"
import Gallery from "@/components/Images"

export default function Home() {
  return (
    <>
      <Navbar />
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
    </>
  );
}
