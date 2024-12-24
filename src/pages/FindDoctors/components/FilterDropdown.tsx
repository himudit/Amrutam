import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterDropdownProps {
  label: string;
  options: string[];
  onChange: (value: string) => void;
}

export function FilterDropdown({ label, options, onChange }: FilterDropdownProps) {
  return (
    <div className="relative flex-shrink-0">
      <select 
        onChange={(e) => onChange(e.target.value)}
        className="w-full md:w-auto appearance-none px-4 py-2 pr-8 rounded-lg border border-gray-200 text-sm focus:outline-none hover:bg-gray-50 transition-colors"
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );
}