// Import necessary dependencies
import Link from 'next/link'
import React from 'react'

// HomePage Component: Main landing page component for [BOOM] Leeds website
// Displays the venue's title and main call-to-action buttons
export default function HomePage() {
  return (
    // Main container with animation effect
    <div id='homepage' className='text-white px-4 md:pl-45 pt-10 md:pt-30 animate-bounce' style={{animationIterationCount:2}}>        
        <div className='pt-[30px] md:pt-[50px]'>
            <p className='font-bold text-[28px] md:text-[45px]'><span className=''>[BOOM]</span> LEEDS</p>
            <p className='font-bold text-[28px] md:text-[45px]'>MUSIC VENUE AND</p>
            <p className='font-bold text-[28px] md:text-[45px]'>COMMUNITY INTEREST COMPANY</p>
        </div>
        <div className='flex flex-col md:flex-row gap-3 md:gap-5 pt-[30px] md:pt-[50px] pb-[100px] md:pb-[150px]'>
            <button className='bg-[#d02626] p-4 md:p-5 rounded-[12px] text-[16px] md:text-[20px] w-full md:w-[148px]'><Link href="/rehearsals">Book Venue</Link></button>
            <button className='bg-[#d02626] p-4 md:p-5 rounded-[12px] text-[16px] md:text-[20px] w-full md:w-[148px]'><Link href="https://boom-leeds.myshopify.com/">Store</Link></button>
        </div>
        
    </div>
  )
}
