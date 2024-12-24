import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <section 
      className={`
        bg-white rounded-2xl border border-gray-100
        shadow-[0_2px_8px_rgba(0,0,0,0.04)]
        transition-transform duration-200 ease-in-out
        hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]
        ${className}
      `}
    >
      {children}
    </section>
  );
}