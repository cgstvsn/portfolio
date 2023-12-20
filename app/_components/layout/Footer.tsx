"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { Github, Linkedin, Mails } from "lucide-react";
import { ModalContext } from "@/context/modal.context";

const Footer = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <div className='w-full bg-zinc-100 mt-24'>
      <div className='flex flex-col max-w-7xl mx-auto p-8'>
        {/* top */}
        <div className='flex flex-col md:flex-row justify-between gap-8 border-b border-zinc-300 py-12'>
          {/* left */}
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-bold text-zinc-800'>
              Cameron Gustavson
            </h1>
            <p className='text-zinc-600'>Frontend Developer & Photographer</p>
            <div className='flex gap-4 mt-8'>
              <Link
                href='https://github.com/Flohhhhh'
                target='_blank'
                className='bg-white p-2 rounded-lg border border-zinc-200 hover:brightness-95 transition'
              >
                <Github size={18} />
              </Link>
              <Link
                href='https://www.linkedin.com/in/cgustavson/'
                target='_blank'
                className='bg-white p-2 rounded-lg border border-zinc-200 hover:brightness-95 transition'
              >
                <Linkedin size={18} />
              </Link>
              <button
                onClick={() => openModal()}
                className='bg-white p-2 rounded-lg border border-zinc-200 hover:brightness-95 transition'
              >
                <Mails size={18} />
              </button>
            </div>
          </div>
          {/* right */}
          <div className='flex gap-8'>
            <Link
              href='/'
              className='font-semibold text-zinc-600 hover:underline transition'
            >
              Home
            </Link>
            <Link
              href='/resume'
              className='font-semibold text-zinc-600 hover:underline transition'
            >
              Resume
            </Link>
            {/* <Link
              href='/projects'
              className='font-semibold text-zinc-600 hover:underline transition'
            >
              Projects
            </Link> */}
            <Link
              href='/photography'
              className='font-semibold text-zinc-600 hover:underline transition'
            >
              Photography
            </Link>
            <Link
              href='/design'
              className='font-semibold text-zinc-600 hover:underline transition'
            >
              Design
            </Link>
          </div>
        </div>
        {/* bottom */}
        {/* copyright Cameron Gustavson 2023 with lucide icon */}
        <div className='flex flex-col md:flex-row justify-between gap-8 text-zinc-600 py-8'>
          <p>
            <span className='text-lg'>&copy;</span> Cameron Gustavson 2023
          </p>
          <Link
            href='https://github.com/cgstvsn/portfolio'
            target='_blank'
            className='hover:underline'
          >
            View source
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
