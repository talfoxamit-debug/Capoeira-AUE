import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import AboutCapoeira from "@/components/AboutCapoeira";
import AboutTeacher from "@/components/AboutTeacher";
import Heritage from "@/components/Heritage";
import SchedulePricing from "@/components/SchedulePricing";
import WhoCanJoin from "@/components/WhoCanJoin";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import InstagramSection from "@/components/InstagramSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <AboutCapoeira />
        <AboutTeacher />
        <Heritage />
        <SchedulePricing />
        <WhoCanJoin />
        <Gallery />
        <Reviews />
        <InstagramSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyContactBar />
    </>
  );
}
