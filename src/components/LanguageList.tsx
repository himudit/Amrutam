import React from 'react';

interface LanguageListProps {
  languages: string[];
}

export function LanguageList({ languages }: LanguageListProps) {
  return (
    <div>
      <h4 className="text-sm font-medium mb-2">Language Spoken</h4>
      <div className="flex gap-3">
        {languages.map((lang) => (
          <span
            key={lang}
            className="px-4 py-1 rounded-full text-sm text-gray-600 bg-gray-200"
          >
            {lang}
          </span>
        ))}
      </div>
    </div>
  );
}