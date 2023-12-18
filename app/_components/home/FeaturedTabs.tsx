"use client";

import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import ProjectCard from "./ProjectCard";

import TpToolkit from "@/public/tptoolkit.png";
import Facekick from "@/public/facekick.png";
import ULC from "@/public/ulcgenerator.png";
import This from "@/public/this.png";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ProjectTab = () => {
  const projects = [
    {
      label: "Reverse Geocoder",
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

const PhotosTab = () => {
  return <div>PhotosTab</div>;
};

const DesignTab = () => {
  return <div>DesignTab</div>;
};

const FeaturedTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabs = [
    {
      label: "Projects",
      header: "Selected Projects",
      component: ProjectTab,
    },
    {
      label: "Photography",
      header: "Photography Samples",
      component: PhotosTab,
    },
    {
      label: "Design",
      header: "Design Samples",
      component: DesignTab,
    },
  ];

  return (
    // section container
    <div className='w-full max-w-7xl mx-auto px-8'>
      <Tab.Group
        vertical
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        {/* 2 column container */}
        <div className='top-24 lg:grid grid-cols-4 gap-4'>
          {/* left column */}
          <Tab.List>
            <div className='lg:sticky text-center lg:text-left top-24'>
              <h1 className='text-2xl font-bold text-zinc-00 mb-10 ml-1'>
                {tabs[selectedIndex].header}
              </h1>
              <div className='flex flex-row lg:flex-col gap-2'>
                {tabs.map((tab) => (
                  <Tab
                    key={tab.label}
                    className={({ selected }) =>
                      classNames(
                        "w-full py-2 px-4 rounded-lg transition  lg:text-left",
                        selected
                          ? "bg-zinc-100 cursor-default"
                          : "bg-white hover:bg-zinc-100 border border-zinc-200"
                      )
                    }
                  >
                    {tab.label}
                  </Tab>
                ))}
              </div>
            </div>

          </Tab.List>

          {/* right column / tab render */}
          <Tab.Panels className='col-start-2 col-span-3 mt-16'>
            {tabs.map((tab) => (
              <Tab.Panel key={tab.label}>
                <tab.component />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

export default FeaturedTabs;
