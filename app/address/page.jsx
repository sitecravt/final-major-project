import React from 'react'

export default function page() {
  return (
    <div className="text-white bg-black pt-[60px]">
        <div className='flex flex-row gap-[150px]'>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.6704655646327!2d-1.5674791230255487!3d53.79535244103268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795ebcce367359%3A0x6362e80b8072cdd2!2sCanal%20Pl%2C%20Leeds%20LS12%202DU!5e0!3m2!1sen!2suk!4v1746527268002!5m2!1sen!2suk"    loading="lazy"  className='w-[1100px] h-[800px]'></iframe>
        </div>
        <div className='pt-[30px]'>
          <h1 className='font-bold text-[40px]'>Find Us</h1>
          <div className='bg-gray-200 w-[250px] h-[2px]'></div>
          <h1 className='font-bold text-[30px] pt-[10px] pb-[20px]'>Directions</h1>
          <p className='font-regular text-[20px]'>[BOOM],</p>
          <p className='font-regular text-[20px]'>Canalside, 5 Canal Place, </p>
          <p className='font-regular text-[20px]'>Armley Road, </p>
          <p className='font-regular text-[20px]'>Leeds, LS12 2DU</p>
          <h1 className='font-bold text-[30px] pt-[20px] pb-[20px]'>Contact Us</h1>
          <p className='font-regular text-[20px]'>Email: </p>
          <p className='font-regular text-[20px]'>info@totallyboom.com</p>
          <h1 className='font-bold text-[30px] pt-[20px] pb-[20px]'>Opening Hours</h1>
          <p className='font-regular text-[20px]'>Our usual opening times are:</p>
          <p className='font-regular text-[20px]'>Sunday - Thursday 12:00pm - 11:00pm</p>
          <p className='font-regular text-[20px]'>Friday - Saturday 12:00pm - 12:00am</p>
          
        </div>
        </div>
    </div>
  )
}
