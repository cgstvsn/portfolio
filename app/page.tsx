import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mails, ChevronRight } from "lucide-react";
import TableOfContents from "./_components/home/TableOfContents";
import SkillSection from "./_components/home/SkillSection";
import FeaturedTabs from "./_components/home/FeaturedTabs";
import SkillHover from "./_components/home/SkillHover";

import Me from "../public/me.jpg";

const SocialButton = (props: any) => {
  const { children, href } = props;
  return (
    <Link
      href={href}
      className='flex items-center justify-center gap-2 w-full sm:w-min bg-zinc-200 text-zinc-800 hover:brightness-95 transition rounded-lg px-8 py-2'
    >
      {children}
    </Link>
  );
};

export default function Home() {
  return (
    <main className='relative'>
      <svg
        className='absolute left-0 w-full -top-24 -z-10 h-[1000px] stroke-zinc-500/20 [mask-image:radial-gradient(50%_100%_at_top,white,transparent)]'
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
              <h1 className='text-[100px] lg:text-[148px] font-bold text-zinc-800'>
                {/* I&apos;m Cam */}
                World
              </h1>
              {/* <div className='w-4 h-4 mt-2 ml-1 rounded-full border-[4px] border-zinc-800' /> */}
            </div>

            <p className='text-zinc-800 max-w-3xl'>
              I&apos;m a frontend developer based in the US with a background in
              branding and graphic design. I enjoy working on open source web
              projects and working on video games and software as a tech artist
              in Unreal Engine.
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

            <div className='col-start-2 col-span-3 flex flex-col sm:flex-row items-start gap-2'>
              <SocialButton href='#'>
                <Github size={18} /> GitHub
              </SocialButton>
              <SocialButton href='#'>
                <Linkedin size={18} /> LinkedIn
              </SocialButton>
              <button className='flex items-center justify-center gap-2 w-full sm:w-min bg-zinc-200 text-zinc-800 hover:brightness-95 transition rounded-lg px-8 py-2'>
                <Mails size={18} /> Email
              </button>
            </div>
          </div>
        </div>

        {/* skills cloud*/}

        <SkillSection />

        <div className='flex flex-col items-center lg:items-start gap-4 w-full py-12'>
          <FeaturedTabs />
        </div>
      </div>
    </main>
  );
}
