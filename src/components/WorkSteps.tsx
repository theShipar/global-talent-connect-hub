
import React, { useEffect, useRef } from 'react';
import { 
  MessageSquare, Search, ClipboardCheck, 
  GraduationCap, FileCheck, Plane
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "We begin with a detailed consultation to understand your hiring objectives, job specifications, and organizational culture, ensuring a tailored recruitment approach.",
    icon: <MessageSquare className="h-10 w-10" />
  },
  {
    id: 2,
    title: "Strategic Talent Sourcing",
    description: "Utilizing our vast network across Bangladesh, we source candidates with the skills, experience, and dedication required to meet your industry standards.",
    icon: <Search className="h-10 w-10" />
  },
  {
    id: 3,
    title: "Rigorous Screening & Assessment",
    description: "Candidates undergo comprehensive evaluations, including background checks, skills testing, and structured interviews to ensure they meet international benchmarks.",
    icon: <ClipboardCheck className="h-10 w-10" />
  },
  {
    id: 4,
    title: "Pre-Deployment Training",
    description: "Shortlisted candidates receive job-specific training and cross-cultural orientation to ensure readiness for overseas employment and integration.",
    icon: <GraduationCap className="h-10 w-10" />
  },
  {
    id: 5,
    title: "Compliance & Documentation",
    description: "We handle all administrative and legal processes, including visa applications, medical clearances, and regulatory compliance, to facilitate a smooth transition.",
    icon: <FileCheck className="h-10 w-10" />
  },
  {
    id: 6,
    title: "Deployment & Ongoing Support",
    description: "We coordinate efficient deployment and offer continuous support post-placement to ensure sustained success for both employers and employees.",
    icon: <Plane className="h-10 w-10" />
  }
];

const WorkSteps = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;

      const timelineHeight = timeline.offsetHeight;
      const timelineTop = timeline.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      // Calculate progress (0 to 1)
      const startPoint = timelineTop;
      const endPoint = timelineTop + timelineHeight;
      const progress = Math.min(Math.max((scrollPosition - startPoint) / (endPoint - startPoint - 400), 0), 1);
      
      // Update the timeline progress bar
      timeline.style.setProperty('--progress', `${progress * 100}%`);
      
      // Animate steps based on scroll position
      stepsRef.current.forEach((step, index) => {
        if (!step) return;
        
        const stepTop = step.offsetTop - timelineTop;
        const stepProgress = (scrollPosition - timelineTop - stepTop) / 400;
        
        if (stepProgress > 0.1) {
          step.classList.add('opacity-100');
          step.style.transform = 'translateY(0)';
        } else {
          step.classList.remove('opacity-100');
          step.style.transform = 'translateY(30px)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="work-steps" className="section-padding bg-gradient-to-b from-mrto-navy to-mrto-navy/90 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work Process</h2>
          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto">
            At MRTO, we follow a meticulous, client-oriented process designed to deliver highly 
            qualified and dependable talent to meet global workforce demands.
          </p>
        </div>
        
        <div className="relative" ref={timelineRef}>
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-mrto-gold/30 transform -translate-x-1/2 z-0">
            <div 
              className="absolute top-0 left-0 w-full bg-mrto-gold transition-all duration-300 ease-out" 
              style={{height: 'var(--progress, 0%)'}}
            ></div>
          </div>
          
          {/* Steps */}
          <div className="space-y-24 relative">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                ref={(el) => el && (stepsRef.current[index] = el)}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 opacity-0 transition-all duration-700 ease-out`}
                style={{ transform: 'translateY(30px)' }}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm shadow-lg border border-white/10 hover:bg-white/15 transition-all duration-300">
                    <div className="inline-block px-3 py-1 bg-mrto-gold text-mrto-navy rounded-full text-sm font-semibold mb-3">
                      Step {step.id}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-mrto-gold">
                      {step.title}
                    </h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </div>
                
                {/* Icon - Mobile View */}
                <div className="md:hidden flex justify-center">
                  <div className="bg-mrto-gold/20 p-3 rounded-full border border-mrto-gold/30">
                    {step.icon}
                  </div>
                </div>
                
                {/* Icon - Desktop View */}
                <div className="hidden md:flex md:w-1/2 justify-center relative z-10">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                    <div className="w-16 h-16 bg-mrto-gold/20 rounded-full flex items-center justify-center border-2 border-mrto-gold relative">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSteps;
