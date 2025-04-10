
import React from 'react';
import { 
  Globe, Users, Briefcase, HandHelping, 
  Building, HardHat, Utensils, HeartPulse, CheckCircle2
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Global Recruitment & Immigration Support",
    description: "Connects Bangladeshi job seekers with employment opportunities worldwide through streamlined immigration processes.",
    icon: <Globe className="w-10 h-10 text-mrto-navy" />,
    features: [
      "Specialized in sectors like garments, construction, hospitality, healthcare, cleaning, catering and electrical work.",
      "Assistance with visa processing, relocation, and pre-departure orientation.",
      "Complete documentation and compliance support."
    ]
  },
  {
    id: 2,
    title: "Talent Acquisition for Employers",
    description: "Provides rigorously screened, skilled, and experienced workers tailored to your business needs.",
    icon: <Users className="w-10 h-10 text-mrto-navy" />,
    features: [
      "Customized recruitment solutions based on employer requirements.",
      "Risk reduction through extensive candidate vetting.",
      "Industry-specific talent sourcing and selection."
    ]
  },
  {
    id: 3,
    title: "Inclusive Workforce Solutions",
    description: "Works with both skilled professionals and individuals who show dedication and passion for learning.",
    icon: <Briefcase className="w-10 h-10 text-mrto-navy" />,
    features: [
      "Balance of experience and potential in candidate selection.",
      "Client satisfaction prioritization through quality matches.",
      "Comprehensive skill assessment and development."
    ]
  },
  {
    id: 4,
    title: "End-to-End Support",
    description: "Complete assistance throughout the recruitment and placement process for both employers and job seekers.",
    icon: <HandHelping className="w-10 h-10 text-mrto-navy" />,
    features: [
      "For Job Seekers: Job matching, immigration guidance, and travel logistics.",
      "For Employers: Compliance with international hiring standards and onboarding support.",
      "Ongoing follow-up and relationship management."
    ]
  }
];

const industries = [
  { name: "Construction", icon: <HardHat className="w-6 h-6" /> },
  { name: "Hospitality", icon: <Utensils className="w-6 h-6" /> },
  { name: "Manufacturing", icon: <Building className="w-6 h-6" /> },
  { name: "Healthcare", icon: <HeartPulse className="w-6 h-6" /> }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We provide comprehensive recruitment and immigration services tailored to both 
            job seekers and employers across various industries.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="card card-hover border border-gray-100 opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-mrto-navy mb-3">{service.title}</h3>
                <p className="text-mrto-gray mb-4">{service.description}</p>
                
                <ul className="mt-auto space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-mrto-gold flex-shrink-0" />
                      <span className="text-sm text-mrto-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Services Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 opacity-0 animate-slide-up slide-delay-3">
          <div className="rounded-xl overflow-hidden shadow-lg h-64">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
              alt="Global recruitment" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-64">
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
              alt="Immigration support" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Industries Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-mrto-navy text-center mb-10">Industries We Serve</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 border border-gray-100 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all card-hover opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
              >
                <div className="text-mrto-gold mb-3">{industry.icon}</div>
                <h4 className="font-medium text-mrto-navy">{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary inline-block opacity-0 animate-slide-up slide-delay-5">
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
