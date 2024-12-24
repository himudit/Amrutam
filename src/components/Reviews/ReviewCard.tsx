import React from 'react';
import { Star } from 'lucide-react';
import type { Review } from '../../types';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="p-6 space-y-3 bg-[#FAFAFA] rounded-xl m-4 transition-all duration-200 hover:bg-white hover:shadow-sm">
      <div className="flex gap-3">
        <img 
          src={review.userImage} 
          alt={review.userName} 
          className="w-12 h-12 rounded-full ring-2 ring-white"
        />
        <div>
          <h4 className="font-medium text-gray-900">{review.userName}</h4>
          <p className="text-sm text-gray-500">Consulted for {review.consultationType}</p>
        </div>
        <span className="ml-auto text-sm text-gray-400">{review.date}</span>
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className="w-4 h-4 fill-[#F79624] text-[#F79624]"
          />
        ))}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
    </div>
  );
}