"use client"
import React, { useState } from 'react'

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbySLI0ldrDIZ8ZpzweIHd5ER77SAfGQdg8LqI4srbL2dOhFC9EGYyXIZVM8M9iNKUz1/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', consent: false });
      } else {
        alert("Subscription Successful.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred");
    }
  };

  return (
    <div className='text-white bg-black min-h-screen p-[185px]'>
      <h1 className='text-[30px] mb-2'>Mailing List</h1>
      <p className=' text-[20px]'>Subscribe to our newsletter to get weekly updates,</p>
      <p className='mb-10 text-[20px]'>Follow our journey with the final gigs at Boom Leeds and launching a new Leeds venue in 2025.</p>

      <form onSubmit={handleSubmit} className='bg-[#421418] p-10 rounded-lg w-[857px] h-[541px] m-auto'>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className='w-full mb-8 p-3 rounded text-black bg-white h-[77px]'
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className='w-full mb-8 p-3 rounded text-black bg-white h-[77px]'
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className='w-full mb-8 p-3 rounded text-black bg-white h-[77px]'
          required
        />

        <div className='flex items-center mb-6'>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            id="consent"
            className='mr-2'
          />
          <label htmlFor="consent">I agree to receive email updates</label>
        </div>

        <button type="submit" className='w-full bg-[#d02626] mt-4 text-white py-3 rounded font-semibold text-[20px] transition-colors'>
          {submitted ? "Subscribed!" : "Subscribe"}
        </button>
      </form>
    </div>
  );
}

