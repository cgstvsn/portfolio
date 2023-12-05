import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

import Me from "../public/me.jpg";

const Hero = () => {
  return (
    <div className='flex justify-between w-full bg-white rounded-xl p-8 shadow-lg'>
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex justify-between'>
          <div>
            <p className='text-lg text-zinc-800 mb-4'>Welcome!</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-zinc-800 w-0 wrap'>
              Cameron Gustavson
            </h1>
          </div>
          <Image
            src='/rocket.svg'
            alt='Rocket Illustration'
            className='max-w-lg md:hidden'
            width={200}
            height={200}
          />
        </div>

        <p className='text-lg text-zinc-800 max-w-xl'>
          I&apos;m a front-end developer and graphic designer based in the US
          with a passion for building beautiful interactive experiences.
        </p>
        <div className='flex gap-2 text-zinc-800 mt-4'>
          <Link
            href='https://github.com/cgstvsn'
            target='_blank'
            className='rounded-md border-2 border-zinc-700 p-1 hover:bg-zinc-700 hover:text-white transition duration-150'
          >
            <Github size={24} />
          </Link>
          <Link
            href='https://linkedin.com/in/cgustavson'
            target='_blank'
            className='rounded-md border-2 border-zinc-700 p-1 hover:bg-zinc-700 hover:text-white transition duration-150'
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href='/resume'
            target='_blank'
            className='rounded-md border-2 border-zinc-700 p-1 font-bold hover:bg-zinc-700 hover:text-white transition duration-150'
          >
            Resume
          </Link>
        </div>
      </div>

      <Image
        src='/rocket.svg'
        alt='Rocket Illustration'
        className='max-w-lg hidden md:block'
        width={400}
        height={400}
      />
    </div>
  );
};

export default function Home() {
  return (
    <main className='w-full max-w-7xl mx-auto min-h-screen'>
      <Hero />
      <div className='grid gap-3 mt-3 sm:grid-cols-8'>
        <Image
          src={Me}
          alt='A photo of me'
          className='col-span-2 w-full bg-white rounded-xl shadow-lg saturate-0 p-1'
        />
        <div className='col-span-6 w-full bg-white rounded-xl px-8 py-4 shadow-lg'>
          <h1 className='text-2xl font-bold text-zinc-800'>Skills</h1>
        </div>
      </div>
    </main>
  );
}
