import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Better Howard",
      rating: 5,
      text: "Getting all these stains out these WHITE Air force sneaks, schedule 1 cleaning every month to keep them clean! Saves time and keeps your kicks looking fresh! This is a difference, it's the answer to your prayers!"
    },
    {
      name: "Jenny",
      rating: 5,
      text: "I just wore this during my morning run. Its size specific design is exactly what it should be - really helps with my OCD"
    },
    {
      name: "John",
      rating: 5,
      text: "I love it but this genuinely will make sure my kids get fresh for sure"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-center mb-12">Praise for our product</h2>
        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;