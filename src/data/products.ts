export interface Product {
  id: string;
  name: string;
  price: number;
  isCallForPrice?: boolean;
  category: string;
  image: string;
  description: string;
}

export const CATEGORIES = [
  "WordPress Themes",
  "WordPress Plugins",
  "Graphic Tools",
  "AI & Subscriptions",
  "Software & Apps",
  "Tutorials",
  "Digital Services",
  "eBooks & Entertainment"
];

export const INITIAL_PRODUCTS: Product[] = [
  // WordPress Themes
  { id: "wp-theme-1", name: "Digital Product Selling Website Template", price: 0, category: "WordPress Themes", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&h=600&q=80", description: "Start your digital marketplace today." },
  { id: "wp-theme-2", name: "KitNinja – Ultimate Ecommerce Template", price: 0, isCallForPrice: true, category: "WordPress Themes", image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=500&h=600&q=80", description: "Premium ecommerce template for pros." },
  { id: "wp-theme-3", name: "100+ Bangla Landing Page Templates", price: 100, category: "WordPress Themes", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=500&h=600&q=80", description: "Conversion focused Bangla landing pages." },
  { id: "wp-theme-4", name: "1000+ Elementor Landing Page Templates", price: 150, category: "WordPress Themes", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=500&h=600&q=80", description: "Massive collection of Elementor templates." },
  { id: "wp-theme-5", name: "Astra Pro WP Theme", price: 450, category: "WordPress Themes", image: "https://wpastra.com/wp-content/uploads/2017/07/astra-logo.png", description: "Fastest WordPress theme with Pro features." },
  { id: "wp-theme-6", name: "GeneratePress Premium", price: 450, category: "WordPress Themes", image: "https://generatepress.com/wp-content/uploads/2014/10/generatepress-logo.png", description: "Lightweight, powerful, and performance-driven." },
  
  // WordPress Plugins
  { id: "wp-plugin-1", name: "ACF Pro", price: 450, category: "WordPress Plugins", image: "https://www.advancedcustomfields.com/wp-content/themes/acf/assets/images/acf-logo.png", description: "Advanced Custom Fields Pro for power users." },
  { id: "wp-plugin-2", name: "Elementor Pro", price: 450, category: "WordPress Plugins", image: "https://elementor.com/blog/wp-content/uploads/2021/06/Elementor-Logo.png", description: "World's leading website builder for WordPress." },
  { id: "wp-plugin-3", name: "Rank Math Pro", price: 650, category: "WordPress Plugins", image: "https://rankmath.com/wp-content/uploads/2020/09/Rank-Math-Logo.png", description: "Best SEO plugin for WordPress ranking." },
  
  // Graphic Tools
  { id: "graphic-1", name: "Canva Premium", price: 500, category: "Graphic Tools", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=500&h=600&q=80", description: "Empower your creative designs with Canva Pro." },
  { id: "graphic-2", name: "Adobe Creative Cloud", price: 0, isCallForPrice: true, category: "Graphic Tools", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Creative_Cloud_logo.svg", description: "Full suite of professional creative software." },
  { id: "graphic-3", name: "Midjourney AI", price: 0, isCallForPrice: true, category: "Graphic Tools", image: "https://images.unsplash.com/photo-1675557010041-39e248b1d9c7?auto=format&fit=crop&w=500&h=600&q=80", description: "Leading AI-powered art generation tool." },

  // AI & Subscriptions
  { id: "ai-1", name: "ChatGPT Plus", price: 350, category: "AI & Subscriptions", image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", description: "Subscribe to GPT-4 and advanced AI features." },
  { id: "ai-2", name: "Claude AI and API", price: 0, isCallForPrice: true, category: "AI & Subscriptions", image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Claude_AI_logo.svg", description: "High-intelligence AI models from Anthropic." },
  { id: "ai-3", name: "LinkedIn Premium", price: 0, isCallForPrice: true, category: "AI & Subscriptions", image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", description: "Advance your career with LinkedIn Premium." },

  // Software & Apps
  { id: "soft-1", name: "Windows 11 Retail Key", price: 550, category: "Software & Apps", image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Windows_logo_-_2021.svg", description: "Genuine retail activation for Windows 11." },
  { id: "soft-2", name: "Microsoft Office 365", price: 450, category: "Software & Apps", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_Office_logo_%282019%E2%80%93present%29.svg", description: "Full Office productivity suite access." },

  // Tutorials
  { id: "tut-1", name: "Advance SEO Course", price: 0, category: "Tutorials", image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=500&h=600&q=80", description: "Master SEO with our comprehensive video course." },

  // Services
  { id: "serv-1", name: "Professional Web Design", price: 15000, category: "Digital Services", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=500&h=600&q=80", description: "Get a high-converting website built by experts." }
];
