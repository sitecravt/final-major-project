import React from 'react'

/**
 * @component RehearsalPage
 * @description A page component for rehearsal and room booking at [Boom] Leeds.
 * Displays information about rehearsal spaces and includes a Calendly booking widget.
 * The page features a black background with white text and consistent padding.
 */
export default function page() {
  return (
    <div className='text-white bg-black p-4 md:p-8 lg:p-[185px]'>
      <div className='pb-4 md:pb-[20px]'>
        <h1 className='font-bold text-xl md:text-2xl lg:text-[30px] pb-4 md:pb-8'>Rehearsal / Room Booking</h1>
        <p className='font-reqular text-base md:text-lg lg:text-[20px] pb-2 md:pb-4'>[Boom] has hosted permanent rehearsal rooms to bands for as long as it has existed here in Leeds. We are now extending our rehearsals to our stages. You will be able to book one of our rooms easily online.
        </p>
        <p className='font-reqular text-base md:text-lg lg:text-[20px] pb-2 md:pb-4'>Register your interest for rehearsal/room booking at [Boom] Leeds by providing your information below. We will let you know when we launch our new online booking system and provide further information.</p>
        <p className='font-reqular text-base md:text-lg lg:text-[20px] pb-2 md:pb-4'>Space includes the stage and venue room. Room used for rehearsals, pre-production, live sessions and more.As standard you have access to a drum kit, guitar cabs, bass cab, vocal mics and monitoring.</p>
        <p className='font-reqular text-base md:text-lg lg:text-[20px] pb-2 md:pb-4'>Our main room with stage works as a large space for rehearsals, pre-productions and filming / recording.This is booking is for rehearsal / space hire only and is not for live event booking. To book an event or to get a gig see [Boom]Leeds.com .</p>
      </div>
      <div className='pb-6 md:pb-[40px] w-full'>
        <iframe className='w-full h-[400px] md:h-[500px] lg:h-[700px]' src="https://calendly.com/okunnukazeem466/rehearsal-room-booking?hide_gdpr_banner=1" />
        {/* External Calendly widget script */}
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </div>
    </div>
  )
}
