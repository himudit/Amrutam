import React from 'react';

interface TimeSlotsProps {
  selectedSlot: string | null;
  onSelectSlot: (slot: string) => void;
}

export function TimeSlots({ selectedSlot, onSelectSlot }: TimeSlotsProps) {
  const morningSlots = [
    { time: '09:00 AM', available: true },
    { time: '09:30 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '10:15 AM', available: true },
    { time: '10:45 AM', available: true },
    { time: '11:00 AM', available: true },
  ];

  const eveningSlots = [
    { time: '04:00 PM', available: true },
    { time: '04:15 PM', available: true },
    { time: '04:30 PM', available: true },
    { time: '04:45 PM', available: true },
    { time: '05:15 PM', available: true },
  ];

  const TimeSlot = ({ time, available }: { time: string; available: boolean }) => (
    <button
      disabled={!available}
      onClick={() => onSelectSlot(time)}
      className={`py-2 px-4 rounded-lg text-sm ${
        selectedSlot === time
          ? 'bg-green-700 text-white'
          : available
          ? 'hover:bg-gray-50'
          : 'text-gray-400 cursor-not-allowed'
      }`}
    >
      {time}
    </button>
  );

  return (
    <div className="space-y-6">
      <div>
        <h5 className="text-sm font-medium mb-3">Morning</h5>
        <div className="grid grid-cols-4 gap-2">
          {morningSlots.map((slot) => (
            <TimeSlot key={slot.time} {...slot} />
          ))}
        </div>
      </div>
      <div>
        <h5 className="text-sm font-medium mb-3">Evening</h5>
        <div className="grid grid-cols-4 gap-2">
          {eveningSlots.map((slot) => (
            <TimeSlot key={slot.time} {...slot} />
          ))}
        </div>
      </div>
    </div>
  );
}