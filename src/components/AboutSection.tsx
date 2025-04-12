
import React from 'react';
import { ShieldCheck, Globe, Users, Flag, ArrowRight, Target } from 'lucide-react';

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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          {/* About Content - Left Column */}
          <div className="space-y-6 opacity-0 animate-slide-up">
            <h3 className="text-2xl font-bold text-mrto-navy">What Defines MRTO:</h3>
            <p className="text-mrto-gray">
              At MRTO, we believe in the power of global opportunities to transform lives. Whether you're a job seeker 
              dreaming of working abroad or an employer seeking reliable, skilled workers, we bridge the gap with 
              expertise and integrity.
            </p>
            
            <div className="mt-8 bg-white rounded-lg p-6 shadow-md border-l-4 border-mrto-gold">
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
            
            <div className="mt-4 bg-white rounded-lg p-6 shadow-md border-l-4 border-mrto-gold">
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
          </div>
          
          {/* Image Grid - Right Column */}
          <div className="grid grid-cols-2 gap-4 opacity-0 animate-slide-up slide-delay-1">
            <div className="rounded-lg overflow-hidden shadow-md h-64 col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f" 
                alt="Global recruitment team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-40">
              <img 
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f" 
                alt="Construction worker" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-40">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                alt="Professional worker" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* USP Cards */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-mrto-navy text-center mb-10">Our Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <USPCard 
              icon={<ShieldCheck size={40} />}
              title="Rigorous Screening"
              description="Multi-step vetting of candidates including skills, experience, and work ethic assessment."
            />
            
            <USPCard 
              icon={<Globe size={40} />}
              title="Global Reach"
              description="Strategic partnerships with employers across multiple countries and continents."
            />
            
            <USPCard 
              icon={<Users size={40} />}
              title="Employer-Centric"
              description="Focused approach on reducing hiring risks and boosting workplace productivity."
            />
            
            <USPCard 
              icon={<Flag size={40} />}
              title="Bangladeshi Expertise"
              description="Deep understanding of local talent pools and global market demands."
            />
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <a href="#services" className="inline-flex items-center text-mrto-navy font-medium hover:text-mrto-gold transition-colors">
            Explore Our Services <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

const USPCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300 h-full flex flex-col border-t-4 border-mrto-gold">
      <div className="text-mrto-gold mb-4 flex justify-center">{icon}</div>
      <h4 className="font-semibold text-mrto-navy text-xl mb-3 text-center">{title}</h4>
      <p className="text-mrto-gray text-center">{description}</p>
    </div>
  );
};

export default AboutSection;
