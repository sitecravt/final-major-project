"use client"
import { useState } from 'react';

const faqs = [
    {
      question: "Where is the venue located?",
      answer: "We’re located in the heart of Leeds City Centre, just a 5-minute walk from Leeds Train Station.",
    },
    {
      question: "Is there parking available nearby?",
      answer: "Yes, there are several secure parking options within walking distance, including Trinity Leeds and Q-Park Albion Street.",
    },
    {
      question: "Are there age restrictions for events?",
      answer: "Some events are 18+ while others are all ages. Please check the event listing for specific age restrictions.",
    },
    {
      question: "Can I buy tickets at the door?",
      answer: "Yes, tickets are usually available on the door unless the event is sold out. We recommend booking in advance to avoid disappointment.",
    },
  
  
  ];
  

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              className="w-full text-left p-4 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
