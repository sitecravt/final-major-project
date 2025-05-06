import { blogPosts } from '@/Data/BlogContent'
import { gigsContent } from '@/Data/GigsContent'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function page() {
  return (
    <div className='bg-black text-white'>
        <h1 className='text-center font-bold text-[40px] pt-[90px] text-white'>All Gigs And Events</h1>
    <div className='text-white flex flex-row gap-8 justify-center items-center pb-[40px] pt-[100px]'>
        
        {gigsContent.map((item,index)=>(
            <div key={index} className='bg-[#421418] w-[480px] h-[680px]'>
                 <div>
                    <Image src={item.image} alt="image" width={480} height={200} className='h-[300px] w-[480px]' />
                 </div>
                 <div>
                    <h1 className='text-center font-bold text-[25px] pt-[40px] pb-[10px]'>{item.band}</h1>
                 </div>
                 <div>
                    <h2 className='text-center text-[20px] p-8'>{item.text}</h2>
                 </div>
                 <div>
                    <h2 className='text-center text-[17px] p-8'>{item.subtext}</h2>
                 </div>
                 <div className='flex justify-center'>
                 <button className='bg-[#d02626] p-5 rounded-[12px] text-[20px] w-[198px]  '><Link href={item.Link}>Tickets</Link></button>
                 </div>
            </div>
        ))}
    </div>
    <div className=' ml-[800px] pb-[30px]'><button className='bg-[#d02626] p-5 rounded-[12px] text-[20px] w-[198px]  '><Link href="https://www.ticketsource.co.uk/boom-leeds">See All Gigs</Link></button></div>
    
    </div>
  )
}
