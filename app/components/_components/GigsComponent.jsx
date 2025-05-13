import { gigsContent } from '@/Data/GigsContent'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

/**
 * GigsComponent - Displays a list of upcoming gigs/events
 * 
 * This component renders a vertical list of gig events, each containing:
 * - Event image
 * - Date
 * - Band name and description
 * - Venue information
 * - Ticket booking button
 * 
 * The component uses flex layout for responsive positioning and includes
 * a "See All Gigs" button at the bottom linking to the full events page.
 */
export default function GigsComponent() {
  return (
    // Main container with vertical flex layout
    <div className='flex flex-col justify-center items-center m-auto gap-4 md:gap-8'>
        {gigsContent.map((item,index)=>(
           <div key={index} className='flex flex-col md:flex-row gap-4 md:gap-[40px] bg-[#421418] w-[95%] md:w-[80%] p-4 md:h-[100px] rounded-2xl items-center'>
            <div className='w-full md:w-auto'><Image src="/gigsimage.png" alt='gigsimage' width={142} height={100} className='w-full md:w-auto'/></div>
            <div className='text-center md:text-left'>
                <h2 className='font-semibold text-[14px] md:text-[16px]'>{item.date}</h2>
            </div>
            <div className='text-center md:text-left md:ml-[90px]'>
                <h2 className='font-semibold text-[14px] md:text-[16px]'>{item.band}</h2>
                <p className='text-[12px] md:text-base'>{item.subtext}</p>
            </div>
            <div className='text-center md:text-left'>
                <h2 className='font-semibold text-[14px] md:text-[16px] md:ml-[150px]'>{item.venue}</h2>
            </div>
            <div className='w-full md:w-auto md:absolute md:left-365'>
                <button className='w-full md:w-[148px] bg-[#d02626] p-3 md:p-5 rounded-[12px] text-[16px] md:text-[20px]'><Link href={item.Link}>Tickets</Link></button>
            </div>
           </div>
        ))}
         <button className='w-[95%] md:w-[198px] bg-[#d02626] p-3 md:p-5 rounded-[12px] text-[16px] md:text-[20px]'><Link href="https://www.ticketsource.co.uk/boom-leeds">See All Gigs</Link></button>
    </div>
  )
}
