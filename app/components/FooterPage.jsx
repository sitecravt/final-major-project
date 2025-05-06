import Link from 'next/link'
import React from 'react'

export default function FooterPage() {
    return (
        <div className='text-white bg-[#421418]'>
            <div className='flex flex-row justify-between pl-[120px] pr-[120px] pt-8 pb-8 '>
                <div className='flex flex-col gap-4'>
               <h1 className='font-bold text-[25px]'>[BOOM] LEEDS</h1> 
        <Link href="/">    <p className='font-regualar text-[20px]'>Home</p></Link> 
        <Link href="/gigs">    <p className='font-regualar text-[20px]'>Events</p></Link>   
        <Link href="https://boomleeds.substack.com/">     <p className='font-regualar text-[20px]'>Blog</p></Link>  
         <Link href="/info">      <p className='font-regualar text-[20px]'>About Us</p></Link>
                </div>
                <div className='flex flex-col gap-4'>
                 <h1 className='font-bold text-[25px]'>GET E-MAIL ALERTS!</h1>
                 <p className='font-regualar text-[20px]'>Receive e-mails/newsletters  about  gigs, events and offers at [BOOM] Leeds</p>
                 <Link href="/mailinglist"> <button  className='bg-[#d02626] p-5 rounded-[12px] text-[20px] w-[198px] text-white mt-[30px] cursor-pointer  '>Sign Up</button></Link>
                </div>
                <div className='flex flex-col gap-4'>
                <h1 className='font-bold text-[25px]'>FIND US</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.6704655646327!2d-1.5674791230255487!3d53.79535244103268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795ebcce367359%3A0x6362e80b8072cdd2!2sCanal%20Pl%2C%20Leeds%20LS12%202DU!5e0!3m2!1sen!2suk!4v1746527268002!5m2!1sen!2suk"    loading="lazy"  className='w-[254px] h-[139px]'></iframe>
               <Link className="underline" href={"/address"}>Get Directions</Link>
               <p className='font-regualar text-[20px]'>Email US:</p>
               <p>info@totallyboom.com</p>
                </div>
            </div>
            <div className='bg-gray-300 w-[1602px] h-[2px] m-auto '></div>
            <br /><br />
            <p className='text-center text-gray-300 text-[17px]'>© {new Date().getFullYear()} Boom Leeds All Rights Reserved.</p>
            <br /><br />
        </div>
    )
}
