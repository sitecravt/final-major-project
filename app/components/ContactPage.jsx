"use client"; // Required for client-side interactivity
import Image from 'next/image';
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Submitted Successfully.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong.");
    }
  };
  

  return (
    <div className='text-white pt-[70px] pb-[40px]'>
      <form onSubmit={handleSubmit}>
        <div className='bg-[#421418] w-[1330px] h-[659px] m-auto flex gap-4'>
          <div>
            <h1 className='font-bold text-[30px] p-4'>Contact Us</h1>
            <p className='font-semibold text-[20px] pl-4 pb-[40px]'>
              If you have any queries or complaints, contact us with the form below
            </p>
            <div className='flex flex-row gap-4 pl-4'>
              <input
                type="text"
                name="name"
                placeholder='Full Name'
                value={formData.name}
                onChange={handleChange}
                className='bg-white text-[16px] p-2 text-black w-[400px] h-[91px]'
              />
              <input
                type="email"
                name="email"
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
                className='bg-white text-[16px] p-2 text-black w-[400px] h-[91px]'
              />
            </div>

            <div className='pl-4 pt-6'>
              <textarea
                name="message"
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                className='bg-white p-2 text-[16px] text-black w-[815px] h-[250px]'
              ></textarea>
            </div>

            <div className='p-4'>
              <button
                type="submit"
                className='bg-[#d02626] p-5 rounded-[12px] text-[20px] w-[815px] text-white mt-[30px]'
              >
                Submit
              </button>
              <p className="mt-2 text-[14px]">{status}</p>
            </div>
          </div>

          <div>
            <Image src={"/contactimage.png"} alt='contact image' width={467} height={659} />
          </div>
        </div>
      </form>
    </div>
  );
}
