import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/shopify";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { useState } from "react";

const ProductDetail = () => {
  const { handle } = useParams();
  const addItem = useCartStore(state => state.addItem);
  const [selectedVariant, setSelectedVariant] = useState<number>(0);

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(50),
  });

  const product = products?.find(p => p.node.handle === handle);

  const handleAddToCart = () => {
    if (!product) return;
    
    const variant = product.node.variants.edges[selectedVariant]?.node;
    if (!variant) return;

    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 pt-32 pb-20">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Skeleton className="aspect-square rounded-2xl" />
            <div className="space-y-6">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-8 w-1/4" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const { node } = product;
  const price = parseFloat(node.priceRange.minVariantPrice.amount).toFixed(2);
  const currency = node.priceRange.minVariantPrice.currencyCode;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
            {node.images.edges[0]?.node ? (
              <img
                src={node.images.edges[0].node.url}
                alt={node.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No image available
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-4">{node.title}</h1>
            <p className="text-3xl font-bold mb-6 text-accent">
              {currency} {price}
            </p>
            
            <div className="prose prose-sm mb-8">
              <p className="text-muted-foreground">{node.description}</p>
            </div>

            {node.options.length > 0 && (
              <div className="mb-6">
                {node.options.map((option, idx) => (
                  <div key={idx} className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      {option.name}
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {option.values.map((value, valueIdx) => (
                        <Button
                          key={valueIdx}
                          variant={selectedVariant === valueIdx ? "default" : "outline"}
                          onClick={() => setSelectedVariant(valueIdx)}
                        >
                          {value}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Button 
              size="lg"
              onClick={handleAddToCart}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              disabled={!node.variants.edges[selectedVariant]?.node.availableForSale}
            >
              {node.variants.edges[selectedVariant]?.node.availableForSale ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
