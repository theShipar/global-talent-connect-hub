
import React from 'react';
import { Globe, Award, Target, Users, Building, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-mrto-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">About MRTO</h2>
          <p className="section-subtitle">
            We are a premier global recruitment agency dedicated to connecting skilled individuals 
            with outstanding job opportunities across various countries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* About Content - Left Column */}
          <div className="lg:col-span-5 space-y-6 opacity-0 animate-slide-up">
            <h3 className="text-2xl font-bold text-mrto-navy">What Defines MRTO:</h3>
            <p className="text-mrto-gray">
              At MRTO, we believe in the power of global opportunities to transform lives. Whether you're a job seeker 
              dreaming of working abroad or an employer seeking reliable, skilled workers, we bridge the gap with 
              expertise and integrity.
            </p>
            
            <div className="mt-8">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-mrto-gold/20 flex items-center justify-center mr-3">
                  <Target className="text-mrto-gold" size={20} />
                </div>
                <h4 className="font-semibold text-mrto-navy text-xl">Our Mission</h4>
              </div>
              <p className="text-mrto-gray pl-14">
                MRTO's mission is to provide globally trusted, expertly vetted workforce solutions that empower 
                businesses with skilled, reliable talent tailored to their unique needs.
              </p>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-mrto-gold/20 flex items-center justify-center mr-3">
                  <Globe className="text-mrto-gold" size={20} />
                </div>
                <h4 className="font-semibold text-mrto-navy text-xl">Our Vision</h4>
              </div>
              <p className="text-mrto-gray pl-14">
                MRTO's vision is to establish themselves as the world's most trusted leader in workforce excellence, 
                with Bangladeshi talent recognized as a cornerstone of global industry success.
              </p>
            </div>
            
            <div className="mt-6">
              <a href="#services" className="inline-flex items-center text-mrto-navy font-medium hover:text-mrto-gold transition-colors">
                Explore Our Services <ArrowRight className="ml-2" size={16} />
              </a>
            </div>
          </div>
          
          {/* Image Grid - Center Column */}
          <div className="lg:col-span-3 opacity-0 animate-slide-up slide-delay-1">
            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md h-48 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f" 
                  alt="Construction worker" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-48">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                  alt="Professional worker" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* USP Cards - Right Column */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-4 opacity-0 animate-slide-up slide-delay-2">
            <USPCard 
              icon={<Award />}
              title="Rigorous Screening"
              description="Multi-step vetting of candidates including skills, experience, and work ethic assessment."
            />
            
            <USPCard 
              icon={<Globe />}
              title="Global Reach"
              description="Strategic partnerships with employers across multiple countries and continents."
            />
            
            <USPCard 
              icon={<Users />}
              title="Employer-Centric"
              description="Focused approach on reducing hiring risks and boosting workplace productivity."
            />
            
            <USPCard 
              icon={<Building />}
              title="Bangladeshi Expertise"
              description="Deep understanding of local talent pools and global market demands."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const USPCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="card card-hover p-5 border-l-4 border-mrto-gold">
      <div className="text-mrto-navy mb-2">{icon}</div>
      <h4 className="font-semibold text-mrto-navy mb-2">{title}</h4>
      <p className="text-sm text-mrto-gray">{description}</p>
    </div>
  );
};

export default AboutSection;
