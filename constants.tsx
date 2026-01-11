
import { AppContent } from './types';

export const APP_CONTENT: AppContent = {
  studio: {
    name: "STYLON TATTOO",
    phone: "+1 (555) 012-3456",
    address: "42 Gothic Ave, Arts District, NY 10001",
    whatsapp: "15550123456",
    hours: "Mon-Sat: 11:00 AM - 9:00 PM",
    tagline: "Ink Your Story",
    heroImage: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=90&w=2400",
    aboutImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=90&w=1200"
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
  ]
};

// Backwards compatibility for single studio info exports if needed elsewhere
export const STUDIO_DATA = APP_CONTENT.studio;
export const TATTOO_STYLES = APP_CONTENT.styles;
export const GALLERY_IMAGES = APP_CONTENT.gallery;
