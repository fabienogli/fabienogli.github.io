import { MailIcon, GithubIcon, LinkedinIcon } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-brutal-white p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-12 text-brutal-black border-b-4 border-brutal-black pb-4">
          GET IN TOUCH
        </h2>
        <div className="bg-brutal-blue p-8 border-4 border-brutal-black">
          <p className="text-xl mb-8 text-brutal-black">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <a
              href="mailto:fabien.ogli+portfolio@gmail.com"
              className="flex items-center gap-4 bg-brutal-black text-brutal-white p-6 hover:translate-y-[-2px] transition-transform"
            >
              <MailIcon size={24} />
              <span className="font-bold">Email Me</span>
            </a>
            <a
              href="https://github.com/fabienogli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-brutal-black text-brutal-white p-6 hover:translate-y-[-2px] transition-transform"
            >
              <GithubIcon size={24} />
              <span className="font-bold">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/fabien-ogli/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-brutal-black text-brutal-white p-6 hover:translate-y-[-2px] transition-transform"
            >
              <LinkedinIcon size={24} />
              <span className="font-bold">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
