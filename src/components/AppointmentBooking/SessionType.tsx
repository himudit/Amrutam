import React from 'react';

interface SessionTypeProps {
  selectedType: 'in-clinic' | 'video' | 'chat';
  onSelect: (type: 'in-clinic' | 'video' | 'chat') => void;
}

export function SessionType({ selectedType, onSelect }: SessionTypeProps) {
  const sessions = [
    { id: 'in-clinic', label: 'In-Clinic', duration: '45 Mins' },
    { id: 'video', label: 'Video', duration: '45 Mins' },
    { id: 'chat', label: 'Chat', duration: '10 Mins' },
  ] as const;

  return (
    <div className="mb-6">
      <h4 className="text-sm font-medium mb-3">Select your mode of session</h4>
      <div className="flex gap-3">
        {sessions.map((session) => (
          <button
            key={session.id}
            onClick={() => onSelect(session.id)}
            className={`flex-1 py-2 px-3 rounded-lg border text-sm ${
              selectedType === session.id
                ? 'bg-green-50 text-green-700 border-green-200'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div>{session.label}</div>
            <div className="text-xs text-gray-500">{session.duration}</div>
          </button>
        ))}
      </div>
    </div>
  );
}