import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Truck, RotateCcw, Shield, Headphones } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary/10 to-background flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <Badge className="mb-4">A Complete Interior Solution</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Space with
              <span className="text-primary"> Ranchi Decor</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Premium flooring, wallpapers, carpets, and window treatments for homes and offices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button size="lg" className="font-semibold">
                  Shop Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Flooring", link: "/shop?category=flooring", emoji: "🏠" },
              { name: "Wallpaper", link: "/shop?category=wallpaper", emoji: "🎨" },
              { name: "Carpets", link: "/shop?category=carpet", emoji: "🧵" },
              { name: "Window Blinds", link: "/shop?category=blind", emoji: "🪟" },
              { name: "Green Solutions", link: "/shop?category=green", emoji: "🌿" },
              { name: "Panels", link: "/shop?category=panel", emoji: "📐" }
            ].map((category) => (
              <Link key={category.name} to={category.link}>
                <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer text-center">
                  <div className="text-5xl mb-3">{category.emoji}</div>
                  <h3 className="font-semibold">{category.name}</h3>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
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

      {/* Collection Banners */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="relative h-[300px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80" 
                alt="Living Room Collection"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-8">
                <h3 className="text-3xl font-bold text-white mb-2">Living Room Collection</h3>
                <p className="text-white/90 mb-4">Elegant solutions for your living space</p>
                <Link to="/shop">
                  <Button variant="secondary">Explore</Button>
                </Link>
              </div>
            </Card>

            <Card className="relative h-[300px] overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
                alt="Office Collection"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-8">
                <h3 className="text-3xl font-bold text-white mb-2">Office & Commercial</h3>
                <p className="text-white/90 mb-4">Professional solutions for workspaces</p>
                <Link to="/shop">
                  <Button variant="secondary">Explore</Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantees */}
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
