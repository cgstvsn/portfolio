import Image from "next/image";
import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import { Github, Linkedin, Mails, ExternalLink } from 'lucide-react'
import Hero from "./_components/home/Hero"
import TableOfContents from "./_components/home/TableOfContents";
import SkillSection from "./_components/home/SkillSection";
import SkillHover from "./_components/home/SkillHover";
import Me from "../public/me.jpg";
import TpToolkit from "../public/tptoolkit.png"
import Facekick from "../public/facekick.png"
import ULC from "../public/ulcgenerator.png"
import This from "../public/this.png"

const SocialButton = (props: any) => {
  const { children, href } = props;
  return (
    <Link href={href} className="flex items-center justify-center gap-2 bg-zinc-200 text-zinc-800 font-semibold hover:brightness-95 transition w-full rounded-lg py-2">
      {children}
    </Link>
  )
}

const ProjectCard = (props: any) => {
  const { label, image, description, url, sourceUrl } = props

  return ( 
    <div className="flex flex-col gap-4 w-full p-4 bg-zinc-200 rounded-3xl">
      <div className="relative h-full aspect-video">
        <Image fill alt={label} src={image} className="rounded-xl object-cover object-top shadow-md saturate-0 opacity-90"/>
      </div>
      <div className="flex flex-col justify-between gap-2 w-full sm:basis-2/3">
        <div className="grow mb-2">
          <Link href={url} target="_blank" className="font-bold text-3xl text-zinc-800">{label}</Link>
          <p className="mt-2 line-clamp-4">
            {description}
          </p>
        </div>
        <Link href={sourceUrl} className="flex items-center gap-2 bg-zinc-300 text-zinc-800 font-semibold w-full px-4 py-2 hover:brightness-95 transition rounded-lg">
          <Github size={18} /> View source
        </Link>
        <Link href={url} className="flex items-center gap-2 bg-zinc-800 text-zinc-200 font-semibold w-full px-4 py-2 hover:brightness-95 transition rounded-lg">
          <ExternalLink size={18} /> View site
        </Link>
      </div>
    </div>
  )
}

const projects = [
  {
    label: "Reverse Geocoder", image: TpToolkit, url: "https://tptoolkit.com", sourceUrl: "https://github.com/Flohhhhh/tpa-tools", 
    description: "This project is a reverse geo-coder for locations along the major highways in New Jersey, the NJ Turnpike and the Garden State Parkway. I created this for work, since there was a need for a tool like this to improve our workflow." 
  },
  {
    label: "Facekick Studios", image: Facekick, url: "https://facekick-site.vercel.app", sourceUrl: "#",
    description: "I created this page for a friend of mine for his programming business. I was tasked with creating the frontend including buttons that were ready for backend logic." 
  },
  {
    label: "ULC Generator", image: ULC, url: "https://ulc.dwnstr.com/generator", sourceUrl: "https://github.com/dwnstr/ulc-app",
    description: "I created a fully-featured script for FiveM called Ultimate Lighting Controller which requires a configuration file. Since many of the users are not programmers I created this tool so that users could generate configuration files using an intuitive GUI."
  },
  {
    label: "This portfolio!", image: This, url: "#", sourceUrl: "https://github.com/cgstvsn/portfolio",
    description: "This portfolio itself was carefully crafted using NextJS and Tailwind CSS. Other tools used include Headless UI and Lucide Icons." 
  }
]


export default function Home() {

  const projectCards = projects.map((project) => {
    return <ProjectCard label={project.label} image={project.image} description = {project.description} url={project.url} sourceUrl={project.sourceUrl} />
  })

  return (
    <main>
      {/* static sidebar */}
      <div className="fixed top-12 left-0 bottom-0 w-72 bg-zinc-100 hidden lg:block">
        <div className="flex flex-col items-center justify-between absolute top-0 bottom-0 w-full pt-16 p-8">
          <h1 className="relative w-max text-4xl font-extrabold text-zinc-800 after:absolute pr-2 after:-right-4 after:bottom-[7px] after:h-[3px] after:w-5 after:animate-caret after:bg-zinc-400">cgstvsn</h1>
          {/* bottom float */}
          <div className="w-full flex flex-col gap-2 items-center">
            <SocialButton href="#">
              <Github size={18} /> GitHub
            </SocialButton>
            <SocialButton href="#">
              <Linkedin size={18} /> LinkedIn
            </SocialButton>
            <button className="flex items-center justify-center gap-2 bg-zinc-800 text-zinc-200 font-semibold hover:brightness-95 transition w-full rounded-lg py-2">
              <Mails size={18} /> Contact
            </button>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="lg:pl-72 pt-12 min-h-screen">
        <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:pt-16 px-4">
          <h1 className="lg:hidden my-6 relative w-max text-4xl font-extrabold text-zinc-800 after:absolute pr-2 after:-right-4 after:bottom-[7px] after:h-[6px] after:w-5 after:animate-caret after:bg-zinc-400">cgstvsn</h1>
          {/* Hero */}
          <div className="flex flex-col justify-between w-full bg-zinc-800 h-96 rounded-3xl p-8">
            <p className="text-3xl text-zinc-200">Hello!</p>
            <hr className="w-48 opacity-75"/>
            <div className="flex flex-col gap-4">
              <div className="flex">
                <h1 className="text-8xl font-bold text-zinc-200">World</h1>
                <div className="w-4 h-4 mt-2 ml-1 rounded-full border-[4px] border-zinc-200"/>
              </div>
              <p className="text-zinc-200 max-w-lg">I&apos;m a frontend developer based in the US with a background in graphic and branding design.</p>
            </div>
          </div>

          {/* Skills */}
          {/* <div className="flex items-center">
            <h1 className="text-3xl font-bold text-zinc-800 mt-4 ml-1">/skills</h1>
            <div className="w-2 h-2 ml-1 rounded-full border-[2px] border-zinc-800"/>
          </div>
          <SkillSection /> */}

          {/* Projects */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-zinc-800 mt-4 ml-1">/projects</h1>
            <div className="w-2 h-2 ml-1 rounded-full border-[2px] border-zinc-800"/>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2  gap-2 w-full">
            {projectCards}
          </div>
        </div>
      </div>
    </main>
  );
}
