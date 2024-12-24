import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const timeSlots = [
  { id: '1', time: '09:00 AM', isAvailable: true },
  { id: '2', time: '10:00 AM', isAvailable: true },
  { id: '3', time: '11:00 AM', isAvailable: false },
  { id: '4', time: '02:00 PM', isAvailable: true },
  { id: '5', time: '03:00 PM', isAvailable: true },
  { id: '6', time: '04:00 PM', isAvailable: false },
];

export function AppointmentBooking() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [consultationType, setConsultationType] = useState<'video' | 'chat'>('video');

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Book Appointment</h3>
        <span className="text-green-600 font-medium">₹699.00</span>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3">Select your mode of session</h4>
        <div className="flex gap-3">
          <button
            onClick={() => setConsultationType('video')}
            className={`flex-1 py-2 px-4 rounded-lg ${
              consultationType === 'video'
                ? 'bg-green-50 text-green-600 border-green-200'
                : 'bg-gray-50 text-gray-600'
            } border`}
          >
            Video Call
          </button>
          <button
            onClick={() => setConsultationType('chat')}
            className={`flex-1 py-2 px-4 rounded-lg ${
              consultationType === 'chat'
                ? 'bg-green-50 text-green-600 border-green-200'
                : 'bg-gray-50 text-gray-600'
            } border`}
          >
            Chat
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3">Pick a time slot</h4>
        <div className="grid grid-cols-3 gap-3">
          {timeSlots.map((slot) => (
            <button
              key={slot.id}
              disabled={!slot.isAvailable}
              onClick={() => setSelectedSlot(slot.id)}
              className={`py-2 px-3 rounded-lg border text-sm ${
                selectedSlot === slot.id
                  ? 'bg-green-50 text-green-600 border-green-200'
                  : slot.isAvailable
                  ? 'bg-white hover:bg-gray-50'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>

      <button
        disabled={!selectedSlot}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Make An Appointment
      </button>
    </div>
  );
}