import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutCapoeira from "@/components/AboutCapoeira";
import AboutTeacher from "@/components/AboutTeacher";
import SchedulePricing from "@/components/SchedulePricing";
import WhoCanJoin from "@/components/WhoCanJoin";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutCapoeira />
        <AboutTeacher />
        <SchedulePricing />
        <WhoCanJoin />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
