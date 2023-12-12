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
        className={`px-4 py-2 rounded-full ${isActive ? "bg-zinc-100" : "hover:bg-white"} hover:bg-white transition`}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <>
      <div className="z-20 fixed left-8 right-4 max-w-7xl mx-auto text-zinc-800">
        <div className='flex items-center gap-8 h-full w-full bg-zinc-200/60 px-8 py-3 backdrop-blur-md rounded-2xl mx-auto my-2 shadow-lg'>
          <Link href="/" className='font-bold tracking-tighter'>CGSTVSN</Link>
          <div>{buttons}</div>
        </div>
      </div>
      <div className="z-10 fixed top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-white/0"/>
    </>
    
   

  );
};

export default Header;
