
import React from 'react';
import { Globe, MapPin, Clock } from 'lucide-react';

const AirplaneLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-mrto-navy/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-4 border-mrto-gold/40 animate-pulse flex items-center justify-center">
              <Globe className="text-mrto-navy animate-spin-slow" size={28} />
            </div>
            <MapPin className="absolute top-1 left-1/2 -translate-x-1/2 text-mrto-gold animate-bounce" size={16} />
            <MapPin className="absolute bottom-1 right-1 text-mrto-navy animate-bounce" size={16} />
            <MapPin className="absolute bottom-1 left-1 text-mrto-gold animate-bounce" size={16} />
            <Clock className="absolute top-1 right-1 text-mrto-navy animate-ping" size={16} />
          </div>
        </div>
        <p className="mt-4 text-mrto-navy font-poppins font-medium">Connecting Global Opportunities...</p>
      </div>
    </div>
  );
};

export default AirplaneLoader;
