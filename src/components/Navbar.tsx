
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/5179a7d8-f437-471a-89ca-83ef894eb455.png" 
              alt="MRTO Logo" 
              className="h-12 md:h-14" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-1 rounded-full py-1 px-2 ${isScrolled ? 'bg-white/50' : 'bg-white'}`}>
            <NavLink isScrolled={isScrolled} href="#home">Home</NavLink>
            <NavLink isScrolled={isScrolled} href="#about">About Us</NavLink>
            <NavLink isScrolled={isScrolled} href="#services">Services</NavLink>
            <NavLink isScrolled={isScrolled} href="#work-steps">Our Process</NavLink>
            <NavLink isScrolled={isScrolled} href="#testimonials">Testimonials</NavLink>
            <NavLink isScrolled={isScrolled} href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-full ${isScrolled ? 'bg-mrto-navy/10' : 'bg-mrto-navy/10'}`}
          >
            {mobileMenuOpen ? (
              <X className="text-mrto-navy" size={24} />
            ) : (
              <Menu className="text-mrto-navy" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="#home" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setMobileMenuOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="#work-steps" onClick={() => setMobileMenuOpen(false)}>Our Process</MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop NavLink Component
const NavLink = ({ isScrolled, href, children }: { isScrolled: boolean, href: string, children: React.ReactNode }) => {
  return (
    <a 
      href={href}
      className="font-poppins font-medium transition-colors px-4 py-2 rounded-full hover:bg-mrto-gold/20 text-mrto-navy"
    >
      {children}
    </a>
  );
};

// Mobile NavLink Component
const MobileNavLink = ({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) => {
  return (
    <a 
      href={href}
      onClick={onClick}
      className="block py-2 text-mrto-navy font-poppins font-medium hover:text-mrto-gold transition-colors"
    >
      {children}
    </a>
  );
};

export default Navbar;
