import Image from "next/image";
import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import {
  Github,
  Linkedin,
  Mails,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  BookOpenText,
} from "lucide-react";
import Hero from "./_components/home/Hero";
import TableOfContents from "./_components/home/TableOfContents";
import SkillSection from "./_components/home/SkillSection";
import SkillHover from "./_components/home/SkillHover";
import Me from "../public/me.jpg";
import TpToolkit from "../public/tptoolkit.png";
import Facekick from "../public/facekick.png";
import ULC from "../public/ulcgenerator.png";
import This from "../public/this.png";

const SocialButton = (props: any) => {
  const { children, href } = props;
  return (
    <Link
      href={href}
      className='flex items-center justify-center gap-2 bg-zinc-200 text-zinc-800 hover:brightness-95 transition rounded-lg px-8 py-2'
    >
      {children}
    </Link>
  );
};

const ProjectCard = (props: any) => {
  const { label, image, description, url, sourceUrl } = props;

  return (
    <div className='grid grid-cols-4 w-full'>
      <div className="col-start-2 col-span-3 flex gap-8 w-full py-12 border-b-2 border-zinc-400">

        <div className='relative h-64 w-96'>
          <Image
            fill
            alt={label}
            src={image}
            className='rounded-lg object-cover object-center'
          />
        </div>
        <div className='flex flex-col justify-between gap-2 px-2 py-2 w-full sm:basis-2/3'>
          <div className='grow mb-2'>
            <Link
              href={url}
              target='_blank'
              className='font-bold text-3xl text-zinc-800'
            >
              {label}
            </Link>
            <p className='mt-8 line-clamp-4'>{description}</p>
          </div>
          <div className="flex gap-2 mt-12">
            <Link
              href={sourceUrl}
              target="_blank"
              className='flex items-center gap-2 bg-zinc-200 text-zinc-800 font-semibold w-full px-4 py-2 hover:brightness-95 transition rounded-lg'
            >
              <Github size={18} /> View source
            </Link>
            <Link
              href={url}
              target="_blank"
              className='flex items-center gap-2 bg-zinc-800 text-zinc-200 font-semibold w-full px-4 py-2 hover:brightness-95 transition rounded-lg'
            >
              <ExternalLink size={18} /> View site
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

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

export default function Home() {
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

  return (
    <main className='relative'>
      <svg
        className='absolute left-0 w-[1200px] -top-24 -z-10 h-[1000px] stroke-zinc-500/20 [mask-image:radial-gradient(50%_100%_at_top,white,transparent)]'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='983e3e4c-de6d-4c3f-8d64-b9761d1534cc'
            width='50'
            height='50'
            x='50%'
            y='70'
            patternUnits='userSpaceOnUse'
          >
            <path d='M.5 200V.5H200' fill='none'></path>
          </pattern>
        </defs>
        <rect
          width='100%'
          height='100%'
          strokeWidth='0'
          fill='url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)'
        />
      </svg>
      {/* content */}
      <div className='w-full pt-12 min-h-screen'>
        {/* Hero */}
        <div className='w-full py-24'>
          <div className='flex flex-col gap-8 w-full max-w-7xl mx-auto px-8'>
            <p className='text-3xl text-zinc-800'>Hello!</p>

            <div className='flex -my-4'>
              <h1 className='text-[148px] font-bold text-zinc-800'>
                {/* I&apos;m Cam */}
                World
              </h1>
              <div className='w-4 h-4 mt-2 ml-1 rounded-full border-[4px] border-zinc-800' />
            </div>

            <p className='text-zinc-800 max-w-3xl'>
              I&apos;m a frontend developer based in the US with a background in branding
              and graphic design. I enjoy working on open source web projects and working
              on video games and software as a tech artist in Unreal Engine.
            </p>

            <a
              href='https://cgustavson.com/resume'
              className='group col-start-2 col-span-3 flex items-center gap-2 mb-16'
            >
              View my resume!
              <span className='group-hover:translate-x-2 transition text-zinc-800'>
                <ChevronRight size={18} />
              </span>
            </a>
              
            <div className="col-start-2 col-span-3 flex items-start gap-2">
              <SocialButton href='#'>
                <Github size={18} /> GitHub
              </SocialButton>
              <SocialButton href='#'>
                <Linkedin size={18} /> LinkedIn
              </SocialButton>
              <button className='flex items-center justify-center gap-2 bg-zinc-200 text-zinc-800  hover:brightness-95 transition rounded-lg px-8 py-2'>
                <Mails size={18} /> Email
              </button>
            </div>

          </div>
        </div>

        {/* skills cloud*/}
        <div className='w-full bg-zinc-100 py-12'>
          <div className='w-full max-w-7xl mx-auto px-8'>
            <div className='sticky top-24 grid grid-cols-4'>
              <h1 className='text-2xl font-bold text-zinc-00 mb-10 ml-1'>
                My skills
              </h1>
            </div>
            <div className='grid grid-cols-4'>
              <SkillSection />
            </div>
            <div className='grid grid-cols-4'>
              <div className='col-start-2 flex gap-2 items-center mt-8'>
                <p className='ml-1 text-zinc-500'>
                  That&apos;s not all, click to see more!
                </p>
                <ChevronDown size={18} className='text-zinc-500' />
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center lg:items-start gap-4 w-full my-8'>
          {/* <h1 className='lg:hidden my-6 relative w-max text-4xl font-extrabold text-zinc-800 after:absolute pr-2 after:-right-4 after:bottom-[7px] after:h-[6px] after:w-5 after:animate-caret after:bg-zinc-400'>
            cgstvsn
          </h1> */}
          {/* Hero */}
          <div className='max-w-full'></div>

          {/* Skills */}
          {/* <div className="flex items-center">
            <h1 className="text-3xl font-bold text-zinc-800 mt-4 ml-1">/skills</h1>
            <div className="w-2 h-2 ml-1 rounded-full border-[2px] border-zinc-800"/>
          </div>
          <SkillSection /> */}

          <div className='w-full max-w-7xl mx-auto px-8'>
            {/* Projects */}
            <div className='sticky top-24 flex items-center'>
              <h1 className='text-2xl font-bold text-zinc-800 mb-8 ml-1'>
                Selected Projects
              </h1>
              {/* <div className='w-2 h-2 ml-1 rounded-full border-[2px] border-zinc-800' /> */}
            </div>

            <div className='flex flex-col gap-4'>
              {projectCards}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
