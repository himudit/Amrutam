import React from 'react';
import { Building2 } from 'lucide-react';
import { Card } from './shared/Card';

const experiences = [
  {
    clinic: "Midtown Medical Clinic",
    role: "Senior doctor",
    period: "2016-PRESENT"
  },
  {
    clinic: "Midtown Medical Clinic",
    role: "Senior doctor",
    period: "2010-2015"
  }
];

export function WorkExperience() {
  return (
    <Card>
      <div className="bg-[#f8f9ed] px-3 py-[0.1rem]">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900 p-6 pb-2">My Work Experience</h3>
        </div>
      </div>
      <div className="mt-4 text-sm text-[#1B8B55] font-medium px-6 pb-4">
        I HAVE BEEN IN PRACTICE FOR : 7+ YEARS
      </div>
      {/* black Line */}
      <div className="ml-10 w-[26rem] h-[1px] bg-gray-300"></div>
      <div className="mt-4 space-y-4 p-6 pt-0">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start gap-3 group cursor-pointer">
            <div className="p-2 bg-[#EBF6FF] rounded-lg transition-transform duration-200 group-hover:scale-110">
              <Building2 className="w-5 h-5 text-[#006AE4]" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 group-hover:text-[#006AE4] transition-colors">
                {exp.clinic}
              </h4>
              <div className='flex justify-evenly gap-[12rem] items-center'>
                <p className="text-sm text-gray-500">{exp.role}</p>
                <p className="text-sm text-gray-400">{exp.period}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}