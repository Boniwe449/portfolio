import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Certificates from "@/components/Certificates";
import Roadmap from "@/components/Roadmap";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Roadmap />
      <Contact />
    </main>
  );
}