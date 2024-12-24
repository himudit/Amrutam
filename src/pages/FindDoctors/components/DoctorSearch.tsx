import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function DoctorSearch() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-center mb-12"
    >
      <h1 className="text-2xl font-semibold mb-8">
        Find Expert Doctors For An In-Clinic Session Here
      </h1>
      
      <div className="flex items-stretch max-w-2xl mx-auto">
        <div className="flex-1 relative bg-white rounded-l-lg border border-gray-200 overflow-hidden">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-800 w-5 h-5" />
          <select className="w-full h-full pl-10 pr-4 py-3.5 appearance-none bg-transparent focus:outline-none text-gray-600">
            <option>Select Location</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bangalore</option>
          </select>
        </div>
        
        <div className="flex-[2] w-[1rem] flex items-center bg-white border-l-0 border border-gray-200 rounded-r-lg">
          <input
            type="text"
            placeholder="eg. Doctor, specialisation, clinic name"
            className="w-full px-4 py-3.5 bg-transparent focus:outline-none text-gray-600"
          />
          <button className="px-4 py-2 hover:bg-gray-50 rounded-lg mr-1">
            <ArrowRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}