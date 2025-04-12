
import React, { useRef, useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

// Define the testimonial data structure
interface Testimonial {
  id: number;
  name: string;
  position: string;
  text: string;
  image: string;
  rating: number;
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    position: "HR Manager, XYZ Construction",
    text: "MRTO has been instrumental in helping us find skilled workers for our construction projects. Their candidates are well-vetted and ready to contribute from day one.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Operations Director, Global Health",
    text: "The healthcare professionals we recruited through MRTO have exceeded our expectations. Their attention to detail in matching candidates with our requirements is commendable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5
  },
  {
    id: 3,
    name: "Mohammed Al-Farsi",
    position: "Hotel Manager, Luxury Resorts",
    text: "Finding qualified hospitality staff was a challenge until we partnered with MRTO. Their candidates bring both skills and cultural understanding to our international clientele.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    rating: 4
  },
  {
    id: 4,
    name: "Rebecca Chen",
    position: "Factory Supervisor, Textile Inc.",
    text: "The garment workers MRTO placed with us have strong technical skills and excellent work ethic. Our productivity has increased significantly since hiring through them.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    rating: 5
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Project Manager, Building Solutions",
    text: "I appreciate MRTO's transparency and efficiency in the recruitment process. They understand our technical requirements and only send candidates who meet our criteria.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    rating: 4
  }
];

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
