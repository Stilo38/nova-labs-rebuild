import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getProductByHandle } from "@/lib/mockProducts";

const ProductDetail = () => {
  const { handle } = useParams();
  const product = handle ? getProductByHandle(handle) : undefined;

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No image available
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-3xl font-bold mb-6 text-accent">
              {product.currency} {product.price.toFixed(2)}
            </p>
            
            <div className="prose prose-sm mb-8">
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Contact for Purchase
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
