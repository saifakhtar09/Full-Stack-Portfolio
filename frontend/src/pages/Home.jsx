import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Top Navigation */}
      <Navigation />

      {/* Page Sections */}
      <section id="hero">
        <Hero />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact" className="flex-grow">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
