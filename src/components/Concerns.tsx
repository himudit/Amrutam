import React from 'react';
import { Card } from './shared/Card';

const concerns = [
  "Skin Treatment",
  "Pregnancy",
  "Period Doubts",
  "Endometriosis",
  "Pelvic Pain",
  "Ovarian Cysts",
];

export function Concerns() {
  return (
    <Card>
      <div className="bg-[#f8f9ed] px-1 py-[0.2]">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900 p-6 pb-4">The Concerns I Treat</h3>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 p-6 pt-0">
        {concerns.map((concern) => (
          <span
            key={concern}
            className="px-4 py-2 bg-gray-200 rounded-full text-sm text-[#3A643B] border border-gray-100
              hover:bg-green-50 hover:border-green-100 transition-colors duration-200 cursor-pointer"
          >
            {concern}
          </span>
        ))}
        <span className="px-4 py-2 bg-white rounded-full text-sm text-[#1B8B55] border border-gray-100
          hover:bg-green-50 hover:border-green-100 transition-colors duration-200 cursor-pointer">
          + 5 More
        </span>
      </div>
    </Card>
  );
}