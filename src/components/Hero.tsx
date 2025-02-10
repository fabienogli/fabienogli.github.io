const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[70vh] bg-brutal-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-brutal-black border-b-4 border-brutal-black pb-4">
          FABIEN OGLI
        </h1>
        <div className="bg-brutal-yellow p-8 border-4 border-brutal-black">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brutal-black">
            Welcome to my portfolio
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-brutal-black">
          🚀 Golang Backend Developer | 👨‍💻 Software Engineer since 2021
          </p>
          <button
            onClick={scrollToProjects}
            className="bg-brutal-black text-brutal-white px-8 py-4 text-xl font-bold hover:translate-y-[-2px] transition-transform"
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;