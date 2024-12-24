import React from 'react';
import { Card } from './shared/Card';

const specializations = [
  {
    icon: "/icons/womens-health.svg",
    name: "Women's Health",
    bgColor: "bg-[#F2F7F2]"
  },
  {
    icon: "/icons/skin-care.svg",
    name: "Skin Care",
    bgColor: "bg-[#F2F7F7]"
  },
  {
    icon: "/icons/immunity.svg",
    name: "Immunity",
    bgColor: "bg-[#F7F2F7]"
  },
  {
    icon: "/icons/hair-care.svg",
    name: "Hair Care",
    bgColor: "bg-[#FFF2F2]"
  }
];

export function Specializations() {
  return (
    <Card>
      <div className="bg-[#f8f9ed] px-3 py-[0.1rem]">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900 p-6 pb-4">I Specialize In</h3>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-4 p-6 pt-0">
        {specializations.map((spec) => (
          <div
            key={spec.name}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className={`
              w-[16] h-16 ${spec.bgColor} rounded-full 
              flex items-center justify-center mb-2
              transition-transform duration-200 
              group-hover:scale-110
            `}>
              <img src={spec.icon} alt={spec.name} className="w-17 h-17" />
            </div>
            <span className="mt-3 text-sm text-gray-600 text-center group-hover:text-gray-900 transition-colors">
              {spec.name}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}