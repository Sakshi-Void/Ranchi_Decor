import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  
  const discount = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    });
    toast.success("Added to cart!");
  };

  return (
    <Link to={`/product/${product.slug}`}>
      <Card
        className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-red-500"
      >
        <div className="relative aspect-square overflow-hidden bg-muted">
          {discount && (
            <Badge className="absolute top-3 right-3 z-10 bg-primary">
              -{discount}%
            </Badge>
          )}
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-2 line-clamp-1 group-hover:text-red-600 transition">
            {product.title}
          </h3>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.compareAt && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{product.compareAt.toLocaleString("en-IN")}
                </span>
              )}
            </div>
          </div>
          <Button 
            className="w-full bg-red-600 hover:bg-red-700 text-white"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </Card>
    </Link>
  );
};
