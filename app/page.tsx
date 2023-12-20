import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mails, ChevronRight } from "lucide-react";
import TableOfContents from "./_components/home/TableOfContents";
import SkillSection from "./_components/home/SkillSection";
import FeaturedTabs from "./_components/home/featured/FeaturedTabs";
import SocialButton from "./_components/SocialButton";

import Me from "../public/me.jpg";

export default function Home() {
  return (
    <main className='relative'>
      <div
        className='absolute left-0 w-full -top-24 -z-10 h-[1000px] stroke-zinc-500/20 heropattern-banknote-black/10 [mask-image:radial-gradient(50%_100%_at_top,white,transparent)]'
        aria-hidden='true'
      />
      {/* content */}
      <div className='w-full pt-12 min-h-screen'>
        {/* Hero */}
        <div className='w-full py-24'>
          <div className='flex flex-col gap-8 w-full max-w-7xl mx-auto px-8'>
            <p className='text-2xl text-zinc-800'>Hello, web traveler!</p>

            <div className='flex -my-4'>
              <h1 className='text-[100px] lg:text-[148px] font-bold text-zinc-800'>
                {/* I&apos;m Cam */}
                I&apos;m Cam
              </h1>
              {/* <div className='w-4 h-4 mt-2 ml-1 rounded-full border-[4px] border-zinc-800' /> */}
            </div>

            <p className='text-zinc-800 max-w-3xl'>
              I&apos;m a frontend developer based in the US with a background in
              branding and graphic design. I enjoy working on open source web
              projects, photography, and game development in Unreal Engine as a
              tech artist & VFX artist.
            </p>

            <a
              href='https://rxresu.me/camgus322/frontend'
              className='group col-start-2 col-span-3 flex items-center gap-2 mb-16'
            >
              View my resume!
              <span className='group-hover:translate-x-2 transition text-zinc-800'>
                <ChevronRight size={18} />
              </span>
            </a>

            <div className='col-start-2 col-span-3 flex flex-col sm:flex-row items-start gap-2'>
              <SocialButton href='https://github.com/Flohhhhh'>
                <Github size={18} /> GitHub
              </SocialButton>
              <SocialButton href='https://www.linkedin.com/in/cgustavson/'>
                <Linkedin size={18} /> LinkedIn
              </SocialButton>
              {/* <button className='flex items-center justify-center gap-2 w-full sm:w-min bg-zinc-100 text-zinc-800 hover:brightness-95 transition rounded-lg px-8 py-2'>
                <Mails size={18} /> Email
              </button> */}
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
