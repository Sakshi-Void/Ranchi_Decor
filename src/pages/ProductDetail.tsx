import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { ProductCard } from "@/components/ProductCard";

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();
  
  const product = products.find((p) => p.slug === slug);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const discount = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : null;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    });
    toast.success("Added to cart!");
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Link to="/shop">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
            {discount && (
              <Badge className="absolute top-4 right-4 z-10 bg-primary text-lg px-3 py-1">
                -{discount}%
              </Badge>
            )}
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <Badge className="w-fit mb-4">{product.category}</Badge>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold">
                ₹{(product.price / 100).toLocaleString()}
              </span>
              {product.compareAt && (
                <span className="text-xl text-muted-foreground line-through">
                  ₹{(product.compareAt / 100).toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <Button size="lg" onClick={handleAddToCart} className="w-full md:w-auto">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
