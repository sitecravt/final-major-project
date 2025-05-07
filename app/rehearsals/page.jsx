import React from 'react'

export default function page() {
  return (
    <div className='text-white bg-black p-[185px]'>
     <div className='pb-[20px]'>
        <h1 className='font-bold text-[30px] pb-8'>Rehearsal / Room Booking</h1>
        <p className='font-reqular text-[20px] pb-4'>[Boom] has hosted permanent rehearsal rooms to bands for as long as it has existed here in Leeds. We are now extending our rehearsals to our stages. You will be able to book one of our rooms easily online.
        </p>
        <p className='font-reqular text-[20px] pb-4'>Register your interest for rehearsal/room booking at [Boom] Leeds by providing your information below. We will let you know when we launch our new online booking system and provide further information.</p>
        <p className='font-reqular text-[20px] pb-4'>Space includes the stage and venue room. Room used for rehearsals, pre-production, live sessions and more.As standard you have access to a drum kit, guitar cabs, bass cab, vocal mics and monitoring.</p>
        <p className='font-reqular text-[20px] pb-4'>Our main room with stage works as a large space for rehearsals, pre-productions and filming / recording.This is booking is for rehearsal / space hire only and is not for live event booking. To book an event or to get a gig see [Boom]Leeds.com .</p>
     </div>
     <div className=' pb-[40px]'>
        <iframe  className=' w-[1400px] h-[700px]' src="https://calendly.com/okunnukazeem466/rehearsal-room-booking?hide_gdpr_banner=1" ></iframe>
     

<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

     </div>
    </div>
  )
}
