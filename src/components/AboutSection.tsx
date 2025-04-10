
import React from 'react';
import { Globe, Award, Target, Users } from 'lucide-react';

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* About Content */}
          <div className="space-y-6 opacity-0 animate-slide-up">
            <h3 className="text-2xl font-bold text-mrto-navy">What Defines MRTO:</h3>
            <p className="text-mrto-gray">
              At MRTO, we believe in the power of global opportunities to transform lives. Whether you're a job seeker 
              dreaming of working abroad or an employer seeking reliable, skilled workers, we bridge the gap with 
              expertise and integrity. From garment workers and construction laborers to electricians, cleaners, 
              housekeeping staff, and waiters, we cater to diverse industries, empowering both skilled professionals 
              and enthusiastic learners.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="card card-hover">
                <div className="flex items-center mb-3">
                  <Target className="text-mrto-gold mr-3" size={24} />
                  <h4 className="font-semibold text-mrto-navy">Our Mission</h4>
                </div>
                <p className="text-sm text-mrto-gray">
                  MRTO's mission is to provide globally trusted, expertly vetted workforce solutions that empower 
                  businesses with skilled, reliable talent tailored to their unique needs.
                </p>
              </div>
              
              <div className="card card-hover">
                <div className="flex items-center mb-3">
                  <Globe className="text-mrto-gold mr-3" size={24} />
                  <h4 className="font-semibold text-mrto-navy">Our Vision</h4>
                </div>
                <p className="text-sm text-mrto-gray">
                  MRTO's vision is to establish themselves as the world's most trusted leader in workforce excellence, 
                  with Bangladeshi talent recognized as a cornerstone of global industry success.
                </p>
              </div>
            </div>
          </div>
          
          {/* USP Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-0 animate-slide-up slide-delay-1">
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
              icon={<Award />}
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
