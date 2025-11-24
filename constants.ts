import { FeatureItem, ProjectItem, TestimonialItem } from './types';

export const NAV_LINKS = [
  { label: 'PROCESS', href: '#process' },
  { label: 'STUDIO', href: '#studio' },
];

export const FEATURES_LIST: FeatureItem[] = [
  { id: '1', label: 'SEO Basic Setup', price: 250000 },
  { id: '2', label: '24/7 AI Concierge', price: 700000 },
  { id: '3', label: 'Humanized Logic', price: 200000 },
  { id: '4', label: 'Lead Qualifier System', price: 300000 },
  { id: '5', label: 'Instant Scope Calculator', price: 350000 },
  { id: '6', label: 'Psychology Storytelling', price: 550000 },
  { id: '7', label: 'Digital Product Catalog', price: 400000 },
];

export const PRICING_TIERS = [
  {
    id: 0,
    name: "Basic Portfolio",
    price: 1950000,
    tagline: "Entry Level",
    painPoint: "Hanya website statis. Tanpa Filter AI. Anda masih harus balas chat manual & debat harga.",
    color: "text-zenith-gray",
    features: [
      { name: "Auto-Reply Bot", included: false },
      { name: "Responsive Gallery", included: true },
      { name: "Standard Contact Form", included: true },
      { name: "Direct WhatsApp Link", included: true },
      { name: "AI Lead Filter System", included: false },
      { name: "Dynamic Price Calculator", included: false },
      { name: "Psychology Copywriting", included: false },
      { name: "Priority Support", included: false },
    ]
  },
  {
    id: 1,
    name: "Growth System",
    price: 3850000,
    tagline: "Recommended",
    painPoint: "Zero Ghost Leads. Sistem otomatis menyeleksi klien serius. Paling Sering Dipilih Kontraktor.",
    color: "text-zenith-gold",
    features: [
      { name: "Auto-Reply Bot", included: true },
      { name: "Responsive Gallery", included: true },
      { name: "Advanced Lead Form", included: true },
      { name: "Direct WhatsApp Link", included: true },
      { name: "AI Lead Filter System", included: true },
      { name: "Dynamic Price Calculator", included: true },
      { name: "Psychology Copywriting", included: true },
      { name: "Priority Support", included: false },
    ]
  },
  {
    id: 2,
    name: "Empire Scale",
    price: 5950000,
    tagline: "National Dominance",
    painPoint: "Full Automation: CRM Integration & Full AI Handling untuk studio yang kebanjiran order.",
    color: "text-zenith-white",
    features: [
      { name: "Auto-Reply Bot", included: true },
      { name: "Responsive Gallery", included: true },
      { name: "CRM Integration", included: true },
      { name: "Direct WhatsApp Link", included: true },
      { name: "AI Lead Filter System", included: true },
      { name: "Dynamic Price Calculator", included: true },
      { name: "Psychology Copywriting", included: true },
      { name: "Priority Support", included: true },
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'Kitchen Set Specialist',
    category: 'ANTI-PRICE WAR SYSTEM',
    // Dark, moody, premium kitchen to match "World Class" vibe
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2070&auto=format&fit=crop',
    tags: ['Psychology Copy', 'AI Feature']
  },
  {
    id: '2',
    title: 'The High-Ticket Filter',
    category: 'LUXURY CONTRACTOR',
    // Grand architectural scale for "High Ticket" feel
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
    tags: ['Psychology Copy', 'AI Feature']
  }
];

// Updated Testimonials based on the provided image and request
export interface ExtendedTestimonialItem extends TestimonialItem {
  tags: string[];
}

export const TESTIMONIALS: ExtendedTestimonialItem[] = [
  {
    id: '1',
    quote: "Suka banget sama gaya bahasanya sih, vibes brand kami jadi kerasa lebih premium dan 'mahal' gitu lho. Terus fitur yang itung-itungan harga otomatis itu game changer banget! Klien yang masuk ke WA jadi udah tau estimasi budget, nggak ada lagi tuh yang shock liat rate card atau nawar sadis. Kita tinggal fokus closing aja.",
    author: "MAYA WULANDARI",
    role: "Creative Industry",
    company: "JAKARTA",
    image: "/assets/client-maya-wulandari.png",
    rating: 5,
    tags: ["Copywriting", "Kalkulasi Harga"]
  },
  {
    id: '2',
    quote: "Wah, mbantu banget, Mas. Biasane hp bunyi terus pas aku lagi ngawasin tukang, ribet mbalesnya. Sekarang enak, data ukuran sama foto lokasi wis kumpul semua di WA. Pas istirahat siang, aku tinggal cek, terus kasih harga. Wis gak ada cerita customer kabur gara-gara telat mbales.",
    author: "DADANG PERMANA",
    role: "Kontraktor",
    company: "JAWA BARAT",
    image: "/assets/client-roni-susanto.png",
    rating: 5,
    tags: ["Efisiensi", "Data Otomatis"]
  },
  {
    id: '3',
    quote: "Ngeri kali 'asisten robot' kalian ini. Dulu tangan keriting mbalasin chat orang nanya hal yang sama terus. Sekarang biar robotnya aja yang 'ceramah' jelasin detail ke customer. Pas saya cek HP, tinggal yang serius-serius aja yang masuk. Hemat tenaga, Bos. Udah kayak punya admin 24 jam tapi gak minta gaji.",
    author: "RONI SUSANTO",
    role: "Interior & Build",
    company: "MEDAN",
    image: "/assets/client-dadang-permana.png",
    rating: 5,
    tags: ["AI Chatbot", "Hemat Tenaga"]
  }
];

export const BASE_SETUP_PRICE = 3200000;