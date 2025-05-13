// Import required dependencies for blog functionality
import { blogPosts } from '@/Data/BlogContent'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// BlogPage Component: Displays recent blog posts in a grid layout
// Each post includes an image, title, description, and a read more button
export default function BlogPage() {
  return (
    <div>
        {/* Section title */}
        <h1 className='font-bold text-[30px] md:text-[40px] text-center text-white pt-[20px] md:pt-[30px] pb-[20px] md:pb-[40px]'>RECENT POSTS</h1>
        <div className='text-white flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center pb-[20px] md:pb-[40px] px-4 md:px-0'>
            {blogPosts.map((item,index)=>(
                <div key={index} className='bg-[#421418] w-full md:w-[480px] h-auto md:h-[680px] mb-4 md:mb-0'>
                     <div className='relative w-full h-[200px] md:h-[260px]'>
                        <Image src={item.image} alt={item.title} fill className='object-cover' />
                     </div>
                     <div>
                        <h1 className='text-center font-bold text-[20px] md:text-[25px] pt-[20px] md:pt-[40px] pb-[10px]'>{item.title}</h1>
                     </div>
                     <div>
                        <h2 className='text-center text-[16px] md:text-[20px] p-4 md:p-8'>{item.text}</h2>
                     </div>
                     <div className='flex justify-center  md:pb-0'>
                        <button className='bg-[#d02626] p-3 md:p-5 rounded-[12px] text-[16px] md:text-[20px] w-[160px] md:w-[198px]'><Link href={item.link}>Read More</Link></button>
                     </div>
                </div>
            ))}
        </div>
    </div>
  )
}
