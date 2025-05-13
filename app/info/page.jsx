import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

/**
 * Info Page Component
 * 
 * Displays comprehensive information about [Boom] Leeds venue including:
 * - Venue description and background
 * - Photo gallery
 * - Closure announcement
 * - Location and directions
 * - Accessibility information
 * - Nearby accommodation options
 */
export default function page() {
    return (
        <div className='bg-black text-white pt-[120px] md:pl-[185px] md:pr-[185px] px-6 pb-[40px]'>
            <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-0'>
                <div className=''>
                    <h1 className='font-bold text-[24px] md:text-[30px] pb-[20px]'>About [Boom] Leeds</h1>
                    <p className='md:w-[480px] w-full text-[16px] md:text-[20px] font-regular'>[Boom] is a live music venue in byron street mills on millwright street in leeds. the venue operates two live music stages + permanent rehearsal rooms for artists.
                        Our space fosters creative projects and businsess within the building including total print studio (screen printing), millwright street studios (recording + mixing) and hot rad tv (live streaming).
                    </p>
                </div>
                <div className='w-full md:w-auto'>
                    <div className='flex flex-col md:flex-row gap-4 md:gap-12 mb-4'>
                        <div className='w-full md:w-auto'>
                           <Image src="/galleryimage1.png" alt='galleryimage1' width={300} height={140} className='rounded-lg w-full md:w-auto' />
                        </div>
                        <div className='w-full md:w-auto'>
                            <Image src="/galleryimage2.png" alt='galleryimage1' width={300} height={140} className='rounded-lg h-[200px] w-full md:w-auto' />
                        </div>
                    </div>
                    <Image src="/galleryimage3.png" alt='galleryimage1' width={650} height={231} className='rounded-lg w-full' />
                </div>
            </div>
            <div id='bgart' className='p-[20px] md:p-[40px] text-center rounded-[35px] h-auto md:h-[400px] mt-8'>
                <h1 className='font-bold text-[24px] md:text-[30px] pt-[30px] md:pt-[50px] pb-[20px] md:pb-[40px]'>[Boom] Leeds will close its doors in March 2025.</h1>
                
                  <p className='text-[20px] font-regular line'> [Boom] is located within Byron Street Mills on Millwright Street in Leeds. Our landlord has decided to terminate our lease to start work on developing the building into flats & shops.

                    Click <Link className='underline' href={"https://boomleeds.substack.com/p/boom-leeds-will-close-its-doors-in"}>HERE</Link> to read our full statement via our blog on SubStack.

                    We will be documenting our the final run of gigs at [Boom] Leeds and share our journey in launching a new venue location in 2025 via our blog.

                    <Link className='underline' href={"https://substack.com/@boomleeds"}>Click here for our Blog / Substack.</Link> </p> 
                </div>
            <div>
            
            </div>
            <div className='pt-[30px]'>
                <h1 className='font-bold text-[24px] md:text-[30px]'>Getting Here</h1>
                <div className='text-[16px] md:text-[20px]'>
                <p>Boom Leeds is pleased to announce we have moved locations. We are no longer on Millwright Street in Leeds.</p>
                <p>[Boom] Leeds</p>
                <p>Canalside, 5 Canal Place,</p>
                <p>Armley Road,</p>
                <p>Leeds</p>
                <p>LS12 2DU</p>
                <p>There is very limited street parking outside the venue. Please check parking notices for any applicable charges. One of the closest secure car parking is at John Lewis Victoria Gate (5 minute walk).
                Leeds taxis and private hires will know [Boom] as either [Boom] or Temple Of [Boom] on Millwright Street, LS2 7QG.</p>
                </div>
            </div>
            <div className='pt-[30px]'>
                <h1 className='font-bold text-[24px] md:text-[30px]'>ACCESSIBILITY</h1>
                <p className='text-[16px] md:text-[20px]'>From the street to the venue room the entire venue is ramped for wheelchair access. We have an accessible toilet for use with a RADAR key. 

Our staff are friendly and are willing to help you. If you would like a stool or chair to take into the gig room, this is often possible.

[Boom] can provide carers tickets for those that require it. Please contact us in advance.</p>
            </div>
            <div className='pt-[30px]'>
                <h1 className='font-bold text-[24px] md:text-[30px]'>ACCOMMODATION: HOTELS & HOSTELS</h1>
                <p className='text-[16px] md:text-[20px]'>Hampton by Hilton Hotel across the road from the venue. Local hostel Art Hostel is 5 minutes walk away offering dorms up to 8 persons with great facilities. 

More hotels and AirBnB's are available throughout the surrounding area and across the city.</p>
            </div>
            
        </div>
    )
}
