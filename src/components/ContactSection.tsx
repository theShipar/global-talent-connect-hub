
import React from 'react';
import { Mail, Phone, Facebook, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-mrto-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto">
            Get in touch with our team to discuss your recruitment needs or job opportunities abroad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="opacity-0 animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-mrto-gold">Reach Out to Us</h3>
            
            <div className="space-y-6">
              <ContactItem 
                icon={<Mail />} 
                title="Email" 
                value="mrto.international@gmail.com" 
                link="mailto:mrto.international@gmail.com"
              />
              
              <ContactItem 
                icon={<Phone />} 
                title="Phone" 
                value="+8801897585209, +8801897585208" 
                link="tel:+8801897585209"
              />
              
              <ContactItem 
                icon={<Facebook />} 
                title="Facebook" 
                value="Follow us on Facebook" 
                link="https://www.facebook.com/share/1AE8A8aAbR/?mibextid=qi2Omg"
              />
              
              <ContactItem 
                icon={<MapPin />} 
                title="Location" 
                value="Dhaka, Bangladesh" 
              />
            </div>
            
            <div className="mt-10">
              <h4 className="font-bold mb-4 text-mrto-gold">Our Working Hours</h4>
              <p className="text-white/80">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 p-6 md:p-8 rounded-lg backdrop-blur-sm opacity-0 animate-slide-up slide-delay-1">
            <h3 className="text-2xl font-bold mb-6 text-mrto-gold">Send Us a Message</h3>
            
            <form>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-mrto-gold/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-mrto-gold/50"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-mrto-gold/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-mrto-gold/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-mrto-gold/50"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-md bg-mrto-gold text-mrto-navy font-medium hover:bg-yellow-500 transition-colors flex items-center justify-center"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  icon, 
  title, 
  value, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  link?: string; 
}) => {
  return (
    <div className="flex items-start">
      <div className="bg-mrto-gold/20 p-3 rounded-full mr-4">
        <div className="text-mrto-gold">{icon}</div>
      </div>
      
      <div>
        <h4 className="font-semibold">{title}</h4>
        {link ? (
          <a 
            href={link} 
            className="text-white/80 hover:text-mrto-gold transition-colors"
            target={link.startsWith('http') ? "_blank" : undefined}
            rel={link.startsWith('http') ? "noopener noreferrer" : undefined}
          >
            {value}
          </a>
        ) : (
          <p className="text-white/80">{value}</p>
        )}
      </div>
    </div>
  );
};

export default ContactSection;
