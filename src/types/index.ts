export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  rating: number;
  followers: number;
  following: number;
  posts: number;
  languages: string[];
  experience: number;
  profileImage: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  isAvailable: boolean;
}

export interface Specialization {
  id: string;
  name: string;
  icon: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  userImage: string;
}