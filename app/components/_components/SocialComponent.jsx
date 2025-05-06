import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function SocialComponent() {
  return (
    <div className='bg-[#D02626] flex flex-col w-[60px] h-[158px] gap-6 p-4 border border-white text-white rounded-md items-center fixed left-0 top-[300px]'>
     <Link href={"https://www.facebook.com/boomleeds"}><Facebook/></Link>   
     <Link href={"https://twitter.com/boomleedsvenue"}> <Twitter/>  </Link> 
     <Link href={"https://www.instagram.com/boom.leeds/"}> <Instagram/> </Link>  
    </div>
  )
}
