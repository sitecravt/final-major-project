import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

/**
 * SocialComponent - A fixed-position social media links sidebar
 * 
 * This component renders a vertical sidebar containing social media links for Facebook,
 * Twitter and Instagram. It uses Lucide React icons and Next.js Link components for
 * smooth navigation to external social media profiles.
 *
 * Features:
 * - Fixed positioning on the left side of the viewport
 * - Red background (#D02626) with white borders and text
 * - Vertically stacked social media icons with consistent spacing
 * - Responsive layout with specific dimensions (60px width, 158px height)
 */
export default function SocialComponent() {
  return (
    <div className='bg-[#D02626] flex flex-col w-[60px] h-[158px] gap-6 p-4 border z-50 border-white text-white rounded-md items-center fixed left-0 top-[300px]'>
     <Link href={"https://www.facebook.com/boomleeds"}><Facebook/></Link>   
     <Link href={"https://twitter.com/boomleedsvenue"}> <Twitter/>  </Link> 
     <Link href={"https://www.instagram.com/boom.leeds/"}> <Instagram/> </Link>  
    </div>
  )
}
