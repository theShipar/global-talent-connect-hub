
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

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
  {
    id: 5,
    name: 'Sophia Williams',
    position: 'Nurse in Canada',
    image: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942',
    rating: 5,
    text: 'MRTO helped me fulfill my dream of working as a nurse in Canada. They guided me through every step of the process, from certification verification to immigration paperwork. Their personalized support made a complex process feel manageable.'
  },
  {
    id: 6,
    name: 'James Rodriguez',
    position: 'Hospitality Director, Luxury Resorts',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    rating: 4,
    text: 'The staff MRTO provided for our resort have consistently exceeded expectations. They arrive with a solid understanding of hospitality standards and adapt quickly to our specific requirements. Their ongoing support and quality checks ensure continued success.'
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-mrto-lightGray to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Hear what our clients and candidates have to say about their experience working with MRTO.
          </p>
        </div>
        
        {/* Feature Testimonials Carousel */}
        <div className="max-w-6xl mx-auto mb-16">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="relative pb-10 px-4">
                    {/* Large Quote Icon */}
                    <div className="absolute -top-10 left-4 text-mrto-gold/20">
                      <Quote size={80} />
                    </div>
                    
                    {/* Testimonial Card */}
                    <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-10 z-10 border border-mrto-gold/10">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        {/* Image */}
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-mrto-gold/30 flex-shrink-0">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
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
                                  i < testimonial.rating 
                                    ? 'text-mrto-gold fill-mrto-gold' 
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-mrto-gray italic mb-6">"{testimonial.text}"</p>
                          <div>
                            <h4 className="font-bold text-mrto-navy">{testimonial.name}</h4>
                            <p className="text-sm text-mrto-gray">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static left-0 right-auto -translate-y-0 mr-4 bg-mrto-navy text-white hover:bg-mrto-gold hover:text-mrto-navy" />
              <CarouselNext className="relative static left-0 right-auto -translate-y-0 bg-mrto-navy text-white hover:bg-mrto-gold hover:text-mrto-navy" />
            </div>
          </Carousel>
        </div>
        
        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300 border border-gray-100">
              <div className="text-mrto-gold mb-3">
                <Quote size={24} />
              </div>
              <p className="text-mrto-gray italic text-sm mb-4 line-clamp-4">"{testimonial.text}"</p>
              <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
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
