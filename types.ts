
export interface TattooStyle {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  category: string;
  title: string;
}

export interface Artist {
  name: string;
  role: string;
  image: string;
  specialty: string;
}

export interface AftercareStep {
  title: string;
  desc: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

export interface StudioInfo {
  name: string;
  phone: string;
  address: string;
  whatsapp: string;
  hours: string;
  tagline: string;
  heroImage: string;
  aboutImage: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  youtube: string;
}

export interface AppContent {
  studio: StudioInfo;
  social: SocialLinks;
  artists: Artist[];
  styles: TattooStyle[];
  gallery: GalleryImage[];
  aftercare: AftercareStep[];
  blogs: BlogPost[];
}
