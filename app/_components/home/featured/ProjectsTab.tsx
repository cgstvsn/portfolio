import ProjectCard from "../ProjectCard";

import TpToolkit from "@/public/thumbnails/tptoolkit.png";
import Facekick from "@/public/thumbnails/facekick.png";
import ULC from "@/public/thumbnails/ulcgenerator.png";
import This from "@/public/thumbnails/this.png";

const ProjectsTab = () => {
  const projects = [
    {
      label: "TP Toolkit",
      image: TpToolkit,
      url: "https://tptoolkit.com",
      sourceUrl: "https://github.com/Flohhhhh/tpa-tools",
      description:
        "This project is a reverse geo-coder for locations along the major highways in New Jersey, the NJ Turnpike and the Garden State Parkway. I created this for work, since there was a need for a tool like this to improve our workflow.",
    },
    {
      label: "Facekick Studios",
      image: Facekick,
      url: "https://facekick-site.vercel.app",
      sourceUrl: "#",
      description:
        "I created this page for a friend of mine for his programming business. I was tasked with creating the frontend including buttons that were ready for backend logic.",
    },
    {
      label: "ULC Generator",
      image: ULC,
      url: "https://ulc.dwnstr.com/generator",
      sourceUrl: "https://github.com/dwnstr/ulc-app",
      description:
        "I created a fully-featured script for FiveM called Ultimate Lighting Controller which requires a configuration file. Since many of the users are not programmers I created this tool so that users could generate configuration files using an intuitive GUI.",
    },
    {
      label: "This portfolio!",
      image: This,
      url: "#",
      sourceUrl: "https://github.com/cgstvsn/portfolio",
      description:
        "This portfolio itself was carefully crafted using NextJS and Tailwind CSS. Other tools used include Headless UI and Lucide Icons.",
    },
  ];

  const projectCards = projects.map((project) => {
    return (
      <ProjectCard
        key={project.label}
        label={project.label}
        image={project.image}
        description={project.description}
        url={project.url}
        sourceUrl={project.sourceUrl}
      />
    );
  });

  return <div className='flex flex-col gap-4'>{projectCards}</div>;
};

export default ProjectsTab;
