import React from 'react';
import { Header } from '../../components/Header';
import { DoctorSearch } from './components/DoctorSearch';
import { DoctorFilters } from './components/DoctorFilters';
import { DoctorsList } from './components/DoctorsList';
import { motion } from 'framer-motion';

export function FindDoctors() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-[url('./icons/banner.svg')] bg-cover bg-center h-[13rem] w-full">
        <div className="relative max-w-6xl mx-auto px-4 pt-12">
          <DoctorSearch />
        </div>
      </div>

      {/* Filters and Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-6">
          <DoctorFilters />
          <DoctorsList />
        </div>
      </div>
    </div>
  );
}