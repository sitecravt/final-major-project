"use client"
import React, { useState } from 'react'

/**
 * Mailing List Page Component
 * Renders a subscription form that collects user information and sends it to a Google Sheets backend
 * Features form validation, state management, and success/error handling
 */
export default function Page() {
  // Form state management using useState hook
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    consent: false,
  });

  // Track form submission status
  const [submitted, setSubmitted] = useState(false);

  /**
   * Handles form input changes
   * Updates the formData state based on input type (text or checkbox)
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event
   */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  /**
   * Handles form submission
   * Sends form data to Google Sheets API endpoint
   * Updates UI state based on submission result
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to Google Sheets API
      const response = await fetch("https://script.google.com/macros/s/AKfycbySLI0ldrDIZ8ZpzweIHd5ER77SAfGQdg8LqI4srbL2dOhFC9EGYyXIZVM8M9iNKUz1/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      });

      // Handle successful submission
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
    // Main container with dark theme styling
    <div className='text-white bg-black min-h-screen p-4 md:p-8 lg:p-[185px]'>
      <h1 className='text-xl md:text-2xl lg:text-[30px] mb-2'>Mailing List</h1>
      <p className='text-base md:text-lg lg:text-[20px]'>Subscribe to our newsletter to get weekly updates,</p>
      <p className='mb-6 md:mb-8 lg:mb-10 text-base md:text-lg lg:text-[20px]'>Follow our journey with the final gigs at Boom Leeds and launching a new Leeds venue in 2025.</p>

      <form onSubmit={handleSubmit} className='bg-[#421418] p-6 md:p-8 lg:p-10 rounded-lg w-full max-w-[857px] mx-auto'>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className='w-full mb-4 md:mb-6 lg:mb-8 p-3 rounded text-black bg-white h-[45px] md:h-[60px] lg:h-[77px]'
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className='w-full mb-4 md:mb-6 lg:mb-8 p-3 rounded text-black bg-white h-[45px] md:h-[60px] lg:h-[77px]'
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className='w-full mb-4 md:mb-6 lg:mb-8 p-3 rounded text-black bg-white h-[45px] md:h-[60px] lg:h-[77px]'
          required
        />

        {/* Consent checkbox */}
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

        {/* Submit button with dynamic text based on submission status */}
        <button type="submit" className='w-full bg-[#d02626] mt-4 text-white py-3 rounded font-semibold text-[20px] transition-colors'>
          {submitted ? "Subscribed!" : "Subscribe"}
        </button>
      </form>
    </div>
  );
}

