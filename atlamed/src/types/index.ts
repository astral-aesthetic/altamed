export interface Practitioner {
  id: string;
  full_name: string;
  credentials: string[];
  specialty_areas: string[];
  practice_name: string | null;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  phone: string;
  email: string | null;
  website: string | null;
  insurance_accepted: string;
  languages: string[];
  years_of_experience: number | null;
  bio: string;
  rating: number | null;
  review_count: number;
  photo_url: string | null;
  is_featured: boolean;
  telehealth_available: boolean;
  created_at: string;
  updated_at: string;
}

export interface Specialty {
  id: string;
  name: string;
  description: string;
  category: string;
  created_at: string;
}

export interface SearchFilters {
  searchQuery: string;
  state: string;
  city: string;
  specialty: string;
  minRating: number;
  telehealthOnly: boolean;
}

export interface UserProfile {
  id: string;
  full_name: string;
  user_type: 'patient' | 'practitioner';
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image_url: string;
  author_id: string | null;
  author_name: string;
  published_date: string;
  tags: string[];
  read_time_minutes: number;
  view_count: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProviderSubmission {
  id?: string;
  user_id?: string;
  full_name: string;
  credentials: string;
  specialty_areas: string[];
  practice_name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  phone: string;
  email: string;
  website: string;
  insurance_accepted: string;
  languages: string[];
  years_of_experience: number;
  bio: string;
  photo_url: string | null;
  status?: string;
  submitted_at?: string;
}
