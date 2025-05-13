import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

/**
 * GalleryPage Component
 * 
 * A responsive gallery component that displays a grid of venue images with hover effects.
 * Features a booking button for venue reservations.
 * 
 * Features:
 * - Responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
 * - Image hover effects with scale and overlay
 * - Custom shadow effects on hover
 * - Optimized images using Next.js Image component
 * - Direct booking link to rehearsal page
 * 
 * @component
 * @returns {JSX.Element} A responsive gallery grid with interactive image cards
 */
export default function GalleryPage() {
  return (
    <div className='container mx-auto px-4 py-8 bg-black min-h-screen'>
      <h2 className='text-white text-[30px] font-bold mb-8'>[BOOM] LEEDS GALLERY</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='relative group overflow-hidden rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(62,184,255,0.5)] transition-all duration-300'>
          <Image src="/galleryimage1.png" alt="galleryimage" width={460} height={345} className='w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300'/>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
        <div className='relative group overflow-hidden rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(62,184,255,0.5)] transition-all duration-300'>
          <Image src="/galleryimage2.png" alt="galleryimage" width={460} height={345} className='w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300'/>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
        <div className='relative group overflow-hidden rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(62,184,255,0.5)] transition-all duration-300'>
          <Image src="/galleryimage3.png" alt="galleryimage" width={460} height={345} className='w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300'/>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
        <div className='relative group overflow-hidden rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(62,184,255,0.5)] transition-all duration-300'>
          <Image src="/galleryimage4.png" alt="galleryimage" width={460} height={345} className='w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300'/>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          
        </div>
        <div className='relative group overflow-hidden rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(62,184,255,0.5)] transition-all duration-300'>
          <Image src="/galleryimage4.png" alt="galleryimage" width={460} height={345} className='w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300'/>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          
        </div>
        <div className='relative group overflow-hidden rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(62,184,255,0.5)] transition-all duration-300'>
          <Image src="/galleryimage6.png" alt="galleryimage" width={460} height={345} className='w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300'/>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
      </div>
      <button  className='bg-[#d02626] p-5 rounded-[12px] text-[20px] w-[198px] text-white mt-[30px] '><Link href="/rehearsals">Book Venue</Link></button>
    </div>
  )
}
