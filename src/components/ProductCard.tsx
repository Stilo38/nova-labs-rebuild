import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export interface Product {
  id: string;
  title: string;
  description: string;
  handle: string;
  price: number;
  currency: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group">
      <Link to={`/product/${product.handle}`}>
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-glow-medium transition-all border border-accent/5 hover:border-accent/20">
          <div className="aspect-square bg-muted relative overflow-hidden">
            {product.image ? (
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No image
              </div>
            )}
          </div>
          
          <div className="p-6">
            <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
            <p className="text-xl font-bold mb-4">
              {product.currency} {product.price.toFixed(2)}
            </p>
          </div>
        </div>
      </Link>
      <Button 
        variant="gradient"
        className="w-full mt-2"
      >
        View Details
      </Button>
    </div>
  );
};
