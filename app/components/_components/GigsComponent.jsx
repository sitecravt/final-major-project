import { gigsContent } from '@/Data/GigsContent'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function GigsComponent() {
  return (
    <div className=' flex flex-col  justify-center items-center m-auto gap-8 '>
        {gigsContent.map((item,index)=>(

           <div key={index} className='flex gap-[40px]  bg-[#421418] w-[80%] h-[100px] rounded-2xl items-center'>
            <div ><Image src="/gigsimage.png" alt='gigsimage' width={142} height={100}/></div>
            <div>
                <h2 className='font-semibold text-[16px]'>{item.date}</h2>
            </div>
            <div className='ml-[90px]'>
                <h2 className='font-semibold text-[16px]'>{item.band}</h2>
                <p>{item.subtext}</p>
            </div>
            
            <div>
                <h2 className='font-semibold text-[16px] ml-[150px]'>{item.venue}</h2>
            </div>
            <div className='absolute left-365'>
            <button className='bg-[#d02626] p-5 rounded-[12px] text-[20px] w-[148px]  '><Link href={item.Link}>Tickets</Link></button>
            </div>
           </div>

        ))}
         <button className='bg-[#d02626] p-5 rounded-[12px] text-[20px] w-[198px] '><Link href="https://www.ticketsource.co.uk/boom-leeds">See All Gigs</Link></button>
    </div>
  )
}
