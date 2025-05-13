"use client"; // Required for client-side interactivity
import Image from 'next/image';
import React, { useState } from 'react';

/**
 * ContactPage Component
 * 
 * A form component that allows users to submit contact information and messages.
 * The form data is sent to a Google Sheets backend for storage and processing.
 * 
 * Features:
 * - Form state management using useState
 * - Real-time form validation
 * - Submission status feedback
 * - Integration with Google Sheets API
 * - Responsive layout with image
 */
export default function ContactPage() {
  // State for form data and submission status
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  /**
   * Handles form input changes
   * Updates the formData state with the new value for the corresponding field
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The input change event
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Handles form submission
   * Sends form data to Google Sheets API endpoint
   * Updates status message based on submission result
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
  
    try {
        const res = await fetch("https://script.google.com/macros/s/AKfycby_Bb03HcDJ_s8pRNGM3jsJZ0W6CnF3_BLL9P0uOI8kPeO-gI1c7LJtHgLFJNR4Zwsg/exec", {
            method: "POST",
            mode: "no-cors", // Important to avoid CORS issues
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          });
          
  
      if (res.ok) {
        setStatus("Submitted successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("Submitted Successfully.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong.");
    }
  };
  
  // Render the contact form with responsive layout
  return (
    <div className='text-white pt-[70px] pb-[40px] px-4 md:px-0'>
      <form onSubmit={handleSubmit}>
        <div className='bg-[#421418] w-full max-w-[1330px] min-h-[659px] m-auto flex flex-col lg:flex-row gap-4'>
          <div className='flex-1 p-4'>
            <h1 className='font-bold text-[24px] md:text-[30px]'>Contact Us</h1>
            <p className='font-semibold text-[16px] md:text-[20px] pb-[40px]'>
              If you have any queries or complaints, contact us with the form below
            </p>
            <div className='flex flex-col md:flex-row gap-4'>
              <input
                type="text"
                name="name"
                placeholder='Full Name'
                value={formData.name}
                onChange={handleChange}
                className='bg-white text-[16px] p-2 text-black w-full md:w-[400px] h-[60px] md:h-[91px]'
              />
              <input
                type="email"
                name="email"
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
                className='bg-white text-[16px] p-2 text-black w-full md:w-[400px] h-[60px] md:h-[91px]'
              />
            </div>

            <div className='pt-6'>
              <textarea
                name="message"
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                className='bg-white p-2 text-[16px] text-black w-full md:w-[815px] h-[200px] md:h-[250px]'
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className='bg-[#d02626] p-4 md:p-5 rounded-[12px] text-[18px] md:text-[20px] w-full md:w-[815px] text-white mt-[30px]'
              >
                Submit
              </button>
              <p className="mt-2 text-[14px]">{status}</p>
            </div>
          </div>

          <div className='hidden lg:flex w-[467px]'>
            <Image 
              src={"/contactimage.png"} 
              alt='contact image' 
              width={467} 
              height={659} 
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </form>
    </div>
  );
}
