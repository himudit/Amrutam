import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const doctors = [
  {
    id: 1,
    name: 'Dr. Prerna Narang',
    specialty: 'Male-Female Infertility',
    experience: '7 years of Experience',
    languages: ['English', 'Hindi', 'Marathi'],
    rating: 4.5,
    videoConsultation: 800,
    chatConsultation: 'Free',
    image: './icons/Doctor2.png'
  },
  {
    id: 2,
    name: 'Dr. Prerna Narang',
    specialty: 'Male-Female Infertility',
    experience: '7 years of Experience',
    languages: ['English', 'Hindi', 'Marathi'],
    rating: 4.5,
    videoConsultation: 800,
    chatConsultation: 'Free',
    image: './icons/Doctor2.png'
  },
  {
    id: 3,
    name: 'Dr. Prerna Narang',
    specialty: 'Male-Female Infertility',
    experience: '7 years of Experience',
    languages: ['English', 'Hindi', 'Marathi'],
    rating: 4.5,
    videoConsultation: 800,
    chatConsultation: 'Free',
    image: './icons/Doctor2.png'
  }
];

export function DoctorsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {doctors.map((doctor, index) => (
        <motion.div
          key={doctor.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="bg-[#FFF7E2] rounded-lg border border-gray-100 overflow-hidden"
        >
          <div className="p-6 flex flex-col items-center text-center">
            <div className="relative mb-3">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-full"
              />
              <div className="absolute top-0 right-0 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">
                {doctor.rating} ★
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2">{doctor.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{doctor.specialty}</p>
            <p className="text-sm text-gray-500 mb-1">{doctor.experience}</p>
            <p className="text-sm text-gray-500 mb-4">
              Speaks: {doctor.languages.join(', ')}
            </p>

            <div className="grid grid-cols-2 gap-4 w-full mb-4">
              <div className="text-center border border-[#3A643B] rounded-md">
                <p className="text-sm font-medium">Video Consultation</p>
                <p className="text-sm">₹{doctor.videoConsultation}</p>
              </div>
              <div className="text-center  border border-[#3A643B] rounded-md">
                <p className="text-sm font-medium">Chat Consultation</p>
                <p className="text-sm">{doctor.chatConsultation}</p>
              </div>
            </div>

            <button className="w-full py-2 bg-white text-[#3A643B] border border-[#3A643B] rounded-lg hover:bg-green-50 mb-2">
              View Profile
            </button>
            <button className="w-full py-2 bg-[#3A643B] text-white rounded-lg hover:bg-[#3A643B]">
              Book a consultation
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}