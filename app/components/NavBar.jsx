'use client'; 

import React from 'react';
import { navItems } from '@/Data/NavBarrContent';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className='flex justify-center items-center gap-[80px] bg-white/8 backdrop-blur-md z-50  fixed w-[100%] pt-3 pb-2'>
     
        <Image src="/logo.png" alt='logo' width={100} height={100} />
     
      
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
  );
}
