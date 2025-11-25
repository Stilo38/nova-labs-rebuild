import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;

  const handleAddToCart = () => {
    const firstVariant = node.variants.edges[0]?.node;
    if (!firstVariant) return;

    const cartItem = {
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart");
  };

  const price = parseFloat(node.priceRange.minVariantPrice.amount).toFixed(2);
  const currency = node.priceRange.minVariantPrice.currencyCode;

  return (
    <div className="group">
      <Link to={`/product/${node.handle}`}>
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-glow-medium transition-all border border-accent/5 hover:border-accent/20">
          <div className="aspect-square bg-muted relative overflow-hidden">
            {node.images.edges[0]?.node ? (
              <img
                src={node.images.edges[0].node.url}
                alt={node.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No image
              </div>
            )}
          </div>
          
          <div className="p-6">
            <h3 className="font-semibold text-lg mb-2">{node.title}</h3>
            <p className="text-xl font-bold mb-4">
              {currency} {price}
            </p>
          </div>
        </div>
      </Link>
      <Button 
        onClick={handleAddToCart}
        variant="gradient"
        className="w-full mt-2"
        disabled={!node.variants.edges[0]?.node.availableForSale}
      >
        {node.variants.edges[0]?.node.availableForSale ? "Add to Cart" : "Out of Stock"}
      </Button>
    </div>
  );
};
