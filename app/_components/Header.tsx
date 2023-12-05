"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const links = [
    {
      href: "/about",
      label: "About me",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/design",
      label: "Design",
    },
  ];

  const buttons = links.map((link) => {
    const isActive = pathname === link.href;

    return (
      <Link
        href={link.href}
        key={link.label}
        className={`px-4 py-1 rounded-full hover:bg-white transition ${
          isActive ? "bg-white text-zinc-800" : "text-zinc-800"
        }`}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className='w-full my-4'>
      <div className='flex items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-8'>
        <Link
          href='/'
          className='text-xl font-bold text-zinc-800 tracking-tighter'
        >
          CGSTVSN
        </Link>
        <div className='flex gap-3 w-fit rounded-full bg-zinc-200 mx-auto px-1 py-1 text-zinc-800 font-semibold'>
          {buttons}
        </div>
        <div className='bg-zinc-200 p-1 rounded-full'>
          <button className='px-4 py-1 rounded-full font-semibold text-zinc-800 hover:bg-white transition'>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
