
import React from 'react';
import { Plane } from 'lucide-react';

const AirplaneLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-20 h-0.5 bg-mrto-navy absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <Plane 
            className="text-mrto-navy animate-fly-right" 
            size={36} 
          />
        </div>
        <p className="mt-4 text-mrto-navy font-poppins">Connecting Global Opportunities...</p>
      </div>
    </div>
  );
};

export default AirplaneLoader;
