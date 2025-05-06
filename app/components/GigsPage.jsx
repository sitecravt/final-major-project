import React from 'react'
import GigsComponent from './_components/GigsComponent'

export default function GigsPage() {
  return (
    <div className='text-white '>
        <h1 className='text-center font-bold text-[30px] pt-5 pb-3'>UPCOMING GIGS</h1>
        <p className='text-center capitalize text-[16px] font-semibold mb-[40px]'>Here you can find the most recent gigs on [BOOM] Leeds, and purchase the tickets for them</p>
        <div>
            <GigsComponent/>
        </div>
    </div>
  )
}
