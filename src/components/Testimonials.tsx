
import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Rahman',
    position: 'Construction Worker in Dubai',
    image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f',
    rating: 5,
    text: 'MRTO completely changed my life. They handled all my immigration paperwork and found me a well-paying construction job in Dubai. Their pre-departure training was excellent and prepared me for working in a new country. I am now able to support my family back home better than ever before.'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'HR Director, Skyline Hotels Group',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    rating: 5,
    text: 'We\'ve been working with MRTO for our hospitality staffing needs for over two years. Their candidates are always well-screened, qualified, and ready to work. The level of professionalism and follow-up service they provide is exceptional. They truly understand our specific requirements.'
  },
  {
    id: 3,
    name: 'Fariha Begum',
    position: 'Garment Worker in Malaysia',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604',
    rating: 4,
    text: 'I am grateful to MRTO for helping me secure a position in a reputable garment factory in Malaysia. Their team was supportive throughout the process, from application to arrival. The orientation they provided helped me adjust quickly to my new work environment.'
  },
  {
    id: 4,
    name: 'Michael Chen',
    position: 'Operations Manager, Global Constructions Ltd',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
    rating: 5,
    text: 'Finding reliable construction workers for our international projects was always challenging until we partnered with MRTO. Their thorough vetting process and attention to detail ensure we receive workers who are not only skilled but also dedicated to quality work and safety protocols.'
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-mrto-lightGray to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Hear what our clients and candidates have to say about their experience working with MRTO.
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pb-10">
            {/* Large Quote Icon */}
            <div className="absolute -top-10 left-0 text-mrto-gold/20">
              <Quote size={80} />
            </div>
            
            {/* Testimonial Card */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-10 z-10">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Image */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-mrto-gold/30 flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={`${
                          i < testimonials[currentIndex].rating 
                            ? 'text-mrto-gold fill-mrto-gold' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-mrto-gray italic mb-6">"{testimonials[currentIndex].text}"</p>
                  <div>
                    <h4 className="font-bold text-mrto-navy">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-mrto-gray">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex justify-between absolute -bottom-4 left-0 right-0">
              <button 
                onClick={prevTestimonial}
                className="bg-white shadow-md rounded-full p-3 text-mrto-navy hover:bg-mrto-navy hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-white shadow-md rounded-full p-3 text-mrto-navy hover:bg-mrto-navy hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-mrto-gold w-6' : 'bg-mrto-navy/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
