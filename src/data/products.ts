export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: "flooring" | "wallpaper" | "carpet" | "blind" | "green" | "panel";
  price: number;
  compareAt?: number;
  imageUrl: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "1",
    title: "Premium Vinyl Flooring",
    slug: "premium-vinyl-flooring",
    description: "High-quality vinyl flooring perfect for residential and commercial spaces. Water-resistant and easy to maintain.",
    category: "flooring",
    price: 12500,
    compareAt: 15000,
    imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80",
    tags: ["vinyl", "residential", "commercial"]
  },
  {
    id: "2",
    title: "Wooden Laminate Flooring",
    slug: "wooden-laminate-flooring",
    description: "Beautiful wooden laminate flooring that brings warmth to any room. Durable and scratch-resistant.",
    category: "flooring",
    price: 18500,
    compareAt: 22000,
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    tags: ["wood", "laminate", "premium"]
  },
  {
    id: "3",
    title: "Designer Wallpaper - Floral",
    slug: "designer-wallpaper-floral",
    description: "Elegant floral pattern wallpaper to transform your living space. Easy to install and maintain.",
    category: "wallpaper",
    price: 3500,
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["floral", "designer", "premium"]
  },
  {
    id: "4",
    title: "3D Textured Wallpaper",
    slug: "3d-textured-wallpaper",
    description: "Modern 3D textured wallpaper that adds depth and character to your walls.",
    category: "wallpaper",
    price: 4200,
    compareAt: 5000,
    imageUrl: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80",
    tags: ["3d", "textured", "modern"]
  },
  {
    id: "5",
    title: "Luxury Wool Carpet",
    slug: "luxury-wool-carpet",
    description: "Premium wool carpet offering exceptional comfort and durability. Perfect for living rooms and bedrooms.",
    category: "carpet",
    price: 25000,
    compareAt: 30000,
    imageUrl: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80",
    tags: ["wool", "luxury", "premium"]
  },
  {
    id: "6",
    title: "Office Carpet Tiles",
    slug: "office-carpet-tiles",
    description: "Modular carpet tiles ideal for office spaces. Easy to install and replace individual tiles.",
    category: "carpet",
    price: 8500,
    imageUrl: "https://images.unsplash.com/photo-1604099411945-5f39f7321be1?w=800&q=80",
    tags: ["tiles", "office", "modular"]
  },
  {
    id: "7",
    title: "Zebra Blinds - Modern",
    slug: "zebra-blinds-modern",
    description: "Contemporary zebra blinds offering flexible light control. Available in multiple colors.",
    category: "blind",
    price: 5500,
    imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
    tags: ["zebra", "modern", "light-control"]
  },
  {
    id: "8",
    title: "Roman Blinds - Elegant",
    slug: "roman-blinds-elegant",
    description: "Classic Roman blinds that add elegance to any window. Soft fabric with smooth operation.",
    category: "blind",
    price: 6200,
    compareAt: 7500,
    imageUrl: "https://images.unsplash.com/photo-1585660004658-4dda86e5db51?w=800&q=80",
    tags: ["roman", "elegant", "fabric"]
  },
  {
    id: "9",
    title: "Artificial Grass - Premium",
    slug: "artificial-grass-premium",
    description: "Natural-looking artificial grass perfect for balconies, terraces, and indoor spaces.",
    category: "green",
    price: 8900,
    imageUrl: "https://images.unsplash.com/photo-1588417065366-5c58956f1c3c?w=800&q=80",
    tags: ["artificial", "grass", "outdoor"]
  },
  {
    id: "10",
    title: "Vertical Grass Wall",
    slug: "vertical-grass-wall",
    description: "Stunning vertical grass wall installation. Brings nature indoors with minimal maintenance.",
    category: "green",
    price: 15000,
    compareAt: 18000,
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
    tags: ["vertical", "wall", "indoor"]
  },
  {
    id: "11",
    title: "PVC Wall Panel - White",
    slug: "pvc-wall-panel-white",
    description: "Durable PVC wall panels that are waterproof and easy to clean. Perfect for bathrooms and kitchens.",
    category: "panel",
    price: 4500,
    imageUrl: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80",
    tags: ["pvc", "waterproof", "white"]
  },
  {
    id: "12",
    title: "Fluted Wall Panel",
    slug: "fluted-wall-panel",
    description: "Modern fluted wall panels that add texture and visual interest. Easy installation.",
    category: "panel",
    price: 7500,
    compareAt: 9000,
    imageUrl: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    tags: ["fluted", "modern", "textured"]
  }
];

export const categories = [
  { id: "flooring", name: "Flooring", icon: "layers" },
  { id: "wallpaper", name: "Wallpaper", icon: "wallpaper" },
  { id: "carpet", name: "Carpets", icon: "grid" },
  { id: "blind", name: "Window Blinds", icon: "blinds" },
  { id: "green", name: "Green Solutions", icon: "leaf" },
  { id: "panel", name: "Panels & Sheets", icon: "square" }
];
