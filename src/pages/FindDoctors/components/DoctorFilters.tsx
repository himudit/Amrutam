import React, { useState } from 'react';
import { FilterDropdown } from './FilterDropdown';
import { FilterTag } from './FilterTag';
import { motion } from 'framer-motion';

const filters = [
  { label: 'Expertise', options: ['General', 'Specialist', 'Super Specialist'] },
  { label: 'Gender', options: ['Male', 'Female'] },
  { label: 'Fees', options: ['Rs.0-Rs.500', 'Rs.501-Rs.1000', 'Rs.1001-Rs.2000'] },
  { label: 'Languages', options: ['English', 'Hindi', 'Marathi'] },
];

const initialTags = ['Hair care', 'Female', 'Rs.0-Rs.500', 'Hindi'];

export function DoctorFilters() {
  const [activeTags, setActiveTags] = useState(initialTags);

  const removeTag = (tagToRemove: string) => {
    setActiveTags(activeTags.filter(tag => tag !== tagToRemove));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex justify-end gap-4 mb-4">
        {filters.map((filter) => (
          <FilterDropdown
            key={filter.label}
            label={filter.label}
            options={filter.options}
            onChange={() => { }}
          />
        ))}
        <button className="px-4 py-2 rounded-lg bg-[#F2F7F2] text-[#1B8B55] text-sm hover:bg-green-50 transition-colors">
          All filters
        </button>
      </div>

      <div className="flex justify-end flex-wrap gap-2">
        {activeTags.map((tag) => (
          <FilterTag
            key={tag}
            label={tag}
            onRemove={() => removeTag(tag)}
          />
        ))}
      </div>
    </motion.div>
  );
}