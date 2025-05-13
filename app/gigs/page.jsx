/**
 * @fileoverview Gigs and Events Page Component
 * Displays a collection of upcoming gigs and events with ticket booking functionality
 */

import { blogPosts } from '@/Data/BlogContent'
import { gigsContent } from '@/Data/GigsContent'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

/**
 * Gigs Page Component
 * @returns {JSX.Element} Rendered gigs page with event cards and booking buttons
 */
export default function page() {
  return (
    <div className='bg-black text-white'>
        {/* Main heading for the gigs page */}
        <h1 className='text-center font-bold text-[30px] md:text-[40px] pt-[60px] md:pt-[90px] text-white'>All Gigs And Events</h1>
        {/* Container for gig cards with flex layout */}
        <div className='text-white flex flex-col md:flex-row gap-8 justify-center items-center pb-[40px] pt-[100px]'>
            
            {/* Map through gigs data to create individual event cards */}
            {gigsContent.map((item,index)=>(                
                <div key={index} className='bg-[#421418] w-[90%] md:w-[480px] h-auto md:h-[680px] mx-4 md:mx-0'>
                     {/* Event image with Next.js Image optimization */}
                     <div>
                        <Image src={item.image} alt="image" width={480} height={200} className='h-[300px] w-full' />
                     </div>
                     {/* Band/Artist name */}
                     <div>
                        <h1 className='text-center font-bold text-[22px] md:text-[25px] pt-[30px] md:pt-[40px] pb-[10px]'>{item.band}</h1>
                     </div>
                     {/* Event description */}
                     <div>
                        <h2 className='text-center text-[18px] md:text-[20px] p-6 md:p-8'>{item.text}</h2>
                     </div>
                     {/* Additional event details */}
                     <div>
                        <h2 className='text-center text-[15px] md:text-[17px] p-6 md:p-8'>{item.subtext}</h2>
                     </div>
                     {/* Ticket booking button */}
                     <div className='flex justify-center'>
                     <button className='bg-[#d02626] p-5 rounded-[12px] text-[20px] w-[198px]  '><Link href={item.Link}>Tickets</Link></button>
                     </div>
                </div>
            ))}
        </div>
        {/* Global link to view all available gigs */}
        <div className='flex justify-center md:justify-end md:mr-[100px] pb-[30px]'><button className='bg-[#d02626] p-5 rounded-[12px] text-[20px] w-[198px]  '><Link href="https://www.ticketsource.co.uk/boom-leeds">See All Gigs</Link></button></div>
    
    </div>
  )
}
