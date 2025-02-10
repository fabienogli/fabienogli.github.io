import aboutText from '../texts/about.json';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-brutal-white p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-12 text-brutal-black border-b-4 border-brutal-black pb-4">
          ABOUT ME
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-brutal-pink p-8 border-4 border-brutal-black">
            {/* <p className="text-xl text-brutal-black">
              {aboutText.headline.en}
            </p> */}
            <p className="text-xl mt-4 text-brutal-black">
            I'm a Golang Backend Developer passionate about building scalable, efficient systems. With a strong foundation in automation, generative AI, and cybersecurity, I aim to solve complex problems with elegant solutions.
            </p><p className="text-xl mt-4 text-brutal-black">
I hold a Master's in Computing from Canada and an Engineering Degree from France, and I started my career as a software engineer in 2021.
</p><p className="text-xl mt-4 text-brutal-black">
On this site, you’ll find examples of my work, ranging from backend development to automation projects, showcasing my expertise in Golang and my focus on clean, performant code.
</p><p className="text-xl mt-4 text-brutal-black">
Feel free to explore, and don't hesitate to reach out if you want to collaborate!</p>
          </div>
          <div className="bg-brutal-yellow p-8 border-4 border-brutal-black">
            <h3 className="text-2xl font-bold mb-4 text-brutal-black">SKILLS</h3>
            <ul className="space-y-2 text-brutal-black">
              {aboutText.skills.map((skill, index) => (
                <li className=' mt-4 text-brutal-black p-2 border-4 border-brutal-black bg-brutal-white'>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
