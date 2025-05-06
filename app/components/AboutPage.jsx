import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutPage() {
  return (
    <div className='text-white mb-[40px]'>
    <h2 className='text-center text-white font-bold text-[30px] mb-[30px]'>ABOUT US</h2>
    <div className='flex justify-center'>
        <Image src={"/aboutimage.png"} alt='aboutimage' width={1493} height={555}/>
    </div>
    <p className='text-[16px] font-semibold pt-[30px] w-[1493px] pb-[40px] m-auto'>
        [Boom] is a live music venue in Byron Street Mills on Millwright Street in Leeds. The venue operates two live music stages + permanent rehearsal rooms for artists. Our space fosters creative projects and business within the building including Total Print Studio (screen printing), Millwright Street Studios (recording + mixing) and Hot Rad TV (live streaming).
    </p>
    <button  className='bg-[#d02626] p-5 rounded-[12px] text-[20px] w-[198px] text-white mt-[30px] ml-[155px] '><Link href="">Read More</Link></button>
</div>
  )
}
