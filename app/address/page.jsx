import React from 'react'

/**
 * Address Page Component
 * 
 * Displays the business location information including:
 * - Interactive Google Maps embed
 * - Physical address
 * - Contact details
 * - Opening hours
 * 
 * The layout uses a flex container with two columns:
 * 1. Left column: Large Google Maps iframe
 * 2. Right column: Business information sections
 */
export default function page() {
  return (
    <div className="text-white bg-black pt-[60px] px-4 md:px-0">
        {/* Main flex container for map and info sections */}
        <div className='flex flex-col md:flex-row md:gap-[150px] gap-8'>
          {/* Google Maps iframe section */}
          <div className=''>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.6704655646327!2d-1.5674791230255487!3d53.79535244103268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795ebcce367359%3A0x6362e80b8072cdd2!2sCanal%20Pl%2C%20Leeds%20LS12%202DU!5e0!3m2!1sen!2suk!4v1746527268002!5m2!1sen!2suk"    
              loading="lazy"  
              className='w-full h-[400px] md:w-[1100px] md:h-[800px]'
            />
          </div>
          {/* Business information section */}
          <div className='pt-[30px] w-full md:w-auto'>
            {/* Location heading with decorative underline */}
            <h1 className='font-bold text-[32px] md:text-[40px]'>Find Us</h1>
            <div className='bg-gray-200 w-[200px] md:w-[250px] h-[2px]'></div>
            
            {/* Physical address section */}
            <h1 className='font-bold text-[24px] md:text-[30px] pt-[10px] pb-[20px]'>Directions</h1>
            <p className='font-regular text-[16px] md:text-[20px]'>[BOOM],</p>
            <p className='font-regular text-[16px] md:text-[20px]'>Canalside, 5 Canal Place, </p>
            <p className='font-regular text-[16px] md:text-[20px]'>Armley Road, </p>
            <p className='font-regular text-[16px] md:text-[20px]'>Leeds, LS12 2DU</p>
            
            {/* Contact information section */}
            <h1 className='font-bold text-[24px] md:text-[30px] pt-[20px] pb-[20px]'>Contact Us</h1>
            <p className='font-regular text-[16px] md:text-[20px]'>Email: </p>
            <p className='font-regular text-[16px] md:text-[20px]'>info@totallyboom.com</p>
            
            {/* Business hours section */}
            <h1 className='font-bold text-[24px] md:text-[30px] pt-[20px] pb-[20px]'>Opening Hours</h1>
            <p className='font-regular text-[16px] md:text-[20px]'>Our usual opening times are:</p>
            <p className='font-regular text-[16px] md:text-[20px]'>Sunday - Thursday 12:00pm - 11:00pm</p>
            <p className='font-regular text-[16px] md:text-[20px]'>Friday - Saturday 12:00pm - 12:00am</p>
          </div>
        </div>
    </div>
  )
}
