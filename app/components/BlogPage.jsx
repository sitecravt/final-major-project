import { blogPosts } from '@/Data/BlogContent'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogPage() {
  return (
    <div>
        <h1 className='font-bold text-[30px] text-center  text-white pt-[30px] pb-[40px]'>RECENT POSTS</h1>
    <div className='text-white flex flex-row gap-8 justify-center items-center pb-[40px]'>
        
        {blogPosts.map((item,index)=>(
            <div key={index} className='bg-[#421418] w-[480px] h-[680px]'>
                 <div>
                    <Image src={item.image} alt="image" width={480} height={260} />
                 </div>
                 <div>
                    <h1 className='text-center font-bold text-[25px] pt-[40px] pb-[10px]'>{item.title}</h1>
                 </div>
                 <div>
                    <h2 className='text-center text-[20px] p-8'>{item.text}</h2>
                 </div>
                 <div className='flex justify-center'>
                 <button className='bg-[#d02626] p-5 rounded-[12px] text-[20px] w-[198px]  '><Link href="">Read More</Link></button>
                 </div>
            </div>
        ))}
    </div>
    </div>
  )
}
