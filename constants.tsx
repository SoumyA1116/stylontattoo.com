
import { AppContent } from './types';

export const APP_CONTENT: AppContent = {
  studio: {
    name: "STYLON TATTOO",
    phone: "+91 82702 29250",
    address: "42 Gothic Ave, Arts District, NY 10001",
    whatsapp: "918270229250",
    hours: "Mon-Sat: 11:00 AM - 9:00 PM",
    tagline: "Ink Your Story",
    heroImage: "https://images.unsplash.com/photo-1605647533135-51b5906087d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=90&w=2400",
    aboutImage: "https://lh3.googleusercontent.com/p/AF1QipNCU78jffEuT5aNPmpKH62uYcUBHrR1wvEGSNut=s4000?auto=format&fit=crop&q=90&w=1200"
  },
  social: {
    instagram: "https://instagram.com/stylontattoo",
    facebook: "https://facebook.com/stylontattoo",
    youtube: "https://youtube.com/@stylontattoo"
  },
  artists: [
    {
      name: "Victor Thorne",
      role: "Master of Realism",
      image: "https://images.unsplash.com/photo-1590548784585-645d8b75e646?auto=format&fit=crop&q=90&w=800",
      specialty: "Hyper-realism & Portraits"
    },
    {
      name: "Elena Varkov",
      role: "Illustrative Specialist",
      image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=90&w=800",
      specialty: "Fine Line & Geometry"
    },
    {
      name: "Marcus Black",
      role: "Traditionalist",
      image: "https://images.unsplash.com/photo-15423938818e1-b1d3f1c2ca3e?auto=format&fit=crop&q=90&w=800",
      specialty: "Neo-Traditional & Bold Color"
    }
  ],
  styles: [
    {
      id: 'black-grey',
      name: 'Black & Grey',
      description: 'Specializing in hyper-realistic shading and intricate details using only black ink dilutions.',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'minimalist',
      name: 'Minimalist',
      description: 'Clean lines and subtle designs for those who believe less is more.',
      image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'traditional',
      name: 'Traditional',
      description: 'Bold lines and vibrant primary colors. Classic Americana style that lasts a lifetime.',
      image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'portrait',
      name: 'Portrait',
      description: 'Capturing the soul of your loved ones or icons with photographic precision.',
      image: 'https://images.unsplash.com/photo-1562967914-6cbb65181734?auto=format&fit=crop&q=80&w=800'
    }
  ],
  gallery: [
    { id: 1, url: 'https://picsum.photos/id/10/800/1000', category: 'Realism', title: 'Deep Forest' },
    { id: 2, url: 'https://picsum.photos/id/12/800/1000', category: 'Geometric', title: 'Sacred Lines' },
    { id: 3, url: 'https://picsum.photos/id/15/800/1000', category: 'Traditional', title: 'Ancient Anchor' },
    { id: 4, url: 'https://picsum.photos/id/20/800/1000', category: 'Portrait', title: 'The Seer' },
    { id: 5, url: 'https://picsum.photos/id/25/800/1000', category: 'Realism', title: 'Wolf Spirit' },
    { id: 6, url: 'https://picsum.photos/id/30/800/1000', category: 'Minimalist', title: 'Single Needle' },
    { id: 7, url: 'https://picsum.photos/id/35/800/1000', category: 'Color', title: 'Abstract Bloom' },
    { id: 8, url: 'https://picsum.photos/id/40/800/1000', category: 'Black & Grey', title: 'Stone Heart' },
  ],
  aftercare: [
    { title: "I. Protection", desc: "The first 72 hours are critical. Treat your skin as a masterpiece in progress. Gentle cleansing only." },
    { title: "II. Hydration", desc: "Balance is key. Use our signature balms sparingly to allow the skin to breathe while healing." },
    { title: "III. Longevity", desc: "Sun is the enemy of ink. Protect your investment with high-SPF shielding once fully healed." }
  ],
  blogs: [
    {
      id: 'types-of-tattoo',
      title: 'Types Of Tattoo',
      excerpt: 'Stylon Tattoo Studio provides a wide range of permanent tattoos including Portrait, Abstract, Maori, and more.',
      content: 'Stylon Tattoo Studio provides wide range of permanent tattoo, include almost everything in the world of availability e.g. Portrait Tattoo, Abstract Tattoo, Couple Tattoo, Maori Tattoo, Tribal Tattoo and Many more.',
      author: 'subsas',
      date: 'August 24, 2018',
      image: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'body-piercing',
      title: 'Body Piercing',
      excerpt: 'Body piercing is the process of making an opening in the body for jewelry, chosen for self-expression and cultural traditions.',
      content: 'Body piercing is the process of making an opening or hole in the body for jewelry to be inserted, usually for decorative or decorative purposes, parts of the body may be pierced, and over time, how the popularity of various disposables has improved. Body piercing has cultural, historical and personal significance, individuals choose to wear it for a variety of reasons ranging from self-expression, clothing to cultural and religious traditions.',
      author: 'subsas',
      date: 'August 7, 2018',
      image: 'https://images.unsplash.com/photo-1560707854-fb9a10eeaebb?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'tattoo-removal',
      title: 'Tattoo Removal',
      excerpt: 'Professional process of eliminating or significantly reducing the visibility of a tattoo from the skin.',
      content: 'Tattoo removal service refers to the professional process of eliminating or significantly reducing the visibility of a tattoo from the skin. This service is sought by individuals who wish to remove a previously inked tattoo for various reasons, such as a change in personal preferences, dissatisfaction with the existing tattoo, or the desire to get rid of a name or symbol associated with a past relationship.',
      author: 'subsas',
      date: 'July 27, 2018',
      image: 'https://images.unsplash.com/photo-1512413316925-fd4b93f31521?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'hygiene-process',
      title: 'Hygiene Process',
      excerpt: 'Your safety is our priority. We adhere to the highest standards of cleanliness and hygiene.',
      content: 'At Stylon Tattoo Studio, Your safety is our priority. Stylon Tattoo Studio adhere highest standards of cleanliness and hygiene. Our studio is equipped with state-of-the-art sterilization tools and gloves and all artists strictly follow health and safety protocols.',
      author: 'subsas',
      date: 'July 12, 2018',
      image: 'https://images.unsplash.com/photo-1504198266389-823c515890fb?auto=format&fit=crop&q=80&w=800'
    }
  ]
};

export const STUDIO_DATA = APP_CONTENT.studio;
export const TATTOO_STYLES = APP_CONTENT.styles;
export const GALLERY_IMAGES = APP_CONTENT.gallery;
