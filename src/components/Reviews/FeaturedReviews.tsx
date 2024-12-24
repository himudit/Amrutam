import React from 'react';
import { ReviewsList } from './ReviewsList';
import { reviews } from '../../data/reviewsData';
import { Card } from '../shared/Card';

export function FeaturedReviews() {
  return (
    <Card className="overflow-hidden">
      <div className="bg-[#f8f9ed] px-3 py-[0.1rem]">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium p-6 pb-2">
            Featured Reviews (102)
          </h3>
        </div>
      </div>

      <ReviewsList reviews={reviews} />
    </Card>
  );
}