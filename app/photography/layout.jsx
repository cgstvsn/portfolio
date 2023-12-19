import React from "react";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div className='pt-24'>
      {/* Button group */}
      <div className='flex justify-center items-center w-full mt-4 px-6 lg:px-8'>
        <Link
          className='w-48 p-2 text-center hover:bg-zinc-100 transition border border-zinc-800/20 rounded-l-xl'
          href='/photography'
        >
          All
        </Link>
        <Link
          className='w-48 p-2 text-center hover:bg-zinc-100 transition border border-zinc-800/20'
          href='/photography/sports'
        >
          Sports
        </Link>
        <Link
          className='w-48 p-2 text-center hover:bg-zinc-100 transition border border-zinc-800/20 rounded-r-xl'
          href='/photography/auto'
        >
          Automotive
        </Link>
      </div>
      {/* TODO make this button group hidden until page is scrolled */}
      {/* Button group */}
      <div className='fixed bottom-12 right-12 left-12 z-10 flex justify-center items-center  px-6 lg:px-8'>
        <Link
          className='bg-zinc-100/50 backdrop-blur-md w-48 p-2 text-center hover:bg-zinc-100 transition border border-zinc-800/20 rounded-l-xl'
          href='/photography'
        >
          All
        </Link>
        <Link
          className='bg-zinc-100/50 backdrop-blur-md w-48 p-2 text-center hover:bg-zinc-100 transition border border-zinc-800/20'
          href='/photography/sports'
        >
          Sports
        </Link>
        <Link
          className='bg-zinc-100/50 backdrop-blur-md w-48 p-2 text-center hover:bg-zinc-100 transition border border-zinc-800/20 rounded-r-xl'
          href='/photography/auto'
        >
          Automotive
        </Link>
      </div>
      {children}
    </div>
  );
};

export default layout;
