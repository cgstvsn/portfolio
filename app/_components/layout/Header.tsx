"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { ModalContext } from "@/context/modal.context";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const { openModal } = useContext(ModalContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    {
      href: "/resume",
      label: "Resume",
    },
    // {
    //   href: "/projects",
    //   label: "Projects",
    // },
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
    const isActive = pathname.includes(link.href);

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
    <header>
      <div className='z-20 fixed left-8 right-8 max-w-7xl mx-auto text-zinc-800'>
        <div className='w-full px-4 lg:px-8 py-1 flex items-center gap-2 bg-zinc-100/60 backdrop-blur-md rounded-2xl my-2 border border-zinc-200'>
          <Link href='/' className='font-bold tracking-tighter lg:mr-8'>
            CGSTVSN
          </Link>
          <nav className='hidden lg:block'>{buttons}</nav>
          {/* right items */}
          <div className='flex items-center ml-auto'>
            {/* TODO open contact modal */}
            <button
              onClick={() => openModal()}
              className='hidden lg:block rounded-xl bg-zinc-800 text-white px-4 py-2 transition hover:bg-zinc-700 -mr-7'
            >
              Contact
            </button>
            <button
              className='lg:hidden rounded-xl bg-zinc-200 text-zinc-800 p-2 -mr-3'
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>
      <div className='z-10 fixed top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-white/0' />
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-20' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-zinc-100 px-8 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center mb-8'>
            <Link href='/' className='font-bold tracking-tighter lg:mr-8'>
              CGSTVSN
            </Link>
            <button
              className='lg:hidden rounded-xl bg-zinc-200 text-zinc-800 p-2 mr-1 ml-auto'
              onClick={() => setMobileMenuOpen(false)}
            >
              <X />
            </button>
          </div>

          <div className='flex flex-col'>{buttons}</div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
