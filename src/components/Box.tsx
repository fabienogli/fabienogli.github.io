import { Github, Gitlab, Youtube } from "lucide-react";
import '@/styles/Box.css';


const Box = ({title, description, links}) => {
  return (
            <div
              className="brutal-box brutal-black bg-brutal-green"
            >
              <h3 className="text-2xl font-bold mb-4 text-brutal-black">
                {title}
              </h3>
              <p className="text-lg text-brutal-black mb-4">
                {description}
              </p>
              <div className="flex gap-4">
              <YoutubeLink link={links.youtube} />
              <GithubLink link={links.github} />
              <GitlabLink link={links.gitlab} />
              </div>
            </div>
          )
};

export default Box;


const YoutubeLink = ({link}) => {
  console.log("githube ", link, "  ", link == "")
  if (link == undefined) {
    return null;
  }
  return <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-brutal-black text-brutal-white p-3 hover:bg-opacity-80 transition-colors"
  aria-label="YouTube Demo"
>
  <Youtube className="w-6 h-6" />
</a>
}


const GitlabLink = ({link}) => {
  if (link == undefined) {
    return null;
  }
  return <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-brutal-black text-brutal-white p-3 hover:bg-opacity-80 transition-colors"
  aria-label="Gitlab Repository"
>
  <Gitlab className="w-6 h-6" />
</a>
}


const GithubLink = ({link}) => {
  if (link == undefined) {
    return null;
  }
  return <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-brutal-black text-brutal-white p-3 hover:bg-opacity-80 transition-colors"
  aria-label="Github Repository"
>
  <Github className="w-6 h-6" />
</a>
}