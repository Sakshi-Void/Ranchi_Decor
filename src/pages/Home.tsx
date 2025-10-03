import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Truck, RotateCcw, Shield, Headphones } from "lucide-react";

import HeroSection from "../components/HeroSection";
import ShopByCategory from "../components/ShopByCategory"; 
import CategoryBanners from "../components/CategoryBanners"; 

// ✅ helper function: har category se thoda products nikalna
function getFeaturedProducts() {
  const categories = ["flooring", "wallpaper", "carpet", "blind", "green", "panel"];
  let featured: any[] = [];

  categories.forEach((cat) => {
    const catProducts = products.filter((p) => p.category === cat);
    featured.push(...catProducts.slice(0, 2)); // har category se 2 products
  });

  return featured.slice(0, 12); // max 12 products
}

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* ✅ Hero Section */}
      <HeroSection />

      {/* ✅ Popular Categories */}
      <ShopByCategory />

      {/* ✅ 2 Large Category Banners */}
      <CategoryBanners />

      {/* ✅ Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/shop">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Guarantees */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Free Delivery</h3>
              <p className="text-sm text-muted-foreground">On orders above ₹10,000</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <RotateCcw className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30 days return policy</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-sm text-muted-foreground">Premium quality assured</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Always here to help</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
