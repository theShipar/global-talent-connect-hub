
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
    icon: <Globe className="w-14 h-14 text-mrto-gold" />,
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
    icon: <Users className="w-14 h-14 text-mrto-gold" />,
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
    icon: <Briefcase className="w-14 h-14 text-mrto-gold" />,
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
    icon: <HandHelping className="w-14 h-14 text-mrto-gold" />,
    features: [
      "For Job Seekers: Job matching, immigration guidance, and travel logistics.",
      "For Employers: Compliance with international hiring standards and onboarding support.",
      "Ongoing follow-up and relationship management."
    ]
  }
];

const industries = [
  { 
    name: "Construction", 
    icon: <HardHat className="w-8 h-8" />, 
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop"
  },
  { 
    name: "Hospitality", 
    icon: <Utensils className="w-8 h-8" />, 
    image: "/lovable-uploads/9ac2b25c-ac5b-4181-a398-cf85b69ec322.png"
  },
  { 
    name: "Manufacturing", 
    icon: <Building className="w-8 h-8" />, 
    image: "/lovable-uploads/a3999541-8abc-4b99-bc09-784337fd49f2.png"
  },
  { 
    name: "Healthcare", 
    icon: <HeartPulse className="w-8 h-8" />, 
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480&auto=format&fit=crop" 
  }
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
              className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="bg-gradient-to-r from-mrto-navy/10 to-mrto-gold/10 p-6 flex items-center justify-center">
                  {service.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-mrto-navy mb-3">{service.title}</h3>
                  <p className="text-mrto-gray mb-4">{service.description}</p>
                  
                  <ul className="mt-auto space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start group">
                        <CheckCircle2 className="h-5 w-5 mr-3 text-mrto-gold flex-shrink-0 transform group-hover:scale-110 transition-transform" />
                        <span className="text-sm text-mrto-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Industries Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-mrto-navy text-center mb-10">Industries We Serve</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="relative group h-64 rounded-lg overflow-hidden opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
              >
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mrto-navy/90 to-transparent flex flex-col items-center justify-end p-6">
                  <div className="text-mrto-gold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h4 className="font-semibold text-white text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {industry.name}
                  </h4>
                </div>
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
