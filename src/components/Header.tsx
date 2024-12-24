import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-[#FFF7E2] border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#3A643B]">AMRUTAM</Link>
        
        <nav className="flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/find-doctors" className="text-gray-600 hover:text-gray-900">Find Doctors</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
        </nav>

        <div className="flex gap-3">
          <button className="px-6 py-2 text-[#3A643B] border border-[#3A643B] rounded-lg hover:bg-green-50">
            Login
          </button>
          <button className="px-6 py-2 bg-[#3A643B] text-white rounded-lg hover:bg-[#167544]">
            Sign-up
          </button>
        </div>
      </div>
    </header>
  );
}