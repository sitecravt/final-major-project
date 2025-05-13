'use client'; // Enable client-side interactivity

import React, { useState } from 'react';
import { navItems } from '@/Data/NavBarrContent';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

// NavBar Component: Main navigation bar for the website
// Displays logo and navigation links with active state highlighting
export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed w-full z-50 '>
      <div className='flex justify-center items-center gap-[50px] bg-white/8 backdrop-blur-md px-6 py-3'>
        {/* Website logo */}
        <Image src="/logo.png" alt='logo' width={100} height={100} />

        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-[85px]'>
          {navItems.map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <li
                key={index}
                className={`list-none font-regular text-[16px] ${
                  isActive ? 'text-red-500' : 'text-white hover:text-gray-500'
                }`}
              >
              
                <Link href={item.link}>{item.text}</Link>
              </li>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-white text-2xl'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-[72px] left-0 w-full h-screen bg-black/95 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col items-center gap-8 pt-10'>
          {navItems.map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <li
                key={index}
                className={`list-none font-regular text-[20px] ${
                  isActive ? 'text-red-500' : 'text-white hover:text-gray-500'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Link href={item.link}>{item.text}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
