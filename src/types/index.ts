export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  tech: string[];
  description: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeline: string;
  technologies: string[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  category: 'Competitive Programming' | 'Hackathon' | 'Fellowship' | 'Leadership';
  year: string;
  description: string;
  metric?: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}
