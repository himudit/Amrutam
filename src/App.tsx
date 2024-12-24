import React from 'react';
import { DoctorProfile } from './components/DoctorProfile';
import { AppointmentBooking } from './components/AppointmentBooking';
import { DoctorInfo } from './components/DoctorInfo';
import { Header } from './components/Header';
import { doctorData } from './data/doctorData';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <DoctorProfile doctor={doctorData} />
        <div className="grid grid-cols-[1fr_400px] gap-6">
          <DoctorInfo />
          <div className="relative">
            <AppointmentBooking />
          </div>
        </div>
      </main>
    </div>
  );
}