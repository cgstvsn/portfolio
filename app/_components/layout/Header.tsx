"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const links = [
    {
      href: "/resume",
      label: "Resume",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/design",
      label: "Design",
    },
    {
      href: "/photography",
      label: "Photography",
    },
  ];

  const buttons = links.map((link) => {
    const isActive = pathname === link.href;

    return (
      <Link
        href={link.href}
        key={link.label}
        className={`px-4 py-2 rounded-xl border border-zinc-200/0 ${
          isActive ? "bg-white border" : "hover:bg-white"
        } hover:bg-white hover:border-zinc-200 transition`}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <>
      <div className='z-20 fixed left-8 right-4 max-w-7xl mx-auto text-zinc-800'>
        <div className='w-full px-8 py-1 flex items-center gap-2 bg-zinc-100/60 backdrop-blur-md rounded-2xl my-2 border border-zinc-200'>
          <Link href='/' className='font-bold tracking-tighter mr-8'>
            CGSTVSN
          </Link>
          {buttons}
          {/* TODO open contact modal */}
          <button className='ml-auto rounded-xl bg-zinc-800 text-white px-4 py-2 transition hover:bg-zinc-700 -mr-7'>
            Contact
          </button>
        </div>
      </div>
      <div className='z-10 fixed top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-white/0' />
    </>
  );
};

export default Header;
