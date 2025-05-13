import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutPage() {
  return (
    <div className='text-white mb-8 md:mb-[40px] px-4 md:px-0'>
    <h2 className='text-center text-white font-bold text-xl md:text-[30px] mb-6 md:mb-[30px]'>ABOUT US</h2>
    <div className='flex justify-center'>
        <Image className='grayscale  h-auto' src={"/aboutimage.png"} alt='aboutimage' width={1493} height={555}/>
    </div>
    <p className='text-sm md:text-[16px] font-semibold pt-6 md:pt-[30px] w-full md:w-[1493px] pb-8 md:pb-[40px] m-auto'>
        [Boom] is a live music venue in Byron Street Mills on Millwright Street in Leeds. The venue operates two live music stages + permanent rehearsal rooms for artists. Our space fosters creative projects and business within the building including Total Print Studio (screen printing), Millwright Street Studios (recording + mixing) and Hot Rad TV (live streaming).
    </p>
    <div className='flex justify-center md:justify-start md:ml-[155px]'>
        <button className='bg-[#d02626] p-4 md:p-5 rounded-[12px] text-base md:text-[20px] w-[160px] md:w-[198px] text-white'><Link href="/info">Read More</Link></button>
    </div>
</div>
  )
}
