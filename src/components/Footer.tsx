
import React from 'react';
import { Globe, Mail, Phone, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-mrto-navy text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/mrto-logo.png" 
                alt="MRTO Logo" 
                className="h-12 w-auto mr-3" 
              />
              <h3 className="font-poppins font-bold text-2xl text-white">MRTO</h3>
            </div>
            
            <p className="text-white/80 mb-6">
              Connecting World-Class Talent with Global Opportunities – Empowering Industries, Enriching Lives.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="text-mrto-gold mr-3" size={16} />
                <a href="mailto:mrto.international@gmail.com" className="text-white/80 hover:text-mrto-gold transition-colors">
                  mrto.international@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-mrto-gold mr-3" size={16} />
                <a href="tel:+8801897585209" className="text-white/80 hover:text-mrto-gold transition-colors">
                  +8801897585209, +8801897585208
                </a>
              </div>
              
              <div className="flex items-center">
                <Facebook className="text-mrto-gold mr-3" size={16} />
                <a 
                  href="https://www.facebook.com/share/1AE8A8aAbR/?mibextid=qi2Omg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-mrto-gold transition-colors"
                >
                  Follow us on Facebook
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-bold text-xl mb-6">Quick Links</h3>
            
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-mrto-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-mrto-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-mrto-gold transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#work-steps" className="text-white/80 hover:text-mrto-gold transition-colors">Work Process</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-mrto-gold transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-mrto-gold transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Industries */}
          <div>
            <h3 className="font-poppins font-bold text-xl mb-6">Industries We Serve</h3>
            
            <ul className="space-y-3">
              <li className="text-white/80">Garment Manufacturing</li>
              <li className="text-white/80">Construction</li>
              <li className="text-white/80">Hospitality & Catering</li>
              <li className="text-white/80">Healthcare</li>
              <li className="text-white/80">Cleaning Services</li>
              <li className="text-white/80">Electrical Work</li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-white/20 my-6"></div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MRTO. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-mrto-gold/20 hover:bg-mrto-gold text-white p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
