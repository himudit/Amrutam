import type { Review } from '../types';

export const reviews: Review[] = [
  {
    id: '1',
    userId: '101',
    userName: 'Alicent Hightower',
    rating: 5,
    consultationType: 'Skin care',
    comment: 'Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods',
    date: '20 January 2023',
    userImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces&auto=format&q=80',
  },
  {
    id: '2',
    userId: '102',
    userName: 'Alicent Hightower',
    rating: 5,
    consultationType: 'Pregnancy',
    comment: 'Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods',
    date: '20 January 2023',
    userImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces&auto=format&q=80',
  }
];