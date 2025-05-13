"use client"
import React from 'react'
import FAQ from './_components/FaqComponent'
import Link from "next/link"

/**
 * FeedbackPage Component
 * 
 * A page component that allows users to submit and view feedback through an embedded form.
 * Features include:
 * - Embedded feedback submission form via insigh.to iframe
 * - FAQ section for common questions
 * - Direct link to feedback form
 * 
 * The layout uses a flex container to organize the feedback form and FAQ side by side
 * with responsive styling for optimal viewing across devices.
 */
export default function FeedbackPage() {
  return (
    // Main container with white text styling
    <div className='text-white'>
        {/* Page title */}
        <h1 className='text-center font-bold text-[30px] md:text-[40px] sm:text-[35px]'>FEEDBACKS</h1>
        <p className='text-center font-semi text-[16px] md:text-[20px] px-4 max-w-4xl mx-auto'>You can give us your feedback by filling out the form below, and you can also upvote other peoples feedback, so we know which one to prioritize the most. Your happiness is our priority.</p>
        <div className='flex flex-col lg:flex-row lg:gap-[180px] items-center'>
          <div className='w-full lg:w-auto lg:ml-[10%]'>
            <iframe src="https://insigh.to/b/real-boaf" className='md:w-[1200px] w-full h-[360px] max-w-[900px] mt-[30px] lg:mt-[50px]'></iframe>
          </div>  
          <div className='w-full lg:w-auto mt-8 lg:mt-0 px-4'>
            <div>
               <FAQ/>
            </div>
          </div>
        </div>
        <Link className='block text-center lg:p-[90px] p-6 underline text-blue-400' href={"https://insigh.to/b/real-boaf"}>Click Here To Add Your Feedback</Link>
    </div>
  )
}
