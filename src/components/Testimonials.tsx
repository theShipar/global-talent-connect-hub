
import React, { useRef, useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += 1;
        scrollContainer.scrollLeft = scrollPosition;

        // Reset scroll when reaching the end
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
          scrollContainer.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isPaused]);

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-mrto-lightGray to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Real experiences from professionals and employers who have benefited from MRTO's services.
          </p>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar scroll-smooth"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[300px] md:w-[350px] bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all transform hover:-translate-y-2 duration-300"
            >
              <Quote className="text-mrto-gold mb-3" size={24} />
              <p className="text-mrto-gray italic text-sm mb-4 line-clamp-4">
                "{testimonial.text}"
              </p>
              <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h5 className="font-semibold text-mrto-navy">{testimonial.name}</h5>
                  <p className="text-xs text-mrto-gray">{testimonial.position}</p>
                </div>
                <div className="flex ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={`${
                        i < testimonial.rating 
                          ? 'text-mrto-gold fill-mrto-gold' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
