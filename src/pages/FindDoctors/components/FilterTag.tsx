import React from 'react';
import { X } from 'lucide-react';

interface FilterTagProps {
  label: string;
  onRemove: () => void;
}

export function FilterTag({ label, onRemove }: FilterTagProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2F7F2] text-sm">
      {label}
      <button 
        onClick={onRemove} 
        className="hover:text-gray-900"
        aria-label="Remove filter"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </span>
  );
}