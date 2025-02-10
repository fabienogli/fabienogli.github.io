import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <main className="scroll-smooth">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;