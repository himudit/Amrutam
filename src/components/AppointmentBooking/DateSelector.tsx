import React from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface DateSelectorProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

export function DateSelector({ selectedDate, onDateChange }: DateSelectorProps) {
  const dates = [
    { date: 'Mon, 10 Oct', slots: 10 },
    { date: 'Tue, 11 Oct', slots: 2 },
    { date: 'Wed, 12 Oct', slots: 5 },
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium">Pick a time slot</h4>
        <Calendar className="w-4 h-4 text-gray-600" />
      </div>
      <div className="flex items-center gap-2">
        <button className="p-1 rounded-full hover:bg-gray-100">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex-1 flex gap-2">
          {dates.map((date) => (
            <button
              key={date.date}
              onClick={() => onDateChange(date.date)}
              className={`flex-1 p-2 rounded-lg text-sm ${
                selectedDate === date.date
                ? 'bg-green-50 text-green-700'
                : 'hover:bg-gray-50'
              }`}
            >
              <div className="font-medium">{date.date}</div>
              <div className="text-xs text-gray-500">{date.slots} slots</div>
            </button>
          ))}
        </div>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}