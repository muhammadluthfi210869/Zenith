export interface FeatureItem {
  id: string;
  label: string;
  price: number;
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}
