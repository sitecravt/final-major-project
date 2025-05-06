import Link from 'next/link'
import React from 'react'


export default function HomePage() {
  return (
    <div id='homepage' className='text-white pl-45 pt-30 animate-bounce' style={{animationIterationCount:2,
      
    }}>
        <div className='pt-[50px]'>
            <p className='font-bold text-[45px]'><span className=''>[BOOM]</span> LEEDS</p>
            <p className='font-bold text-[45px]'>MUSIC VENUE AND</p>
            <p className='font-bold text-[45px]'>COMMUNITY INTEREST COMPANY</p>
        </div>
        <div className='flex gap-5 pt-[50px] pb-[150px]'>
            <button className='bg-[#d02626] p-5 rounded-[12px] text-[20px] w-[148px]  '><Link href="/rehearsals">Book Venue</Link></button>
            <button  className='bg-[#d02626] p-5 rounded-[12px] text-[20px] w-[148px]  '><Link href="https://boom-leeds.myshopify.com/">Store</Link></button>
        </div>
        
    </div>
  )
}
