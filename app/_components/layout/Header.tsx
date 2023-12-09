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
        className={`pl-6 py-1 rounded-full text-zinc-800`}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className='z-10 fixed flex items-center justify-between w-full h-12 bg-zinc-100/70 backdrop-blur-md px-4 font-semibold'>
      <div className='flex justify-between w-full max-w-7xl px-4 mx-auto'>
        <h2 className='font-bold tracking-tighter'>CGSTVSN</h2>
        <div>{buttons}</div>
      </div>
    </div>
  );
};

export default Header;
