import React from 'react';
import { Star, Check } from 'lucide-react';
import type { Doctor } from '../types';

interface DoctorProfileProps {
  doctor: Doctor;
}

export function DoctorProfile({ doctor }: DoctorProfileProps) {
  return (
    <div className="bg-[#FFFBF2] rounded-2xl border border-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="relative h-48 bg-[#E6EFE9]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 160">
          <path
            d="M0,96 C150,96 150,32 300,32 C450,32 450,96 600,96 C750,96 750,32 900,32"
            fill="none"
            stroke="white"
            strokeWidth="2"
            className="opacity-50"
          />
        </svg>
      </div>

      <div className="px-8 bg-[#FFFBF2]">
        {/* Profile Section */}
        <div className="flex items-start gap-6 -mt-24 mb-8">
          <img
            src={doctor.profileImage}
            alt={doctor.name}
            className="relative w-40 h-40 rounded-full border-4 border-white shadow-md"
          />
          <div className="flex-1 mt-24 ">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-semibold text-gray-900">{doctor.name}</h2>
                  <div className="flex items-center gap-1 text-[#3A643B]">
                    <Check size={16} className="text-white bg-[blue] rounded-full p-0.5" />
                  </div>
                </div>
                <div className="text-gray-600 mb-2">{doctor.specialization}</div>
                <div className="flex items-center gap-1">
                  <span className="font-medium">{doctor.rating}</span>
                  <div className="flex gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(doctor.rating) ? 'fill-[#F79624] text-[#F79624]' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Stats */}
              <div className="flex w-[25rem] items-center gap-12 pb-6">
                <div>
                  <div className="font-semibold text-gray-900 text-xl">{doctor.followers}</div>
                  <div className="text-sm text-gray-500">Followers</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-xl">{`${doctor.following}K`}</div>
                  <div className="text-sm text-gray-500">Following</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-xl">{doctor.posts}</div>
                  <div className="text-sm text-gray-500">Posts</div>
                </div>
              </div>
              <button className="px-6 py-2.5 bg-[#3A643B] text-white rounded-lg hover:bg-[#3A643B] transition-colors">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}