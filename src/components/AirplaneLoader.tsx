
import React from 'react';
import { Globe, MapPin } from 'lucide-react';

const AirplaneLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-4 border-mrto-navy/20 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full absolute">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-mrto-gold/20 rounded-tl-full animate-pulse"></div>
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-mrto-navy/20 rounded-tr-full animate-pulse delay-300"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-mrto-navy/20 rounded-bl-full animate-pulse delay-150"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-mrto-gold/20 rounded-br-full animate-pulse delay-450"></div>
            </div>
            <div className="w-20 h-20 rounded-full border-4 border-mrto-gold/40 flex items-center justify-center z-10 bg-white">
              <Globe className="text-mrto-navy animate-spin-slow" size={36} />
            </div>
            <MapPin className="absolute top-1 left-1/2 -translate-x-1/2 text-mrto-gold animate-bounce" size={16} />
            <MapPin className="absolute bottom-1 right-1 text-mrto-navy animate-bounce" size={16} />
            <MapPin className="absolute bottom-1 left-1 text-mrto-gold animate-bounce" size={16} />
            <MapPin className="absolute top-1 right-1 text-mrto-navy animate-ping" size={16} />
          </div>
          <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-mrto-gold animate-pulse flex items-center justify-center text-white font-bold">
            M
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-mrto-navy animate-pulse flex items-center justify-center text-white font-bold">
            R
          </div>
        </div>
        <p className="mt-6 text-mrto-navy font-poppins font-medium">Connecting Global Opportunities...</p>
        <div className="mt-2 flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-mrto-gold animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-mrto-gold animate-pulse delay-150"></div>
          <div className="w-2 h-2 rounded-full bg-mrto-gold animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default AirplaneLoader;
