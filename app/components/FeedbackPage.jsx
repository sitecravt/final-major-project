"use client"
import React from 'react'
import FAQ from './_components/FaqComponent'

export default function FeedbackPage() {
  return (
    <div className='text-white'>
        <h1 className='text-center font-bold text-[30px]'>FEEDBACKS</h1>
        <p className='text-center font-semi text-[20px]'>You can give us your feedback by filling out the form below, and you can also upvote other peoples feedback, so we know which one to prioritize the most.  Your happiness is our priority.</p>
        <div className='flex flex-row gap-[180px]'>
          <div><iframe src="https://insigh.to/b/real-boaf"  className='w-[900px] h-[360px] ml-[10%] mt-[50px]'></iframe></div>  
          <div>
            <div>
               <FAQ/>

            </div>
          </div>
        </div>
    </div>
  )
}
