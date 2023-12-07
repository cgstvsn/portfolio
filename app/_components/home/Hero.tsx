import Image from 'next/image'
import Link from 'next/link'
import {Github, Linkedin} from 'lucide-react'

const Hero = () => {
    return (
      <div className='flex justify-between w-full bg-white rounded-2xl p-8 shadow-lg'>
        <div className='flex flex-col gap-4 w-full'>
          <div className='flex justify-between'>
            <div>
              <p className='text-lg text-zinc-800 mb-4'>Welcome!</p>
              <h1 className='text-5xl lg:text-6xl font-bold text-zinc-800 w-0 wrap'>
                Cameron Gustavson
              </h1>
            </div>
          </div>
  
          <p className='text-lg text-zinc-800 max-w-xl'>
            I&apos;m a front-end developer and graphic designer based in the US
            with a passion for building beautiful interactive experiences.
          </p>
          <div className='flex gap-2 text-zinc-800 mt-4'>
            <Link
              href='https://github.com/cgstvsn'
              target='_blank'
              className='rounded-md border-2 border-zinc-800 p-1 hover:bg-zinc-800 hover:text-white transition duration-150'
            >
              <Github size={24} />
            </Link>
            <Link
              href='https://linkedin.com/in/cgustavson'
              target='_blank'
              className='rounded-md border-2 border-zinc-800 p-1 hover:bg-zinc-800 hover:text-white transition duration-150'
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href='/resume'
              target='_blank'
              className='rounded-md border-2 border-zinc-800 p-1 font-bold hover:bg-zinc-800 hover:text-white transition duration-150'
            >
              Resume
            </Link>
          </div>
        </div>
  
        <Image
          src='/rocket.svg'
          alt='Rocket Illustration'
          className='ml-8 max-w-lg hidden md:block'
          width={300}
          height={300}
        />
      </div>
    );
  };

  export default Hero;