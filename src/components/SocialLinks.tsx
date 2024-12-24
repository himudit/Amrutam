import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex gap-4 pt-4">
      <a href="#" className="text-gray-400 flex justify-center items-center w-[2rem] h-[2rem] hover:text-gray-600 bg-gray-100 border border-gray-300 rounded-full">
        <Facebook size={16} />
      </a>
      <a href="#" className="text-gray-400 flex justify-center items-center w-[2rem] h-[2rem] hover:text-gray-600 bg-gray-100 border border-gray-300 rounded-full">     <Instagram size={16} />
      </a>
      <a href="#" className="text-gray-400 flex justify-center items-center w-[2rem] h-[2rem] hover:text-gray-600 bg-gray-100 border border-gray-300 rounded-full">   <Youtube size={16} />
      </a>
      <a href="#" className="text-gray-400 flex justify-center items-center w-[2rem] h-[2rem] hover:text-gray-600 bg-gray-100 border border-gray-300 rounded-full">  <Twitter size={16} />
      </a>
    </div>
  );
}