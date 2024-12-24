import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Card } from '../shared/Card';

export function AppointmentBooking() {
  const [sessionType, setSessionType] = useState<'in-clinic' | 'video' | 'chat'>('video');
  const [selectedDate, setSelectedDate] = useState('Mon, 10 Oct');
  const [selectedSlot, setSelectedSlot] = useState<string | null>('11:00 AM');

  const dates = [
    { date: 'Mon, 10 Oct', slots: 10, color: 'text-[#1B8B55]' },
    { date: 'Tue, 11 Oct', slots: 2, color: 'text-[#D14343]' },
    { date: 'Wed, 12 Oct', slots: 5, color: 'text-[#F5A623]' },
  ];

  const timeSlots = {
    morning: [
      '09:00 AM',
      '09:30 AM',
      '10:00 AM',
      '10:15 AM',
      '10:45 AM',
      '11:00 AM',
    ],
    evening: [
      '04:00 PM',
      '04:15 PM',
      '04:30 PM',
      '04:45 PM',
      '05:15 PM',
    ]
  };

  return (
    <Card className="sticky top-6">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Appointment Fee</h3>
          <span className="text-[#1B8B55] font-medium">₹699.00</span>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-4">Select your mode of session</h4>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'in-clinic', label: 'In-Clinic', duration: '45 Mins' },
                { id: 'video', label: 'Video', duration: '45 Mins' },
                { id: 'chat', label: 'Chat', duration: '10 Mins' },
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSessionType(type.id as any)}
                  className={`
                    p-3 rounded-lg text-center border
                    ${sessionType === type.id 
                      ? 'bg-green-50 border-green-200 text-[#1B8B55]' 
                      : 'bg-white border-gray-100'
                    }
                    hover:bg-green-50 transition-colors
                  `}
                >
                  <div className="font-medium">{type.label}</div>
                  <div className="text-xs text-gray-500">{type.duration}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-medium">Pick a time slot</h4>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            
            <div className="flex gap-2 mb-6">
              {dates.map((date) => (
                <button
                  key={date.date}
                  onClick={() => setSelectedDate(date.date)}
                  className={`
                    flex-1 p-2 rounded-lg text-center border
                    ${selectedDate === date.date 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-white border-gray-100'
                    }
                    hover:bg-green-50 transition-colors
                  `}
                >
                  <div className="font-medium text-sm">{date.date}</div>
                  <div className={`text-xs ${date.color}`}>{date.slots} slots</div>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium mb-3">Morning</h5>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.morning.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedSlot(time)}
                      className={`
                        py-2 px-3 rounded-lg text-sm
                        ${selectedSlot === time 
                          ? 'bg-[#1B8B55] text-white' 
                          : 'hover:bg-gray-50'
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-sm font-medium mb-3">Evening</h5>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.evening.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedSlot(time)}
                      className={`
                        py-2 px-3 rounded-lg text-sm
                        ${selectedSlot === time 
                          ? 'bg-[#1B8B55] text-white' 
                          : 'hover:bg-gray-50'
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-[#1B8B55] text-white py-3 rounded-lg font-medium hover:bg-[#167544] transition-colors">
            Make An Appointment
          </button>
        </div>
      </div>
    </Card>
  );
}