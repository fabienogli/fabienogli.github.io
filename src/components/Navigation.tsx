import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="fixed right-4 top-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brutal-black text-brutal-white p-3 hover:bg-opacity-80 transition-colors"
        aria-label="Toggle navigation menu"
      >
        <Menu className="w-6 h-6" />
      </button>
      
      <div className={`${
        isOpen ? "translate-x-0" : "translate-x-[200%]"
      } transition-transform duration-300 absolute top-16 right-0 bg-brutal-white border-4 border-brutal-black shadow-[8px_8px_0px_0px_rgba(26,31,44,1)]`}>
        <div className="flex flex-col min-w-[200px]">
          <button
            onClick={() => scrollToSection("about")}
            className="text-left p-4 hover:bg-brutal-yellow transition-colors text-brutal-black font-bold"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-left p-4 hover:bg-brutal-blue transition-colors text-brutal-black font-bold"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-left p-4 hover:bg-brutal-green transition-colors text-brutal-black font-bold"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;