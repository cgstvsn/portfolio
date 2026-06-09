import ProjectCard from "../ProjectCard";

import Sharply from "@/public/thumbnails/sharply.png";
import NjHighwayToolkit from "@/public/thumbnails/njhighwaytoolkit.png";
import Facekick from "@/public/thumbnails/facekick.png";
import ULC from "@/public/thumbnails/ulcgenerator.png";
import This from "@/public/thumbnails/this.png";

const ProjectsTab = () => {
  const projects = [
    {
      label: "Sharply",
      image: Sharply,
      url: "https://sharplyphoto.com",
      sourceUrl: "#",
      description:
        "A contributor-driven photography platform for personalized comparisons, real specs, and real reviews from both users and experts.",
    },
    {
      label: "NJ Highway Toolkit",
      image: NjHighwayToolkit,
      url: "https://tptoolkit.com",
      sourceUrl: "https://github.com/Flohhhhh/tpa-tools",
      description:
        "A comprehensive reverse geo-coder covering all major highways, interstates, county roads, and state highways across New Jersey, along with landmarks, points of interest, and critical infrastructure. Built as a passion project born from necessity, this tool helps 911 dispatchers and emergency responders quickly parse location information and facilitate faster emergency services response.",
    },
    // {
    //   label: "Facekick Studios",
    //   image: Facekick,
    //   url: "https://facekick-site.vercel.app",
    //   sourceUrl: "#",
    //   description:
    //     "I created this page for a friend of mine for his programming business. I was tasked with creating the frontend including buttons that were ready for backend logic.",
    // },
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
