"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { question: 'How to use this product?', answer: 'Detailed instructions on using the product effectively.' },
    { question: 'How soon I will receive my order', answer: 'Information on shipping times and delivery estimates.' },
    { question: 'How does the return process work', answer: 'Explanation of the return and refund procedures.' },
    { question: 'What do you mean by 30 day guarantee', answer: 'Details about the terms and conditions of the 30-day guarantee.' },
    { question: "What's your return policy", answer: 'Full description of the company return policy.' }
  ];

  const toggleFaq = (index: any) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className=" bg-white text-[#777]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Left Side */}
          <div className="space-y-6">
            <h2 className="text-2xl text-[#333] mb-4">Tell us what's on your mind!</h2>
            <form className="space-y-4">
              {/* Name and Contact in same line */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 rounded-md border-b-2 border-gray-200 focus:border-red-400 focus:outline-none transition-colors placeholder:text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Contact"
                    className="w-full px-4 py-2 rounded-md border-b-2 border-gray-200 focus:border-red-400 focus:outline-none transition-colors placeholder:text-sm"
                  />
                </div>
              </div>
              {/* Email field remains in its own line */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-md border-b-2 border-gray-200 focus:border-red-400 focus:outline-none transition-colors placeholder:text-sm"
                />
              </div>
              <div>
                <textarea
                  placeholder="What do you need help with?"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border-b-2 border-gray-200 focus:border-red-400 focus:outline-none transition-colors resize-none placeholder:text-sm"
                ></textarea>
                <p className="text-right text-gray-400 text-xs">0/150</p>
              </div>
              <button className="bg-white text-red-500 border border-red-400 hover:bg-red-500 hover:text-white px-6 py-2 rounded-full transition-colors">
                Send
              </button>
            </form>
          </div>

          {/* FAQs - Right Side */}
          <div className="space-y-4 lg:pl-12 relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 border-l border-gray-200"></div>
            
            <h2 className="text-2xl text-[#333] mb-4">FAQs</h2>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="text-[#999]">
                  <div
                    className="flex items-center justify-between p-3 border-b border-gray-200 cursor-pointer transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-gray-700">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                  {openFaq === index && (
                    <div className="p-3 bg-gray-50 rounded-md text-sm text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-20 border-[#D9D9D9]" />
    </section>
  );
};

export default Contact;