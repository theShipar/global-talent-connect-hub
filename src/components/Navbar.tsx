
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

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
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Globe className="text-mrto-navy mr-2" size={28} />
            <span className={`font-poppins font-bold text-xl md:text-2xl ${isScrolled ? 'text-mrto-navy' : 'text-white'}`}>MRTO</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className={`${isScrolled ? 'text-mrto-navy' : 'text-white'}`} size={24} />
            ) : (
              <Menu className={`${isScrolled ? 'text-mrto-navy' : 'text-white'}`} size={24} />
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
      className={`font-poppins font-medium transition-colors hover:text-mrto-gold ${
        isScrolled ? 'text-mrto-navy' : 'text-white'
      }`}
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
