"use client"
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = React.useMemo(() => [
    {
      name: "Esther Howard",
      location: "New Orleans",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
      rating: 5,
      text: "\"Calling all fellow moms out there! With my hectic schedule, I barely have time to breathe, let alone clean everyone's shoes. But this little gem makes it a breeze! Trust me, if you want to save time and keep your family's shoes looking spick and span and make them do it themselves, this is the answer to your prayers!\""
    },
    {
      name: "Nancy",
      location: "New York",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&h=64",
      rating: 5,
      text: "\"I can worry less during my morning runs , I 'm very specific about how clean my shoes should be ... really helps with my OCD\""
    },
    {
      name: "John",
      location: "Chicago",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=64&h=64",
      rating: 5,
      text: "\"Wish I had this growing up , will make sure my kids get them for sure \""
    },
    {
      name: "Esther Howard",
      location: "New Orleans",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
      rating: 5,
      text: "\"Calling all fellow moms out there! With my hectic schedule, I barely have time to breathe, let alone clean everyone's shoes. But this little gem makes it a breeze! Trust me, if you want to save time and keep your family's shoes looking spick and span and make them do it themselves, this is the answer to your prayers!\""
    },
    {
      name: "Nancy",
      location: "New York",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&h=64",
      rating: 5,
      text: "\"I can worry less during my morning runs , I 'm very specific about how clean my shoes should be ... really helps with my OCD\""
    },
    {
      name: "John",
      location: "Chicago",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=64&h=64",
      rating: 5,
      text: "\"Wish I had this growing up , will make sure my kids get them for sure \""
    }
  ], []);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (currentTestimonial < testimonials.length - 1) {
      setCurrentTestimonial(currentTestimonial + 1);
      scrollTestimonial(1);
    }
  };

  const handlePrev = () => {
    if (currentTestimonial > 0) {
      setCurrentTestimonial(currentTestimonial - 1);
      scrollTestimonial(-1);
    }
  };

  const scrollTestimonial = (direction: number) => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollLeft += direction * 350; // Adjust scroll distance as needed
    }
  };

  const handleDotClick = (index: number) => {
       setCurrentTestimonial(index);
       // Optionally, scroll to the clicked testimonial if needed
        if (testimonialRef.current) {
            testimonialRef.current.scrollTo({
                left: index * 350, // Adjust scroll distance as needed
                behavior: 'smooth',
            });
        }
  };

  useEffect(() => {
  // Update currentTestimonial based on scroll position if needed (optional)
  const containerRef = testimonialRef.current;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Find the index of the intersecting testimonial
          const intersectingIndex = testimonials.findIndex((_, i) => i === index);

          // Update the currentTestimonial state
          if (intersectingIndex !== -1) {
            setCurrentTestimonial(intersectingIndex);
          }
        }
      });
    },
    {
      root: containerRef, // Use the testimonial container as the root
      threshold: 0.5, // Adjust as needed (when 50% of an element is visible)
    }
  );

  // Observe each testimonial
  if (containerRef) {
    const testimonialElements = Array.from(containerRef.children);
    testimonialElements.forEach((element) => {
      observer.observe(element);
    });
  }

  // Cleanup observer on unmount
  return () => {
    if (containerRef) {
      const testimonialElements = Array.from(containerRef.children);
      testimonialElements.forEach((element) => {
        observer.unobserve(element);
      });
    }
  };
}, [testimonials]);

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-center mb-8 text-gray-700">Praise for our product</h2>
        
        <div className="relative"> {/* Container for buttons and testimonials */}
        
          <div ref={testimonialRef} className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scroll-smooth">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="snap-start shrink-0 w-72 max-w-[450px] bg-[#f5f5f5] rounded-2xl shadow-md p-4 flex flex-col justify-between min-h-[250px]"
              >
                {/* Content Section */}
                <div> 
                  <div className="flex items-start justify-between mb-2 bg-[#595959] text-white p-2 rounded-lg"> 
                    <div className="flex items-center space-x-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-[#f5f5f5]">{testimonial.name}</h4>
                        <div className="text-[#999] text-xs">{testimonial.location}</div>
                      </div>
                    </div>
                    <div className="flex mr-2 my-auto"> {/* Added margin-right and centered alignment */}
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-[#333] text-sm leading-relaxed">{testimonial.text}</p>
                </div>
                
                {/* Footer Section */}
                <div>
                </div>
              </div>
            ))}
          </div>
          
              {/* Previous Button */}
             <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
               {currentTestimonial > 0 && (
                    <button
                         onClick={handlePrev}
                          className="bg-gray-400 hover:bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                 >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
               )}
                  </div>
                  {/* Next Button */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    {currentTestimonial < testimonials.length - 1 && (
                    <button
                         onClick={handleNext}
                           className="bg-gray-400 hover:bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                       </button>
                     )}
                  </div>

        </div>
                
        {/* Horizontal Line */}
        <hr className="w-1/3 mx-auto my-8 border-[#595959] opacity-20" />
                
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                    <button
                     key={index}
                    className={`w-2 h-2 rounded-full focus:outline-none ${
                        index === currentTestimonial ? 'bg-black' : 'bg-gray-300'
                    }`}
                      onClick={() => handleDotClick(index)}
                      />
                  ))}
                </div>
      </div>
      <hr className="mt-20 border-[#D9D9D9]" />
    </section>
  );
};

export default Testimonials;